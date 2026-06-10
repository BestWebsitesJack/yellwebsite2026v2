import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import useReveal from '../components/useReveal'
import { PHOTOS, CONTACT } from '../data/site'

export default function About() {
  useReveal()
  return (
    <>
      <Helmet>
        <title>About Young Entrepreneur Landscaping | Cincinnati Since 2010</title>
        <meta name="description" content="Learn about Young Entrepreneur Landscaping — Cincinnati's premier landscaping company since 2010. Meet Barrett Weckel and our team. Real work, real craftsmanship." />
        <link rel="canonical" href="https://yelandscaping.com/about" />
      </Helmet>

      <div className="page-hero">
        <div className="page-hero-bg" style={{backgroundImage:`url(${PHOTOS.about})`}} />
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <span className="eyebrow" style={{color:'var(--gold-light)'}}>Our Story</span>
          <h1>Cincinnati's Premier <em>Landscaping Company</em></h1>
          <p>Crafting exceptional outdoor spaces across Greater Cincinnati and Northern Kentucky since 2010.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'80px',alignItems:'center'}}>
            <div className="reveal">
              <span className="eyebrow">Since 2010</span>
              <h2 className="section-title">"If you can <em>dream it,</em> we can build it"</h2>
              <p style={{color:'var(--text-soft)',marginTop:'20px',lineHeight:'1.9'}}>
                Since 2010, Young Entrepreneur Landscaping has been the premier choice for residential and commercial clients across Greater Cincinnati and Northern Kentucky seeking elevated landscape design and construction.
              </p>
              <p style={{color:'var(--text-soft)',marginTop:'16px',lineHeight:'1.9'}}>
                Our team specializes in custom landscaping, hardscaping, and outdoor living solutions that seamlessly blend architectural sophistication with the natural beauty of your surroundings.
              </p>
              <p style={{color:'var(--text-soft)',marginTop:'16px',lineHeight:'1.9'}}>
                Every photo on this site is a real project — our work, our art. No AI images. No stock photography. What you see is what we build.
              </p>
              <Link to="/contact" className="btn-main" style={{marginTop:'32px'}}>Work With Us</Link>
            </div>
            <div className="reveal d2">
              <img
                src={PHOTOS.hero}
                alt="Young Entrepreneur Landscaping team project"
                style={{width:'100%',height:'520px',objectFit:'cover',borderRadius:'var(--radius)'}}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-green">
        <div className="container" style={{textAlign:'center',maxWidth:'720px',margin:'0 auto'}}>
          <span className="eyebrow" style={{color:'var(--gold-light)'}}>Our Commitment</span>
          <h2 className="section-title" style={{color:'var(--white)',marginBottom:'24px'}}>Real Work. <em style={{color:'var(--gold-light)'}}>Real Art.</em></h2>
          <p style={{color:'rgba(255,255,255,0.8)',fontSize:'1rem',lineHeight:'1.85'}}>
            We don't use AI-generated images. We don't use stock photography. Every single photo on this website and all our marketing materials shows a real project we completed for a real client. That's our promise — and our pride.
          </p>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'56px'}}>
            <span className="eyebrow">By the Numbers</span>
            <h2 className="section-title">15+ Years of <em>Excellence</em></h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'2px',background:'var(--stone)'}}>
            {[
              {num:'2010',label:'Founded in Cincinnati'},
              {num:'500+',label:'Projects Completed'},
              {num:'15+',label:'Years of Experience'},
              {num:'OH & KY',label:'States Served'},
            ].map(s=>(
              <div key={s.num} style={{background:'var(--white)',padding:'40px',textAlign:'center'}}>
                <div style={{fontFamily:'var(--font-display)',fontSize:'3rem',fontWeight:'300',color:'var(--green)',lineHeight:'1'}}>{s.num}</div>
                <div style={{fontSize:'0.65rem',fontWeight:'600',letterSpacing:'0.18em',textTransform:'uppercase',color:'var(--text-soft)',marginTop:'12px'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
