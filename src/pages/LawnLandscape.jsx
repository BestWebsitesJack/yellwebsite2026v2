import { Link } from 'react-router-dom'
import ServicePageLayout from '../components/ServicePageLayout'
import { PHOTOS } from '../data/site'

const meta = {
  title: 'Lawn Care & Landscape Installation Cincinnati | YEL',
  desc: 'Professional lawn care and landscape installation in Cincinnati and Northern Kentucky. Garden design, mulching, sod installation, planting beds, fertilization, seasonal cleanups.',
  slug: '/lawn-landscape',
  schema: {
    "@context":"https://schema.org","@type":"Service",
    "name":"Lawn Care Landscape Installation Cincinnati",
    "description":"Comprehensive lawn care and landscape installation — garden design, planting beds, mulching, sod, fertilization, and seasonal cleanups in Cincinnati OH and Northern KY.",
    "provider":{"@type":"LocalBusiness","name":"Young Entrepreneur Landscaping LLC","telephone":"+15134986879"},
    "areaServed":"Cincinnati OH"
  }
}

export default function LawnLandscape() {
  return (
    <ServicePageLayout
      meta={meta}
      hero={{
        photo: PHOTOS.lawn,
        eyebrow: 'Lawn & Landscape',
        title: 'Gardens That <em>Grow</em> With You',
        sub: 'Comprehensive lawn care and landscape installation — garden design, planting beds, mulching, sod, fertilization, and seasonal cleanups across Cincinnati & Northern Kentucky.'
      }}
    >
      <section className="section">
        <div className="container" style={{maxWidth:'920px',margin:'0 auto'}}>
          <span className="eyebrow">What We Offer</span>
          <h2 className="section-title" style={{marginBottom:'40px'}}>Lawn & Landscape <em>Services</em></h2>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px'}}>
            {[
              'Garden Design','Planting Bed Installation','Mulching Services','Sod Installation',
              'Fertilization Programs','Seasonal Cleanups','Native Plant Landscaping','Landscape Installation',
            ].map(item => (
              <div key={item} style={{display:'flex',alignItems:'center',gap:'16px',padding:'20px 24px',background:'var(--white)',border:'var(--border)'}}>
                <span style={{color:'var(--green)',fontSize:'1.1rem'}}>✦</span>
                <span style={{fontSize:'0.9rem',fontWeight:'500',color:'var(--text)'}}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{marginTop:'48px'}}>
            <p style={{color:'var(--text-soft)',fontSize:'0.9rem',lineHeight:'1.85'}}>
              Looking for <strong>lawn care Cincinnati</strong>, <strong>garden design Cincinnati</strong>, or <strong>sod installation Cincinnati</strong>? Our lawn and landscape team serves all of Greater Cincinnati and Northern Kentucky with residential and commercial services.
            </p>
            <Link to="/contact" className="btn-main" style={{marginTop:'28px'}}>Get a Lawn Care Quote</Link>
          </div>
        </div>
      </section>
    </ServicePageLayout>
  )
}
