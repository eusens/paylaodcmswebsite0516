import { getServerSideSitemap } from 'next-sitemap'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET() {
  const payload = await getPayload({ config })
  const SITE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

  const BATCH_SIZE = 3000
  let page = 1
  let hasMore = true
  const allPosts = []

  // 分批获取数据
  while (hasMore && allPosts.length < 9000) {  // 最多 9000 条
    const results = await payload.find({
      collection: 'posts',
      overrideAccess: false,
      draft: false,
      depth: 0,
      limit: BATCH_SIZE,
      page: page,
      where: {
        _status: { equals: 'published' },
      },
      select: {
        slug: true,
        updatedAt: true,
      },
      sort: '-updatedAt',
    })

    allPosts.push(...results.docs)
    hasMore = results.hasNextPage
    page++
  }

  const dateFallback = new Date().toISOString()
  const sitemap = allPosts
    .filter((post) => Boolean(post?.slug))
    .map((post) => ({
      loc: `${SITE_URL}/products/${post?.slug}`,
      lastmod: post.updatedAt || dateFallback,
    }))

  return getServerSideSitemap(sitemap)
}