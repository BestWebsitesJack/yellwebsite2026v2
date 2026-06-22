import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: "fixed", bottom: "32px", right: "32px", zIndex: 40,
        width: "52px", height: "52px", borderRadius: "50%",
        background: "#2d4a26", color: "#ffffff", border: "none",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", boxShadow: "0 8px 24px rgba(42,37,32,0.25)",
        transition: "background 0.3s, transform 0.2s"
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#3d6334"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)" }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#2d4a26"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
    >
      <ArrowUp size={22} />
    </button>
  )
}
