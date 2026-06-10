import { Link } from 'react-router-dom'
import { CONTACT } from '../data/site'

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-left">
        <span className="eyebrow" style={{color:'var(--gold-light)'}}>Get In Touch</span>
        <h2 className="section-title" style={{color:'var(--white)'}}>Let's Build <em style={{color:'var(--gold-light)'}}>Something Beautiful</em></h2>
        <p className="contact-sub">
          Ready to transform your outdoor space? Contact us for a free on-site consultation — no obligation, just great ideas for your property.
        </p>
        <div className="contact-details">
          <a href={`tel:${CONTACT.phoneRaw}`} className="contact-detail">
            <span className="contact-detail-label">Phone</span>
            <span className="contact-detail-value">{CONTACT.phone}</span>
          </a>
          <a href={`mailto:${CONTACT.email}`} className="contact-detail">
            <span className="contact-detail-label">Email</span>
            <span className="contact-detail-value">{CONTACT.email}</span>
          </a>
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="contact-detail">
            <span className="contact-detail-label">Instagram</span>
            <span className="contact-detail-value">@youngentrepreneur_landscaping</span>
          </a>
          <div className="contact-detail">
            <span className="contact-detail-label">Address</span>
            <span className="contact-detail-value">{CONTACT.address}</span>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <span className="eyebrow" style={{color:'var(--gold-light)'}}>Free Consultation</span>
        <h3 className="contact-form-title">Free <em>Consultation</em></h3>
        <p className="contact-form-sub">
          Tell us about your project and we'll schedule a free on-site visit. Serving Greater Cincinnati and Northern Kentucky since 2010.
        </p>

        {/* WEB3FORMS EMBED — replace ACCESS_KEY below with your Web3Forms key */}
        {/* Web3Forms: https://web3forms.com/ — free, no backend needed */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-form"
        >
          <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
          <input type="hidden" name="subject" value="Free Landscape Consultation Request — YEL Website" />
          <input type="hidden" name="redirect" value="https://yelandscaping.com/contact?sent=1" />

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input type="text" name="first_name" required className="form-input" placeholder="Barrett" />
            </div>
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input type="text" name="last_name" required className="form-input" placeholder="Weckel" />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input type="email" name="email" required className="form-input" placeholder="you@example.com" />
          </div>
          <div className="form-group">
            <label className="form-label">Phone</label>
            <input type="tel" name="phone" className="form-input" placeholder="(513) 000-0000" />
          </div>
          <div className="form-group">
            <label className="form-label">Service</label>
            <select name="service" className="form-input">
              <option value="">Select a service...</option>
              <option>Design | Build</option>
              <option>Hardscape & Masonry</option>
              <option>Lawn & Landscape</option>
              <option>Carpentry & Lighting</option>
              <option>Water Management</option>
              <option>Landscape Maintenance</option>
              <option>Not sure yet</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Tell us about your project</label>
            <textarea name="message" rows="4" className="form-input form-textarea" placeholder="Describe your project, timeline, and any questions..." />
          </div>
          <button type="submit" className="btn-main" style={{width:'100%', justifyContent:'center'}}>
            Request Free Quote
          </button>
        </form>
      </div>
    </section>
  )
}
