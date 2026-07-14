import { useState, useRef, useCallback } from "react"

interface BeforeAfterProps {
  before: string
  after: string
  beforeLabel?: string
  afterLabel?: string
}

export default function BeforeAfterSlider({ before, after, beforeLabel = "Before", afterLabel = "After" }: BeforeAfterProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const onMouseDown = () => {
    isDragging.current = true
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseup", onMouseUp)
  }

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX)
  }, [updatePosition])

  const onMouseUp = useCallback(() => {
    isDragging.current = false
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseup", onMouseUp)
  }, [onMouseMove])

  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", height: "500px", overflow: "hidden", borderRadius: "3px", cursor: "col-resize", userSelect: "none" }}
      onTouchMove={onTouchMove}
    >
      {/* After image (full width underneath) */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "url('" + after + "')", backgroundSize: "cover", backgroundPosition: "center" }} />

      {/* After label */}
      <div style={{ position: "absolute", top: "16px", right: "16px", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#ffffff", background: "#2d4a26", padding: "6px 14px", borderRadius: "2px", zIndex: 2 }}>{afterLabel}</div>

      {/* Before image (clipped to left of slider) */}
      <div style={{ position: "absolute", inset: 0, width: position + "%", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('" + before + "')", backgroundSize: "cover", backgroundPosition: "center", width: (100 / position * 100) + "%" }} />
      </div>

      {/* Before label */}
      <div style={{ position: "absolute", top: "16px", left: "16px", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#ffffff", background: "rgba(42,37,32,0.7)", padding: "6px 14px", borderRadius: "2px", zIndex: 2 }}>{beforeLabel}</div>

      {/* Divider line */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: position + "%", width: "2px", background: "#ffffff", zIndex: 3, transform: "translateX(-50%)" }} />

      {/* Drag handle */}
      <div
        onMouseDown={onMouseDown}
        style={{
          position: "absolute", top: "50%", left: position + "%", transform: "translate(-50%, -50%)",
          width: "48px", height: "48px", borderRadius: "50%", background: "#ffffff",
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)", zIndex: 4, cursor: "col-resize",
          display: "flex", alignItems: "center", justifyContent: "center", gap: "4px"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M2 1L0 7l2 6M6 1l2 6-2 6" stroke="#2d4a26" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
      </div>
    </div>
  )
}
