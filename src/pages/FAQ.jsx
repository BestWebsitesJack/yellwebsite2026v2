import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import ContactSection from '../components/ContactSection'
import useReveal from '../components/useReveal'

const FAQS = [
  { q:'How much does a paver patio cost in Cincinnati?', a:'Paver patio costs in Cincinnati typically range from $15 to $40+ per square foot installed, depending on the paver material, base preparation, size, and complexity. A basic 400 sq ft patio might start around $8,000, while a premium project with bluestone, seat walls, and drainage can run $25,000 or more. We provide detailed, itemized estimates after our free on-site consultation.' },
  { q:'How much does landscaping cost in Cincinnati?', a:'Landscaping costs vary widely by scope. A planting bed installation might be $500–$3,000. A full outdoor living transformation with patio, pavilion, outdoor kitchen, and lighting can be $80,000+. We provide free on-site consultations and detailed estimates before any commitment.' },
  { q:'Do you offer free estimates?', a:'Yes — we offer free on-site consultations across all of Greater Cincinnati and Northern Kentucky. We\'ll visit your property, discuss your vision, and provide a detailed estimate at no cost or obligation.' },
  { q:'Do you use AI images or stock photography?', a:'Never. Every photo on our website, our social media, and all marketing materials is a real project built by our team. No AI-generated images. No stock photography. What you see is exactly what we build.' },
  { q:'What areas do you serve?', a:'We serve Greater Cincinnati and all of Northern Kentucky, including Hyde Park, Mariemont, Indian Hill, Anderson Township, Montgomery, Blue Ash, Mason, Madeira, and communities across the river including Covington, Florence, Fort Thomas, Newport, Highland Heights, Cold Spring, Union, and more.' },
  { q:'How long does a typical project take?', a:'Timeline depends on project scope. A paver patio might take 3–7 days. A full outdoor living space with pavilion, kitchen, and landscaping could take 3–6 weeks. We provide a clear timeline at the design approval stage and communicate throughout the project.' },
  { q:'Do you handle both design and construction?', a:'Yes — we are a true design-build firm. We produce scaled CAD plans and 3-D elevations in-house, and our own crew completes all construction. No subcontractors. Barrett or Nathan personally oversees every project.' },
  { q:'Do you offer landscape maintenance after installation?', a:'Yes. We offer year-round maintenance programs including seasonal cleanups, mulching, lawn care, fertilization, pruning, and snow removal for both residential and commercial properties.' },
  { q:'Are you licensed and insured?', a:'Yes. Young Entrepreneur Landscaping LLC is fully licensed and insured in Ohio and Kentucky. We carry general liability and workers\' compensation insurance on all projects.' },
  { q:'Can you fix my drainage problem?', a:'Absolutely — drainage and water management is one of our core services. We diagnose the source of your drainage issue and install the right solution: French drains, regrading, dry creek beds, downspout extensions, or a combination. We serve all of Cincinnati and Northern Kentucky.' },
]

const SCHEMA = {
  "@context":"https://schema.org",
  "@type":"FAQPage",
  "mainEntity": FAQS.map(f => ({
    "@type":"Question",
    "name": f.q,
    "acceptedAnswer":{"@type":"Answer","text":f.a}
  }))
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{borderBottom:'var(--border)'}}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',
          padding:'24px 0',background:'none',border:'none',cursor:'pointer',
          fontFamily:'var(--font-display)',fontSize:'1.2rem',fontWeight:'400',color:'var(--text)',
          textAlign:'left',gap:'16px'
        }}
      >
        {q}
        <span style={{color:'var(--green)',fontSize:'1.4rem',flexShrink:0,transition:'transform 0.3s ease',transform:open?'rotate(45deg)':'none'}}>+</span>
      </button>
      {open && (
        <p style={{paddingBottom:'24px',color:'var(--text-soft)',fontSize:'0.9rem',lineHeight:'1.85'}}>
          {a}
        </p>
      )}
    </div>
  )
}

export default function FAQ() {
  useReveal()
  return (
    <>
      <Helmet>
        <title>FAQ | Landscaping Questions Cincinnati | Young Entrepreneur Landscaping</title>
        <meta name="description" content="Frequently asked questions about landscaping, hardscaping, and outdoor living in Cincinnati. Pricing, process, service areas, and more from Young Entrepreneur Landscaping." />
        <link rel="canonical" href="https://yelandscaping.com/faq" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <section style={{paddingTop:'140px',paddingBottom:'32px',paddingLeft:'64px',paddingRight:'64px',background:'var(--warm)'}}>
        <div className="container">
          <span className="eyebrow">Common Questions</span>
          <h1 className="section-title">Frequently Asked <em>Questions</em></h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{maxWidth:'860px',margin:'0 auto'}}>
          {FAQS.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
        </div>
      </section>

      <ContactSection />
    </>
  )
}
