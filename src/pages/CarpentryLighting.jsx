import { Link } from 'react-router-dom'
import ServicePageLayout from '../components/ServicePageLayout'
import { PHOTOS } from '../data/site'

const meta = {
  title: 'Pergola Builder & Landscape Lighting Cincinnati | YEL',
  desc: 'Custom pergolas, decks, arbors, and professional low-voltage landscape lighting in Cincinnati and Northern Kentucky. Transform your outdoor space day and night.',
  slug: '/carpentry-lighting',
  schema: {
    "@context":"https://schema.org","@type":"Service",
    "name":"Pergola Builder Landscape Lighting Cincinnati",
    "description":"Custom outdoor carpentry and professional low-voltage landscape lighting in Cincinnati OH and Northern KY.",
    "provider":{"@type":"LocalBusiness","name":"Young Entrepreneur Landscaping LLC","telephone":"+15134986879"},
    "areaServed":"Cincinnati OH"
  }
}

export default function CarpentryLighting() {
  return (
    <ServicePageLayout
      meta={meta}
      hero={{
        photo: PHOTOS.carpentry,
        eyebrow: 'Carpentry & Lighting',
        title: 'Beautiful by Day. <em>Stunning</em> by Night.',
        sub: 'Custom pergolas, arbors, decks, and professional low-voltage landscape lighting systems that transform your Cincinnati property day and night.'
      }}
    >
      <section className="section">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'64px',alignItems:'center'}}>
            <div>
              <span className="eyebrow">Outdoor Carpentry</span>
              <h2 className="section-title" style={{marginBottom:'24px'}}>Custom <em>Structures</em></h2>
              <p style={{color:'var(--text-soft)',fontSize:'0.9rem',lineHeight:'1.85',marginBottom:'16px'}}>
                From custom cedar pavilions to pergolas, arbors, and decks — our carpentry team builds structures that complement your landscape and stand up to Cincinnati weather for decades.
              </p>
              {['Pergola Builder Cincinnati','Custom Pavilions','Deck Builder Cincinnati','Arbors & Arbor Trellises','Gazebo Builder Cincinnati'].map(i=>(
                <div key={i} style={{padding:'10px 0',borderBottom:'1px solid var(--stone)',fontSize:'0.85rem',color:'var(--text-soft)'}}>{i}</div>
              ))}
            </div>
            <div>
              <span className="eyebrow">Landscape Lighting</span>
              <h2 className="section-title" style={{marginBottom:'24px'}}>Low Voltage <em>Lighting</em></h2>
              <p style={{color:'var(--text-soft)',fontSize:'0.9rem',lineHeight:'1.85',marginBottom:'16px'}}>
                Professional low-voltage landscape lighting installation across Cincinnati and Northern Kentucky. We design, install, and maintain lighting systems that showcase your property after dark.
              </p>
              {['Path & Walkway Lighting','Up-lighting & Spotlights','Deck & Patio Accent Lighting','Architectural Lighting','Seasonal Lighting'].map(i=>(
                <div key={i} style={{padding:'10px 0',borderBottom:'1px solid var(--stone)',fontSize:'0.85rem',color:'var(--text-soft)'}}>{i}</div>
              ))}
            </div>
          </div>
          <Link to="/contact" className="btn-main" style={{marginTop:'48px'}}>Get a Free Carpentry Quote</Link>
        </div>
      </section>
    </ServicePageLayout>
  )
}
