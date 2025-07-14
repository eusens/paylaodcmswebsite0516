import type { Metadata } from 'next'

import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import type { Post } from '@/payload-types'
import Image from 'next/image'
import type { Media } from '@/payload-types'

import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 100000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = posts.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/products/' + slug
  const post = await queryPostBySlug({ slug })

  if (!post) return <PayloadRedirects url={url} />

  return (
    <article className="pt-16 pb-16">
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          {typeof post.meta?.image === 'object' && (
            <div className="w-full relative aspect-[4/3]">
              <Image
                src={(post.meta.image as Media)?.url || ''}
                alt={post.title || 'Product Image'}
                fill
                className="object-contain rounded-xl"
                sizes="(min-width: 1024px) 800px, 100vw"
                priority // optional: only use for LCP images above the fold
              />
            </div>
          )}

          {/* Product Info Section */}
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold">{post.title}</h1>

            {post.categories && Array.isArray(post.categories) && (
              <div className="text-sm text-gray-500">
                {post.categories
                  .map((cat) => (typeof cat === 'object' ? cat.title : ''))
                  .filter(Boolean)
                  .join(', ')}
              </div>
            )}

            {post.price && (
              <div className="text-2xl font-semibold text-blue-600">${post.price.toFixed(2)}</div>
            )}

            {post.meta?.description && <p className="text-gray-700">{post.meta.description}</p>}
          </div>
        </div>

        {/* Full Description */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">Product Description</h2>
          <RichText data={post.content} />
        </div>

        {/* Related Posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold mb-4">Related Products</h2>
            <RelatedPosts
              className="grid lg:grid-cols-subgrid col-start-1 col-span-3"
              docs={post.relatedPosts.filter((post) => typeof post === 'object')}
            />
          </div>
        )}
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
