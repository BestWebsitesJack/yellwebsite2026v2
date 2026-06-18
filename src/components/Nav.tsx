import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Instagram } from 'lucide-react'

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
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: "#ffffff",
      borderBottom: "1px solid #e8e0d4",
      boxShadow: "0 2px 24px rgba(42,37,32,0.05)"
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "112px" }}>
        <Link to="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <img src="/YellLogo.png" alt="Young Entrepreneur Landscaping" style={{ height: "88px", width: "auto" }} />
        </Link>
        <ul style={{ display: "flex", gap: "48px", listStyle: "none", margin: 0, padding: 0, flex: 1, justifyContent: "center" }}>
          {links.map(l => (
            <li key={l.href}>
              <Link to={l.href} style={{
                fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em",
                textTransform: "uppercase", textDecoration: "none",
                color: "#3d362e", transition: "color 0.3s",
                padding: "4px 0", borderBottom: "1.5px solid transparent",
                display: "inline-block"
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#2d4a26"; (e.currentTarget as HTMLElement).style.borderBottomColor = "#2d4a26" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#3d362e"; (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent" }}
              >{l.label}</Link>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
          <a href="https://www.instagram.com/youngentrepreneur_landscaping/" target="_blank" rel="noreferrer" style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "44px", height: "44px", borderRadius: "2px",
            border: "1.5px solid #e8e0d4", color: "#3d362e",
            textDecoration: "none", transition: "all 0.3s"
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#2d4a26"; (e.currentTarget as HTMLElement).style.color = "#2d4a26"; (e.currentTarget as HTMLElement).style.background = "#e8f0e4" }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e8e0d4"; (e.currentTarget as HTMLElement).style.color = "#3d362e"; (e.currentTarget as HTMLElement).style.background = "transparent" }}
          >
            <Instagram size={18} />
          </a>
          <Link to="/contact" style={{
            fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", textDecoration: "none",
            color: "#ffffff", background: "#2d4a26",
            padding: "16px 36px", borderRadius: "2px",
            transition: "background 0.3s", whiteSpace: "nowrap"
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#3d6334"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#2d4a26"}
          >Free Quote</Link>
        </div>
      </div>
      {open && (
        <div style={{ background: "#ffffff", borderTop: "1px solid #e8e0d4", padding: "24px 48px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {links.map(l => (
            <Link key={l.href} to={l.href} style={{ fontSize: "0.88rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2d4a26", textDecoration: "none", padding: "8px 0" }}>{l.label}</Link>
          ))}
          <a href="https://www.instagram.com/youngentrepreneur_landscaping/" target="_blank" rel="noreferrer" style={{ fontSize: "0.88rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2d4a26", textDecoration: "none", padding: "8px 0", display: "flex", alignItems: "center", gap: "10px" }}>
            <Instagram size={16} /> Instagram
          </a>
          <Link to="/contact" style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#ffffff", background: "#2d4a26", padding: "16px 24px", textAlign: "center", textDecoration: "none", borderRadius: "2px", marginTop: "8px" }}>Free Quote</Link>
        </div>
      )}
    </nav>
  )
}
