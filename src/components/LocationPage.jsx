import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import ContactSection from '../components/ContactSection'
import MarqueeTicker from '../components/MarqueeTicker'
import FAQAccordion from '../components/FAQAccordion'
import { useScrollReveal } from '../components/useScrollReveal'
import { SERVICES } from '../data/siteData'

export default function LocationPage({ location }) {
  useScrollReveal()

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LandscapeService',
    name: `Young Entrepreneur Landscaping — ${location.name}`,
    description: location.description,
    url: `https://www.yelandscaping.com${location.slug}`,
    telephone: '+15134986879',
    areaServed: location.name,
  }

  return (
    <>
      <SEOHead
        title={location.seoTitle}
        description={location.description}
        canonical={location.slug}
        schema={schema}
      />

      {/* ── HERO ──────────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${location.hero})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow reveal" style={{ color: 'var(--gold-light)' }}>{location.eyebrow}</span>
          <h1 className="section-title reveal d1" style={{ color: '#fff' }}>
            Landscaping in <em style={{ color: 'var(--gold-light)' }}>{location.name}</em>
          </h1>
          <p className="reveal d2" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, marginTop: 12, maxWidth: 520 }}>
            {location.description}
          </p>
          <div className="reveal d3" style={{ marginTop: 28 }}>
            <Link to="/contact" className="btn-main white">Free Consultation</Link>
          </div>
        </div>
      </div>

      <MarqueeTicker />

      {/* ── INTRO CONTENT ─────────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <span className="eyebrow reveal">Serving {location.name}</span>
            <h2 className="section-title reveal d1" style={{ marginBottom: 28 }}>
              Cincinnati's Premier Landscaper <em>in {location.name}</em>
            </h2>
            {location.body.map((para, i) => (
              <p key={i} className="reveal" style={{ color: 'var(--text-soft)', fontSize: '0.88rem', lineHeight: 1.9, marginBottom: 18 }}>
                {para}
              </p>
            ))}
          </div>
          <div className="reveal d2">
            <div style={{ background: 'var(--cream-warm)', border: '1.5px solid var(--stone)', padding: '40px 36px' }}>
              <span className="eyebrow">Search Terms We Rank For</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 }}>
                {location.keywords.map((k, i) => (
                  <span key={i} className="area-pill" style={{ fontSize: '0.68rem' }}>{k}</span>
                ))}
              </div>
              <div style={{ marginTop: 32, paddingTop: 32, borderTop: '1px solid var(--stone)' }}>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-soft)', lineHeight: 1.85 }}>
                  Young Entrepreneur Landscaping has been serving the {location.name} area since 2010. <a href="tel:5134986879" style={{ color: 'var(--green)', fontWeight: 600 }}>(513) 498-6879</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES IN THIS AREA ─────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream-warm)', paddingLeft: 0, paddingRight: 0 }}>
        <div style={{ padding: '0 64px', marginBottom: 48 }}>
          <span className="eyebrow reveal">What We Offer in {location.name}</span>
          <h2 className="section-title reveal d1">Our <em>Services</em></h2>
        </div>
        <div className="sv-grid">
          {SERVICES.slice(0, 6).map((s, i) => (
            <Link key={i} to={s.slug} className="sv">
              <span className="sv-number">{s.num}</span>
              <h3 className="sv-title">{s.title}</h3>
              <div className="sv-tags">
                {s.tags.map((t, j) => <span key={j} className="sv-tag">{t}</span>)}
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-soft)', lineHeight: 1.85 }}>{s.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── LOCATION PHOTO ────────────────────────────────────── */}
      <div style={{ height: 420, overflow: 'hidden' }}>
        <img
          src={location.hero}
          alt={`Landscaping ${location.name} — Young Entrepreneur Landscaping`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream-warm)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span className="eyebrow reveal">Landscaping {location.name}</span>
          <h2 className="section-title reveal d1" style={{ marginBottom: 48 }}>
            Common <em>Questions</em>
          </h2>
          <FAQAccordion faqs={location.faqs} />
        </div>
      </section>

      <ContactSection />
    </>
  )
}
