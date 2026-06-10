import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import MarqueeTicker from '../components/MarqueeTicker'
import ContactSection from '../components/ContactSection'
import useReveal from '../components/useReveal'
import { PHOTOS, PROJECTS, SERVICES, CINCINNATI_AREAS, NKY_AREAS, CONTACT } from '../data/site'
import './Home.css'

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LandscapeService",
  "name": "Young Entrepreneur Landscaping LLC",
  "description": "Cincinnati's premier custom landscaping company since 2010. Residential & commercial landscape design, hardscaping, paver patios, outdoor living & lawn care. Serving Greater Cincinnati & Northern KY.",
  "url": "https://yelandscaping.com",
  "telephone": "+15134986879",
  "email": "bweckel@yelandscaping.com",
  "address": {"@type":"PostalAddress","streetAddress":"4178 Round Bottom Rd","addressLocality":"Newtown","addressRegion":"OH","postalCode":"45244","addressCountry":"US"},
  "geo": {"@type":"GeoCoordinates","latitude":"39.1142","longitude":"-84.2994"},
  "areaServed": ["Cincinnati OH","Hyde Park OH","Mariemont OH","Indian Hill OH","Northern Kentucky","Covington KY","Florence KY","Fort Thomas KY"],
  "foundingDate": "2010",
  "sameAs": ["https://www.instagram.com/youngentrepreneur_landscaping/"]
}

export default function Home() {
  useReveal()
  const [carouselIdx, setCarouselIdx] = useState(0)
  const carouselRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollStart = useRef(0)

  // Carousel drag
  const onMouseDown = (e) => {
    isDragging.current = true
    startX.current = e.pageX - carouselRef.current.offsetLeft
    scrollStart.current = carouselRef.current.scrollLeft
  }
  const onMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    carouselRef.current.scrollLeft = scrollStart.current - (x - startX.current)
  }
  const onMouseUp = () => { isDragging.current = false }

  return (
    <>
      <Helmet>
        <title>Young Entrepreneur Landscaping | Cincinnati's Premier Landscape Design & Build</title>
        <meta name="description" content="Cincinnati's premier custom landscaping company since 2010. Residential & commercial landscape design, hardscaping, paver patios, outdoor living & lawn care. Serving Greater Cincinnati & Northern KY. Get a free quote!" />
        <link rel="canonical" href="https://yelandscaping.com/" />
        <script type="application/ld+json">{JSON.stringify(SCHEMA)}</script>
      </Helmet>

      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="home-hero-bg" style={{backgroundImage:`url(${PHOTOS.hero})`}} />
        <div className="home-hero-overlay" />
        <div className="home-hero-content">
          <span className="eyebrow" style={{color:'var(--gold-light)'}}>Cincinnati · Northern Kentucky · Est. 2010</span>
          <h1 className="home-hero-title">
            Design.<br /><em>Build.</em><br />Maintain.
          </h1>
          <p className="home-hero-sub">
            Custom landscape design, hardscaping & outdoor living — crafted as art for residential and commercial properties across Greater Cincinnati & Northern Kentucky since 2010.
          </p>
          <div className="home-hero-ctas">
            <Link to="/contact" className="btn-main btn-white">Get a Free Quote</Link>
            <Link to="/showcase" className="btn-ghost">View Our Work</Link>
          </div>
        </div>
        <div className="home-hero-scroll">Scroll to explore</div>
      </section>

      {/* ── MARQUEE ── */}
      <MarqueeTicker />

      {/* ── STATS ── */}
      <section className="stats-bar reveal">
        {[
          { num:'15+', label:'Years Serving Cincinnati' },
          { num:'500+', label:'Projects Completed' },
          { num:'6', label:'Core Services' },
          { num:'OH & KY', label:'Two States Served' },
        ].map(s => (
          <div key={s.num} className="stat-item">
            <span className="stat-num">{s.num}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── ABOUT ── */}
      <section className="section about-split">
        <div className="about-photo reveal">
          <img src={PHOTOS.about} alt="Young Entrepreneur Landscaping — Mariemont porch project" />
          <div className="about-badge">
            <span className="about-badge-icon">✦</span>
            <span className="about-badge-text">Every photo on this site is a real project — our work, our art. No AI. No stock imagery.</span>
          </div>
        </div>
        <div className="about-text reveal d2">
          <span className="eyebrow">Our Story</span>
          <h2 className="section-title">"If you can <em>dream it,</em> we can build it"</h2>
          <p>
            Since 2010, Young Entrepreneur Landscaping has been the premier choice for residential and commercial clients across Greater Cincinnati and Northern Kentucky seeking elevated landscape design and construction.
          </p>
          <p>
            Our team specializes in custom landscaping, hardscaping, and outdoor living solutions that seamlessly blend architectural sophistication with the natural beauty of your surroundings. Each project is a work of art — tailored entirely to your vision.
          </p>
          <p>
            Every photo on this site is a real project — our work, our art. No AI. No stock imagery.
          </p>
          <div style={{marginTop:'36px', display:'flex', gap:'20px', flexWrap:'wrap'}}>
            <Link to="/about" className="btn-main">Our Story</Link>
            <Link to="/showcase" className="btn-link">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ── PROJECT CAROUSEL ── */}
      <section className="section section-warm carousel-section">
        <div className="container">
          <div className="carousel-header reveal">
            <div>
              <span className="eyebrow">Our Portfolio</span>
              <h2 className="section-title">Real Projects. <em>Real Craftsmanship.</em></h2>
            </div>
            <Link to="/showcase" className="btn-link">Full Showcase</Link>
          </div>
        </div>
        <div
          className="carousel-track"
          ref={carouselRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {PROJECTS.map((p, i) => (
            <a
              key={p.id}
              href={p.slug}
              target={p.slug.startsWith('http') ? '_blank' : undefined}
              rel={p.slug.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`pc-card${i === 0 ? ' pc-first' : ''}`}
              style={{backgroundImage:`url(${p.photo})`}}
            >
              <div className="pc-overlay" />
              <div className="pc-content">
                <span className="pc-location">{p.location}</span>
                <h3 className="pc-title">{p.title}</h3>
                <div className="pc-tags">
                  {p.tags.map(t => <span key={t} className="pc-tag">{t}</span>)}
                </div>
              </div>
              <span className="pc-arrow">→</span>
            </a>
          ))}
        </div>
        <div className="carousel-nav container">
          <button
            className="carousel-btn"
            onClick={() => carouselRef.current.scrollBy({left:-420,behavior:'smooth'})}
          >←</button>
          <button
            className="carousel-btn"
            onClick={() => carouselRef.current.scrollBy({left:420,behavior:'smooth'})}
          >→</button>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'56px',flexWrap:'wrap',gap:'24px'}}>
            <div className="reveal">
              <span className="eyebrow">What We Do</span>
              <h2 className="section-title">Our <em>Services</em></h2>
            </div>
            <Link to="/contact" className="btn-main reveal d2">Get a Quote</Link>
          </div>
          <div className="sv-grid">
            {SERVICES.map((s, i) => (
              <Link to={s.slug} key={s.slug} className={`sv-card reveal d${(i%4)+1}`}>
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

      {/* ── AUTHENTICITY STRIP ── */}
      <div className="auth-strip">
        Every image you see is a real project crafted by our team. <strong>We don't use AI-generated or stock photography</strong> — this is our work, our art.
      </div>

      {/* ── FEATURE / MONTGOMERY ── */}
      <section className="feature-section">
        <div className="feature-bg" style={{backgroundImage:`url(${PHOTOS.featureKitchen})`}} />
        <div className="feature-overlay" />
        <div className="feature-content reveal">
          <span className="eyebrow" style={{color:'var(--gold-light)'}}>Featured Project</span>
          <h2 className="section-title" style={{color:'var(--white)'}}>Montgomery <em style={{color:'var(--gold-light)'}}>Entertainment Pavilion</em></h2>
          <p className="feature-desc">
            A blank-slate backyard transformed into an epic outdoor entertainment space — custom paver patio, natural stone seating wall, outdoor kitchen with gas grill & pellet smoker, granite counters, custom cedar hip-and-valley pavilion, fire pit, and accent lighting throughout.
          </p>
          <div className="feature-meta">
            <div><span className="feature-label">Location</span><span>Montgomery, OH</span></div>
            <div><span className="feature-label">Services</span><span>Hardscape · Carpentry · Lighting</span></div>
            <div><span className="feature-label">Materials</span><span>Paver · Natural Stone · Cedar · Granite</span></div>
          </div>
          <a href="https://www.yelandscaping.com/montgomery-entertainment-pavilion-and-patio" target="_blank" rel="noopener noreferrer" className="btn-main">
            View Full Project
          </a>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section section-warm">
        <div className="container">
          <div className="reveal" style={{textAlign:'center',marginBottom:'64px'}}>
            <span className="eyebrow">How It Works</span>
            <h2 className="section-title">Our <em>Design & Build Process</em></h2>
          </div>
          <div className="process-grid">
            {[
              { n:'01', title:'Consultation', desc:'On-site meeting at your Cincinnati or Northern Kentucky property — defining goals, exploring options, and understanding your vision and budget before a line is drawn.' },
              { n:'02', title:'Design', desc:'Scaled 2-D CAD plans with 3-D elevations, detailed estimates, and reference photos — revised until your vision is perfectly captured.' },
              { n:'03', title:'Schedule & Deposit', desc:'After design approval we schedule your project and secure a deposit. You\'ll receive a clear timeline with regular progress updates.' },
              { n:'04', title:'Build', desc:'Barrett or Nathan personally oversees every project. All work performed in-house with minimal disruption — delivered on time and within budget.' },
            ].map((s, i) => (
              <div key={s.n} className={`process-step reveal d${i+1}`}>
                <div className="process-dot">{s.n}</div>
                <h3 className="process-title">{s.title}</h3>
                <p className="process-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GRID ── */}
      <section className="photo-grid-section">
        {[
          { photo: PHOTOS.grid1, label: 'Montgomery Pavilion', span: 'large' },
          { photo: PHOTOS.grid2, label: 'Mariemont Porch', span: '' },
          { photo: PHOTOS.grid3, label: 'Anderson Township Patio', span: '' },
          { photo: PHOTOS.grid4, label: 'Hyde Park Grand Entrance', span: 'wide' },
          { photo: PHOTOS.grid5, label: 'Accent Lighting', span: '' },
        ].map((item, i) => (
          <div key={i} className={`pg-item pg-${item.span || 'std'}`}>
            <img src={item.photo} alt={item.label} loading="lazy" />
            <div className="pg-overlay">
              <span className="pg-label">{item.label}</span>
            </div>
          </div>
        ))}
      </section>

      {/* ── AREAS ── */}
      <section className="section">
        <div className="container">
          <div className="reveal" style={{textAlign:'center',marginBottom:'56px'}}>
            <span className="eyebrow">Where We Work</span>
            <h2 className="section-title">Proudly Serving <em>Cincinnati & Northern Kentucky</em></h2>
          </div>
          <div className="areas-grid">
            <div className="areas-panel reveal">
              <h3 className="areas-panel-title">Cincinnati & Surrounding Communities</h3>
              <div className="areas-pills">
                {CINCINNATI_AREAS.map(a => <span key={a} className="area-pill">{a}</span>)}
              </div>
            </div>
            <div className="areas-panel reveal d2">
              <h3 className="areas-panel-title">Northern Kentucky</h3>
              <div className="areas-pills">
                {NKY_AREAS.map(a => <span key={a} className="area-pill">{a}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS (Elfsight) ── */}
      <section className="section section-warm">
        <div className="container" style={{textAlign:'center'}}>
          <span className="eyebrow">What Our Clients Say</span>
          <h2 className="section-title" style={{marginBottom:'48px'}}>Real Reviews. <em>Real Results.</em></h2>
          <div className="elfsight-app-80ac392a-86dc-4761-88ce-aade40ab1f18" data-elfsight-app-lazy />
        </div>
      </section>

      {/* ── BEFORE/AFTER PLACEHOLDER ── */}
      {/* TODO: Add Elfsight Before/After Slider widget here when ready */}
      {/* <section className="section">
        <div className="container">
          <span className="eyebrow">Transformations</span>
          <h2 className="section-title">Before & <em>After</em></h2>
          <div className="elfsight-app-BEFORE_AFTER_ID" data-elfsight-app-lazy />
        </div>
      </section> */}

      {/* ── TESTIMONIAL ── */}
      <section className="testimonial-section">
        <div className="testimonial-content reveal">
          <span className="testimonial-quote">"</span>
          <p className="testimonial-text">
            Every outdoor space we create is a reflection of our client's vision — built with enduring craftsmanship and the kind of attention to detail that turns a backyard into a legacy.
          </p>
          <cite className="testimonial-cite">Barrett Weckel — Founder, Young Entrepreneur Landscaping LLC</cite>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
