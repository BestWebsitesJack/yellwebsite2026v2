import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import useReveal from '../components/useReveal'
import { PHOTOS, SERVICES, NKY_AREAS } from '../data/site'

const SCHEMA = {
  "@context":"https://schema.org","@type":"LandscapeService",
  "name":"Young Entrepreneur Landscaping — Northern Kentucky",
  "description":"Premier landscaping and hardscaping company serving Northern Kentucky including Covington, Florence, Fort Thomas, Newport, and surrounding communities.",
  "url":"https://yelandscaping.com/northern-kentucky",
  "telephone":"+15134986879",
  "areaServed":["Covington KY","Florence KY","Fort Thomas KY","Newport KY","Highland Heights KY","Cold Spring KY"]
}

export default function NorthernKentucky() {
  useReveal()
  return (
    <>
      <Helmet>
        <title>Landscaping Northern Kentucky | Covington, Florence, Fort Thomas | YEL</title>
        <meta name="description" content="Premier landscaping and hardscaping serving Northern Kentucky including Covington, Florence, Fort Thomas, Newport, and surrounding communities. Get a free estimate today." />
        <link rel="canonical" href="https://yelandscaping.com/northern-kentucky" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      <div className="page-hero">
        <div className="page-hero-bg" style={{backgroundImage:`url(${PHOTOS.carouselKalmbach})`}} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow" style={{color:'var(--gold-light)'}}>Northern Kentucky</span>
          <h1>Landscaping <em>Northern Kentucky</em></h1>
          <p>Custom landscaping, hardscaping, and outdoor living for Northern Kentucky homeowners and businesses. Serving Covington, Florence, Fort Thomas, Newport, and all of NKY since 2010.</p>
          <div style={{display:'flex',gap:'16px',marginTop:'28px',flexWrap:'wrap'}}>
            <Link to="/contact" className="btn-main">Get a Free NKY Estimate</Link>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px'}}>
            <div className="reveal">
              <span className="eyebrow">Serving All of NKY</span>
              <h2 className="section-title" style={{marginBottom:'24px'}}>Northern Kentucky's <em>Landscaping Company</em></h2>
              <p style={{color:'var(--text-soft)',lineHeight:'1.9',marginBottom:'16px'}}>
                Young Entrepreneur Landscaping crosses the river regularly to serve Northern Kentucky homeowners and commercial properties with the same premium-quality landscaping we're known for in Cincinnati.
              </p>
              <p style={{color:'var(--text-soft)',lineHeight:'1.9',marginBottom:'32px'}}>
                We provide <strong>landscaping northern kentucky</strong> services including hardscape installation, paver patios, retaining walls, outdoor kitchens, pergolas, landscape design, lawn care, and maintenance programs across all of NKY.
              </p>
              <Link to="/contact" className="btn-main">Schedule a NKY Consultation</Link>
            </div>
            <div className="reveal d2">
              <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:'300',color:'var(--text)',marginBottom:'24px'}}>NKY Communities We Serve</h3>
              <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
                {NKY_AREAS.map(a=>(
                  <span key={a} style={{padding:'8px 18px',border:'var(--border)',borderRadius:'20px',fontSize:'0.72rem',fontWeight:'500',color:'var(--text-soft)'}}>
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
