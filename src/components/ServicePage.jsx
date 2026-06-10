import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import ContactSection from '../components/ContactSection'
import FAQAccordion from '../components/FAQAccordion'
import MarqueeTicker from '../components/MarqueeTicker'
import { useScrollReveal } from '../components/useScrollReveal'
import { SERVICES } from '../data/siteData'

export default function ServicePage({ service }) {
  useScrollReveal()

  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.title} — Young Entrepreneur Landscaping`,
    description: service.description,
    provider: {
      '@type': 'LandscapeService',
      name: 'Young Entrepreneur Landscaping',
      telephone: '+15134986879',
      url: 'https://www.yelandscaping.com',
    },
    areaServed: 'Greater Cincinnati OH and Northern Kentucky',
    url: `https://www.yelandscaping.com${service.slug}`,
  }

  return (
    <>
      <SEOHead
        title={`${service.title} Cincinnati | Landscaping & Hardscaping`}
        description={service.description}
        canonical={service.slug}
        schema={schema}
      />

      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${service.hero})` }} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow reveal" style={{ color: 'var(--gold-light)' }}>Young Entrepreneur Landscaping</span>
          <h1 className="section-title reveal d1" style={{ color: '#fff', marginBottom: 16 }}>
            {service.title.includes('|')
              ? <><em style={{ color: 'var(--gold-light)' }}>{service.title.split('|')[0].trim()}</em> |{service.title.split('|')[1]}</>
              : <em style={{ color: 'var(--gold-light)' }}>{service.title}</em>
            }
          </h1>
          <p className="reveal d2" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.85, maxWidth: 560 }}>
            {service.description}
          </p>
          <div className="reveal d3" style={{ marginTop: 28 }}>
            <Link to="/contact" className="btn-main white">Get a Free Quote</Link>
          </div>
        </div>
      </div>

      {/* ── MARQUEE ───────────────────────────────────────────── */}
      <MarqueeTicker />

      {/* ── MAIN CONTENT ──────────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <span className="eyebrow reveal">{service.title} in Cincinnati</span>
            <h2 className="section-title reveal d1" style={{ marginBottom: 32 }}>
              Craftsmanship You Can <em>See & Feel</em>
            </h2>
            {service.body.split('\n\n').map((para, i) => (
              <p key={i} className="reveal" style={{ color: 'var(--text-soft)', fontSize: '0.88rem', lineHeight: 1.9, marginBottom: 20 }}>
                {para}
              </p>
            ))}
            <div className="reveal" style={{ marginTop: 36 }}>
              <Link to="/contact" className="btn-main green">Schedule a Consultation</Link>
            </div>
          </div>
          <div className="reveal d2" style={{ position: 'sticky', top: 120 }}>
            <div style={{ background: 'var(--cream-warm)', border: '1.5px solid var(--stone)', borderRadius: '2px', padding: '40px 36px' }}>
              <span className="eyebrow">Keywords & Search Terms</span>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-soft)', lineHeight: 1.85, marginBottom: 20 }}>
                We serve homeowners and businesses searching for:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {service.keywords.map((k, i) => (
                  <span key={i} className="area-pill" style={{ fontSize: '0.68rem' }}>{k}</span>
                ))}
              </div>
              <div style={{ marginTop: 32, paddingTop: 32, borderTop: '1px solid var(--stone)' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: 12 }}>Service Tags</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {service.tags.map((t, i) => (
                    <span key={i} className="sv-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE PHOTO ─────────────────────────────────────── */}
      <div style={{ height: 480, overflow: 'hidden' }}>
        <img
          src={service.hero}
          alt={`${service.title} — Young Entrepreneur Landscaping Cincinnati`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream-warm)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <span className="eyebrow reveal">{service.title} — FAQ</span>
          <h2 className="section-title reveal d1" style={{ marginBottom: 48 }}>
            Common <em>Questions</em>
          </h2>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>

      {/* ── RELATED SERVICES ──────────────────────────────────── */}
      <section className="section" style={{ background: '#fff' }}>
        <span className="eyebrow reveal">Explore More</span>
        <h2 className="section-title reveal d1" style={{ marginBottom: 48 }}>Related <em>Services</em></h2>
        <div className="sv-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {related.map((s, i) => (
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

      {/* ── CONTACT ───────────────────────────────────────────── */}
      <ContactSection />
    </>
  )
}
