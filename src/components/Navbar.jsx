import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CONTACT } from '../data/site'
import './Navbar.css'

const SERVICES_NAV = [
  { label: 'Design | Build', to: '/design-build' },
  { label: 'Hardscape & Masonry', to: '/hardscape-masonry' },
  { label: 'Lawn & Landscape', to: '/lawn-landscape' },
  { label: 'Carpentry & Lighting', to: '/carpentry-lighting' },
  { label: 'Water Management', to: '/water-management' },
  { label: 'Landscape Maintenance', to: '/landscape-maintenance' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/eb368ac6-1a5c-4992-a696-bbd5917779cd/YellLogo.png?format=300w"
            alt="Young Entrepreneur Landscaping"
            className="nav-logo-img"
          />
        </Link>

        {/* Desktop links */}
        <div className="nav-links">
          <NavLink to="/showcase" className="nav-link">Work</NavLink>

          <div
            className="nav-dropdown-wrap"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="nav-link">Services ▾</span>
            {servicesOpen && (
              <div className="nav-dropdown">
                {SERVICES_NAV.map(s => (
                  <Link key={s.to} to={s.to} className="nav-dropdown-item" onClick={() => setServicesOpen(false)}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/commercial" className="nav-link">Commercial</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </div>

        {/* CTA */}
        <Link to="/contact" className="nav-cta">Free Quote</Link>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${mobileOpen ? ' open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="nav-mobile">
          <NavLink to="/" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>Home</NavLink>
          <NavLink to="/showcase" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>Work</NavLink>
          <div className="nav-mobile-group">
            <span className="nav-mobile-label">Services</span>
            {SERVICES_NAV.map(s => (
              <NavLink key={s.to} to={s.to} className="nav-mobile-sub" onClick={() => setMobileOpen(false)}>
                {s.label}
              </NavLink>
            ))}
          </div>
          <NavLink to="/about" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>About</NavLink>
          <NavLink to="/commercial" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>Commercial</NavLink>
          <NavLink to="/contact" className="nav-mobile-link" onClick={() => setMobileOpen(false)}>Contact</NavLink>
          <a href={`tel:${CONTACT.phoneRaw}`} className="nav-mobile-phone">{CONTACT.phone}</a>
        </div>
      )}
    </nav>
  )
}
