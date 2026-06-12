import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { services } from '../data/services'
import AuthStrip from '../components/AuthStrip'

const faqs: Record<string, { q: string; a: string }[]> = {
  'design-build': [
    { q: 'What is a landscape design and build company?', a: 'A design-build company handles both the design and construction of your outdoor space. YEL manages everything from initial consultation and CAD design to full construction under one roof.' },
    { q: 'Do I need a design before starting my landscaping project?', a: 'Not always. For smaller projects we can work directly from a consultation. For larger transformations we recommend a scaled CAD design with 3-D elevations so you can visualize the finished space first.' },
    { q: 'How long does a landscape project take in Cincinnati?', a: 'Timeline varies by scope. A paver patio may take 1 to 2 weeks while a full outdoor living renovation can take 4 to 8 weeks. We provide a clear schedule after the design approval phase.' },
    { q: 'Do you serve Northern Kentucky?', a: 'Yes, we serve all of Greater Cincinnati and Northern Kentucky including Covington, Florence, Fort Thomas, Newport, Highland Heights, Cold Spring, Union, and surrounding areas.' },
  ],
  'hardscape-masonry': [
    { q: 'How much does a paver patio cost in Cincinnati?', a: 'Paver patio costs in Cincinnati typically range from $8,000 to $30,000 or more depending on size, materials, and design complexity. We provide free detailed estimates for every project.' },
    { q: 'What hardscaping materials do you work with?', a: 'We work with natural stone, brick, concrete pavers, flagstone, stamped concrete, and boulders, helping you choose the right material for your budget, style, and property.' },
    { q: 'Do you build retaining walls in Cincinnati?', a: 'Yes, we design and install retaining walls, garden walls, and boulder walls for residential and commercial properties throughout Cincinnati and Northern Kentucky.' },
    { q: 'Can you build an outdoor kitchen or fireplace?', a: 'Absolutely. We specialize in custom outdoor kitchens, fireplaces, fire pits, and pizza ovens as part of our hardscape and masonry services.' },
  ],
  'lawn-landscape': [
    { q: 'Do you offer lawn care in Northern Kentucky?', a: 'Yes, we provide lawn care, maintenance, and landscape services throughout Northern Kentucky including Covington, Florence, Fort Thomas, and surrounding communities.' },
    { q: 'What lawn care services does YEL offer?', a: 'We offer full lawn and landscape services including mowing, fertilization, mulching, planting beds, garden design, sod installation, seasonal cleanups, and ongoing maintenance programs.' },
    { q: 'Do you do garden design in Cincinnati?', a: 'Yes, garden design is one of our specialties. We create custom planting plans that complement your hardscape and home using native and low-maintenance plants suited to the Cincinnati climate.' },
  ],
  'carpentry-lighting': [
    { q: 'Do you install landscape lighting in Cincinnati?', a: 'Yes, we design and install low voltage landscape lighting systems for residential and commercial properties throughout Cincinnati and Northern Kentucky.' },
    { q: 'Can you build a pergola or deck in Cincinnati?', a: 'Yes, we build custom pergolas, arbors, decks, and outdoor structures as part of our carpentry services, often combined with lighting and landscape design.' },
    { q: 'What type of outdoor lighting do you install?', a: 'We install professional low-voltage landscape lighting systems including path lights, uplights, spotlights, step lights, and accent lighting designed to enhance your property day and night.' },
  ],
  'water-management': [
    { q: 'Do you install French drains in Cincinnati?', a: 'Yes, we install French drains, yard drainage systems, and grading solutions to solve water runoff and drainage problems for Cincinnati and Northern Kentucky homeowners.' },
    { q: 'How do I fix a muddy or flooded backyard?', a: 'The most common solutions are French drain installation, regrading, dry creek beds, or a combination. We assess your property and recommend the right drainage solution.' },
    { q: 'Do you handle erosion control?', a: 'Yes, we provide erosion control solutions including retaining walls, regrading, ground cover planting, and drainage systems to protect your property.' },
  ],
  'landscape-maintenance': [
    { q: 'Do you offer year-round landscape maintenance?', a: 'Yes, we offer seasonal and year-round landscape maintenance programs for both residential and commercial properties in Cincinnati and Northern Kentucky.' },
    { q: 'Does YEL offer snow removal in Cincinnati?', a: 'Yes, we offer residential snow removal services in the Greater Cincinnati area. Contact us to discuss seasonal snow management for your property.' },
    { q: 'Do you offer commercial landscape maintenance?', a: 'Yes, we maintain commercial properties including office parks, HOAs, and commercial buildings throughout Greater Cincinnati and Northern Kentucky.' },
  ],
}

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = services.find(s => s.slug === slug)

  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') }), { threshold: 0.1 })
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [slug])

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center pt-32">
      <div className="text-center">
        <h1 className="font-serif text-4xl text-[#2d4a26] mb-4">Service not found</h1>
        <Link to="/services" className="text-[#b8832a] no-underline">Back to Services</Link>
      </div>
    </div>
  )

  const pageFaqs = faqs[service.slug] || []

  return (
    <>
      <section className="bg-[#2d4a26] pt-44 pb-28 max-lg:pt-36 max-lg:pb-20">
        <div className="max-w-7xl mx-auto px-10 max-lg:px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[.62rem] font-semibold tracking-[.25em] uppercase text-[#f5e8cc] mb-6">
              <span className="w-6 h-[1.5px] bg-[#f5e8cc] inline-block" />Our Services
            </div>
            <h1 className="font-serif text-[clamp(2.8rem,5.5vw,5rem)] font-light text-white leading-[1.05] mb-6">{service.h1}</h1>
            <p className="text-[1rem] font-light leading-[1.88] text-white/70 mb-10">{service.description}</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {service.keywords.map(k => (
                <span key={k} className="text-[.64rem] font-semibold tracking-[.12em] uppercase text-[#f5e8cc] border border-[#f5e8cc]/30 px-3.5 py-1.5 rounded-sm">{k}</span>
              ))}
            </div>
            <Link to="/contact" className="inline-block text-[.72rem] font-semibold tracking-[.15em] uppercase text-[#2d4a26] bg-white px-10 py-4 no-underline rounded-sm hover:bg-[#f5e8cc] transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      <AuthStrip />

      <section className="bg-[#faf8f4] py-28">
        <div className="max-w-7xl mx-auto px-10 max-lg:px-6">
          <div className="max-w-4xl">
            <div className="eyebrow rv">About This Service</div>
            <h2 className="font-serif text-[clamp(2rem,3.8vw,3rem)] font-light text-[#2d4a26] mb-10 rv">
              {service.name} in <em className="text-[#b8832a]">Cincinnati and Northern Kentucky</em>
            </h2>
            <div className="grid grid-cols-2 gap-14 max-lg:grid-cols-1">
              <div>
                <p className="text-[.92rem] font-light leading-[1.92] text-[#6b6258] mb-6 rv">
                  Young Entrepreneur Landscaping has been providing professional {service.name.toLowerCase()} services across Greater Cincinnati and Northern Kentucky since 2010. Every project is handled in-house with Barrett or Nathan personally overseeing the work from start to finish.
                </p>
                <p className="text-[.92rem] font-light leading-[1.92] text-[#6b6258] rv">
                  We serve residential and commercial clients throughout Hyde Park, Mariemont, Indian Hill, Anderson Township, Montgomery, Blue Ash, Mason, Covington KY, Florence KY, Fort Thomas KY, and all surrounding communities.
                </p>
              </div>
              <div className="bg-[#e8f0e4] p-10 rounded-sm rv d1">
                <h3 className="font-serif text-[1.5rem] font-light text-[#2d4a26] mb-6">Why Choose YEL</h3>
                {['Serving Cincinnati since 2010','All work performed in-house','Barrett or Nathan on every project','Residential and commercial','Serving Cincinnati and Northern KY','Free on-site consultation'].map(item => (
                  <div key={item} className="flex items-center gap-3 mb-4 text-[.85rem] text-[#6b6258]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d4a26] flex-shrink-0" />{item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {pageFaqs.length > 0 && (
        <section className="bg-white py-28">
          <div className="max-w-7xl mx-auto px-10 max-lg:px-6">
            <div className="max-w-3xl">
              <div className="eyebrow rv">FAQ</div>
              <h2 className="font-serif text-[clamp(2rem,3.8vw,3rem)] font-light text-[#2d4a26] mb-12 rv">
                Common Questions About <em className="text-[#b8832a]">{service.name}</em>
              </h2>
              <div className="flex flex-col gap-2">
                {pageFaqs.map((faq, i) => (
                  <details key={i} className={`bg-[#faf8f4] border border-[#e8e0d4] rounded-sm group rv ${i > 0 ? `d${Math.min(i,4)}` : ''}`}>
                    <summary className="px-8 py-6 text-[.9rem] font-medium text-[#2d4a26] cursor-pointer list-none flex justify-between items-center hover:bg-[#e8f0e4] transition-colors rounded-sm">
                      {faq.q}
                      <span className="text-[#b8832a] text-xl ml-4 group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                    </summary>
                    <div className="px-8 pb-6 pt-2 text-[.87rem] font-light leading-[1.88] text-[#6b6258]">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="bg-[#2d4a26] py-24 text-center">
        <div className="max-w-2xl mx-auto px-10 max-lg:px-6">
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-light text-white mb-4">
            Ready to Start Your <em className="text-[#f5e8cc]">Cincinnati Project?</em>
          </h2>
          <p className="text-[.9rem] font-light text-white/65 mb-10">
            Contact us for a free on-site consultation. We serve residential and commercial clients throughout Greater Cincinnati and Northern Kentucky.
          </p>
          <Link to="/contact" className="inline-block text-[.72rem] font-semibold tracking-[.15em] uppercase text-[#2d4a26] bg-white px-12 py-4 no-underline rounded-sm hover:bg-[#f5e8cc] transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </div>

      <section className="bg-[#faf8f4] py-24">
        <div className="max-w-7xl mx-auto px-10 max-lg:px-6">
          <div className="eyebrow rv">Explore More</div>
          <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.8rem)] font-light text-[#2d4a26] mb-12 rv">Other Services</h2>
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-1">
            {services.filter(s => s.slug !== slug).slice(0, 3).map((s, i) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className={`p-10 bg-white no-underline block group hover:bg-[#e8f0e4] transition-colors rounded-sm rv ${i > 0 ? `d${i}` : ''}`}>
                <div className="font-serif text-[2.5rem] font-light text-[#2d4a26]/10 mb-4 group-hover:text-[#2d4a26]/20 transition-colors">{s.number}</div>
                <h3 className="font-serif text-[1.35rem] font-light text-[#2d4a26] mb-3">{s.name}</h3>
                <p className="text-[.82rem] font-light text-[#6b6258] leading-[1.78] mb-4">{s.description.slice(0, 100)}...</p>
                <span className="text-[.62rem] font-semibold tracking-[.14em] uppercase text-[#b8832a] flex items-center gap-2 group-hover:gap-4 transition-all">Learn More &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
