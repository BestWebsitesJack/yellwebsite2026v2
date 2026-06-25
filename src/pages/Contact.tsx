import { useEffect } from "react"
import SEO from "../components/SEO"

const BASE = "https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/"

const hours = [
  ["Monday \u2013 Friday", "8am \u2013 6pm"],
  ["Saturday", "9am \u2013 3pm"],
  ["Sunday", "9am \u2013 4pm"],
]

export default function Contact() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("on") }), { threshold: 0.08 })
    document.querySelectorAll(".rv").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <SEO title="Contact Us | Young Entrepreneur Landscaping | Cincinnati OH" description="Get in touch with Young Entrepreneur Landscaping for a free landscape consultation. Serving Greater Cincinnati and Northern Kentucky since 2010. Call (513) 498-6879." path="/contact" />
      {/* HERO */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 112px)", marginTop: "112px" }}>
        <div style={{ background: "#2d4a26", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "#f5e8cc", marginBottom: "24px" }}>
            <span style={{ width: "28px", height: "1.5px", background: "#f5e8cc", display: "inline-block" }} />
            Get In Touch
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.4rem,4.5vw,4.2rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.1, marginBottom: "24px" }}>
            Let's Work <em style={{ color: "#f5e8cc" }}>Together</em>
          </h1>
          <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.88, color: "rgba(255,255,255,0.72)", marginBottom: "32px" }}>
            Thank you for considering Young Entrepreneur Landscaping. As a locally owned and operated company based in Newtown, Ohio, we proudly offer landscape design, build, and maintenance services across Greater Cincinnati and Northern Kentucky. We would love to help you bring your vision to life.
          </p>
          <a href="tel:5134986879" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", background: "#ffffff", padding: "18px 44px", textDecoration: "none", borderRadius: "2px", width: "fit-content" }}>
            Call (513) 498-6879
          </a>
        </div>
        <div style={{ position: "relative", overflow: "hidden", minHeight: "500px" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\'" + BASE + "b4551ce8-5d6f-495f-aa7c-20b28df00bcf/IMG_1258.JPG\')", backgroundSize: "cover", backgroundPosition: "center" }} />
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

      {/* CONTACT INFO + FORM */}
      <section style={{ background: "#ffffff", padding: "120px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "64px" }}>

            {/* LEFT: Info */}
            <div>
              <div className="eyebrow rv">Get a Quick Estimate</div>
              <h2 className="rv" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem,3.6vw,2.8rem)", fontWeight: 300, color: "#2d4a26", marginBottom: "32px", lineHeight: 1.15 }}>
                Reach Out <em style={{ color: "#b8832a" }}>Directly</em>
              </h2>

              <div className="rv" style={{ marginBottom: "36px" }}>
                <div style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#b8832a", marginBottom: "10px" }}>Phone</div>
                <a href="tel:5134986879" style={{ fontSize: "1.3rem", fontFamily: "Cormorant Garamond, serif", fontWeight: 400, color: "#2d4a26", textDecoration: "none" }}>(513) 498-6879</a>
              </div>

              <div className="rv d1" style={{ marginBottom: "36px" }}>
                <div style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#b8832a", marginBottom: "10px" }}>Email</div>
                <p style={{ fontSize: "0.95rem", color: "#3d362e", marginBottom: "4px" }}>
                  Barrett \u2014 <a href="mailto:bweckel@yelandscaping.com?subject=Email from Website" style={{ color: "#2d4a26", textDecoration: "none" }}>bweckel@yelandscaping.com</a>
                </p>
                <p style={{ fontSize: "0.95rem", color: "#3d362e" }}>
                  Nathan \u2014 <a href="mailto:nrecord@yelandscaping.com?subject=Email from Website" style={{ color: "#2d4a26", textDecoration: "none" }}>nrecord@yelandscaping.com</a>
                </p>
              </div>

              <div className="rv d2" style={{ marginBottom: "36px" }}>
                <div style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#b8832a", marginBottom: "10px" }}>Our Location</div>
                <p style={{ fontSize: "0.95rem", color: "#3d362e", lineHeight: 1.7 }}>4178 Round Bottom Rd<br />Newtown, OH 45244</p>
              </div>

              <div className="rv d3" style={{ background: "#e8f0e4", padding: "32px", borderRadius: "3px" }}>
                <div style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#b8832a", marginBottom: "16px" }}>Hours</div>
                {hours.map(([day, time]) => (
                  <div key={day} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", fontSize: "0.9rem", color: "#3d362e" }}>
                    <span>{day}</span>
                    <span style={{ color: "#2d4a26", fontWeight: 600 }}>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Form */}
            <div className="rv d2" style={{ background: "#2d4a26", padding: "56px", borderRadius: "3px" }}>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 300, color: "#ffffff", marginBottom: "8px" }}>
                Free <em style={{ color: "#f5e8cc" }}>Consultation</em>
              </h3>
              <p style={{ fontSize: "0.88rem", fontWeight: 300, color: "rgba(255,255,255,0.6)", marginBottom: "32px" }}>
                Tell us about your project and we will be in touch within 24 hours.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {["Your Name","Email Address","Phone Number"].map(ph => (
                  <input key={ph} type="text" placeholder={ph} style={{ width: "100%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", color: "#ffffff", padding: "16px 20px", fontSize: "0.92rem", borderRadius: "2px", outline: "none" }} />
                ))}
                <select style={{ width: "100%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.65)", padding: "16px 20px", fontSize: "0.92rem", borderRadius: "2px", outline: "none" }}>
                  <option value="">Select a Service</option>
                  <option>Design | Build</option>
                  <option>Hardscape &amp; Masonry</option>
                  <option>Lawn &amp; Landscape</option>
                  <option>Carpentry &amp; Lighting</option>
                  <option>Water Management</option>
                  <option>Landscape Maintenance</option>
                </select>
                <textarea placeholder="Tell us about your project..." rows={5} style={{ width: "100%", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", color: "#ffffff", padding: "16px 20px", fontSize: "0.92rem", borderRadius: "2px", outline: "none", resize: "none", fontFamily: "DM Sans, sans-serif" }} />
                <button style={{ width: "100%", fontSize: "0.76rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2d4a26", background: "#ffffff", padding: "18px", borderRadius: "2px", border: "none", cursor: "pointer", marginTop: "8px" }}>
                  Request a Free Quote
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={{ background: "#faf8f4", padding: "0 0 120px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div className="eyebrow rv" style={{ justifyContent: "center" }}>Find Us</div>
          <h2 className="rv" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem,3.6vw,2.8rem)", fontWeight: 300, color: "#2d4a26", lineHeight: 1.15, marginBottom: "32px", textAlign: "center" }}>
            Visit Us in <em style={{ color: "#b8832a" }}>Newtown, Ohio</em>
          </h2>
          <div className="rv" style={{ width: "100%", height: "450px", borderRadius: "3px", overflow: "hidden", border: "1.5px solid #e8e0d4" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3094.4641727007715!2d-84.33016959999999!3d39.141422999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841ac74327fd425%3A0x8843d80145e7f0e6!2sYoung%20Entrepreneur%20Landscaping%20LLC!5e0!3m2!1sen!2sus!4v1782417636507!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Young Entrepreneur Landscaping Location"
            />
          </div>
        </div>
      </section>
    </>
  )
}
