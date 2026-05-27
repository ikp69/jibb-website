'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, useCallback } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { motion, AnimatePresence } from '@/lib/motion'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { locale, setLocale, t } = useLanguage()

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  const linkDelay = (i: number) => 0.1 + i * 0.1

  return (
    <>
      <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
        <Link href="/" className="logo-container">
          <Image
            src="/logo.webp"
            alt="JIBB - NPO Japan India Business Bureau"
            width={120}
            height={48}
            priority
            className="nav-logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li><Link href="/#about">{t.nav.aboutUs}</Link></li>
          <li><Link href="/#sectors">{t.nav.strategicSectors}</Link></li>
          <li><Link href="/#innovation">{t.nav.innovationHub}</Link></li>
          <li><Link href="/events">{locale === 'ja' ? 'イベント' : 'Events'}</Link></li>
          <li><Link href="/jisc">JISC</Link></li>
          <li><Link href="/#contact">{t.nav.contact}</Link></li>
        </ul>

        <div className="nav-actions">
          {/* Language Toggle */}
          <div className="lang-toggle">
            <button
              className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
              onClick={() => setLocale('en')}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              className={`lang-btn ${locale === 'ja' ? 'active' : ''}`}
              onClick={() => setLocale('ja')}
              aria-label="Switch to Japanese"
            >
              <span className="lang-jp">JP</span>
            </button>
          </div>

          <Link href="#join" className="nav-cta nav-cta-desktop">{t.nav.joinBureau}</Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMobileMenu}
            />
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="mobile-menu-content">
                <ul className="mobile-nav-links">
                  {[
                    { href: '#about', label: t.nav.aboutUs },
                    { href: '#sectors', label: t.nav.strategicSectors },
                    { href: '#innovation', label: t.nav.innovationHub },
                    { href: '/events', label: locale === 'ja' ? 'イベント' : 'Events' },
                    { href: '/jisc', label: 'JISC' },
                    { href: '#contact', label: t.nav.contact }
                  ].map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: linkDelay(i), duration: 0.3 }}
                    >
                      <Link href={link.href} onClick={closeMobileMenu}>
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="mobile-menu-actions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                >
                  {/* Language Toggle in Mobile Menu */}
                  <div className="mobile-lang-toggle">
                    <button
                      className={`mobile-lang-btn ${locale === 'en' ? 'active' : ''}`}
                      onClick={() => setLocale('en')}
                    >
                      English
                    </button>
                    <button
                      className={`mobile-lang-btn ${locale === 'ja' ? 'active' : ''}`}
                      onClick={() => setLocale('ja')}
                    >
                      日本語
                    </button>
                  </div>
                </motion.div>

                <motion.div
                  className="mobile-menu-cta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <Link href="#join" className="cta-primary" onClick={closeMobileMenu}>
                    {t.nav.joinBureau}
                  </Link>
                </motion.div>

                <motion.div
                  className="mobile-menu-footer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <p>NPO Japan India Business Bureau</p>
                  <p>Tokyo • Noida</p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
