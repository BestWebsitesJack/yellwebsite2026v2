import { useState, useEffect, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { Instagram, ChevronDown, Menu, X } from "lucide-react"
import { services } from "../data/services"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const aboutTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    setAboutOpen(false)
  }, [location])

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

  const navHeight = isMobile ? "80px" : "140px"
  const logoHeight = isMobile ? "60px" : "114px"

  const linkStyle = {
    fontSize: "0.88rem", fontWeight: 600, letterSpacing: "0.12em",
    textTransform: "uppercase" as const, textDecoration: "none",
    color: "#3d362e", padding: "4px 0", borderBottom: "1.5px solid transparent",
    display: "inline-flex", alignItems: "center", gap: "5px"
  }

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: "#ffffff", borderBottom: "1px solid #e8e0d4",
      boxShadow: "0 2px 24px rgba(42,37,32,0.05)"
    }}>
      <div style={{
        maxWidth: "1280px", margin: "0 auto",
        padding: isMobile ? "0 20px" : "0 48px",
        display: "flex", alignItems: "center",
        justifyContent: "space-between",
        height: navHeight
      }}>
        {/* LOGO */}
        <Link to="/" style={{ textDecoration: "none", flexShrink: 0 }}>
          <img src="/YellLogo.png" alt="Young Entrepreneur Landscaping Cincinnati OH" style={{ height: logoHeight, width: "auto" }} />
        </Link>

        {/* DESKTOP NAV */}
        {!isMobile && (
          <ul style={{ display: "flex", gap: "48px", listStyle: "none", margin: 0, padding: 0, flex: 1, justifyContent: "center", alignItems: "center" }}>
            <li>
              <Link to="/showcase" style={linkStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#2d4a26"; (e.currentTarget as HTMLElement).style.borderBottomColor = "#2d4a26" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#3d362e"; (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent" }}
              >Showcase</Link>
            </li>

            {/* Services Dropdown */}
            <li style={{ position: "relative" }} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
              <Link to="/services" style={linkStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#2d4a26" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#3d362e" }}
              >
                Services <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
              </Link>
              {servicesOpen && (
                <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={{
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

            {/* About Dropdown */}
            <li style={{ position: "relative" }} onMouseEnter={handleAboutEnter} onMouseLeave={handleAboutLeave}>
              <Link to="/about" style={linkStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#2d4a26" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#3d362e" }}
              >
                About <ChevronDown size={14} style={{ transition: "transform 0.2s", transform: aboutOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
              </Link>
              {aboutOpen && (
                <div onMouseEnter={handleAboutEnter} onMouseLeave={handleAboutLeave} style={{
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
              <Link to="/contact" style={linkStyle}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#2d4a26"; (e.currentTarget as HTMLElement).style.borderBottomColor = "#2d4a26" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#3d362e"; (e.currentTarget as HTMLElement).style.borderBottomColor = "transparent" }}
              >Contact</Link>
            </li>
          </ul>
        )}

        {/* DESKTOP RIGHT */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
            <a href="https://www.instagram.com/youngentrepreneur_landscaping/" target="_blank" rel="noreferrer"
              style={{ width: "40px", height: "40px", border: "1.5px solid #e8e0d4", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "#3d362e", textDecoration: "none" }}>
              <Instagram size={18} />
            </a>
            <Link to="/contact" style={{
              fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
              color: "#ffffff", background: "#2d4a26", padding: "14px 28px",
              textDecoration: "none", borderRadius: "2px"
            }}>Free Quote</Link>
          </div>
        )}

        {/* MOBILE HAMBURGER */}
        {isMobile && (
          <button onClick={() => setOpen(!open)} style={{
            background: "none", border: "none", cursor: "pointer",
            color: "#2d4a26", padding: "8px", display: "flex", alignItems: "center"
          }}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && open && (
        <div style={{
          background: "#ffffff", borderTop: "1px solid #e8e0d4",
          padding: "24px 20px 32px", display: "flex", flexDirection: "column", gap: "0"
        }}>
          {/* Main links */}
          {[["Showcase", "/showcase"], ["About Us", "/about"], ["FAQ", "/faq"], ["Careers", "/careers"], ["Contact", "/contact"]].map(([label, href]) => (
            <Link key={href} to={href} style={{
              fontSize: "1rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
              color: "#2d4a26", textDecoration: "none", padding: "16px 0",
              borderBottom: "1px solid #e8e0d4", display: "block"
            }}>{label}</Link>
          ))}

          {/* Services section */}
          <div style={{ paddingTop: "8px" }}>
            <div style={{
              fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "#b8832a", padding: "16px 0 8px"
            }}>Services</div>
            {services.map(s => (
              <Link key={s.slug} to={"/services/" + s.slug} style={{
                fontSize: "0.95rem", fontWeight: 500, color: "#3d362e",
                textDecoration: "none", padding: "12px 0", display: "block",
                borderBottom: "1px solid #f0ece6"
              }}>{s.name}</Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <Link to="/contact" style={{
            marginTop: "24px", fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase",
            color: "#ffffff", background: "#2d4a26", padding: "18px",
            textDecoration: "none", borderRadius: "2px", textAlign: "center"
          }}>Get a Free Quote</Link>
        </div>
      )}
    </nav>
  )
}
