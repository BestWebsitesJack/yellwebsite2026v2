import { useEffect } from 'react'

export default function Contact() {
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
            <span className="w-6 h-[1.5px] bg-[#f5e8cc] inline-block" />Get In Touch
          </div>
          <h1 className="font-serif text-[clamp(3rem,6vw,5rem)] font-light text-white leading-[1.0] mb-4">
            Let's Build Something<br /><em className="text-[#f5e8cc]">Extraordinary</em>
          </h1>
          <p className="text-[1rem] font-light text-white/70 max-w-xl">Free on-site consultations for residential and commercial clients across Greater Cincinnati and Northern Kentucky.</p>
        </div>
      </section>
      <div className="grid grid-cols-2 max-lg:grid-cols-1">
        <div className="bg-[#f2ede4] flex flex-col justify-center">
          <div className="max-w-md mx-auto px-16 py-20 max-lg:px-8 max-lg:py-14">
            <div className="eyebrow rv">Contact Info</div>
            <h2 className="font-serif text-[2.4rem] font-light text-[#2d4a26] mb-10 rv">Reach Out <em className="text-[#b8832a]">Directly</em></h2>
            {[['Phone','(513) 498-6879','tel:5134986879'],['Email','bweckel@yelandscaping.com','mailto:bweckel@yelandscaping.com'],['Instagram','@youngentrepreneur_landscaping','https://www.instagram.com/youngentrepreneur_landscaping/'],['Address','4178 Round Bottom Rd, Newtown OH 45244','']].map(([l,v,href]) => (
              <div key={l} className="flex items-start gap-5 mb-7 rv">
                <span className="text-[.58rem] font-semibold tracking-[.16em] uppercase text-[#2d4a26] min-w-[64px] mt-1">{l}</span>
                {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-[.9rem] font-light text-[#2a2520] no-underline hover:text-[#2d4a26] transition-colors">{v}</a> : <span className="text-[.9rem] font-light text-[#2a2520]">{v}</span>}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#2d4a26] flex flex-col justify-center">
          <div className="max-w-md mx-auto px-16 py-20 max-lg:px-8 max-lg:py-14">
            <h2 className="font-serif text-[2.4rem] font-light text-white mb-2">Free <em className="text-[#f5e8cc]">Consultation</em></h2>
            <p className="text-[.85rem] font-light text-white/60 mb-8">Tell us about your project and we will be in touch within 24 hours.</p>
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-5 py-4 text-[.88rem] rounded-sm focus:outline-none focus:border-[#f5e8cc] transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-5 py-4 text-[.88rem] rounded-sm focus:outline-none focus:border-[#f5e8cc] transition-colors" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-5 py-4 text-[.88rem] rounded-sm focus:outline-none focus:border-[#f5e8cc] transition-colors" />
              <select className="w-full bg-white/10 border border-white/20 text-white/60 px-5 py-4 text-[.88rem] rounded-sm focus:outline-none focus:border-[#f5e8cc] transition-colors">
                <option value="">Select a Service</option>
                <option>Design | Build</option>
                <option>Hardscape &amp; Masonry</option>
                <option>Lawn &amp; Landscape</option>
                <option>Carpentry &amp; Lighting</option>
                <option>Water Management</option>
                <option>Landscape Maintenance</option>
              </select>
              <textarea placeholder="Tell us about your project..." rows={5} className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-5 py-4 text-[.88rem] rounded-sm focus:outline-none focus:border-[#f5e8cc] transition-colors resize-none" />
              <button className="w-full text-[.74rem] font-semibold tracking-[.14em] uppercase text-[#2d4a26] bg-white py-4 rounded-sm transition-all hover:bg-[#f5e8cc] mt-2 cursor-pointer">
                Request a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
