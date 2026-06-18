import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Services() {
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
            <span className="w-6 h-[1.5px] bg-[#f5e8cc] inline-block" />Our Services
          </div>
          <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] font-light text-white leading-[1.0] mb-6">
            Cincinnati Landscaping<br /><em className="text-[#f5e8cc]">Services</em>
          </h1>
          <p className="text-[1rem] font-light leading-[1.88] text-white/70 max-w-2xl">
            From custom landscape design and hardscaping to lawn care and maintenance, six core services for residential and commercial clients across Greater Cincinnati and Northern Kentucky.
          </p>
        </div>
      </section>
      <section className="bg-[#faf8f4] py-6">
        <div className="max-w-7xl mx-auto px-10 max-lg:px-6">
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
            {services.map((s, i) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className={`p-10 bg-white no-underline block group hover:bg-[#e8f0e4] transition-colors relative rounded-sm rv ${i > 0 ? `d${Math.min(i,4)}` : ''}`}>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#2d4a26] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-b-sm" />
                <div className="font-serif text-[3.5rem] font-light text-[#2d4a26]/10 leading-none mb-5 group-hover:text-[#2d4a26]/20 transition-colors">{s.number}</div>
                <h2 className="font-serif text-[1.5rem] font-light text-[#2d4a26] mb-3 leading-[1.25]">{s.name}</h2>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {s.keywords.map(k => <span key={k} className="text-[.56rem] font-semibold tracking-[.1em] uppercase text-[#7a9468] border border-[#7a9468]/25 px-2.5 py-1 rounded-sm">{k}</span>)}
                </div>
                <p className="text-[.84rem] font-light leading-[1.82] text-[#3d362e] mb-5">{s.description}</p>
                <div className="text-[.62rem] font-semibold tracking-[.16em] uppercase text-[#b8832a] flex items-center gap-2 group-hover:gap-4 transition-all">Explore Service &rarr;</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
