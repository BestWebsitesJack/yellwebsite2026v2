import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", background: "#faf8f4", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "48px 24px", marginTop: "112px" }}>
      <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "8rem", fontWeight: 300, color: "#2d4a26", lineHeight: 1, marginBottom: "16px" }}>404</div>
      <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem,3vw,2.6rem)", fontWeight: 300, color: "#2a2520", marginBottom: "16px" }}>
        Page Not <em style={{ color: "#b8832a" }}>Found</em>
      </h1>
      <p style={{ fontSize: "1rem", fontWeight: 300, color: "#3d362e", lineHeight: 1.8, maxWidth: "480px", marginBottom: "40px" }}>
        The page you are looking for does not exist or may have moved. Let us help you find what you need.
      </p>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link to="/" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#ffffff", background: "#2d4a26", padding: "16px 40px", textDecoration: "none", borderRadius: "2px" }}>
          Go Home
        </Link>
        <Link to="/contact" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", border: "1.5px solid #2d4a26", padding: "16px 40px", textDecoration: "none", borderRadius: "2px" }}>
          Contact Us
        </Link>
        <Link to="/showcase" style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#2d4a26", border: "1.5px solid #2d4a26", padding: "16px 40px", textDecoration: "none", borderRadius: "2px" }}>
          View Our Work
        </Link>
      </div>
    </div>
  )
}
