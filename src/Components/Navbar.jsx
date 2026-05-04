import { useState, useEffect } from 'react'
import './Navbar.css'
const logo = "https://res.cloudinary.com/dplcqfgvq/image/upload/q_auto/f_auto/v1777872833/logo_sea3ef.png"

const NAV_LINKS = [
  { label: 'Home',        href: '#home' },
  { label: 'Waterfalls',  href: '#waterfalls' },
  { label: 'Village',     href: '#village' },
  { label: 'Experiences', href: '#experience' },
  { label: 'Nearby',      href: '#nearby' },
  { label: 'Gallery',     href: '#gallery' },
  { label: 'Find Us',     href: '#map' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  const handleClick = (href) => {
    setActive(href)
    close()
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

        {/* ── Brand ── */}
        <a href="#home" className="nav-brand" onClick={() => handleClick('#home')}>
          <img src={logo} alt="Explore Udagama" className="nav-logo" />
          <span className="nav-name-wrap">
            <span className="nav-explore">Explore</span>
            <span className="nav-udagama">Udagama</span>
          </span>
        </a>

        {/* ── Desktop links ── */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                className={active === l.href ? 'nav-active' : ''}
                onClick={() => handleClick(l.href)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Hamburger ── */}
        <button
          className={`nav-hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>

      </nav>

      {/* ── Mobile backdrop ── */}
      {menuOpen && <div className="nav-backdrop" onClick={close} />}
    </>
  )
}