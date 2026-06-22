import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const BASE = "https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/"

const faqs = [
  { q: "How do we get started?", a: "Simple! Call, email, or fill out our contact form to schedule a free consultation to discuss your landscape. We aim to respond within 24 hours." },
  { q: "What if I am unsure of my budget?", a: "No problem! A lot of people are unsure. During the consultation, we will define ballpark costs to help set parameters for the project. It is often best to see what is possible and work backward to form a budget." },
  { q: "What if I do not have a vision for my landscape?", a: "No worries! During the consultation, we will figure out your goals for your outdoor space. These goals combined with your aesthetic will define the form and function of the design." },
  { q: "What does a design cost?", a: "It depends on the complexity of your project. In some cases, no design or a very simple design is needed, with no charge. If the project is more complex, we charge a design fee, communicated during the consultation, to cover our time and expertise for the site analysis, design, and estimate." },
  { q: "What landscaping services do you offer?", a: "We offer a full range of landscaping services, including design, hardscaping, lawn care, carpentry, lighting, water management, and landscape maintenance. Our team specializes in creating custom outdoor living spaces that reflect your personal style and meet your functional needs." },
  { q: "Do you offer custom designs?", a: "Yes, we work closely with our clients to design unique, personalized landscapes that enhance the beauty and functionality of their outdoor spaces. Whether it is a patio, garden, or complete landscape makeover, we create designs tailored to your vision." },
  { q: "Does Young Entrepreneur Landscaping serve Northern Kentucky?", a: "Yes, we serve all of Greater Cincinnati and Northern Kentucky including Covington, Florence, Fort Thomas, Newport, Highland Heights, Cold Spring, Union, Villa Hills, and surrounding areas." },
  { q: "Do you work with commercial properties?", a: "Yes, we serve both residential homeowners and commercial clients including office parks, HOAs, and commercial properties throughout Cincinnati and Northern Kentucky." },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Frequently Asked Questions
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.4rem,4.5vw,4.2rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.1, marginBottom: "24px" }}>
            Questions, <em style={{ color: "#f5e8cc" }}>Answered</em>
          </h1>
          <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.88, color: "rgba(255,255,255,0.72)", marginBottom: "32px" }}>
            We believe in transparency and providing our clients with all the information they need to make informed decisions about their landscaping projects.
          </p>
          <Link to="/contact" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", background: "#ffffff", padding: "18px 44px", textDecoration: "none", borderRadius: "2px", width: "fit-content" }}>
            Get a Free Quote
          </Link>
        </div>
        <div style={{ position: "relative", overflow: "hidden", minHeight: "500px" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\'" + BASE + "7a31a00b-07c1-4fcb-b824-ff1753631e30/background.JPG\')", backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
      </section>

      {/* FAQ LIST */}
      <section style={{ background: "#faf8f4", padding: "120px 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 48px" }}>
          <div className="eyebrow rv">Common Questions</div>
          <h2 className="rv" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,3.8vw,3.4rem)", fontWeight: 300, color: "#2d4a26", marginBottom: "56px", lineHeight: 1.15 }}>
            Everything You <em style={{ color: "#b8832a" }}>Need to Know</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {faqs.map((faq, i) => (
              <div key={i} className={"rv " + (i > 0 ? ("d" + Math.min(i, 4)) : "")} style={{ background: "#ffffff", border: "1px solid #e8e0d4", borderRadius: "3px" }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{ width: "100%", textAlign: "left", padding: "28px 36px", fontSize: "1rem", fontWeight: 500, color: "#2d4a26", cursor: "pointer", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}
                >
                  {faq.q}
                  <span style={{ color: "#b8832a", fontSize: "1.4rem", marginLeft: "20px", flexShrink: 0, transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>+</span>
                </button>
                {openIndex === i && (
                  <div style={{ padding: "0 36px 28px", fontSize: "0.92rem", fontWeight: 300, lineHeight: 1.9, color: "#3d362e" }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div style={{ background: "#2d4a26", padding: "100px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 48px" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 300, color: "#ffffff", marginBottom: "20px" }}>
            Still Have <em style={{ color: "#f5e8cc" }}>Questions?</em>
          </h2>
          <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>
            Reach out directly. Barrett &mdash; bweckel@yelandscaping.com &middot; Nathan &mdash; nrecord@yelandscaping.com &middot; (513) 498-6879
          </p>
          <Link to="/contact" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", background: "#ffffff", padding: "18px 48px", textDecoration: "none", borderRadius: "2px" }}>
            Contact Us
          </Link>
        </div>
      </div>
    </>
  )
}
