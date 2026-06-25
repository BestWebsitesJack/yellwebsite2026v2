import { useEffect } from "react"

export default function InstagramFeed() {
  useEffect(() => {
    const existing = document.querySelector("script[src=\"https://elfsightcdn.com/platform.js\"]")
    if (!existing) {
      const script = document.createElement("script")
      script.src = "https://elfsightcdn.com/platform.js"
      script.async = true
      document.body.appendChild(script)
    } else {
      const w = window as any
      w.eapps?.reinitialize?.()
    }
  }, [])

  return (
    <section style={{ background: "#faf8f4", padding: "100px 0", borderTop: "1px solid #e8e0d4" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px" }}>
          <div className="eyebrow rv" style={{ justifyContent: "center" }}>Follow Along</div>
          <h2 className="rv" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 300, color: "#2d4a26", lineHeight: 1.1, marginBottom: "16px" }}>
            Recent Work on <em style={{ color: "#b8832a" }}>Instagram</em>
          </h2>
          <p style={{ fontSize: "0.92rem", fontWeight: 300, color: "#3d362e", lineHeight: 1.8 }}>
            See our latest projects and behind-the-scenes moments as they happen.
          </p>
        </div>
        <div className="rv" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div className="elfsight-app-6e6afb3a-3e41-466b-974a-265a91d61545" data-elfsight-app-lazy style={{ width: "100%", maxWidth: "1100px" }} />
        </div>
      </div>
    </section>
  )
}
