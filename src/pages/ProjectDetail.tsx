import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"
import { projectDetails } from "../data/projectDetails"
import SEO from "../components/SEO"
import BeforeAfterSlider from "../components/BeforeAfterSlider"

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projectDetails.find(p => p.slug === slug)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("on") }), { threshold: 0.08 })
    document.querySelectorAll(".rv").forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [slug])

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!project) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "128px" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", color: "#2d4a26", marginBottom: "16px" }}>Project not found</h1>
        <Link to="/showcase" style={{ color: "#b8832a", textDecoration: "none" }}>Back to Showcase</Link>
      </div>
    </div>
  )

  return (
    <>
      <SEO
        title={project.title + " " + project.subtitle + " | Cincinnati Landscaping Project | YEL"}
        description={project.intro.slice(0, 155)}
        path={"/showcase/" + project.slug}
      />
      {/* HERO */}
      {project.slug === "norwood-living-garden" ? (
        /* Norwood: full-width vertical video hero */
        <section style={{ marginTop: "140px", background: "#2d4a26" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 72px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "#f5e8cc", marginBottom: "24px" }}>
                <span style={{ width: "28px", height: "1.5px", background: "#f5e8cc", display: "inline-block" }} />
                {project.location}
              </div>
              <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.4rem,4.5vw,4.2rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.1, marginBottom: "12px" }}>{project.title}</h1>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.4rem,2.4vw,1.9rem)", fontWeight: 300, fontStyle: "italic", color: "#f5e8cc", marginBottom: "28px" }}>{project.subtitle}</h2>
              <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.88, color: "rgba(255,255,255,0.72)", marginBottom: "32px" }}>{project.intro}</p>
              <Link to="/contact" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", background: "#ffffff", padding: "18px 44px", textDecoration: "none", borderRadius: "2px", width: "fit-content" }}>
                Start Your Project
              </Link>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "48px", background: "#1e3319" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "360px", aspectRatio: "9/16", borderRadius: "8px", overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}>
                <iframe
                  src="https://www.youtube.com/embed/o7nktxTj7-s?autoplay=1&mute=1&loop=1&playlist=o7nktxTj7-s&controls=0&showinfo=0&rel=0&modestbranding=1"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Norwood Living Garden"
                />
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* Standard split hero for all other projects */
        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "calc(100vh - 112px)", marginTop: "112px" }}>
          <div style={{ background: "#2d4a26", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 72px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.26em", textTransform: "uppercase", color: "#f5e8cc", marginBottom: "24px" }}>
              <span style={{ width: "28px", height: "1.5px", background: "#f5e8cc", display: "inline-block" }} />
              {project.location}
            </div>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.4rem,4.5vw,4.2rem)", fontWeight: 300, color: "#ffffff", lineHeight: 1.1, marginBottom: "12px" }}>{project.title}</h1>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.4rem,2.4vw,1.9rem)", fontWeight: 300, fontStyle: "italic", color: "#f5e8cc", marginBottom: "28px" }}>{project.subtitle}</h2>
            <p style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.88, color: "rgba(255,255,255,0.72)", marginBottom: "32px" }}>{project.intro}</p>
            <Link to="/contact" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", background: "#ffffff", padding: "18px 44px", textDecoration: "none", borderRadius: "2px", width: "fit-content" }}>
              Start Your Project
            </Link>
          </div>
          <div style={{ position: "relative", overflow: "hidden", minHeight: "500px" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "url('" + project.heroImage + "')", backgroundSize: "cover", backgroundPosition: "center" }} />
          </div>
        </section>
      )}

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

      {/* STORY SECTIONS */}
      {project.sections.map((section, i) => (
        <section key={i} style={{ background: i % 2 === 0 ? "#ffffff" : "#faf8f4", padding: "100px 0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
            <div style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr", gap: "64px", alignItems: "center", direction: i % 2 === 0 ? "ltr" : "rtl" }}>
              <div style={{ direction: "ltr" }}>
                <p className={"rv " + (i > 0 ? ("d" + Math.min(i % 4, 4)) : "")} style={{ fontSize: "1rem", fontWeight: 300, lineHeight: 1.92, color: "#3d362e" }}>
                  {section.text}
                </p>
              </div>
              <div className={"rv " + (i > 0 ? ("d" + Math.min(i % 4, 4)) : "")} style={{ direction: "ltr" }}>
                {section.beforeImage ? (
                  <BeforeAfterSlider
                    before={section.beforeImage}
                    after={section.image}
                    beforeLabel="Before"
                    afterLabel="After"
                  />
                ) : (
                  <div style={{ position: "relative", height: "440px", overflow: "hidden", borderRadius: "3px" }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "url('" + section.image + "')", backgroundSize: "cover", backgroundPosition: "center" }} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <div style={{ background: "#2d4a26", padding: "100px 0", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 48px" }}>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 300, color: "#ffffff", marginBottom: "20px" }}>
            Inspired by <em style={{ color: "#f5e8cc" }}>This Project?</em>
          </h2>
          <p style={{ fontSize: "1rem", fontWeight: 300, color: "rgba(255,255,255,0.65)", marginBottom: "40px" }}>
            Let's talk about how we can bring this same level of craftsmanship to your outdoor space.
          </p>
          <Link to="/contact" style={{ display: "inline-block", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", background: "#ffffff", padding: "18px 48px", textDecoration: "none", borderRadius: "2px" }}>
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* BACK TO SHOWCASE */}
      <div style={{ background: "#faf8f4", padding: "60px 0", textAlign: "center" }}>
        <Link to="/showcase" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", textDecoration: "none" }}>
          &larr; Back to Full Showcase
        </Link>
      </div>
    </>
  )
}
