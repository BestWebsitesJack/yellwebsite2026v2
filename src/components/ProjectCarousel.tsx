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
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir === 'right' ? 440 : -440, behavior: 'smooth' })
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
    <section className="bg-[#f2ede4] pt-24 pb-0">
      <div className="max-w-7xl mx-auto px-10 pb-12 flex justify-between items-end max-lg:px-6 max-lg:flex-col max-lg:gap-4 max-lg:items-start">
        <div>
          <div className="eyebrow rv">Our Portfolio</div>
          <h2 className="font-serif text-[clamp(2.4rem,4vw,3.8rem)] font-light text-[#2d4a26] leading-[1.1] rv">
            Real Projects. <em className="text-[#b8832a]">Real Craftsmanship.</em>
          </h2>
        </div>
        <Link to="/showcase" className="text-[.72rem] font-medium tracking-[.12em] uppercase text-[#6b6258] no-underline flex items-center gap-2 hover:gap-4 hover:text-[#2d4a26] transition-all rv">
          Full Showcase &rarr;
        </Link>
      </div>
      <div
        ref={scrollRef}
        className={`flex gap-1 overflow-x-auto pb-1 ${isDown ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ scrollbarWidth: 'none' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {projects.map((p, i) => (
          <div key={p.id} className="flex-none h-[560px] relative overflow-hidden bg-[#e8e0d4] group" style={{ width: i === 0 ? '620px' : '420px' }}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.05]" style={{ backgroundImage: `url('${p.image}')` }} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2a2520]/90 via-[#2a2520]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
              <div className="text-[.6rem] font-semibold tracking-[.2em] uppercase text-[#f5e8cc] mb-2">{p.location}</div>
              <div className="font-serif text-[1.85rem] font-light text-white leading-[1.15] mb-3">{p.name}</div>
              <div className="flex flex-wrap gap-1.5 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                {p.tags.map(t => <span key={t} className="text-[.54rem] font-semibold tracking-[.12em] uppercase text-white/65 border border-white/20 px-2.5 py-1 rounded-sm">{t}</span>)}
              </div>
              <div className="text-[.62rem] font-semibold tracking-[.16em] uppercase text-[#f5e8cc] opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                View Project &rarr;
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between bg-white max-lg:px-6">
        <span className="font-serif text-[1.1rem] font-light text-[#6b6258]">
          Showing <span className="text-[#2d4a26]">{projects.length}</span> featured projects
        </span>
        <div className="flex gap-1">
          <button onClick={() => scroll('left')} className="w-11 h-11 border-[1.5px] border-[#e8e0d4] bg-transparent text-[#2d4a26] flex items-center justify-center rounded-sm cursor-pointer transition-all hover:bg-[#2d4a26] hover:text-white hover:border-[#2d4a26]"><ChevronLeft size={18} /></button>
          <button onClick={() => scroll('right')} className="w-11 h-11 border-[1.5px] border-[#e8e0d4] bg-transparent text-[#2d4a26] flex items-center justify-center rounded-sm cursor-pointer transition-all hover:bg-[#2d4a26] hover:text-white hover:border-[#2d4a26]"><ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  )
}
