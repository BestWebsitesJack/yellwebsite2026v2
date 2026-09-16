export default function AuthStrip() {
  return (
    <div style={{ background: "#2d4a26", padding: "20px clamp(20px, 4vw, 48px)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", textAlign: "center", flexWrap: "wrap" }}>
        <div style={{ width: "5px", height: "5px", background: "#f5e8cc", borderRadius: "50%", flexShrink: 0 }} />
        <span style={{ fontSize: "0.7rem", fontWeight: 400, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>
          Every image on this site is a <strong style={{ color: "#f5e8cc", fontWeight: 700 }}>real project by our team.</strong> No AI-generated images. No stock photography.
        </span>
        <div style={{ width: "5px", height: "5px", background: "#f5e8cc", borderRadius: "50%", flexShrink: 0 }} />
      </div>
    </div>
  )
}
