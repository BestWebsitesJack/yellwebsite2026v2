import { useEffect } from "react"
import { Link } from "react-router-dom"
import { projects } from "../data/projects"
import SEO from "../components/SEO"

export default function Showcase() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("on") }), { threshold: 0.08 })
    document.querySelectorAll(".rv").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <SEO title="Real Project Showcase | Cincinnati Landscaping Portfolio | YEL" description="Browse real landscaping and hardscape projects completed by Young Entrepreneur Landscaping across Cincinnati and Northern Kentucky. No AI images, no stock photography." path="/showcase" />
      {/* HERO */}
      <section style={{ background: "#2d4a26", paddingTop: "168px", paddingBottom: "112px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "#f5e8cc", marginBottom: "24px" }}>
            <span style={{ width: "28px", height: "1.5px", background: "#f5e8cc", display: "inline-block" }} />
            Our Portfolio
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.6rem,5.5vw,5rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.05, marginBottom: "24px" }}>
            Real Projects.<br /><em style={{ color: "#f5e8cc" }}>Real Craftsmanship.</em>
          </h1>
          <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.88, color: "rgba(255,255,255,0.72)", maxWidth: "640px" }}>
            Every project below was designed and built by our team. No AI-generated images. No stock photography. This is our work, our art.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section style={{ background: "#faf8f4", padding: "80px 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
            {projects.map((p, i) => (
              <Link key={p.id} to={p.url} className={"rv " + (i > 0 ? ("d" + Math.min(i % 4, 4)) : "")} style={{ position: "relative", height: "420px", overflow: "hidden", borderRadius: "3px", background: "#e8e0d4", textDecoration: "none", display: "block" }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\'" + p.image + "\')", backgroundSize: "cover", backgroundPosition: "center" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(42,37,32,0.88) 0%, rgba(42,37,32,0.2) 50%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "36px" }}>
                  <div style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#f5e8cc", marginBottom: "8px" }}>{p.location}</div>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.7rem", fontWeight: 300, color: "#ffffff", lineHeight: 1.15, marginBottom: "12px" }}>{p.name}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize: "0.54rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.25)", padding: "4px 10px", borderRadius: "2px" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
