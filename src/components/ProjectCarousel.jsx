import { useRef, useState } from 'react'
import { PROJECTS } from '../data/siteData'

export default function ProjectCarousel() {
  const trackRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const onMouseDown = (e) => {
    setDragging(true)
    setStartX(e.pageX - trackRef.current.offsetLeft)
    setScrollLeft(trackRef.current.scrollLeft)
  }

  const onMouseUp = () => setDragging(false)

  const onMouseMove = (e) => {
    if (!dragging) return
    e.preventDefault()
    const x = e.pageX - trackRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    trackRef.current.scrollLeft = scrollLeft - walk
  }

  const scroll = (dir) => {
    trackRef.current.scrollBy({ left: dir * 420, behavior: 'smooth' })
  }

  return (
    <div className="carousel-wrap">
      <div
        ref={trackRef}
        className="carousel-track"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
        style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {PROJECTS.map((p, i) => (
          <a
            key={i}
            href={p.href}
            target={p.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="pc"
            style={{ textDecoration: 'none' }}
            draggable={false}
          >
            <div className="pc-bg" style={{ backgroundImage: `url(${p.img})` }} />
            <div className="pc-overlay" />
            <div className="pc-content">
              <div className="pc-tags">
                {p.tags.map((t, j) => (
                  <span key={j} className="pc-tag">{t}</span>
                ))}
              </div>
              <div className="pc-location">{p.location}</div>
              <div className="pc-title">{p.title}</div>
            </div>
          </a>
        ))}
      </div>

      <div className="carousel-arrows">
        <button className="carousel-arrow" onClick={() => scroll(-1)} aria-label="Previous">←</button>
        <button className="carousel-arrow" onClick={() => scroll(1)} aria-label="Next">→</button>
      </div>
    </div>
  )
}
