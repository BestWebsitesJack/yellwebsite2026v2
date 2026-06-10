import { Link } from 'react-router-dom'
import ServicePageLayout from '../components/ServicePageLayout'
import { PHOTOS } from '../data/site'

const meta = {
  title: 'Landscape Maintenance Cincinnati | Lawn Care & Snow Removal | YEL',
  desc: 'Year-round residential and commercial landscape maintenance in Cincinnati and Northern Kentucky. Seasonal lawn care, snow removal, mulching, pruning, and commercial programs.',
  slug: '/landscape-maintenance',
  schema: {
    "@context":"https://schema.org","@type":"Service",
    "name":"Landscape Maintenance Cincinnati",
    "description":"Year-round residential and commercial landscape maintenance — seasonal lawn care, snow removal, mulching, and commercial programs in Cincinnati OH and Northern KY.",
    "provider":{"@type":"LocalBusiness","name":"Young Entrepreneur Landscaping LLC","telephone":"+15134986879"},
    "areaServed":"Cincinnati OH"
  }
}

export default function LandscapeMaintenance() {
  return (
    <ServicePageLayout
      meta={meta}
      hero={{
        photo: PHOTOS.maintenance,
        eyebrow: 'Landscape Maintenance',
        title: 'Year-Round <em>Pristine.</em>',
        sub: 'Residential and commercial maintenance programs that keep your Cincinnati or Northern Kentucky landscape looking its best through all four seasons — including winter snow removal.'
      }}
    >
      <section className="section">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'48px'}}>
            <div>
              <span className="eyebrow">Residential Programs</span>
              <h2 className="section-title" style={{marginBottom:'24px'}}>Home <em>Maintenance</em></h2>
              <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
                {[
                  'Spring & Fall Seasonal Cleanups','Mulch Installation & Refresh',
                  'Lawn Mowing & Edging','Fertilization & Weed Control',
                  'Pruning & Trimming','Leaf Removal','Snow Removal Cincinnati',
                ].map(i => (
                  <div key={i} style={{display:'flex',alignItems:'center',gap:'12px',padding:'14px',background:'var(--white)',border:'var(--border)'}}>
                    <span style={{color:'var(--green)'}}>✦</span>
                    <span style={{fontSize:'0.87rem',color:'var(--text)'}}>{i}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="eyebrow">Commercial Programs</span>
              <h2 className="section-title" style={{marginBottom:'24px'}}>Commercial <em>Maintenance</em></h2>
              <p style={{color:'var(--text-soft)',fontSize:'0.9rem',lineHeight:'1.85',marginBottom:'24px'}}>
                We offer ongoing commercial landscape maintenance contracts for office parks, HOAs, retail properties, and multi-family communities across Greater Cincinnati and Northern Kentucky.
              </p>
              <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
                {[
                  'HOA Landscaping Cincinnati','Office Park Maintenance',
                  'Commercial Snow Removal','Irrigation Management',
                  'Commercial Mulching','Commercial Lawn Care Cincinnati',
                ].map(i => (
                  <div key={i} style={{display:'flex',alignItems:'center',gap:'12px',padding:'14px',background:'var(--warm)',border:'var(--border)'}}>
                    <span style={{color:'var(--green)'}}>✦</span>
                    <span style={{fontSize:'0.87rem',color:'var(--text)'}}>{i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Link to="/contact" className="btn-main" style={{marginTop:'48px'}}>Get a Maintenance Quote</Link>
        </div>
      </section>
    </ServicePageLayout>
  )
}
