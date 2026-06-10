import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ContactSection from './ContactSection'
import { SERVICES } from '../data/site'
import useReveal from './useReveal'

export default function ServicePageLayout({ meta, hero, children }) {
  useReveal()
  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.desc} />
        <link rel="canonical" href={`https://yelandscaping.com${meta.slug}`} />
        {meta.schema && <script type="application/ld+json">{JSON.stringify(meta.schema)}</script>}
      </Helmet>

      {/* Hero */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{backgroundImage:`url(${hero.photo})`}} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          {hero.eyebrow && <span className="eyebrow" style={{color:'var(--gold-light)'}}>{hero.eyebrow}</span>}
          <h1 dangerouslySetInnerHTML={{__html: hero.title}} />
          {hero.sub && <p>{hero.sub}</p>}
          <div style={{display:'flex',gap:'16px',marginTop:'28px',flexWrap:'wrap'}}>
            <Link to="/contact" className="btn-main">Get a Free Quote</Link>
            <Link to="/showcase" className="btn-ghost">View Our Work</Link>
          </div>
        </div>
      </div>

      {/* Page content */}
      {children}

      {/* Other services */}
      <section className="section section-warm">
        <div className="container">
          <span className="eyebrow">Everything We Do</span>
          <h2 className="section-title" style={{marginBottom:'48px'}}>Our Other <em>Services</em></h2>
          <div className="sv-grid">
            {SERVICES.filter(s => s.slug !== meta.slug).map(s => (
              <Link to={s.slug} key={s.slug} className="sv-card">
                <span className="sv-num">{s.num}</span>
                <span className="sv-kw">{s.keywords}</span>
                <h3 className="sv-title">{s.title}</h3>
                <p className="sv-desc">{s.desc}</p>
                <span className="btn-link">Explore Service</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
