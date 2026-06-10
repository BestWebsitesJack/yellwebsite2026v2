import { Helmet } from 'react-helmet-async'
import ContactSection from '../components/ContactSection'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact & Free Quote | Young Entrepreneur Landscaping Cincinnati</title>
        <meta name="description" content="Get a free landscaping estimate in Cincinnati and Northern Kentucky. Contact Young Entrepreneur Landscaping at (513) 498-6879 or request a quote online." />
        <link rel="canonical" href="https://yelandscaping.com/contact" />
      </Helmet>

      <section style={{paddingTop:'140px',paddingBottom:'32px',paddingLeft:'64px',paddingRight:'64px',background:'var(--warm)'}}>
        <div className="container">
          <span className="eyebrow">Get In Touch</span>
          <h1 className="section-title">Let's Build <em>Something Beautiful</em></h1>
          <p style={{color:'var(--text-soft)',marginTop:'16px',fontSize:'0.95rem',maxWidth:'560px',lineHeight:'1.8'}}>
            Ready to transform your outdoor space? We offer free on-site consultations across all of Greater Cincinnati and Northern Kentucky — no obligation, just great ideas.
          </p>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
