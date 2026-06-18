import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Work', href: '/showcase' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setOpen(false), [location])

  const light = !scrolled && isHome

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${!light ? 'bg-[#faf8f4]/98 backdrop-blur-lg border-b border-[#e8e0d4] shadow-sm' : 'bg-gradient-to-b from-black/40 to-transparent'}`}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '88px' }}>
        <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <img
            src={`${import.meta.env.BASE_URL}YellLogo.png`}
            alt="Young Entrepreneur Landscaping"
            style={{ height: '64px', width: 'auto', filter: light ? 'brightness(0) invert(1)' : 'none', transition: 'all 0.4s ease' }}
          />
        </Link>
        <ul style={{ display: 'flex', gap: '48px', listStyle: 'none', margin: 0, padding: 0 }} className="max-lg:hidden">
          {links.map(l => (
            <li key={l.href}>
              <Link to={l.href} style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', color: light ? 'rgba(255,255,255,0.88)' : '#3d362e', transition: 'color 0.3s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = light ? '#ffffff' : '#2d4a26'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = light ? 'rgba(255,255,255,0.88)' : '#3d362e'}
              >{l.label}</Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', color: light ? '#2d4a26' : '#ffffff', background: light ? '#ffffff' : '#2d4a26', padding: '14px 32px', borderRadius: '2px', transition: 'all 0.3s', whiteSpace: 'nowrap' }} className="max-lg:hidden">
          Free Quote
        </Link>
        <button style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: light ? '#ffffff' : '#2d4a26' }} className="max-lg:!flex" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div style={{ background: '#faf8f4', borderTop: '1px solid #e8e0d4', padding: '24px' }} className="max-lg:flex flex-col gap-5 hidden">
          {links.map(l => (
            <Link key={l.href} to={l.href} style={{ fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2d4a26', textDecoration: 'none' }}>{l.label}</Link>
          ))}
          <Link to="/contact" style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', background: '#2d4a26', padding: '14px 24px', textAlign: 'center', textDecoration: 'none', borderRadius: '2px' }}>Free Quote</Link>
        </div>
      )}
    </nav>
  )
}
