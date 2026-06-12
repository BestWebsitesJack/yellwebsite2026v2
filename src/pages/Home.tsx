import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectCarousel from '../components/ProjectCarousel'
import ServicesGrid from '../components/ServicesGrid'
import AuthStrip from '../components/AuthStrip'
import Reviews from '../components/Reviews'

const BASE = 'https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/'

const stats = [
  { n: '15+', l: 'Years Serving Cincinnati' },
  { n: '500+', l: 'Projects Completed' },
  { n: '6', l: 'Core Services' },
  { n: 'OH & KY', l: 'Two States Served' },
]

const photoGrid = [
  { img: BASE + 'IMG_5259.jpg', label: 'Montgomery Pavilion' },
  { img: BASE + 'd8294968-4581-42bf-bae3-26aaa1bcc2d8/thumbnail_IMG_4272.jpg', label: 'Mariemont Porch' },
  { img: BASE + '6b7b2c23-ee42-4a82-928d-ff5ef169b647/IMG_1319.JPG', label: 'Anderson Township Patio' },
  { img: BASE + '0ef20324-954c-4704-94df-52f466a3f375/IMG_2869.jpg', label: 'Hyde Park Grand Entrance' },
  { img: BASE + 'fce6abdd-c9a0-476a-b4d6-fa01dfdfe149/thumbnail_IMG_1333.jpg', label: 'Landscape Lighting' },
]

const cincyAreas = ['Hyde Park','Mariemont','Indian Hill','Anderson Township','Blue Ash','Montgomery','Mason','Madeira','Mt. Lookout','Symmes Township','Oakley','West Chester','Milford','Terrace Park','Newtown']
const nkyAreas = ['Covington KY','Florence KY','Fort Thomas KY','Newport KY','Highland Heights KY','Cold Spring KY','Bellevue KY','Union KY','Villa Hills KY','Erlanger KY','Fort Mitchell KY','Alexandria KY']

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') }), { threshold: 0.1 })
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[760px] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center hero-zoom" style={{ backgroundImage: `url('${BASE}dae8cfc5-81e7-4f0e-8e8e-bd36f03722e5/thumbnail_IMG_4752.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/90" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-10 pb-28 max-lg:px-6 max-lg:pb-20">
          <div className="fade-up-1 flex items-center gap-3 text-[.65rem] font-semibold tracking-[.25em] uppercase text-[#f5e8cc] mb-8">
            <span className="w-8 h-[1.5px] bg-[#f5e8cc] inline-block" />
            Cincinnati's Premier Landscape Company
          </div>
          <h1 className="fade-up-2 font-serif text-[clamp(3.8rem,8vw,8rem)] font-light leading-[.95] text-white mb-8 max-w-3xl">
            Design.<br /><em className="text-[#f5e8cc]">Build.</em><br />Maintain.
          </h1>
          <p className="fade-up-3 text-[1rem] font-light leading-[1.85] text-white/80 max-w-[520px] mb-12">
            Custom landscape design, hardscaping and outdoor living crafted as art for residential and commercial properties across Greater Cincinnati and Northern Kentucky since 2010.
          </p>
          <div className="fade-up-4 flex items-center gap-6 max-sm:flex-col max-sm:items-start">
            <Link to="/contact" className="relative overflow-hidden text-[.75rem] font-semibold tracking-[.15em] uppercase text-[#2d4a26] bg-white px-10 py-4 no-underline rounded-sm group">
              <span className="absolute inset-0 bg-[#f5e8cc] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              <span className="relative z-10">Get a Free Quote</span>
            </Link>
            <Link to="/showcase" className="text-[.75rem] font-medium tracking-[.15em] uppercase text-white/90 no-underline flex items-center gap-2 border border-white/30 px-8 py-4 rounded-sm hover:border-white/70 hover:gap-4 transition-all">
              View Our Work &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-[#2d4a26] py-4 overflow-hidden whitespace-nowrap">
        <div className="marquee-track">
          {['Paver Patios','Retaining Walls','Outdoor Kitchens','Landscape Design','Hardscaping','Pergolas & Decks','Outdoor Lighting','Lawn Care Cincinnati','French Drains','Fire Pits','Pool Decks','Northern Kentucky',
            'Paver Patios','Retaining Walls','Outdoor Kitchens','Landscape Design','Hardscaping','Pergolas & Decks','Outdoor Lighting','Lawn Care Cincinnati','French Drains','Fire Pits','Pool Decks','Northern Kentucky'].map((item, i) => (
            <span key={i} className="text-[.65rem] font-semibold tracking-[.2em] uppercase text-white/85 px-8">
              {item} <span className="text-white/25 mx-1">&#x2726;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b-2 border-[#e8e0d4]">
        <div className="max-w-7xl mx-auto grid grid-cols-4 max-sm:grid-cols-2">
          {stats.map((s, i) => (
            <div key={s.n} className={`py-12 px-10 border-r border-[#e8e0d4] last:border-r-0 transition-colors hover:bg-[#e8f0e4] rv ${i > 0 ? `d${i}` : ''} max-lg:px-6`}>
              <div className="font-serif text-[3.2rem] font-light text-[#2d4a26] leading-none mb-2">{s.n}</div>
              <div className="text-[.65rem] font-medium tracking-[.16em] uppercase text-[#6b6258]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div className="grid grid-cols-2 min-h-[660px] max-lg:grid-cols-1">
        <div className="relative overflow-hidden max-lg:h-72 group">
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]" style={{ backgroundImage: `url('${BASE}403b6a5a-d4e3-4d88-935f-07d7ea87f68e/IMG_1455.JPG')` }} />
          <div className="absolute bottom-0 right-0 bg-[#2d4a26] p-8 text-center">
            <div className="font-serif text-[2.8rem] font-light text-white leading-none">2010</div>
            <div className="text-[.56rem] font-semibold tracking-[.18em] uppercase text-white/60 mt-1">Est. Cincinnati</div>
          </div>
        </div>
        <div className="bg-[#faf8f4] flex flex-col justify-center">
          <div className="max-w-lg mx-auto px-16 py-20 max-lg:px-8 max-lg:py-14">
            <div className="eyebrow rv">Our Story</div>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-light text-[#2d4a26] leading-[1.15] mb-7 rv">
              If you can <em className="text-[#b8832a]">dream it,</em> we can build it
            </h2>
            <p className="text-[.92rem] font-light leading-[1.92] text-[#6b6258] mb-5 rv">
              Since 2010, Young Entrepreneur Landscaping has been the premier choice for residential and commercial clients across Greater Cincinnati and Northern Kentucky seeking elevated landscape design and construction.
            </p>
            <p className="text-[.92rem] font-light leading-[1.92] text-[#6b6258] mb-7 rv">
              Each project is a work of art tailored entirely to your vision, with Barrett or Nathan personally overseeing every build from start to finish.
            </p>
            <div className="inline-flex items-center gap-3 border-[1.5px] border-[#b8832a]/30 bg-[#f5e8cc] px-5 py-3.5 text-[.67rem] tracking-[.1em] uppercase text-[#b8832a] rounded-sm rv">
              Every photo on this site is a real project. Our work. Our art. No AI. No stock imagery.
            </div>
          </div>
        </div>
      </div>

      <ProjectCarousel />
      <ServicesGrid />
      <AuthStrip />

      {/* Feature */}
      <div className="relative h-[78vh] min-h-[580px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${BASE}bdd88e9d-fe9e-4762-b36f-7cf4395ddcc7/IMG_4909.jpg')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a2520]/90 via-[#2a2520]/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-10 max-lg:px-6">
            <div className="max-w-[560px]">
              <div className="flex items-center gap-3 text-[.62rem] font-semibold tracking-[.24em] uppercase text-[#f5e8cc] mb-5">
                <span className="w-6 h-[1.5px] bg-[#f5e8cc] inline-block" />Featured Project
              </div>
              <h2 className="font-serif text-[clamp(2.4rem,4.8vw,4rem)] font-light text-white leading-[1.1] mb-5">
                Montgomery<br /><em className="text-[#f5e8cc]">Entertainment Pavilion</em>
              </h2>
              <p className="text-[.9rem] font-light leading-[1.9] text-white/75 mb-8">
                A blank-slate backyard transformed into an epic outdoor entertainment space. Custom paver patio, natural stone seating wall, outdoor kitchen with gas grill and pellet smoker, granite counters, custom cedar pavilion, fire pit, and accent lighting throughout.
              </p>
              <div className="flex gap-10 mb-8 max-sm:flex-col max-sm:gap-4">
                {[['Location','Montgomery, OH'],['Services','Hardscape, Carpentry, Lighting'],['Materials','Paver, Stone, Cedar, Granite']].map(([l,v]) => (
                  <div key={l} className="flex flex-col gap-1.5">
                    <span className="text-[.56rem] font-semibold tracking-[.16em] uppercase text-[#f5e8cc]">{l}</span>
                    <span className="text-[.85rem] font-light text-white">{v}</span>
                  </div>
                ))}
              </div>
              <Link to="/showcase" className="relative overflow-hidden inline-block text-[.72rem] font-semibold tracking-[.15em] uppercase text-[#2d4a26] bg-white px-10 py-4 no-underline rounded-sm group">
                <span className="absolute inset-0 bg-[#f5e8cc] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                <span className="relative z-10">View Full Project</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <section className="bg-[#faf8f4] py-28">
        <div className="max-w-7xl mx-auto px-10 max-lg:px-6">
          <div className="eyebrow rv">How It Works</div>
          <h2 className="font-serif text-[clamp(2.4rem,4vw,3.8rem)] font-light text-[#2d4a26] leading-[1.1] mb-20 rv">
            Our <em className="text-[#b8832a]">Design and Build Process</em>
          </h2>
          <div className="grid grid-cols-4 gap-8 relative max-lg:grid-cols-2 max-lg:gap-12">
            <div className="absolute top-6 left-[12%] right-[12%] h-[1.5px] bg-[#e8e0d4] max-lg:hidden" />
            {[
              ['01','Consultation','On-site meeting at your Cincinnati or Northern Kentucky property to define goals, explore options, and understand your vision.'],
              ['02','Design','Scaled 2-D CAD plans with 3-D elevations, detailed estimates, and reference photos revised until your vision is perfectly captured.'],
              ['03','Schedule','After design approval we schedule your project and secure a deposit with a clear timeline and regular updates.'],
              ['04','Build','Barrett or Nathan personally oversees every project. All work performed in-house with minimal disruption, on time and within budget.'],
            ].map(([num, title, desc], i) => (
              <div key={num} className={`rv ${i > 0 ? `d${i}` : ''}`}>
                <div className="w-12 h-12 border-2 border-[#e8e0d4] rounded-full flex items-center justify-center mb-8 bg-[#faf8f4] hover:border-[#2d4a26] transition-colors">
                  <span className="font-serif text-[1.05rem] font-light text-[#2d4a26]">{num}</span>
                </div>
                <h3 className="font-serif text-[1.35rem] font-light text-[#2d4a26] mb-3">{title}</h3>
                <p className="text-[.84rem] font-light leading-[1.82] text-[#6b6258]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo grid */}
      <div className="grid gap-1 max-lg:grid-cols-2" style={{ gridTemplateColumns: 'repeat(4,1fr)', gridTemplateRows: '280px 280px' }}>
        {photoGrid.map((p, i) => (
          <div key={i} className="relative overflow-hidden bg-[#e8e0d4] group" style={{ gridColumn: i === 0 ? 'span 2' : i === 3 ? 'span 2' : 'span 1', gridRow: i === 0 ? 'span 2' : 'span 1' }}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.06]" style={{ backgroundImage: `url('${p.img}')` }} />
            <div className="absolute inset-0 bg-[#2a2520]/0 group-hover:bg-[#2a2520]/35 transition-all duration-400" />
            <div className="absolute bottom-5 left-5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
              <span className="text-[.62rem] font-semibold tracking-[.14em] uppercase text-white bg-[#2a2520]/65 px-3 py-1.5 rounded-sm">{p.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Areas */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-10 max-lg:px-6">
          <div className="eyebrow rv">Where We Work</div>
          <h2 className="font-serif text-[clamp(2.4rem,4vw,3.8rem)] font-light text-[#2d4a26] leading-[1.1] mb-14 rv">
            Proudly Serving <em className="text-[#b8832a]">Cincinnati and Northern Kentucky</em>
          </h2>
          <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
            {[
              { region: 'Greater Cincinnati, Ohio', title: 'Cincinnati and Surrounding Communities', areas: cincyAreas },
              { region: 'Northern Kentucky', title: 'Across the River and Beyond', areas: nkyAreas },
            ].map((panel, i) => (
              <div key={panel.region} className={`bg-[#faf8f4] p-12 border-[1.5px] border-[#e8e0d4] rounded-sm transition-all hover:border-[#2d4a26] hover:bg-[#e8f0e4] rv ${i > 0 ? 'd1' : ''} max-lg:p-8`}>
                <div className="flex items-center gap-3 text-[.62rem] font-semibold tracking-[.22em] uppercase text-[#b8832a] mb-4">
                  <span className="w-5 h-[1.5px] bg-[#b8832a] inline-block" />{panel.region}
                </div>
                <h3 className="font-serif text-[1.9rem] font-light text-[#2d4a26] mb-6 leading-[1.2]">{panel.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {panel.areas.map(a => (
                    <span key={a} className="text-[.7rem] text-[#6b6258] bg-white px-4 py-1.5 border-[1.5px] border-[#e8e0d4] rounded-full transition-all hover:border-[#2d4a26] hover:text-[#2d4a26] hover:bg-[#e8f0e4] cursor-default">{a}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      {/* Testimonial */}
      <div className="bg-[#2d4a26] py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-10 text-center max-lg:px-6">
          <p className="font-serif text-[clamp(1.8rem,3.2vw,2.9rem)] font-light italic leading-[1.62] text-white mb-10 rv">
            Every outdoor space we create is a reflection of our client's vision, built with enduring craftsmanship and the kind of attention to detail that turns a backyard into a legacy.
          </p>
          <div className="text-[.68rem] font-semibold tracking-[.22em] uppercase text-white/50 rv d1">
            Barrett Weckel, Founder, Young Entrepreneur Landscaping LLC
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="grid grid-cols-2 max-lg:grid-cols-1">
        <div className="bg-[#f2ede4] flex flex-col justify-center">
          <div className="max-w-lg mx-auto px-16 py-28 max-lg:px-8 max-lg:py-16">
            <div className="eyebrow">Get In Touch</div>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.4rem)] font-light text-[#2d4a26] leading-[1.15] mb-6">
              Let's Build <em className="text-[#b8832a]">Something Beautiful</em>
            </h2>
            <p className="text-[.92rem] font-light leading-[1.92] text-[#6b6258] mb-10">
              Ready to transform your outdoor space? Contact us for a free on-site consultation, no obligation, just great ideas for your property.
            </p>
            {[['Phone','(513) 498-6879','tel:5134986879'],['Email','bweckel@yelandscaping.com','mailto:bweckel@yelandscaping.com'],['Instagram','@youngentrepreneur_landscaping','https://www.instagram.com/youngentrepreneur_landscaping/']].map(([l,v,href]) => (
              <div key={l} className="flex items-center gap-5 mb-5">
                <span className="text-[.58rem] font-semibold tracking-[.16em] uppercase text-[#2d4a26] min-w-[72px]">{l}</span>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-[.84rem] text-[#2a2520] no-underline hover:text-[#2d4a26] transition-colors">{v}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#2d4a26] flex flex-col justify-center">
          <div className="max-w-lg mx-auto px-16 py-28 max-lg:px-8 max-lg:py-16">
            <h2 className="font-serif text-[2.9rem] font-light text-white leading-[1.12] mb-4">
              Free <em className="text-[#f5e8cc]">Consultation</em>
            </h2>
            <p className="text-[.9rem] font-light leading-[1.88] text-white/65 mb-8">
              Tell us about your project and we will schedule a free on-site visit. Serving Greater Cincinnati and Northern Kentucky since 2010.
            </p>
            <div className="flex flex-col gap-4">
              <input type="text" placeholder="Your Name" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-5 py-4 text-[.85rem] rounded-sm focus:outline-none focus:border-[#f5e8cc] transition-colors" />
              <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-5 py-4 text-[.85rem] rounded-sm focus:outline-none focus:border-[#f5e8cc] transition-colors" />
              <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-5 py-4 text-[.85rem] rounded-sm focus:outline-none focus:border-[#f5e8cc] transition-colors" />
              <textarea placeholder="Tell us about your project..." rows={4} className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 px-5 py-4 text-[.85rem] rounded-sm focus:outline-none focus:border-[#f5e8cc] transition-colors resize-none" />
              <button className="w-full text-[.72rem] font-semibold tracking-[.15em] uppercase text-[#2d4a26] bg-white py-4 rounded-sm transition-all hover:bg-[#f5e8cc] mt-2 cursor-pointer">
                Request a Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
