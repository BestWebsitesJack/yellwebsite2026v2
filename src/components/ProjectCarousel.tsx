import { useRef, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDown, setIsDown] = useState(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir === 'right' ? 460 : -460, behavior: 'smooth' })
  }

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDown(true)
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0)
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0
  }, [])

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return
    e.preventDefault()
    scrollRef.current.scrollLeft = scrollLeft.current - (e.pageX - (scrollRef.current.offsetLeft ?? 0) - startX.current) * 1.6
  }, [isDown])

  const stopDrag = useCallback(() => setIsDown(false), [])

  return (
    <section style={{ background: '#f2ede4', paddingTop: '100px', paddingBottom: 0 }}>
      <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '48px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div className="eyebrow rv">Our Portfolio</div>
          <h2 className="rv" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem,4vw,3.8rem)', fontWeight: 300, color: '#2d4a26', lineHeight: 1.1 }}>
            Real Projects. <em style={{ color: '#b8832a' }}>Real Craftsmanship.</em>
          </h2>
        </div>
        <Link to="/showcase" className="rv" style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b6258', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#2d4a26' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#6b6258' }}
        >Full Showcase &rarr;</Link>
      </div>
      <div
        ref={scrollRef}
        style={{ display: 'flex', gap: '4px', overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: '4px', cursor: isDown ? 'grabbing' : 'grab' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {projects.map((p, i) => (
          <div key={p.id} style={{ flexShrink: 0, width: i === 0 ? '640px' : '420px', height: '580px', position: 'relative', overflow: 'hidden', background: '#e8e0d4' }}
            className="group"
          >
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${p.image}')`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.7s ease' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,12,8,0.92) 0%, rgba(10,12,8,0.22) 55%, transparent 100%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 36px' }}>
              <div style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#f5e8cc', marginBottom: '10px' }}>{p.location}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.9rem', fontWeight: 300, color: '#ffffff', lineHeight: 1.15, marginBottom: '14px' }}>{p.name}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {p.tags.map(t => <span key={t} style={{ fontSize: '0.54rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '2px' }}>{t}</span>)}
              </div>
              <div style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f5e8cc' }}>View Project &rarr;</div>
            </div>
          </div>
        ))}
      </div>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 0', background: '#ffffff', marginTop: '4px' }}>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 300, color: '#6b6258' }}>
          Showing <span style={{ color: '#2d4a26' }}>{projects.length}</span> featured projects
        </span>
        <div style={{ display: 'flex', gap: '4px' }}>
          {[['left','←'],['right','→']].map(([dir, arrow]) => (
            <button key={dir} onClick={() => scroll(dir as 'left'|'right')} style={{ width: '44px', height: '44px', border: '1.5px solid #e8e0d4', background: 'transparent', color: '#2d4a26', fontSize: '1rem', cursor: 'pointer', borderRadius: '2px', transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#2d4a26'; (e.currentTarget as HTMLElement).style.color = '#ffffff'; (e.currentTarget as HTMLElement).style.borderColor = '#2d4a26' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#2d4a26'; (e.currentTarget as HTMLElement).style.borderColor = '#e8e0d4' }}
            >{arrow}</button>
          ))}
        </div>
      </div>
    </section>
  )
}
