import { useEffect } from 'react'
import { projects } from '../data/projects'

export default function Showcase() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') }), { threshold: 0.1 })
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <section className="bg-[#2d4a26] pt-44 pb-28 max-lg:pt-36 max-lg:pb-20">
        <div className="max-w-7xl mx-auto px-10 max-lg:px-6">
          <div className="flex items-center gap-3 text-[.62rem] font-semibold tracking-[.25em] uppercase text-[#f5e8cc] mb-6">
            <span className="w-6 h-[1.5px] bg-[#f5e8cc] inline-block" />Our Portfolio
          </div>
          <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] font-light text-white leading-[1.0] mb-6">
            Real Projects.<br /><em className="text-[#f5e8cc]">Real Craftsmanship.</em>
          </h1>
          <p className="text-[1rem] font-light leading-[1.88] text-white/70 max-w-2xl">
            Every project below was designed and built by our team. No AI-generated images. No stock photography. This is our work, our art.
          </p>
        </div>
      </section>
      <section className="bg-[#faf8f4] py-6">
        <div className="max-w-7xl mx-auto px-10 max-lg:px-6">
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
            {projects.map((p, i) => (
              <div key={p.id} className={`relative h-[420px] overflow-hidden group rounded-sm rv ${i > 0 ? `d${Math.min(i,4)}` : ''}`}>
                <div className="absolute inset-0 bg-cover bg-center bg-[#e8e0d4] transition-transform duration-700 group-hover:scale-[1.05]" style={{ backgroundImage: `url('${p.image}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2a2520]/88 via-[#2a2520]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
                  <div className="text-[.6rem] font-semibold tracking-[.2em] uppercase text-[#f5e8cc] mb-2">{p.location}</div>
                  <div className="font-serif text-[1.7rem] font-light text-white leading-[1.15] mb-3">{p.name}</div>
                  <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    {p.tags.map(t => <span key={t} className="text-[.54rem] font-semibold tracking-[.1em] uppercase text-white/65 border border-white/20 px-2.5 py-1 rounded-sm">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
