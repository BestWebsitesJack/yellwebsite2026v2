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
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: '#ffffff',
      borderBottom: '1px solid #e8e0d4',
      boxShadow: '0 2px 24px rgba(42,37,32,0.05)'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '108px' }}>
        <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <img src="/YellLogo.png" alt="Young Entrepreneur Landscaping" style={{ height: '84px', width: 'auto' }} />
        </Link>
        <ul style={{ display: 'flex', gap: '48px', listStyle: 'none', margin: 0, padding: 0 }} className="max-lg:hidden">
          {links.map(l => (
            <li key={l.href}>
              <Link to={l.href} style={{
                fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', textDecoration: 'none',
                color: '#3d362e',
                transition: 'color 0.3s',
                padding: '4px 0',
                borderBottom: '1.5px solid transparent'
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#2d4a26'; (e.currentTarget as HTMLElement).style.borderBottomColor = '#2d4a26' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#3d362e'; (e.currentTarget as HTMLElement).style.borderBottomColor = 'transparent' }}
              >{l.label}</Link>
            </li>
          ))}
        </ul>
        <Link to="/contact" style={{
          fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em',
          textTransform: 'uppercase', textDecoration: 'none',
          color: '#ffffff', background: '#2d4a26',
          padding: '16px 36px', borderRadius: '2px', transition: 'background 0.3s', whiteSpace: 'nowrap'
        }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#3d6334'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#2d4a26'}
          className="max-lg:hidden"
        >Free Quote</Link>
        <button style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#2d4a26' }} className="max-lg:!flex" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div style={{ background: '#ffffff', borderTop: '1px solid #e8e0d4', padding: '24px 48px' }} className="max-lg:flex flex-col gap-5 hidden">
          {links.map(l => (
            <Link key={l.href} to={l.href} style={{ fontSize: '0.88rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#2d4a26', textDecoration: 'none', padding: '8px 0' }}>{l.label}</Link>
          ))}
          <Link to="/contact" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffffff', background: '#2d4a26', padding: '16px 24px', textAlign: 'center', textDecoration: 'none', borderRadius: '2px', marginTop: '8px' }}>Free Quote</Link>
        </div>
      )}
    </nav>
  )
}
