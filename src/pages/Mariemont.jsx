import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import useReveal from '../components/useReveal'
import { PHOTOS, SERVICES } from '../data/site'

const SCHEMA = {
  "@context":"https://schema.org","@type":"LandscapeService",
  "name":"Young Entrepreneur Landscaping — Mariemont Cincinnati",
  "description":"Premier landscaping and hardscaping company serving Mariemont, Cincinnati Ohio. Bluestone patios, porch design, outdoor kitchens, retaining walls, and lawn care.",
  "url":"https://yelandscaping.com/mariemont",
  "telephone":"+15134986879",
  "areaServed":"Mariemont Cincinnati OH"
}

export default function Mariemont() {
  useReveal()
  return (
    <>
      <Helmet>
        <title>Landscaping Mariemont Cincinnati OH | Young Entrepreneur Landscaping</title>
        <meta name="description" content="Premier landscaping and hardscaping in Mariemont Cincinnati. Bluestone patios, porch design, outdoor kitchens, retaining walls, and landscape design. Get a free estimate." />
        <link rel="canonical" href="https://yelandscaping.com/mariemont" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <div className="page-hero">
        <div className="page-hero-bg" style={{backgroundImage:`url(${PHOTOS.carouselMariemont})`}} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow" style={{color:'var(--gold-light)'}}>Mariemont, Cincinnati</span>
          <h1>Landscaping <em>Mariemont OH</em></h1>
          <p>Custom landscape design and hardscaping for Mariemont's distinctive homes. Bluestone, reclaimed brick, and fine masonry — honoring Mariemont's architectural character since 2010.</p>
          <div style={{display:'flex',gap:'16px',marginTop:'28px',flexWrap:'wrap'}}>
            <Link to="/contact" className="btn-main">Get a Free Estimate</Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{maxWidth:'900px',margin:'0 auto'}}>
          <span className="eyebrow">Mariemont Service Area</span>
          <h2 className="section-title" style={{marginBottom:'24px'}}>Mariemont's <em>Landscaping Specialists</em></h2>
          <p style={{color:'var(--text-soft)',lineHeight:'1.9',marginBottom:'16px'}}>
            We have a special appreciation for Mariemont — a community whose historic architecture demands thoughtful, high-quality landscaping. Our Mariemont porch and bluestone patio project is one of our most celebrated works.
          </p>
          <p style={{color:'var(--text-soft)',lineHeight:'1.9',marginBottom:'32px'}}>
            Serving homeowners searching for <strong>landscapers Mariemont OH</strong>, <strong>landscaping Mariemont Cincinnati</strong>, bluestone patio installation, reclaimed brick work, porch design and construction, garden design, and landscape maintenance in Mariemont and surrounding neighborhoods including Terrace Park, Newtown, and Hyde Park.
          </p>
          <Link to="/contact" className="btn-main">Schedule a Mariemont Consultation</Link>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
