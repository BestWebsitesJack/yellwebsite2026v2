import { Link } from 'react-router-dom'
import ServicePageLayout from '../components/ServicePageLayout'
import { PHOTOS } from '../data/site'

const meta = {
  title: 'French Drain Installation & Drainage Solutions Cincinnati | YEL',
  desc: 'Expert drainage solutions and water management in Cincinnati and Northern Kentucky. French drain installation, yard grading, erosion control, dry creek beds. Fix your muddy backyard.',
  slug: '/water-management',
  schema: {
    "@context":"https://schema.org","@type":"Service",
    "name":"French Drain Installation Drainage Solutions Cincinnati",
    "description":"Expert drainage and water management — French drains, regrading, dry creek beds, and erosion control for Cincinnati OH and Northern KY properties.",
    "provider":{"@type":"LocalBusiness","name":"Young Entrepreneur Landscaping LLC","telephone":"+15134986879"},
    "areaServed":"Cincinnati OH"
  }
}

export default function WaterManagement() {
  return (
    <ServicePageLayout
      meta={meta}
      hero={{
        photo: PHOTOS.water,
        eyebrow: 'Water Management',
        title: 'Fix Your <em>Drainage</em> Problem For Good',
        sub: 'French drains, regrading, dry creek beds, and erosion control — expert drainage solutions for flooding and drainage problems across Cincinnati & Northern Kentucky.'
      }}
    >
      <section className="section">
        <div className="container" style={{maxWidth:'900px',margin:'0 auto'}}>
          <span className="eyebrow">Drainage Solutions</span>
          <h2 className="section-title" style={{marginBottom:'40px'}}>Water <em>Management Services</em></h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'24px'}}>
            {[
              { title:'French Drain Installation', desc:'The most effective solution for most drainage problems. We design and install French drain systems sized for your specific soil conditions and water volume.' },
              { title:'Yard Grading & Regrading', desc:'Proper grade solves more drainage problems than any other fix. We re-grade yards to direct water away from foundations and low spots.' },
              { title:'Erosion Control', desc:'Retaining walls, planted slopes, and riprap solutions that stop erosion before it becomes a structural problem.' },
              { title:'Dry Creek Beds', desc:'Beautiful and functional — dry creek beds direct water flow while adding a natural landscaping element to your property.' },
              { title:'Downspout Drainage', desc:'We extend and bury downspout lines to move roof water well away from your foundation and lawn.' },
              { title:'Muddy Yard Fix', desc:'If your backyard stays wet and muddy after rain, we\'ll diagnose the source and install the right solution.' },
            ].map(item => (
              <div key={item.title} style={{background:'var(--white)',padding:'32px',border:'var(--border)'}}>
                <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.4rem',fontWeight:'400',color:'var(--green)',marginBottom:'12px'}}>{item.title}</h3>
                <p style={{color:'var(--text-soft)',fontSize:'0.84rem',lineHeight:'1.8'}}>{item.desc}</p>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-main" style={{marginTop:'40px'}}>Get a Drainage Consultation</Link>
        </div>
      </section>
    </ServicePageLayout>
  )
}
