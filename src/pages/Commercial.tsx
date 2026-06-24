import { useEffect } from "react"
import { Link } from "react-router-dom"

const BASE = "https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/"

const faqs = [
  { q: "Do you offer commercial landscape maintenance contracts?", a: "Yes, we provide ongoing maintenance contracts for commercial properties, office parks, and HOA communities throughout Greater Cincinnati and Northern Kentucky, including mowing, seasonal color, irrigation, and snow removal." },
  { q: "Do you work with HOAs and property management companies?", a: "Yes, we partner with HOAs and property managers to maintain common areas, entrances, and shared green spaces with consistent, reliable service." },
  { q: "Do you handle government or municipal landscaping work?", a: "Yes, our team has experience maintaining public green spaces and walkways, including planting, watering, and seasonal upkeep for municipal and public properties." },
  { q: "Can you provide a recurring maintenance schedule for our property?", a: "Absolutely. We build custom maintenance schedules, weekly, biweekly, or seasonal, tailored to your property's needs and budget." },
]

export default function Commercial() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("on") }), { threshold: 0.08 })
    document.querySelectorAll(".rv").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* HERO */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 112px)", marginTop: "112px" }}>
        <div style={{ background: "#2d4a26", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "#f5e8cc", marginBottom: "24px" }}>
            <span style={{ width: "28px", height: "1.5px", background: "#f5e8cc", display: "inline-block" }} />
            Commercial & Government
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.4rem,4.5vw,4.2rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.1, marginBottom: "24px" }}>
            Commercial Landscape <em style={{ color: "#f5e8cc" }}>Maintenance</em>
          </h1>
          <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.88, color: "rgba(255,255,255,0.72)", marginBottom: "32px" }}>
            Beyond residential projects, Young Entrepreneur Landscaping maintains commercial properties, HOA communities, and public green spaces throughout Greater Cincinnati and Northern Kentucky. Reliable, professional service for properties of every scale.
          </p>
          <Link to="/contact" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", background: "#ffffff", padding: "18px 44px", textDecoration: "none", borderRadius: "2px", width: "fit-content" }}>
            Request a Commercial Quote
          </Link>
        </div>
        <div style={{ position: "relative", overflow: "hidden", minHeight: "500px" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\'" + BASE + "403b6a5a-d4e3-4d88-935f-07d7ea87f68e/IMG_1455.JPG\')", backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
      </section>

      {/* AUTH STRIP */}
      <div style={{ background: "#faf8f4", padding: "20px 0", borderBottom: "1px solid #e8e0d4", borderTop: "1px solid #e8e0d4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", textAlign: "center" }}>
          <div style={{ width: "5px", height: "5px", background: "#b8832a", borderRadius: "50%", flexShrink: 0 }} />
          <span style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3d362e" }}>
            Every image on this site is a <strong style={{ color: "#2d4a26", fontWeight: 700 }}>real project by our team.</strong> No AI-generated images. No stock photography.
          </span>
          <div style={{ width: "5px", height: "5px", background: "#b8832a", borderRadius: "50%", flexShrink: 0 }} />
        </div>
      </div>

      {/* WHO WE SERVE */}
      <section style={{ background: "#ffffff", padding: "120px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div className="eyebrow rv">Who We Serve</div>
          <h2 className="rv" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,3.8vw,3.4rem)", fontWeight: 300, color: "#2d4a26", marginBottom: "56px", lineHeight: 1.15, maxWidth: "800px" }}>
            Trusted Across <em style={{ color: "#b8832a" }}>Every Property Type</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
            {[
              { t: "Commercial Properties", d: "Office parks, retail centers, and commercial buildings throughout Cincinnati and Northern Kentucky rely on us for consistent, professional landscape upkeep." },
              { t: "HOAs & Communities", d: "We partner with homeowners associations and property managers to maintain common areas, entrances, and shared green spaces year-round." },
              { t: "Government & Public Spaces", d: "Our team maintains public green spaces and walkways, including seasonal planting, watering, and upkeep for municipal and public properties." },
            ].map((item, i) => (
              <div key={item.t} className={"rv " + (i > 0 ? ("d" + i) : "")} style={{ background: "#e8f0e4", padding: "44px", borderRadius: "3px" }}>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 400, color: "#2d4a26", marginBottom: "16px" }}>{item.t}</h3>
                <p style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.85, color: "#3d362e" }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCOPE OF SERVICES */}
      <section style={{ background: "#faf8f4", padding: "120px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <div className="eyebrow rv">What We Provide</div>
              <h2 className="rv" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem,3.6vw,3rem)", fontWeight: 300, color: "#2d4a26", marginBottom: "28px", lineHeight: 1.15 }}>
                Reliable Service, <em style={{ color: "#b8832a" }}>Every Season</em>
              </h2>
              <p className="rv" style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.9, color: "#3d362e", marginBottom: "24px" }}>
                Commercial and public properties demand consistency. Our team builds custom maintenance schedules tailored to each property, including routine mowing and upkeep, seasonal color rotations and planting, irrigation and watering programs, and winter snow removal contracts.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {["Routine maintenance and upkeep", "Seasonal color rotations and planting", "Irrigation and watering programs", "Winter snow removal contracts", "Custom recurring schedules"].map(item => (
                  <div key={item} className="rv" style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "0.9rem", color: "#3d362e" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2d4a26", flexShrink: 0 }} />{item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rv d2" style={{ position: "relative", height: "480px", overflow: "hidden", borderRadius: "3px" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\'" + BASE + "6b7b2c23-ee42-4a82-928d-ff5ef169b647/IMG_1319.JPG\')", backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#ffffff", padding: "120px 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 48px" }}>
          <div className="eyebrow rv">FAQ</div>
          <h2 className="rv" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,3.8vw,3.4rem)", fontWeight: 300, color: "#2d4a26", marginBottom: "56px", lineHeight: 1.15 }}>
            Common Questions About <em style={{ color: "#b8832a" }}>Commercial Service</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((faq, i) => (
              <details key={i} className={"rv " + (i > 0 ? ("d" + Math.min(i, 4)) : "")} style={{ background: "#faf8f4", border: "1px solid #e8e0d4", borderRadius: "3px" }}>
                <summary style={{ padding: "28px 36px", fontSize: "1rem", fontWeight: 500, color: "#2d4a26", cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {faq.q}
                  <span style={{ color: "#b8832a", fontSize: "1.4rem", marginLeft: "20px", flexShrink: 0 }}>+</span>
                </summary>
                <div style={{ padding: "0 36px 28px", fontSize: "0.92rem", fontWeight: 300, lineHeight: 1.9, color: "#3d362e" }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: "#2d4a26", padding: "100px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 48px" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 300, color: "#ffffff", marginBottom: "20px" }}>
            Let's Discuss Your <em style={{ color: "#f5e8cc" }}>Property</em>
          </h2>
          <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>
            Contact us to discuss a custom maintenance plan for your commercial, HOA, or public property.
          </p>
          <Link to="/contact" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", background: "#ffffff", padding: "18px 48px", textDecoration: "none", borderRadius: "2px" }}>
            Request a Commercial Quote
          </Link>
        </div>
      </div>
    </>
  )
}
