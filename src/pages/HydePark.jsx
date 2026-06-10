import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import useReveal from '../components/useReveal'
import { PHOTOS, SERVICES } from '../data/site'

const SCHEMA = {
  "@context":"https://schema.org","@type":"LandscapeService",
  "name":"Young Entrepreneur Landscaping — Hyde Park Cincinnati",
  "description":"Premier landscaping and hardscaping company serving Hyde Park, Cincinnati Ohio. Paver patios, outdoor kitchens, retaining walls, landscape design, and lawn care.",
  "url":"https://yelandscaping.com/hyde-park",
  "telephone":"+15134986879",
  "areaServed":"Hyde Park Cincinnati OH"
}

export default function HydePark() {
  useReveal()
  return (
    <>
      <Helmet>
        <title>Landscaping Hyde Park Cincinnati | Young Entrepreneur Landscaping</title>
        <meta name="description" content="Premier landscaping and hardscaping company serving Hyde Park, Cincinnati OH. Paver patios, outdoor kitchens, retaining walls, landscape design, lawn care, and more. Get a free estimate." />
        <link rel="canonical" href="https://yelandscaping.com/hyde-park" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <div className="page-hero">
        <div className="page-hero-bg" style={{backgroundImage:`url(${PHOTOS.carouselHydePark})`}} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow" style={{color:'var(--gold-light)'}}>Hyde Park, Cincinnati</span>
          <h1>Landscaping <em>Hyde Park OH</em></h1>
          <p>Custom landscape design, hardscaping, and outdoor living for Hyde Park homes. Serving Hyde Park, Mt. Lookout, and surrounding Cincinnati neighborhoods since 2010.</p>
          <div style={{display:'flex',gap:'16px',marginTop:'28px',flexWrap:'wrap'}}>
            <Link to="/contact" className="btn-main">Get a Free Estimate</Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{maxWidth:'900px',margin:'0 auto'}}>
          <span className="eyebrow">Hyde Park Service Area</span>
          <h2 className="section-title" style={{marginBottom:'24px'}}>Hyde Park's <em>Landscaping Specialists</em></h2>
          <p style={{color:'var(--text-soft)',lineHeight:'1.9',marginBottom:'16px'}}>
            Young Entrepreneur Landscaping has completed dozens of projects in Hyde Park, Cincinnati — from grand entrance transformations on Columbia Parkway to paver patios and outdoor kitchens in Hyde Park Square's surrounding neighborhoods.
          </p>
          <p style={{color:'var(--text-soft)',lineHeight:'1.9',marginBottom:'32px'}}>
            Hyde Park homeowners trust us for <strong>landscapers Hyde Park OH</strong>, paver patio installation, hardscape contractor services, outdoor kitchen design and build, retaining walls, and landscape design. We serve Hyde Park, Mt. Lookout, Oakley, Mariemont, and all surrounding neighborhoods.
          </p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px',marginBottom:'40px'}}>
            {SERVICES.map(s=>(
              <Link to={s.slug} key={s.slug} style={{padding:'20px',background:'var(--white)',border:'var(--border)',display:'block'}}>
                <div style={{fontSize:'0.62rem',fontWeight:'600',letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'6px'}}>{s.num}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'1.1rem',fontWeight:'400',color:'var(--text)'}}>{s.title}</div>
              </Link>
            ))}
          </div>
          <Link to="/contact" className="btn-main">Schedule a Hyde Park Consultation</Link>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
