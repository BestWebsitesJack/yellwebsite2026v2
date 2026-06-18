import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectCarousel from '../components/ProjectCarousel'
import ServicesGrid from '../components/ServicesGrid'
import AuthStrip from '../components/AuthStrip'
import Reviews from '../components/Reviews'

const BASE = 'https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/'

const HERO = BASE + 'dae8cfc5-81e7-4f0e-8e8e-bd36f03722e5/thumbnail_IMG_4752.jpg'

const stats = [
  { n: '15+', l: 'Years Serving Cincinnati' },
  { n: '500+', l: 'Projects Completed' },
  { n: '6', l: 'Core Services' },
  { n: 'OH & KY', l: 'Two States Served' },
]

const photoGrid = [
  { img: BASE + 'dae8cfc5-81e7-4f0e-8e8e-bd36f03722e5/thumbnail_IMG_4752.jpg', label: 'Montgomery Pavilion' },
  { img: BASE + 'd8294968-4581-42bf-bae3-26aaa1bcc2d8/thumbnail_IMG_4272.jpg', label: 'Mariemont Porch' },
  { img: BASE + '6b7b2c23-ee42-4a82-928d-ff5ef169b647/IMG_1319.JPG', label: 'Anderson Township' },
  { img: BASE + '0ef20324-954c-4704-94df-52f466a3f375/IMG_2869.jpg', label: 'Hyde Park Entrance' },
  { img: BASE + 'fce6abdd-c9a0-476a-b4d6-fa01dfdfe149/thumbnail_IMG_1333.jpg', label: 'Landscape Lighting' },
]

const cincyAreas = ['Hyde Park','Mariemont','Indian Hill','Anderson Township','Blue Ash','Montgomery','Mason','Madeira','Mt. Lookout','Symmes Township','Oakley','West Chester','Milford','Terrace Park','Newtown']
const nkyAreas = ['Covington KY','Florence KY','Fort Thomas KY','Newport KY','Highland Heights KY','Cold Spring KY','Bellevue KY','Union KY','Villa Hills KY','Erlanger KY','Fort Mitchell KY','Alexandria KY']

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') }), { threshold: 0.08 })
    document.querySelectorAll('.rv').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '760px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>
        <div className="hero-zoom" style={{ position: 'absolute', inset: 0, backgroundImage: `url('${HERO}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,12,8,0.25) 0%, rgba(10,12,8,0.08) 35%, rgba(10,12,8,0.62) 70%, rgba(10,12,8,0.94) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', width: '100%', padding: '0 48px 96px' }}>
          <div className="fade-up-1" style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#f5e8cc', marginBottom: '28px' }}>
            <span style={{ width: '32px', height: '1.5px', background: '#f5e8cc', display: 'inline-block', flexShrink: 0 }} />
            Cincinnati's Premier Landscape Company
          </div>
          <h1 className="fade-up-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(4rem, 8.5vw, 9rem)', fontWeight: 300, lineHeight: 0.92, color: '#ffffff', marginBottom: '36px', letterSpacing: '-0.01em' }}>
            Design.<br /><em style={{ color: '#f5e8cc' }}>Build.</em><br />Maintain.
          </h1>
          <p className="fade-up-3" style={{ fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.78)', maxWidth: '500px', marginBottom: '52px' }}>
            Custom landscape design, hardscaping and outdoor living crafted as art for residential and commercial properties across Greater Cincinnati and Northern Kentucky since 2010.
          </p>
          <div className="fade-up-4" style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <Link to="/contact" style={{ position: 'relative', overflow: 'hidden', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#2d4a26', background: '#ffffff', padding: '18px 48px', textDecoration: 'none', borderRadius: '2px', transition: 'background 0.3s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#f5e8cc'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#ffffff'}
            >Get a Free Quote</Link>
            <Link to="/showcase" style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.88)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid rgba(255,255,255,0.35)', padding: '18px 32px', borderRadius: '2px', transition: 'all 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.7)'; (e.currentTarget as HTMLElement).style.color = '#ffffff' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.35)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.88)' }}
            >View Our Work &rarr;</Link>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ background: '#2d4a26', padding: '18px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <div className="marquee-track">
          {['Paver Patios','Retaining Walls','Outdoor Kitchens','Landscape Design','Hardscaping','Pergolas & Decks','Landscape Lighting','Lawn Care Cincinnati','French Drains','Fire Pits & Fireplaces','Pool Decks','Northern Kentucky',
            'Paver Patios','Retaining Walls','Outdoor Kitchens','Landscape Design','Hardscaping','Pergolas & Decks','Landscape Lighting','Lawn Care Cincinnati','French Drains','Fire Pits & Fireplaces','Pool Decks','Northern Kentucky'].map((item, i) => (
            <span key={i} style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.82)', padding: '0 36px' }}>
              {item} <span style={{ color: 'rgba(255,255,255,0.25)', marginLeft: '36px', fontSize: '0.42rem' }}>&#x2726;</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <div style={{ background: '#ffffff', borderBottom: '2px solid #e8e0d4' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {stats.map((s, i) => (
            <div key={s.n} className={`rv ${i > 0 ? `d${i}` : ''}`} style={{ padding: '52px 0', borderRight: i < 3 ? '1px solid #e8e0d4' : 'none', paddingLeft: i === 0 ? 0 : '40px', transition: 'background 0.3s', cursor: 'default' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#e8f0e4'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3.5rem', fontWeight: 300, color: '#2d4a26', lineHeight: 1, marginBottom: '10px' }}>{s.n}</div>
              <div style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3d362e' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '680px' }} className="max-lg:!grid-cols-1">
        <div style={{ position: 'relative', overflow: 'hidden' }} className="max-lg:h-72 group">
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${BASE}403b6a5a-d4e3-4d88-935f-07d7ea87f68e/IMG_1455.JPG')`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.8s ease' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
          />
          <div style={{ position: 'absolute', bottom: 0, right: 0, background: '#2d4a26', padding: '32px 36px', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem', fontWeight: 300, color: '#ffffff', lineHeight: 1 }}>2010</div>
            <div style={{ fontSize: '0.54rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginTop: '6px' }}>Est. Cincinnati</div>
          </div>
        </div>
        <div style={{ background: '#faf8f4', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ maxWidth: '520px', padding: '80px 80px 80px 72px' }} className="max-lg:!p-8">
            <div className="eyebrow rv">Our Story</div>
            <h2 className="rv" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem,3.8vw,3.4rem)', fontWeight: 300, color: '#2d4a26', lineHeight: 1.15, marginBottom: '28px' }}>
              If you can <em style={{ color: '#b8832a' }}>dream it,</em> we can build it
            </h2>
            <p className="rv" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.92, color: '#3d362e', marginBottom: '20px' }}>
              Since 2010, Young Entrepreneur Landscaping has been the premier choice for residential and commercial clients across Greater Cincinnati and Northern Kentucky seeking elevated landscape design and construction.
            </p>
            <p className="rv" style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.92, color: '#3d362e', marginBottom: '32px' }}>
              Each project is a work of art tailored entirely to your vision, with Barrett or Nathan personally overseeing every build from start to finish.
            </p>
            <div className="rv" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', border: '1.5px solid rgba(184,131,42,0.3)', background: '#f5e8cc', padding: '14px 20px', fontSize: '0.67rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#b8832a', borderRadius: '2px' }}>
              Every photo on this site is a real project. Our work. Our art. No AI. No stock imagery.
            </div>
          </div>
        </div>
      </div>

      <ProjectCarousel />
      <ServicesGrid />
      <AuthStrip />

      {/* ── FEATURE ── */}
      <div style={{ position: 'relative', height: '80vh', minHeight: '600px', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${BASE}bdd88e9d-fe9e-4762-b36f-7cf4395ddcc7/IMG_4909.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(105deg, rgba(10,12,8,0.92) 0%, rgba(10,12,8,0.55) 50%, rgba(10,12,8,0.12) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
          <div className="wrap" style={{ width: '100%' }}>
            <div style={{ maxWidth: '580px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.26em', textTransform: 'uppercase', color: '#f5e8cc', marginBottom: '20px' }}>
                <span style={{ width: '24px', height: '1.5px', background: '#f5e8cc', display: 'inline-block' }} />Featured Project
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem,4.8vw,4.2rem)', fontWeight: 300, color: '#ffffff', lineHeight: 1.08, marginBottom: '20px' }}>
                Montgomery<br /><em style={{ color: '#f5e8cc' }}>Entertainment Pavilion</em>
              </h2>
              <p style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.9, color: 'rgba(255,255,255,0.72)', marginBottom: '32px' }}>
                A blank-slate backyard transformed into an epic outdoor entertainment space. Custom paver patio, natural stone seating wall, outdoor kitchen with gas grill and pellet smoker, granite counters, custom cedar pavilion, fire pit, and accent lighting throughout.
              </p>
              <div style={{ display: 'flex', gap: '40px', marginBottom: '36px', flexWrap: 'wrap' }}>
                {[['Location','Montgomery, OH'],['Services','Hardscape, Carpentry, Lighting'],['Materials','Paver, Stone, Cedar, Granite']].map(([l,v]) => (
                  <div key={l}>
                    <div style={{ fontSize: '0.56rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#f5e8cc', marginBottom: '6px' }}>{l}</div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 300, color: '#ffffff' }}>{v}</div>
                  </div>
                ))}
              </div>
              <Link to="/showcase" style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#2d4a26', background: '#ffffff', padding: '18px 44px', textDecoration: 'none', borderRadius: '2px', transition: 'background 0.3s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#f5e8cc'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#ffffff'}
              >View Full Project</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── PROCESS ── */}
      <section className="sec" style={{ background: '#faf8f4' }}>
        <div className="wrap">
          <div className="eyebrow rv">How It Works</div>
          <h2 className="rv" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem,4vw,3.8rem)', fontWeight: 300, color: '#2d4a26', lineHeight: 1.1, marginBottom: '80px' }}>
            Our <em style={{ color: '#b8832a' }}>Design and Build Process</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '48px', position: 'relative' }} className="max-lg:!grid-cols-2">
            <div style={{ position: 'absolute', top: '24px', left: '12.5%', right: '12.5%', height: '1.5px', background: '#e8e0d4' }} className="max-lg:hidden" />
            {[
              ['01','Consultation','On-site meeting at your property to define goals, explore design options, and understand your vision before a single line is drawn.'],
              ['02','Design','Scaled 2-D CAD plans with 3-D elevations, detailed estimates, and reference photos — revised until your vision is perfectly captured.'],
              ['03','Schedule','After design approval we schedule your project and secure a deposit with a clear timeline and regular progress updates.'],
              ['04','Build','Barrett or Nathan personally oversees every project. All work performed in-house with minimal disruption, on time and within budget.'],
            ].map(([num, title, desc], i) => (
              <div key={num} className={`rv ${i > 0 ? `d${i}` : ''}`}>
                <div style={{ width: '52px', height: '52px', border: '2px solid #e8e0d4', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '28px', background: '#faf8f4', transition: 'border-color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = '#2d4a26'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = '#e8e0d4'}
                >
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 300, color: '#2d4a26' }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontWeight: 300, color: '#2d4a26', marginBottom: '14px' }}>{title}</h3>
                <p style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.88, color: '#3d362e' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO GRID ── */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gridTemplateRows: '300px 300px', gap: '4px', background: '#e8e0d4' }} className="max-lg:!grid-cols-2">
        {photoGrid.map((p, i) => (
          <div key={i} style={{ position: 'relative', overflow: 'hidden', gridColumn: i === 0 ? 'span 2' : i === 3 ? 'span 2' : 'span 1', gridRow: i === 0 ? 'span 2' : 'span 1' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${p.img}')`, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'transform 0.7s ease' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.06)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,12,8,0)', transition: 'background 0.4s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(10,12,8,0.38)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(10,12,8,0)'}
            />
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', opacity: 0, transform: 'translateY(8px)', transition: 'all 0.4s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >
              <span style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#ffffff', background: 'rgba(10,12,8,0.65)', padding: '6px 14px', borderRadius: '2px' }}>{p.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── AREAS ── */}
      <section className="sec" style={{ background: '#ffffff' }}>
        <div className="wrap">
          <div className="eyebrow rv">Where We Work</div>
          <h2 className="rv" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem,4vw,3.8rem)', fontWeight: 300, color: '#2d4a26', lineHeight: 1.1, marginBottom: '56px' }}>
            Proudly Serving <em style={{ color: '#b8832a' }}>Cincinnati and Northern Kentucky</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="max-lg:!grid-cols-1">
            {[
              { region: 'Greater Cincinnati, Ohio', title: 'Cincinnati and Surrounding Communities', areas: cincyAreas },
              { region: 'Northern Kentucky', title: 'Across the River and Beyond', areas: nkyAreas },
            ].map((panel, i) => (
              <div key={panel.region} className={`rv ${i > 0 ? 'd1' : ''}`} style={{ background: '#faf8f4', padding: '52px 48px', border: '1.5px solid #e8e0d4', borderRadius: '3px', transition: 'border-color 0.3s, background 0.3s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2d4a26'; (e.currentTarget as HTMLElement).style.background = '#e8f0e4' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e8e0d4'; (e.currentTarget as HTMLElement).style.background = '#faf8f4' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#b8832a', marginBottom: '16px' }}>
                  <span style={{ width: '20px', height: '1.5px', background: '#b8832a', display: 'inline-block' }} />{panel.region}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 300, color: '#2d4a26', marginBottom: '24px', lineHeight: 1.2 }}>{panel.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {panel.areas.map(a => (
                    <span key={a} style={{ fontSize: '0.72rem', color: '#3d362e', background: '#ffffff', padding: '8px 16px', border: '1.5px solid #e8e0d4', borderRadius: '20px', transition: 'all 0.3s', cursor: 'default' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#2d4a26'; (e.currentTarget as HTMLElement).style.color = '#2d4a26'; (e.currentTarget as HTMLElement).style.background = '#e8f0e4' }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e8e0d4'; (e.currentTarget as HTMLElement).style.color = '#3d362e'; (e.currentTarget as HTMLElement).style.background = '#ffffff' }}
                    >{a}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      {/* ── TESTIMONIAL ── */}
      <div style={{ background: '#2d4a26', padding: '140px 0' }}>
        <div className="wrap" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '8rem', fontWeight: 300, color: 'rgba(255,255,255,0.06)', lineHeight: 0.6, marginBottom: '16px' }}>"</div>
          <p className="rv" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3.2vw,3rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.62, color: '#ffffff', marginBottom: '40px' }}>
            Every outdoor space we create is a reflection of our client's vision, built with enduring craftsmanship and the kind of attention to detail that turns a backyard into a legacy.
          </p>
          <div className="rv d1" style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
            Barrett Weckel, Founder, Young Entrepreneur Landscaping LLC
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="max-lg:!grid-cols-1">
        <div style={{ background: '#f2ede4', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ maxWidth: '520px', padding: '100px 80px' }} className="max-lg:!p-8">
            <div className="eyebrow">Get In Touch</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem,3.8vw,3.4rem)', fontWeight: 300, color: '#2d4a26', lineHeight: 1.15, marginBottom: '20px' }}>
              Let's Build <em style={{ color: '#b8832a' }}>Something Beautiful</em>
            </h2>
            <p style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.92, color: '#3d362e', marginBottom: '40px' }}>
              Ready to transform your outdoor space? Contact us for a free on-site consultation, no obligation, just great ideas for your property.
            </p>
            {[['Phone','(513) 498-6879','tel:5134986879'],['Email','bweckel@yelandscaping.com','mailto:bweckel@yelandscaping.com'],['Instagram','@youngentrepreneur_landscaping','https://www.instagram.com/youngentrepreneur_landscaping/']].map(([l,v,href]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '18px' }}>
                <span style={{ fontSize: '0.58rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2d4a26', minWidth: '72px' }}>{l}</span>
                <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ fontSize: '0.88rem', color: '#2a2520', textDecoration: 'none', transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#2d4a26'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#2a2520'}
                >{v}</a>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: '#2d4a26', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ maxWidth: '520px', padding: '100px 80px' }} className="max-lg:!p-8">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem', fontWeight: 300, color: '#ffffff', lineHeight: 1.12, marginBottom: '16px' }}>
              Free <em style={{ color: '#f5e8cc' }}>Consultation</em>
            </h2>
            <p style={{ fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.88, color: 'rgba(255,255,255,0.6)', marginBottom: '32px' }}>
              Tell us about your project and we will schedule a free on-site visit. Serving Greater Cincinnati and Northern Kentucky since 2010.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {['Your Name','Email Address','Phone Number'].map(ph => (
                <input key={ph} type="text" placeholder={ph} style={{ width: '100%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', color: '#ffffff', padding: '16px 20px', fontSize: '0.9rem', borderRadius: '2px', outline: 'none', transition: 'border-color 0.3s' }}
                  onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = '#f5e8cc'}
                  onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)'}
                />
              ))}
              <select style={{ width: '100%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.55)', padding: '16px 20px', fontSize: '0.9rem', borderRadius: '2px', outline: 'none' }}>
                <option value="">Select a Service</option>
                <option>Design | Build</option>
                <option>Hardscape &amp; Masonry</option>
                <option>Lawn &amp; Landscape</option>
                <option>Carpentry &amp; Lighting</option>
                <option>Water Management</option>
                <option>Landscape Maintenance</option>
              </select>
              <textarea placeholder="Tell us about your project..." rows={4} style={{ width: '100%', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', color: '#ffffff', padding: '16px 20px', fontSize: '0.9rem', borderRadius: '2px', outline: 'none', resize: 'none', transition: 'border-color 0.3s', fontFamily: "'DM Sans', sans-serif" }}
                onFocus={e => (e.currentTarget as HTMLElement).style.borderColor = '#f5e8cc'}
                onBlur={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.18)'}
              />
              <button style={{ width: '100%', fontSize: '0.74rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#2d4a26', background: '#ffffff', padding: '18px', borderRadius: '2px', border: 'none', cursor: 'pointer', marginTop: '8px', transition: 'background 0.3s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#f5e8cc'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#ffffff'}
              >Request a Free Quote</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
