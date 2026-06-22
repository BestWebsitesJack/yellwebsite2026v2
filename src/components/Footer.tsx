import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: "#ffffff", paddingTop: "80px", paddingBottom: "40px", borderTop: "1px solid #e8e0d4" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "64px", marginBottom: "64px" }}>
          <div>
            <img src="/YellLogo.png" alt="Young Entrepreneur Landscaping" style={{ height: "64px", width: "auto", marginBottom: "24px" }} />
            <p style={{ fontSize: "0.82rem", fontWeight: 300, lineHeight: 1.85, color: "#2a2520", marginBottom: "20px" }}>
              Cincinnati's premier custom landscaping, hardscaping, and outdoor living company since 2010. Serving Greater Cincinnati and Northern Kentucky.
            </p>
            {["(513) 498-6879","bweckel@yelandscaping.com","4178 Round Bottom Rd, Newtown OH 45244"].map(t => (
              <p key={t} style={{ fontSize: "0.8rem", color: "#2a2520", marginBottom: "6px" }}>{t}</p>
            ))}
          </div>
          {[
            { h: "Services", links: [["Design | Build","/services/design-build"],["Hardscape & Masonry","/services/hardscape-masonry"],["Lawn & Landscape","/services/lawn-landscape"],["Carpentry & Lighting","/services/carpentry-lighting"],["Water Management","/services/water-management"],["Landscape Maintenance","/services/landscape-maintenance"]] },
            { h: "Company", links: [["About Us","/about"],["Showcase","/showcase"],["FAQ","/faq"],["Contact","/contact"]] },
            { h: "Service Areas", links: [["Cincinnati, OH","/"],["Hyde Park & Mariemont","/"],["Indian Hill","/"],["Northern Kentucky","/"],["Covington KY","/"],["Fort Thomas KY","/"]] },
          ].map(col => (
            <div key={col.h}>
              <h4 style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#2d4a26", marginBottom: "24px" }}>{col.h}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", padding: 0, margin: 0 }}>
                {col.links.map(([l,h]) => (
                  <li key={l}><Link to={h} style={{ fontSize: "0.82rem", fontWeight: 400, color: "#2a2520", textDecoration: "none", transition: "color 0.3s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#2d4a26"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#2a2520"}
                  >{l}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "28px", borderTop: "1px solid #e8e0d4" }}>
          <span style={{ fontSize: "0.68rem", color: "#2a2520" }}>2026 Young Entrepreneur Landscaping LLC &middot; Cincinnati OH &middot; (513) 498-6879</span>
          <span style={{ fontSize: "0.68rem", color: "#2a2520" }}>Built by <a href="https://www.bestwebsites.tech/" target="_blank" rel="noreferrer" style={{ color: "#2d4a26", textDecoration: "none" }}>BestWebsites</a></span>
        </div>
      </div>
    </footer>
  )
}
