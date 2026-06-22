import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { services } from '../data/services'

const BASE = "https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/"

const heroImages: Record<string, string> = {
  "design-build": BASE + "796ea458-a157-4a4e-9aa8-f1618fa8cd13/Dyleweski.jpg",
  "hardscape-masonry": BASE + "83eb23e3-058a-47c0-aa4c-0daf8e42c914/IMG_1707.JPEG",
  "lawn-landscape": BASE + "403b6a5a-d4e3-4d88-935f-07d7ea87f68e/IMG_1455.JPG",
  "carpentry-lighting": BASE + "7ea7ad48-6c0a-4eb3-87a3-8586a56a35d4/thumbnail_IMG_1333%20-%20Copy.jpg",
  "water-management": BASE + "9b9393c0-30bb-4232-9ace-04f246677a71/water_management1.JPG",
  "landscape-maintenance": BASE + "a5a2d1c1-3453-4a04-85ac-bbf33eefe258/IMG_0362.JPG",
}

const faqs: Record<string, { q: string; a: string }[]> = {
  "design-build": [
    { q: "What is a landscape design and build company?", a: "A design-build company handles both the design and construction of your outdoor space. YEL manages everything from initial consultation and CAD design to full construction under one roof." },
    { q: "Do I need a design before starting my landscaping project?", a: "Not always. For smaller projects we can work directly from a consultation. For larger transformations we recommend a scaled CAD design with 3-D elevations so you can visualize the finished space first." },
    { q: "How long does a landscape project take in Cincinnati?", a: "Timeline varies by scope. A paver patio may take 1 to 2 weeks while a full outdoor living renovation can take 4 to 8 weeks. We provide a clear schedule after the design approval phase." },
    { q: "Do you serve Northern Kentucky?", a: "Yes, we serve all of Greater Cincinnati and Northern Kentucky including Covington, Florence, Fort Thomas, Newport, Highland Heights, Cold Spring, Union, and surrounding areas." },
  ],
  "hardscape-masonry": [
    { q: "How much does a paver patio cost in Cincinnati?", a: "Paver patio costs in Cincinnati typically range from $8,000 to $30,000 or more depending on size, materials, and design complexity. We provide free detailed estimates for every project." },
    { q: "What hardscaping materials do you work with?", a: "We work with natural stone, brick, concrete pavers, flagstone, stamped concrete, and boulders, helping you choose the right material for your budget, style, and property." },
    { q: "Do you build retaining walls in Cincinnati?", a: "Yes, we design and install retaining walls, garden walls, and boulder walls for residential and commercial properties throughout Cincinnati and Northern Kentucky." },
    { q: "Can you build an outdoor kitchen or fireplace?", a: "Absolutely. We specialize in custom outdoor kitchens, fireplaces, fire pits, and pizza ovens as part of our hardscape and masonry services." },
  ],
  "lawn-landscape": [
    { q: "Do you offer lawn care in Northern Kentucky?", a: "Yes, we provide lawn care, maintenance, and landscape services throughout Northern Kentucky including Covington, Florence, Fort Thomas, and surrounding communities." },
    { q: "What lawn care services does YEL offer?", a: "We offer full lawn and landscape services including mowing, fertilization, mulching, planting beds, garden design, sod installation, seasonal cleanups, and ongoing maintenance programs." },
    { q: "Do you do garden design in Cincinnati?", a: "Yes, garden design is one of our specialties. We create custom planting plans that complement your hardscape and home using native and low-maintenance plants suited to the Cincinnati climate." },
  ],
  "carpentry-lighting": [
    { q: "Do you install landscape lighting in Cincinnati?", a: "Yes, we design and install low voltage landscape lighting systems for residential and commercial properties throughout Cincinnati and Northern Kentucky." },
    { q: "Can you build a pergola or deck in Cincinnati?", a: "Yes, we build custom pergolas, arbors, decks, and outdoor structures as part of our carpentry services, often combined with lighting and landscape design." },
    { q: "What type of outdoor lighting do you install?", a: "We install professional low-voltage landscape lighting systems including path lights, uplights, spotlights, step lights, and accent lighting designed to enhance your property day and night." },
  ],
  "water-management": [
    { q: "Do you install French drains in Cincinnati?", a: "Yes, we install French drains, yard drainage systems, and grading solutions to solve water runoff and drainage problems for Cincinnati and Northern Kentucky homeowners." },
    { q: "How do I fix a muddy or flooded backyard?", a: "The most common solutions are French drain installation, regrading, dry creek beds, or a combination. We assess your property and recommend the right drainage solution." },
    { q: "Do you handle erosion control?", a: "Yes, we provide erosion control solutions including retaining walls, regrading, ground cover planting, and drainage systems to protect your property." },
  ],
  "landscape-maintenance": [
    { q: "Do you offer year-round landscape maintenance?", a: "Yes, we offer seasonal and year-round landscape maintenance programs for both residential and commercial properties in Cincinnati and Northern Kentucky." },
    { q: "Does YEL offer snow removal in Cincinnati?", a: "Yes, we offer residential snow removal services in the Greater Cincinnati area. Contact us to discuss seasonal snow management for your property." },
    { q: "Do you offer commercial landscape maintenance?", a: "Yes, we maintain commercial properties including office parks, HOAs, and commercial buildings throughout Greater Cincinnati and Northern Kentucky." },
  ],
}

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find(s => s.slug === slug)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("on") }), { threshold: 0.08 })
    document.querySelectorAll(".rv").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [slug])

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!service) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "128px" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", color: "#2d4a26", marginBottom: "16px" }}>Service not found</h1>
        <Link to="/services" style={{ color: "#b8832a", textDecoration: "none" }}>Back to Services</Link>
      </div>
    </div>
  )

  const pageFaqs = faqs[service.slug] || []
  const hero = heroImages[service.slug]

  return (
    <>
      {/* HERO — split layout matching homepage */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 112px)", marginTop: "112px" }}>
        <div style={{ background: "#2d4a26", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 72px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "#f5e8cc", marginBottom: "24px" }}>
            <span style={{ width: "28px", height: "1.5px", background: "#f5e8cc", display: "inline-block" }} />
            Our Services
          </div>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.4rem,4.5vw,4.2rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.1, marginBottom: "24px" }}>{service.h1}</h1>
          <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.88, color: "rgba(255,255,255,0.72)", marginBottom: "32px" }}>{service.description}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "36px" }}>
            {service.keywords.map(k => (
              <span key={k} style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#f5e8cc", border: "1px solid rgba(245,232,204,0.3)", padding: "6px 14px", borderRadius: "2px" }}>{k}</span>
            ))}
          </div>
          <Link to="/contact" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", background: "#ffffff", padding: "18px 44px", textDecoration: "none", borderRadius: "2px", width: "fit-content" }}>
            Get a Free Quote
          </Link>
        </div>
        <div style={{ position: "relative", overflow: "hidden", minHeight: "500px" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\'" + hero + "\')", backgroundSize: "cover", backgroundPosition: "center" }} />
        </div>
      </section>

      {/* AUTHENTICITY STRIP */}
      <div style={{ background: "#faf8f4", padding: "20px 0", borderBottom: "1px solid #e8e0d4", borderTop: "1px solid #e8e0d4" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", textAlign: "center" }}>
          <div style={{ width: "5px", height: "5px", background: "#b8832a", borderRadius: "50%", flexShrink: 0 }} />
          <span style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase", color: "#3d362e" }}>
            Every image on this site is a <strong style={{ color: "#2d4a26", fontWeight: 700 }}>real project by our team.</strong> No AI-generated images. No stock photography.
          </span>
          <div style={{ width: "5px", height: "5px", background: "#b8832a", borderRadius: "50%", flexShrink: 0 }} />
        </div>
      </div>

      {/* ABOUT THIS SERVICE */}
      <section style={{ background: "#ffffff", padding: "120px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div className="eyebrow rv">About This Service</div>
          <h2 className="rv" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,3.8vw,3.4rem)", fontWeight: 300, color: "#2d4a26", marginBottom: "56px", lineHeight: 1.15, maxWidth: "800px" }}>
            {service.name} in <em style={{ color: "#b8832a" }}>Cincinnati and Northern Kentucky</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: "64px" }}>
            <div>
              <p className="rv" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.92, color: "#3d362e", marginBottom: "24px" }}>
                Young Entrepreneur Landscaping has been providing professional {service.name.toLowerCase()} services across Greater Cincinnati and Northern Kentucky since 2010. Every project is handled in-house with Barrett or Nathan personally overseeing the work from start to finish.
              </p>
              <p className="rv d1" style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.92, color: "#3d362e" }}>
                We serve residential and commercial clients throughout Hyde Park, Mariemont, Indian Hill, Anderson Township, Montgomery, Blue Ash, Mason, Covington KY, Florence KY, Fort Thomas KY, and all surrounding communities.
              </p>
            </div>
            <div className="rv d2" style={{ background: "#e8f0e4", padding: "44px", borderRadius: "3px" }}>
              <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", fontWeight: 400, color: "#2d4a26", marginBottom: "24px" }}>Why Choose YEL</h3>
              {["Serving Cincinnati since 2010","All work performed in-house","Barrett or Nathan on every project","Residential and commercial","Serving Cincinnati and Northern KY","Free on-site consultation"].map(item => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", fontSize: "0.9rem", color: "#3d362e" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2d4a26", flexShrink: 0 }} />{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {pageFaqs.length > 0 && (
        <section style={{ background: "#faf8f4", padding: "120px 0" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 48px" }}>
            <div className="eyebrow rv">FAQ</div>
            <h2 className="rv" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,3.8vw,3.4rem)", fontWeight: 300, color: "#2d4a26", marginBottom: "56px", lineHeight: 1.15 }}>
              Common Questions About <em style={{ color: "#b8832a" }}>{service.name}</em>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {pageFaqs.map((faq, i) => (
                <details key={i} className={"rv " + (i > 0 ? ("d" + Math.min(i, 4)) : "")} style={{ background: "#ffffff", border: "1px solid #e8e0d4", borderRadius: "3px" }}>
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
      )}

      {/* CTA */}
      <div style={{ background: "#2d4a26", padding: "100px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 48px" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 300, color: "#ffffff", marginBottom: "20px" }}>
            Ready to Start Your <em style={{ color: "#f5e8cc" }}>Cincinnati Project?</em>
          </h2>
          <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>
            Contact us for a free on-site consultation. We serve residential and commercial clients throughout Greater Cincinnati and Northern Kentucky.
          </p>
          <Link to="/contact" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", background: "#ffffff", padding: "18px 48px", textDecoration: "none", borderRadius: "2px" }}>
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* OTHER SERVICES */}
      <section style={{ background: "#ffffff", padding: "100px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
          <div className="eyebrow rv">Explore More</div>
          <h2 className="rv" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem,3.2vw,2.6rem)", fontWeight: 300, color: "#2d4a26", marginBottom: "48px" }}>Other Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
            {services.filter(s => s.slug !== slug).slice(0, 3).map((s, i) => (
              <Link key={s.slug} to={"/services/" + s.slug} className={"rv " + (i > 0 ? ("d" + i) : "")} style={{ padding: "40px", background: "#faf8f4", textDecoration: "none", display: "block", borderRadius: "3px" }}>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.4rem", fontWeight: 300, color: "rgba(45,74,38,0.12)", marginBottom: "16px" }}>{s.number}</div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", fontWeight: 400, color: "#2d4a26", marginBottom: "12px" }}>{s.name}</h3>
                <p style={{ fontSize: "0.84rem", fontWeight: 300, color: "#3d362e", lineHeight: 1.78, marginBottom: "16px" }}>{s.description.slice(0, 95)}...</p>
                <span style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#b8832a" }}>Learn More</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
