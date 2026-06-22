import { useEffect } from 'react'

export default function Reviews() {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')
    if (!existing) {
      const script = document.createElement('script')
      script.src = 'https://elfsightcdn.com/platform.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section style={{ background: "#faf8f4", padding: "96px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 48px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div className="eyebrow rv" style={{ justifyContent: "center" }}>What Clients Say</div>
        <h2 className="rv" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,4vw,3.5rem)", fontWeight: 300, color: "#2d4a26", lineHeight: 1.1, marginBottom: "48px" }}>
          Real Reviews. <em style={{ color: "#b8832a" }}>Real Clients.</em>
        </h2>
        <div className="rv" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <div className="elfsight-app-80ac392a-86dc-4761-88ce-aade40ab1f18" data-elfsight-app-lazy style={{ width: "100%" }} />
        </div>
      </div>
    </section>
  )
}
