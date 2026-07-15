import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from "../components/SEO"

const BASE = "https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/"

export default function About() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("on") }), { threshold: 0.08 })
    document.querySelectorAll(".rv").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <SEO title="About Us | Barrett Weckel and Nathan Record | Young Entrepreneur Landscaping" description="Meet the team behind Young Entrepreneur Landscaping. Founded in Cincinnati, OH, serving Greater Cincinnati and Northern Kentucky since 2010 with custom landscape design and construction." path="/about" />
      {/* HERO — split, matching services pages */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 112px)", marginTop: "112px" }}>
        <div style={{ background: "#2d4a26", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "#f5e8cc", marginBottom: "24px" }}>
            <span style={{ width: "28px", height: "1.5px", background: "#f5e8cc", display: "inline-block" }} />
            Our Team
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.4rem,4.5vw,4.2rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.1, marginBottom: "24px" }}>
            Meet Barrett <em style={{ color: "#f5e8cc" }}>and Nathan</em>
          </h1>
          <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.88, color: "rgba(255,255,255,0.72)", marginBottom: "32px" }}>
            Young Entrepreneur Landscaping was founded by Barrett Weckel at the age of 14. Later joined in 2017 by partner Nathan Record, the entrepreneurial spirit and work ethic that built this company defines our culture today.
          </p>
          <Link to="/contact" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", background: "#ffffff", padding: "18px 44px", textDecoration: "none", borderRadius: "2px", width: "fit-content" }}>
            Get a Free Quote
          </Link>
        </div>
        <div style={{ position: "relative", overflow: "hidden", minHeight: "500px" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\'" + BASE + "4a9df538-dd8c-494e-98bb-43f1bd7ac573/IMG_1425.JPG\')", backgroundSize: "cover", backgroundPosition: "center" }} />
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

      {/* TEAM BIOS */}
      <section style={{ background: "#ffffff", padding: "120px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div className="eyebrow rv">Owners</div>
          <h2 className="rv" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,3.8vw,3.4rem)", fontWeight: 300, color: "#2d4a26", marginBottom: "56px", lineHeight: 1.15, maxWidth: "800px" }}>
            Nathan Record <em style={{ color: "#b8832a" }}>and Barrett Weckel</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
            <div className="rv" style={{ background: "#faf8f4", padding: "44px", borderRadius: "3px" }}>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 400, color: "#2d4a26", marginBottom: "16px" }}>Nathan Record</h3>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.9, color: "#3d362e", marginBottom: "20px" }}>
                Nathan is a current co-owner and operator of Young Entrepreneur Landscaping. He is the head of project design and sales, as well as direct project management. Nathan received a Bachelor of Science in Economics, with a minor in Fine Arts, from Centre College.
              </p>
              <a href="mailto:nrecord@yelandscaping.com?subject=General Inquiry" style={{ fontSize: "0.78rem", fontWeight: 600, color: "#b8832a", textDecoration: "none" }}>Email Nathan &rarr;</a>
            </div>
            <div className="rv d1" style={{ background: "#faf8f4", padding: "44px", borderRadius: "3px" }}>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 400, color: "#2d4a26", marginBottom: "16px" }}>Barrett Weckel</h3>
              <p style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.9, color: "#3d362e", marginBottom: "20px" }}>
                Barrett is the founder and current owner and operator of Young Entrepreneur Landscaping. He manages general operations and sales, as well as helping oversee project construction. Barrett graduated with a Bachelor's degree in Entrepreneurial Studies from the Williams College of Business at Xavier University.
              </p>
              <a href="mailto:bweckel@yelandscaping.com?subject=General Inquiry" style={{ fontSize: "0.78rem", fontWeight: 600, color: "#b8832a", textDecoration: "none" }}>Email Barrett &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY */}
      <section style={{ background: "#faf8f4", padding: "120px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <div className="eyebrow rv">Our History</div>
              <h2 className="rv" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem,3.6vw,3rem)", fontWeight: 300, color: "#2d4a26", marginBottom: "28px", lineHeight: 1.15 }}>
                Create an outdoor space that is <em style={{ color: "#b8832a" }}>truly yours</em>
              </h2>
              <p className="rv" style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.9, color: "#3d362e", marginBottom: "20px" }}>
                We are a client-driven business, measuring our success by the number of satisfied customers. Our goal is to make the landscape construction process easy and stress-free.
              </p>
              <p className="rv d1" style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.9, color: "#3d362e", marginBottom: "20px" }}>
                YEL prides itself on its work ethic and reliability. All employees are hardworking, driven, and respectful. Careful oversight of every job site by Barrett and Nathan, coupled with talented employees, ensures high-quality work in a timely manner.
              </p>
              <p className="rv d2" style={{ fontSize: "0.95rem", fontWeight: 300, lineHeight: 1.9, color: "#3d362e" }}>
                Both Barrett and Nathan are college-educated with a combined 32 years of experience in the industry, driving the same entrepreneurial spirit that founded the company at the heart of every project today.
              </p>
            </div>
            <div className="rv d2" style={{ position: "relative", height: "480px", overflow: "hidden", borderRadius: "3px" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\'" + BASE + "5f6420ba-2ddb-4c58-be07-4b433cb5b869/Young_Barrett.jpg\')", backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <div style={{ background: "#2d4a26", padding: "100px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 48px" }}>
          <p className="rv" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.5rem,2.6vw,2.2rem)", fontWeight: 300, fontStyle: "italic", lineHeight: 1.6, color: "#ffffff" }}>
            "I have been using Barrett and his crew for several years now. They always are friendly, knowledgeable, and polite. The work done is always of high quality. I would not hesitate to refer them to anyone needing landscape services of any kind."
          </p>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: "#ffffff", padding: "100px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 48px" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 300, color: "#2d4a26", marginBottom: "20px" }}>
            Get a <em style={{ color: "#b8832a" }}>Quick Estimate</em>
          </h2>
          <p style={{ fontSize: "1rem", fontWeight: 300, color: "#3d362e", marginBottom: "8px" }}>Call us at <a href="tel:5134986879" style={{ color: "#2d4a26", fontWeight: 600, textDecoration: "none" }}>(513) 498-6879</a></p>
          <p style={{ fontSize: "1rem", fontWeight: 300, color: "#3d362e", marginBottom: "40px" }}>
            Barrett &mdash; <a href="mailto:bweckel@yelandscaping.com" style={{ color: "#2d4a26", textDecoration: "none" }}>bweckel@yelandscaping.com</a><br />
            Nathan &mdash; <a href="mailto:nrecord@yelandscaping.com" style={{ color: "#2d4a26", textDecoration: "none" }}>nrecord@yelandscaping.com</a>
          </p>
          <Link to="/contact" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", background: "#2d4a26", padding: "18px 48px", textDecoration: "none", borderRadius: "2px" }}>
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  )
}
