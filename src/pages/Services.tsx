import { useEffect } from "react"
import { Link } from "react-router-dom"
import { services } from "../data/services"
import SEO from "../components/SEO"

export default function Services() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("on") }), { threshold: 0.08 })
    document.querySelectorAll(".rv").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <SEO title="Landscaping Services Cincinnati OH | Young Entrepreneur Landscaping" description="Explore all six of our core landscaping services in Cincinnati and Northern Kentucky: design and build, hardscape, lawn care, carpentry, water management, and maintenance." path="/services" />

      <section style={{ background: "#2d4a26", paddingTop: "168px", paddingBottom: "112px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "#f5e8cc", marginBottom: "24px" }}>
            <span style={{ width: "28px", height: "1.5px", background: "#f5e8cc", display: "inline-block" }} />
            What We Do
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.6rem,5.5vw,5rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.05, marginBottom: "24px" }}>
            Cincinnati Landscaping<br /><em style={{ color: "#f5e8cc" }}>Services</em>
          </h1>
          <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.88, color: "rgba(255,255,255,0.72)", maxWidth: "640px" }}>
            From custom landscape design and hardscaping to lawn care and maintenance. Six core services for residential and commercial clients across Greater Cincinnati and Northern Kentucky.
          </p>
        </div>
      </section>

      <section style={{ background: "#faf8f4", padding: "80px 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
            {services.map((s, i) => (
              <Link key={s.slug} to={"/services/" + s.slug} className={"rv " + (i > 0 ? ("d" + Math.min(i, 4)) : "")} style={{ padding: "48px 44px", background: "#ffffff", textDecoration: "none", display: "block", borderRadius: "3px", position: "relative", overflow: "hidden", transition: "background 0.3s", border: "1.5px solid transparent" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#e8f0e4"; (e.currentTarget as HTMLElement).style.borderColor = "#2d4a26" }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#ffffff"; (e.currentTarget as HTMLElement).style.borderColor = "transparent" }}
              >
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "4rem", fontWeight: 300, color: "rgba(45,74,38,0.08)", lineHeight: 1, marginBottom: "20px" }}>{s.number}</div>
                <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.55rem", fontWeight: 300, color: "#2d4a26", marginBottom: "14px", lineHeight: 1.25 }}>{s.name}</h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                  {s.keywords.map(k => (
                    <span key={k} style={{ fontSize: "0.56rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7a9468", border: "1px solid rgba(122,148,104,0.3)", padding: "4px 10px", borderRadius: "2px" }}>{k}</span>
                  ))}
                </div>
                <p style={{ fontSize: "0.88rem", fontWeight: 300, lineHeight: 1.85, color: "#3d362e", marginBottom: "22px" }}>{s.description}</p>
                <div style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#b8832a" }}>
                  Explore Service &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div style={{ background: "#2d4a26", padding: "100px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 48px" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 300, color: "#ffffff", marginBottom: "20px" }}>
            Ready to Start Your <em style={{ color: "#f5e8cc" }}>Project?</em>
          </h2>
          <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>
            Contact us for a free on-site consultation across Greater Cincinnati and Northern Kentucky.
          </p>
          <Link to="/contact" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", background: "#ffffff", padding: "18px 48px", textDecoration: "none", borderRadius: "2px" }}>
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}
