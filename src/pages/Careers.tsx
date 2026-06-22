import { useEffect } from "react"

const BASE = "https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/"

export default function Careers() {
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
            Join Our Team
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.4rem,4.5vw,4.2rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.1, marginBottom: "24px" }}>
            Build Your <em style={{ color: "#f5e8cc" }}>Career With Us</em>
          </h1>
          <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.88, color: "rgba(255,255,255,0.72)", marginBottom: "32px" }}>
            Young Entrepreneur Landscaping is constantly looking for team members who want to embrace their passion in the green industry. We are a fast-growing company with lots of room for internal promotion and development.
          </p>
          <a href="mailto:bweckel@yelandscaping.com?subject=Careers" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", background: "#ffffff", padding: "18px 44px", textDecoration: "none", borderRadius: "2px", width: "fit-content" }}>
            Email Us Today
          </a>
        </div>
        <div style={{ position: "relative", overflow: "hidden", minHeight: "500px" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\'" + BASE + "093d1f76-e633-4c74-944f-2310b6e0c1e4/background.JPG\')", backgroundSize: "cover", backgroundPosition: "center" }} />
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

      {/* WHY WORK HERE */}
      <section style={{ background: "#ffffff", padding: "120px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div className="eyebrow rv">Why Work With Us</div>
          <h2 className="rv" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,3.8vw,3.4rem)", fontWeight: 300, color: "#2d4a26", marginBottom: "56px", lineHeight: 1.15, maxWidth: "800px" }}>
            More Than Just <em style={{ color: "#b8832a" }}>a Paycheck</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px" }}>
            {[
              { t: "Room to Grow", d: "We are a fast-growing company with lots of room for internal promotion and development for team members who embrace the work." },
              { t: "Quality Environment", d: "Team members can expect a quality and safe professional work setting backed by experienced, hands-on leadership." },
              { t: "Real Craftsmanship", d: "Join a team that takes pride in building real, lasting outdoor spaces across Cincinnati and Northern Kentucky." },
            ].map((item, i) => (
              <div key={item.t} className={"rv " + (i > 0 ? ("d" + i) : "")} style={{ background: "#e8f0e4", padding: "44px", borderRadius: "3px" }}>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 400, color: "#2d4a26", marginBottom: "16px" }}>{item.t}</h3>
                <p style={{ fontSize: "0.9rem", fontWeight: 300, lineHeight: 1.85, color: "#3d362e" }}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: "#2d4a26", padding: "100px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 48px" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 300, color: "#ffffff", marginBottom: "20px" }}>
            Ready to <em style={{ color: "#f5e8cc" }}>Join the Team?</em>
          </h2>
          <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>
            Send us an email today and let's talk about your future with Young Entrepreneur Landscaping.
          </p>
          <a href="mailto:bweckel@yelandscaping.com?subject=Careers" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", background: "#ffffff", padding: "18px 48px", textDecoration: "none", borderRadius: "2px" }}>
            Email Us Today
          </a>
        </div>
      </div>
    </>
  )
}
