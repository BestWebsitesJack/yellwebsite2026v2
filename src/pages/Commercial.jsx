import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import useReveal from '../components/useReveal'
import { PHOTOS } from '../data/site'

export default function Commercial() {
  useReveal()
  return (
    <>
      <Helmet>
        <title>Commercial Landscaping Cincinnati | HOA & Office Park | YEL</title>
        <meta name="description" content="Commercial landscaping contractor in Cincinnati and Northern Kentucky. HOA landscaping, office park maintenance, commercial lawn care, and commercial hardscape. Get a free commercial estimate." />
        <link rel="canonical" href="https://yelandscaping.com/commercial" />
      </Helmet>

      <div className="page-hero">
        <div className="page-hero-bg" style={{backgroundImage:`url(${PHOTOS.hero})`}} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow" style={{color:'var(--gold-light)'}}>Commercial Services</span>
          <h1>Commercial <em>Landscaping Cincinnati</em></h1>
          <p>HOA communities, office parks, retail properties, and multi-family — professional commercial landscaping and maintenance across Greater Cincinnati and Northern Kentucky.</p>
          <div style={{display:'flex',gap:'16px',marginTop:'28px',flexWrap:'wrap'}}>
            <Link to="/contact" className="btn-main">Get a Commercial Quote</Link>
            <Link to="/showcase" className="btn-ghost">View Our Work</Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'center'}}>
            <div className="reveal">
              <span className="eyebrow">Commercial Services</span>
              <h2 className="section-title">Professional <em>Commercial Landscaping</em></h2>
              <p style={{color:'var(--text-soft)',marginTop:'20px',lineHeight:'1.85'}}>
                Young Entrepreneur Landscaping serves commercial properties across Greater Cincinnati and Northern Kentucky with the same level of craftsmanship and attention to detail we bring to residential work.
              </p>
              <p style={{color:'var(--text-soft)',marginTop:'16px',lineHeight:'1.85'}}>
                From full-service HOA maintenance contracts to commercial hardscape installation and commercial lawn care, we're equipped to handle properties of any size.
              </p>
            </div>
            <div className="reveal d2" style={{display:'flex',flexDirection:'column',gap:'12px'}}>
              {[
                'Commercial Landscaping Design & Installation',
                'HOA Landscaping Cincinnati',
                'Office Park Landscaping & Maintenance',
                'Commercial Hardscape & Paver Patios',
                'Commercial Lawn Care Cincinnati',
                'Commercial Snow Removal',
                'Commercial Landscape Maintenance Contracts',
                'Retail & Multi-Family Property Landscaping',
              ].map(item => (
                <div key={item} style={{display:'flex',alignItems:'center',gap:'14px',padding:'14px 18px',background:'var(--white)',border:'var(--border)'}}>
                  <span style={{color:'var(--green)'}}>✦</span>
                  <span style={{fontSize:'0.87rem',color:'var(--text)'}}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-green">
        <div className="container" style={{textAlign:'center',maxWidth:'680px',margin:'0 auto'}}>
          <span className="eyebrow" style={{color:'var(--gold-light)'}}>Get Started</span>
          <h2 className="section-title" style={{color:'var(--white)',marginBottom:'20px'}}>Commercial <em style={{color:'var(--gold-light)'}}>Estimate</em></h2>
          <p style={{color:'rgba(255,255,255,0.75)',marginBottom:'32px'}}>
            We offer free commercial consultations across Greater Cincinnati and all of Northern Kentucky. Tell us about your property and we'll schedule a site visit.
          </p>
          <Link to="/contact" className="btn-main btn-white">Request a Commercial Quote</Link>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
