import { Link } from 'react-router-dom'
import ServicePageLayout from '../components/ServicePageLayout'
import { PHOTOS } from '../data/site'

const meta = {
  title: 'Hardscape & Masonry Cincinnati | Paver Patios, Retaining Walls | YEL',
  desc: 'Expert hardscape and masonry contractor in Cincinnati and Northern Kentucky. Paver patio installation, retaining walls, outdoor kitchens, fire pits, pool decks, driveways. Get a free quote.',
  slug: '/hardscape-masonry',
  schema: {
    "@context":"https://schema.org","@type":"Service",
    "name":"Hardscape Masonry Contractor Cincinnati",
    "description":"Paver patios, retaining walls, outdoor kitchens, fireplaces, pool decks, driveways, and masonry in Cincinnati OH and Northern KY.",
    "provider":{"@type":"LocalBusiness","name":"Young Entrepreneur Landscaping LLC","telephone":"+15134986879"},
    "areaServed":"Cincinnati OH"
  }
}

const ITEMS = [
  { title:'Paver Patios', desc:'Custom paver patio installation in Cincinnati and Northern Kentucky. Brick, concrete paver, flagstone, and bluestone — installed to last a lifetime.' },
  { title:'Retaining Walls', desc:'Boulder retaining walls, block walls, and natural stone walls built to hold grade and add beauty. Serving Cincinnati, Hyde Park, Indian Hill, and NKY.' },
  { title:'Outdoor Kitchens', desc:'Custom outdoor kitchen installation in Cincinnati — gas grills, pellet smokers, granite counters, refrigerators, and built-in lighting.' },
  { title:'Fire Pits & Fireplaces', desc:'Custom outdoor fireplace and fire pit installation for Cincinnati and Northern Kentucky properties. Wood-burning and gas options.' },
  { title:'Pool Decks', desc:'Beautiful, slip-resistant pool deck installation in Cincinnati. Concrete paver, natural stone, and bluestone options.' },
  { title:'Driveways & Walkways', desc:'Driveway installation and walkway construction in Cincinnati. Cobblestone, paver, brick, and concrete options from our masonry team.' },
]

export default function HardscapeMasonry() {
  return (
    <ServicePageLayout
      meta={meta}
      hero={{
        photo: PHOTOS.hardscape,
        eyebrow: 'Hardscape & Masonry',
        title: 'Stone. Brick. <em>Paver.</em>',
        sub: 'Patios, retaining walls, outdoor kitchens, fireplaces, pool decks, driveways — built in stone, brick, and paver across Cincinnati & Northern Kentucky since 2010.'
      }}
    >
      <section className="section">
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'56px'}}>
            <span className="eyebrow">What We Build</span>
            <h2 className="section-title">Hardscape <em>Services</em></h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'2px',background:'var(--stone)'}}>
            {ITEMS.map(item => (
              <div key={item.title} style={{background:'var(--cream)',padding:'40px'}}>
                <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.5rem',fontWeight:'400',color:'var(--green)',marginBottom:'12px'}}>{item.title}</h3>
                <p style={{color:'var(--text-soft)',fontSize:'0.85rem',lineHeight:'1.85'}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-warm">
        <div className="container" style={{maxWidth:'780px',margin:'0 auto'}}>
          <span className="eyebrow">Serving Greater Cincinnati</span>
          <h2 className="section-title" style={{marginBottom:'24px'}}>Paver Patio & <em>Masonry Contractor Cincinnati</em></h2>
          <p style={{color:'var(--text-soft)',fontSize:'0.9rem',lineHeight:'1.85'}}>
            Searching for a <strong>paver patio Cincinnati</strong>, <strong>retaining wall contractor Cincinnati</strong>, or <strong>outdoor kitchen Cincinnati</strong> specialist? Young Entrepreneur Landscaping has delivered 500+ hardscape and masonry projects across Hyde Park, Mariemont, Montgomery, Anderson Township, Indian Hill, and all of Northern Kentucky since 2010.
          </p>
          <Link to="/contact" className="btn-main" style={{marginTop:'32px'}}>Get a Free Hardscape Quote</Link>
        </div>
      </section>
    </ServicePageLayout>
  )
}
