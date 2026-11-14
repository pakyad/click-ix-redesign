'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { primaryMenu } from '@/lib/navigation'
import { primaryNavRoutes } from '@/lib/routes'
import { mailto } from '@/lib/contact'

const normalizePath = (path: string) => (path === '/' ? path : path.replace(/\/+$/, '') || '/')

const productPaths = ['/software/', '/cs-sign-hub/', '/hardware/']

/** Scroll distance before the bar leaves its resting state. */
const SETTLE_AT = 24
/** Grace period when the pointer crosses from a trigger into its panel. */
const CLOSE_DELAY = 160

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [settled, setSettled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const shellRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const closeTimer = useRef<number | null>(null)
  const currentPath = normalizePath(pathname)

  useEffect(() => {
    setIsMenuOpen(false)
    setOpenMenu(null)
  }, [pathname])

  useEffect(() => {
    let frame = 0

    const read = () => {
      frame = 0
      const y = window.scrollY
      setSettled(y > SETTLE_AT)
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(read)
    }

    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        setOpenMenu(null)
        menuButtonRef.current?.focus()
      }
    }

    const desktopQuery = window.matchMedia('(min-width: 769px)')
    const handleDesktop = () => {
      if (desktopQuery.matches) setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    desktopQuery.addEventListener('change', handleDesktop)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      desktopQuery.removeEventListener('change', handleDesktop)
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!openMenu) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      const key = openMenu
      setOpenMenu(null)
      triggerRefs.current[key]?.focus()
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) setOpenMenu(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [openMenu])

  useEffect(
    () => () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current)
    },
    [],
  )

  const cancelClose = () => {
    if (!closeTimer.current) return
    window.clearTimeout(closeTimer.current)
    closeTimer.current = null
  }

  const openItem = (key: string) => {
    cancelClose()
    setOpenMenu(key)
  }

  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = window.setTimeout(() => {
      closeTimer.current = null
      setOpenMenu(null)
    }, CLOSE_DELAY)
  }

  const isCurrent = (path: string) => {
    const target = normalizePath(path)
    if (currentPath === target) return true
    return target === '/software/' && productPaths.includes(`${currentPath}/`)
  }

  const isMenuCurrent = (item: (typeof primaryMenu)[number]) =>
    isCurrent(item.href) ||
    Boolean(item.groups?.some((group) => group.links.some((link) => isCurrent(link.href))))

  return (
    <header
      ref={shellRef}
      className="site-header-shell"
      data-settled={settled ? 'true' : 'false'}
    >
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="wrap site-header" data-menu-open={isMenuOpen ? 'true' : 'false'}>
        <Link href="/" className="brand-link" aria-label="Click iX home">
          <span className="brand-stack">
            <Image
              src="/brand/click-ix-horizontal-white.png"
              alt="Click iX — Immersive Experience"
              width={718}
              height={243}
              priority
              className="brand-logo brand-logo--light"
            />
            <Image
              src="/brand/click-ix-horizontal-black.png"
              alt=""
              aria-hidden="true"
              width={718}
              height={243}
              priority
              className="brand-logo brand-logo--dark"
            />
          </span>
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          className="nav-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => {
            setIsMenuOpen((open) => !open)
            setOpenMenu(null)
          }}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
        <nav
          ref={navRef}
          id="primary-navigation"
          aria-label="Primary navigation"
          className="site-nav"
          data-open={isMenuOpen ? 'true' : 'false'}
        >
          <ul className="site-nav-list site-nav-desktop">
            {primaryMenu.map((item) =>
              item.groups ? (
                <li
                  key={item.key}
                  className="site-nav-item"
                  data-open={openMenu === item.key ? 'true' : 'false'}
                  data-current={isMenuCurrent(item) ? 'true' : 'false'}
                  data-align={item.align ?? 'right'}
                  onMouseEnter={() => openItem(item.key)}
                  onMouseLeave={scheduleClose}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                      setOpenMenu(null)
                    }
                  }}
                >
                  <button
                    ref={(node) => {
                      triggerRefs.current[item.key] = node
                    }}
                    id={`nav-trigger-${item.key}`}
                    type="button"
                    className="nav-trigger"
                    aria-expanded={openMenu === item.key}
                    aria-controls={`nav-menu-${item.key}`}
                    onClick={() => openItem(item.key)}
                    onKeyDown={(event) => {
                      if (event.key !== 'ArrowDown') return
                      event.preventDefault()
                      openItem(item.key)
                      window.setTimeout(() => {
                        document
                          .querySelector<HTMLAnchorElement>(`#nav-menu-${item.key} .nav-menu-link`)
                          ?.focus()
                      }, 40)
                    }}
                  >
                    {item.label}
                    <span className="nav-chevron" aria-hidden="true" />
                  </button>

                  <div
                    id={`nav-menu-${item.key}`}
                    className="nav-menu"
                    data-size={item.size ?? 'mid'}
                    role="group"
                    aria-labelledby={`nav-trigger-${item.key}`}
                  >
                    <div className="nav-menu-grid">
                      {item.groups.map((group) => (
                        <div key={group.label} className="nav-menu-group">
                          <p className="nav-menu-label">{group.label}</p>
                          <ul>
                            {group.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="nav-menu-link"
                                  aria-current={
                                    currentPath === normalizePath(link.href) ? 'page' : undefined
                                  }
                                  onClick={() => setOpenMenu(null)}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {item.footer ? (
                      <div className="nav-menu-foot">
                        <span>{item.note}</span>
                        <Link href={item.footer.href} onClick={() => setOpenMenu(null)}>
                          {item.footer.label} <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    ) : null}
                  </div>
                </li>
              ) : (
                <li key={item.key} className="site-nav-item">
                  <Link
                    href={item.href}
                    className="nav-link"
                    aria-current={isCurrent(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <ul className="site-nav-list site-nav-mobile">
            {primaryNavRoutes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className="nav-mobile-link"
                  aria-current={isCurrent(route.path) ? 'page' : undefined}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.navLabel ?? route.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href={mailto('Quote')} className="btn btn--sm" onClick={() => setIsMenuOpen(false)}>
            Get a quote
          </Link>
        </nav>
        <noscript>
          <style>{`.site-nav { display: flex !important; } .nav-toggle { display: none !important; }`}</style>
        </noscript>
      </div>
    </header>
  )
}
