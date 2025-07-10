import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { inclusions } from '@/app/constants'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  const classes = {
    inclusions: 'grid grid-cols-2 gap-4 md:grid-cols-4', // adjust based on your layout
    icon: 'w-9 h-9 mb-2', // 36px = 9 * 4px
    title: 'text-sm font-semibold',
  }

  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="bg-[#f8f9fa] text-black py-12">
        <ul className={classes.inclusions}>
          {inclusions.map((inclusion) => (
            <li key={inclusion.title}>
              <Image
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
                className={classes.icon}
              />

              <h5 className={classes.title}>{inclusion.title}</h5>
              <p>{inclusion.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col md:flex-row gap-4">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </nav>
        </div>
      </div>
      <div>
        {/* Copyright text */}
        <p className="text-center text-sm mt-6">
          © {new Date().getFullYear()}{' '}
          <a
            href="https://eusens.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 transition-colors"
          >
            By Eusens Technology,
          </a>{' '}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
