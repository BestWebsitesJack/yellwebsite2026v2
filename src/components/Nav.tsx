import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Instagram, ChevronDown } from 'lucide-react'
import { services } from '../data/services'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const location = useLocation()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const aboutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => { setOpen(false); setServicesOpen(false); setAboutOpen(false) }, [location])

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150)
  }

  const handleAboutEnter = () => {
    if (aboutTimeoutRef.current) clearTimeout(aboutTimeoutRef.current)
    setAboutOpen(true)
  }
  const handleAboutLeave = () => {
    aboutTimeoutRef.current = setTimeout(() => setAboutOpen(false), 150)
  }

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: "#ffffff",
      borderBottom: "1px solid #e8e0d4",
      boxShadow: "0 2px 24px rgba(42,37,32,0.05)"
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "140px" }}>
        <Link to="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <img src="/YellLogo.png" alt="Young Entrepreneur Landscaping" style={{ height: "114px", width: "auto" }} />
        </Link>

        <ul style={{ display: "flex", gap: "48px", listStyle: "none", margin: 0, padding: 0, flex: 1, justifyContent: "center", alignItems: "center" }}>
          <li>
            <Link to="/showcase" style={{
              fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase", textDecoration: "none",
              color: "#3d362e", transition: "color 0.3s",
              padding: "4px 0", borderBottom: "1.5px solid transparent",
              display: "inline-block"
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#2d4a26"; (e.currentTarget as HTMLElement).style.borderBottomColor = "#2d4a26" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#3d362e"; (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent" }}
            >Showcase</Link>
          </li>

          {/* SERVICES DROPDOWN */}
          <li
            style={{ position: "relative" }}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <Link to="/services" style={{
              fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase", textDecoration: "none",
              color: "#3d362e", transition: "color 0.3s",
              padding: "4px 0", borderBottom: "1.5px solid transparent",
              display: "inline-flex", alignItems: "center", gap: "5px"
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#2d4a26"; (e.currentTarget as HTMLElement).style.borderBottomColor = "#2d4a26" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#3d362e"; (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent" }}
            >
              Services <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </Link>

            {servicesOpen && (
              <div
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                style={{
                position: "absolute", top: "calc(100% + 16px)", left: "50%", transform: "translateX(-50%)",
                background: "#ffffff", border: "1px solid #e8e0d4", borderRadius: "3px",
                boxShadow: "0 16px 48px rgba(42,37,32,0.12)", padding: "12px", minWidth: "280px", zIndex: 60
              }}>
                {services.map(s => (
                  <Link key={s.slug} to={"/services/" + s.slug} style={{
                    display: "block", padding: "14px 18px", textDecoration: "none",
                    fontSize: "0.85rem", fontWeight: 500, color: "#2a2520",
                    borderRadius: "2px", transition: "background 0.2s, color 0.2s"
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#e8f0e4"; (e.currentTarget as HTMLElement).style.color = "#2d4a26" }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#2a2520" }}
                  >{s.name}</Link>
                ))}
              </div>
            )}
          </li>

          <li
            style={{ position: "relative" }}
            onMouseEnter={handleAboutEnter}
            onMouseLeave={handleAboutLeave}
          >
            <Link to="/about" style={{
              fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase", textDecoration: "none",
              color: "#3d362e", transition: "color 0.3s",
              padding: "4px 0", borderBottom: "1.5px solid transparent",
              display: "inline-flex", alignItems: "center", gap: "5px"
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#2d4a26"; (e.currentTarget as HTMLElement).style.borderBottomColor = "#2d4a26" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#3d362e"; (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent" }}
            >
              About <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: aboutOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </Link>

            {aboutOpen && (
              <div
                onMouseEnter={handleAboutEnter}
                onMouseLeave={handleAboutLeave}
                style={{
                position: "absolute", top: "calc(100% + 16px)", left: "50%", transform: "translateX(-50%)",
                background: "#ffffff", border: "1px solid #e8e0d4", borderRadius: "3px",
                boxShadow: "0 16px 48px rgba(42,37,32,0.12)", padding: "12px", minWidth: "220px", zIndex: 60
              }}>
                {[["About Us","/about"],["Showcase","/showcase"],["FAQ","/faq"],["Careers","/careers"]].map(([label, href]) => (
                  <Link key={href} to={href} style={{
                    display: "block", padding: "14px 18px", textDecoration: "none",
                    fontSize: "0.85rem", fontWeight: 500, color: "#2a2520",
                    borderRadius: "2px", transition: "background 0.2s, color 0.2s"
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#e8f0e4"; (e.currentTarget as HTMLElement).style.color = "#2d4a26" }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#2a2520" }}
                  >{label}</Link>
                ))}
              </div>
            )}
          </li>
          <li>
            <Link to="/contact" style={{
              fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.12em",
              textTransform: "uppercase", textDecoration: "none",
              color: "#3d362e", transition: "color 0.3s",
              padding: "4px 0", borderBottom: "1.5px solid transparent",
              display: "inline-block"
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#2d4a26"; (e.currentTarget as HTMLElement).style.borderBottomColor = "#2d4a26" }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#3d362e"; (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent" }}
            >Contact</Link>
          </li>
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

        <button style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "#2d4a26" }} onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div style={{ background: "#ffffff", borderTop: "1px solid #e8e0d4", padding: "24px 48px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <Link to="/showcase" style={{ fontSize: "0.88rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2d4a26", textDecoration: "none", padding: "8px 0" }}>Showcase</Link>
          <Link to="/services" style={{ fontSize: "0.88rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2d4a26", textDecoration: "none", padding: "8px 0" }}>Services</Link>
          {services.map(s => (
            <Link key={s.slug} to={"/services/" + s.slug} style={{ fontSize: "0.78rem", fontWeight: 500, color: "#3d362e", textDecoration: "none", paddingLeft: "16px" }}>{s.name}</Link>
          ))}
          <Link to="/about" style={{ fontSize: "0.88rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2d4a26", textDecoration: "none", padding: "8px 0" }}>About</Link>
          <a href="https://www.instagram.com/youngentrepreneur_landscaping/" target="_blank" rel="noreferrer" style={{ fontSize: "0.88rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2d4a26", textDecoration: "none", padding: "8px 0", display: "flex", alignItems: "center", gap: "10px" }}>
            <Instagram size={16} /> Instagram
          </a>
          <Link to="/contact" style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#ffffff", background: "#2d4a26", padding: "16px 24px", textAlign: "center", textDecoration: "none", borderRadius: "2px", marginTop: "8px" }}>Free Quote</Link>
        </div>
      )}
    </nav>
  )
}
