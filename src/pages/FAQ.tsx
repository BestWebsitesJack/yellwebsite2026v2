import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  { cat: 'General', q: 'Does Young Entrepreneur Landscaping serve Northern Kentucky?', a: 'Yes, we serve all of Greater Cincinnati and Northern Kentucky including Covington, Florence, Fort Thomas, Newport, Highland Heights, Cold Spring, Union, Villa Hills, and surrounding areas.' },
  { cat: 'General', q: 'Do you work with commercial properties?', a: 'Yes, we serve both residential homeowners and commercial clients including office parks, HOAs, and commercial properties throughout Cincinnati and Northern Kentucky.' },
  { cat: 'General', q: 'How long has Young Entrepreneur Landscaping been in business?', a: 'We have been serving Greater Cincinnati since 2010, over 15 years of custom landscape design, hardscaping, and outdoor living construction.' },
  { cat: 'General', q: 'How do I get a quote?', a: 'Contact us through our website or call (513) 498-6879 to schedule a free on-site consultation. We come to your property and provide a detailed estimate.' },
  { cat: 'Hardscape', q: 'How much does a paver patio cost in Cincinnati?', a: 'Paver patio costs in Cincinnati typically range from $8,000 to $30,000 or more depending on size, materials, and design complexity. We provide free detailed estimates for every project.' },
  { cat: 'Hardscape', q: 'Do you build retaining walls in Cincinnati?', a: 'Yes, we design and install retaining walls, garden walls, and boulder walls for residential and commercial properties throughout Cincinnati and Northern Kentucky.' },
  { cat: 'Hardscape', q: 'Can you build an outdoor kitchen or fireplace?', a: 'Absolutely. We specialize in custom outdoor kitchens, fireplaces, fire pits, and pizza ovens as part of our hardscape and masonry services.' },
  { cat: 'Design', q: 'Do I need a design before starting my landscaping project?', a: 'Not always. For smaller projects we can work directly from a consultation. For larger transformations we recommend a scaled CAD design with 3-D elevations.' },
  { cat: 'Maintenance', q: 'Do you offer year-round landscape maintenance?', a: 'Yes, we offer seasonal and year-round landscape maintenance programs for both residential and commercial properties in Cincinnati and Northern Kentucky.' },
  { cat: 'Maintenance', q: 'Does YEL offer snow removal in Cincinnati?', a: 'Yes, we offer residential snow removal services in the Greater Cincinnati area. Contact us to discuss seasonal snow management for your property.' },
]

export default function FAQ() {
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
            <span className="w-6 h-[1.5px] bg-[#f5e8cc] inline-block" />FAQ
          </div>
          <h1 className="font-serif text-[clamp(3rem,6vw,5rem)] font-light text-white leading-[1.0] mb-6">
            Common Questions About<br /><em className="text-[#f5e8cc]">YEL Landscaping</em>
          </h1>
        </div>
      </section>
      <section className="bg-[#faf8f4] py-24">
        <div className="max-w-7xl mx-auto px-10 max-lg:px-6">
          <div className="max-w-3xl flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <details key={i} className={`bg-white border border-[#e8e0d4] rounded-sm group rv ${i > 0 ? `d${Math.min(i % 4 + 1, 4)}` : ''}`}>
                <summary className="px-8 py-6 text-[.9rem] font-medium text-[#2d4a26] cursor-pointer list-none flex justify-between items-center hover:bg-[#e8f0e4] transition-colors rounded-sm">
                  <span><span className="text-[.6rem] font-semibold tracking-[.14em] uppercase text-[#b8832a] mr-4">{faq.cat}</span>{faq.q}</span>
                  <span className="text-[#b8832a] text-xl ml-4 flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-8 pb-6 pt-2 text-[.87rem] font-light leading-[1.88] text-[#6b6258]">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-[#2d4a26] py-24 text-center">
        <div className="max-w-2xl mx-auto px-10 max-lg:px-6">
          <h2 className="font-serif text-[2.5rem] font-light text-white mb-4">Still Have <em className="text-[#f5e8cc]">Questions?</em></h2>
          <p className="text-[.9rem] font-light text-white/65 mb-10">Contact us directly, we are happy to answer any questions about your project.</p>
          <Link to="/contact" className="inline-block text-[.72rem] font-semibold tracking-[.15em] uppercase text-[#2d4a26] bg-white px-12 py-4 no-underline rounded-sm hover:bg-[#f5e8cc] transition-colors">Contact Us</Link>
        </div>
      </div>
    </>
  )
}
