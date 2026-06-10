import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import useReveal from '../components/useReveal'
import { PROJECTS, PHOTOS } from '../data/site'

export default function Showcase() {
  useReveal()
  return (
    <>
      <Helmet>
        <title>Project Showcase | Young Entrepreneur Landscaping Cincinnati</title>
        <meta name="description" content="View real landscaping, hardscaping, and outdoor living projects by Young Entrepreneur Landscaping across Cincinnati and Northern Kentucky. Every photo is our real work — no AI, no stock imagery." />
        <link rel="canonical" href="https://yelandscaping.com/showcase" />
      </Helmet>

      <div className="page-hero">
        <div className="page-hero-bg" style={{backgroundImage:`url(${PHOTOS.showcase})`}} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow" style={{color:'var(--gold-light)'}}>Our Portfolio</span>
          <h1>Real Projects. <em>Real Craftsmanship.</em></h1>
          <p>Every photo you see is a real project built by our team. No AI. No stock imagery. This is our work — our art.</p>
        </div>
      </div>

      <div className="auth-strip">
        Every image on this page is a <strong>real project by our team.</strong> No AI images. No stock photography.
      </div>

      <section className="section">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'24px'}}>
            {PROJECTS.map(p => (
              <a
                key={p.id}
                href={p.slug.startsWith('http') ? p.slug : '#'}
                target={p.slug.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="reveal"
                style={{display:'block',position:'relative',overflow:'hidden',borderRadius:'var(--radius)',textDecoration:'none'}}
              >
                <img
                  src={p.photo}
                  alt={`${p.title} — ${p.location}`}
                  style={{width:'100%',height:'360px',objectFit:'cover',display:'block',transition:'transform 0.5s ease'}}
                  onMouseEnter={e=>e.currentTarget.style.transform='scale(1.04)'}
                  onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
                />
                <div style={{padding:'24px',background:'var(--white)',borderBottom:'3px solid var(--green)'}}>
                  <span style={{fontSize:'0.62rem',fontWeight:'600',letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--gold)'}}>
                    {p.location}
                  </span>
                  <h3 style={{fontFamily:'var(--font-display)',fontSize:'1.4rem',fontWeight:'400',color:'var(--text)',margin:'6px 0 12px'}}>
                    {p.title}
                  </h3>
                  <div style={{display:'flex',flexWrap:'wrap',gap:'6px'}}>
                    {p.tags.map(t => (
                      <span key={t} style={{background:'var(--green-light)',color:'var(--green)',padding:'3px 10px',fontSize:'0.62rem',fontWeight:'600',letterSpacing:'0.1em',textTransform:'uppercase'}}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div style={{textAlign:'center',marginTop:'64px',padding:'48px',background:'var(--warm)',border:'var(--border)'}}>
            <span className="eyebrow">More Projects</span>
            <h2 className="section-title" style={{marginBottom:'16px'}}>See More on <em>Our Full Gallery</em></h2>
            <p style={{color:'var(--text-soft)',marginBottom:'28px',fontSize:'0.9rem'}}>
              View our complete project gallery on our main website.
            </p>
            <a href="https://www.yelandscaping.com/showcase" target="_blank" rel="noopener noreferrer" className="btn-main">
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
