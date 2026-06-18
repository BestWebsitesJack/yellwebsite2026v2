import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const BASE = 'https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/'

export default function About() {
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
            <span className="w-6 h-[1.5px] bg-[#f5e8cc] inline-block" />Our Story
          </div>
          <h1 className="font-serif text-[clamp(3rem,6vw,5.5rem)] font-light text-white leading-[1.0] mb-6">
            About Young<br /><em className="text-[#f5e8cc]">Entrepreneur Landscaping</em>
          </h1>
          <p className="text-[1rem] font-light leading-[1.88] text-white/70 max-w-2xl">
            Cincinnati's premier custom landscaping company since 2010, building dream outdoor spaces for residential and commercial clients across Greater Cincinnati and Northern Kentucky.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-2 min-h-[580px] max-lg:grid-cols-1">
        <div className="relative overflow-hidden max-lg:h-72 group">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]" style={{ backgroundImage: `url('${BASE}dae8cfc5-81e7-4f0e-8e8e-bd36f03722e5/thumbnail_IMG_4752.jpg')` }} />
        </div>
        <div className="bg-[#faf8f4] flex flex-col justify-center">
          <div className="max-w-lg mx-auto px-16 py-20 max-lg:px-8 max-lg:py-14">
            <div className="eyebrow rv">Who We Are</div>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.2rem)] font-light text-[#2d4a26] mb-7 rv">If you can <em className="text-[#b8832a]">dream it,</em> we can build it</h2>
            <p className="text-[.92rem] font-light leading-[1.92] text-[#3d362e] mb-5 rv">Since 2010, Young Entrepreneur Landscaping has been the premier choice for discerning homeowners and commercial clients across Greater Cincinnati and Northern Kentucky seeking elevated landscape design and construction.</p>
            <p className="text-[.92rem] font-light leading-[1.92] text-[#3d362e] mb-5 rv">Our team specializes in custom landscaping, hardscaping, and outdoor living solutions that seamlessly blend architectural sophistication with the natural beauty of your surroundings.</p>
            <p className="text-[.92rem] font-light leading-[1.92] text-[#3d362e] rv">Each project is a work of art approached with meticulous attention to detail. Barrett or Nathan personally oversees every single build from start to finish.</p>
          </div>
        </div>
      </div>
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-10 max-lg:px-6">
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
            {[
              { n: '15+', l: 'Years in Cincinnati', d: 'Serving Greater Cincinnati and Northern Kentucky with premium landscape design and construction since 2010.' },
              { n: '500+', l: 'Projects Completed', d: 'Every project completed in-house by our experienced team, residential and commercial, big and small.' },
              { n: '100%', l: 'Real Photography', d: 'Every photo on this site is a real project by our team. No AI images. No stock photography. Our work. Our art.' },
            ].map((s, i) => (
              <div key={s.n} className={`bg-[#faf8f4] p-12 rounded-sm rv ${i > 0 ? `d${i}` : ''}`}>
                <div className="font-serif text-[3.5rem] font-light text-[#2d4a26] leading-none mb-3">{s.n}</div>
                <div className="text-[.68rem] font-semibold tracking-[.16em] uppercase text-[#b8832a] mb-4">{s.l}</div>
                <p className="text-[.85rem] font-light leading-[1.82] text-[#3d362e]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-[#2d4a26] py-24 text-center">
        <div className="max-w-2xl mx-auto px-10 max-lg:px-6">
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-white mb-4">Ready to <em className="text-[#f5e8cc]">Work Together?</em></h2>
          <p className="text-[.9rem] font-light text-white/65 mb-10">Contact us for a free on-site consultation across Greater Cincinnati and Northern Kentucky.</p>
          <Link to="/contact" className="inline-block text-[.72rem] font-semibold tracking-[.15em] uppercase text-[#2d4a26] bg-white px-12 py-4 no-underline rounded-sm hover:bg-[#f5e8cc] transition-colors">Get a Free Quote</Link>
        </div>
      </div>
    </>
  )
}
