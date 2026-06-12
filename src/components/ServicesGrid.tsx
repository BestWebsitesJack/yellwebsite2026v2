import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function ServicesGrid() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-10 max-lg:px-6">
        <div className="flex justify-between items-end mb-16 max-lg:flex-col max-lg:gap-4 max-lg:items-start">
          <div>
            <div className="eyebrow rv">What We Do</div>
            <h2 className="font-serif text-[clamp(2.4rem,4vw,3.8rem)] font-light text-[#2d4a26] leading-[1.1] rv">
              Our <em className="text-[#b8832a]">Services</em>
            </h2>
          </div>
          <Link to="/contact" className="text-[.72rem] font-medium tracking-[.12em] uppercase text-[#6b6258] no-underline flex items-center gap-2 hover:gap-4 hover:text-[#2d4a26] transition-all rv">
            Get a Quote &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
          {services.map((s, i) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className={`p-10 bg-[#faf8f4] relative overflow-hidden no-underline block transition-all duration-300 group hover:bg-[#e8f0e4] rounded-sm rv ${i > 0 ? `d${Math.min(i, 4)}` : ''}`}>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#2d4a26] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-b-sm" />
              <div className="font-serif text-[3.5rem] font-light text-[#2d4a26]/10 leading-none mb-5 transition-colors group-hover:text-[#2d4a26]/20">{s.number}</div>
              <h3 className="font-serif text-[1.5rem] font-light text-[#2d4a26] mb-3 leading-[1.25]">{s.name}</h3>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {s.keywords.map(k => <span key={k} className="text-[.56rem] font-semibold tracking-[.1em] uppercase text-[#7a9468] border border-[#7a9468]/25 px-2.5 py-1 rounded-sm">{k}</span>)}
              </div>
              <p className="text-[.84rem] font-light leading-[1.82] text-[#6b6258] mb-5">{s.description}</p>
              <div className="text-[.62rem] font-semibold tracking-[.16em] uppercase text-[#b8832a] flex items-center gap-2 group-hover:gap-4 transition-all">
                Explore Service &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
