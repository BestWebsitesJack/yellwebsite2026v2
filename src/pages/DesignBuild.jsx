import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ServicePageLayout from '../components/ServicePageLayout'
import { PHOTOS } from '../data/site'

const meta = {
  title: 'Design | Build Landscaping Cincinnati | Young Entrepreneur Landscaping',
  desc: 'Custom landscape design and build services in Cincinnati and Northern Kentucky. CAD design, 3D elevations, and complete in-house construction. Barrett or Nathan personally oversees every project.',
  slug: '/design-build',
  schema: {
    "@context":"https://schema.org","@type":"Service",
    "name":"Landscape Design Build Cincinnati",
    "description":"Custom landscape design and build services in Cincinnati and Northern Kentucky. CAD plans, 3D elevations, full in-house construction.",
    "provider":{"@type":"LocalBusiness","name":"Young Entrepreneur Landscaping LLC","telephone":"+15134986879"},
    "areaServed":"Cincinnati OH"
  }
}

export default function DesignBuild() {
  return (
    <ServicePageLayout
      meta={meta}
      hero={{
        photo: PHOTOS.hero,
        eyebrow: 'Design | Build',
        title: 'From <em>Vision</em> to Reality',
        sub: 'Scaled CAD plans, 3-D elevations, and complete in-house construction — Barrett or Nathan personally oversees every project from concept to completion across Cincinnati & Northern Kentucky.'
      }}
    >
      <section className="section">
        <div className="container">
          <div style={{maxWidth:'780px',margin:'0 auto',textAlign:'center'}}>
            <span className="eyebrow">Our Process</span>
            <h2 className="section-title">Design. <em>Engineer. Build.</em></h2>
            <p style={{color:'var(--text-soft)',marginTop:'20px',fontSize:'0.95rem',lineHeight:'1.85'}}>
              Unlike companies that subcontract, every Young Entrepreneur Landscaping project is designed, engineered, and built by our own team. That means one point of contact, consistent quality, and a finished product that matches your approved design — not a contractor's interpretation of it.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'32px',flexWrap:'wrap'}}>
            {[
              { title:'CAD Design', desc:'Every project starts with scaled 2-D CAD plans — precise drawings that eliminate guesswork and give you an exact picture of the finished space before a shovel hits the ground.' },
              { title:'3-D Elevations', desc:'We produce full 3-D elevation renderings so you can visualize your new outdoor space from every angle. Revisions are made until your vision is perfectly captured.' },
              { title:'In-House Build', desc:'No subcontractors. Our own crew handles all construction — hardscape, carpentry, planting, drainage — ensuring every detail matches the approved design.' },
            ].map(item => (
              <div key={item.title} style={{background:'var(--white)',padding:'40px',border:'var(--border)'}}>
                <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.6rem',fontWeight:'400',color:'var(--green)',marginBottom:'16px'}}>{item.title}</h3>
                <p style={{color:'var(--text-soft)',fontSize:'0.87rem',lineHeight:'1.85'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{maxWidth:'780px',margin:'0 auto'}}>
          <span className="eyebrow">Keywords Served</span>
          <h2 className="section-title" style={{marginBottom:'32px'}}>Landscape <em>Design Build Cincinnati</em></h2>
          <p style={{color:'var(--text-soft)',fontSize:'0.9rem',lineHeight:'1.85'}}>
            Serving clients searching for <strong>design build landscaping Cincinnati</strong>, <strong>landscape designer Cincinnati</strong>, <strong>custom landscaping Cincinnati</strong>, and <strong>outdoor living design Cincinnati</strong>. We serve Greater Cincinnati and all of Northern Kentucky including Hyde Park, Mariemont, Indian Hill, Anderson Township, Covington KY, Fort Thomas KY, and surrounding communities.
          </p>
          <Link to="/contact" className="btn-main" style={{marginTop:'32px'}}>Get a Free Design Consultation</Link>
        </div>
      </section>
    </ServicePageLayout>
  )
}
