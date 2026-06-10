import { Link } from 'react-router-dom'
import { CONTACT } from '../data/site'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-brand">
          <img
            src="https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/eb368ac6-1a5c-4992-a696-bbd5917779cd/YellLogo.png?format=300w"
            alt="Young Entrepreneur Landscaping"
            className="footer-logo"
          />
          <p className="footer-tagline">
            Cincinnati's premier custom landscaping, hardscaping, and outdoor living company since 2010.
            Serving Greater Cincinnati and Northern Kentucky.
          </p>
          <div className="footer-socials">
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="footer-social">Instagram</a>
            <a href={`mailto:${CONTACT.email}`} className="footer-social">Email</a>
            <a href={`tel:${CONTACT.phoneRaw}`} className="footer-social">{CONTACT.phone}</a>
          </div>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <Link to="/design-build" className="footer-link">Design | Build</Link>
          <Link to="/hardscape-masonry" className="footer-link">Hardscape & Masonry</Link>
          <Link to="/lawn-landscape" className="footer-link">Lawn & Landscape</Link>
          <Link to="/carpentry-lighting" className="footer-link">Carpentry & Lighting</Link>
          <Link to="/water-management" className="footer-link">Water Management</Link>
          <Link to="/landscape-maintenance" className="footer-link">Landscape Maintenance</Link>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Company</h4>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/showcase" className="footer-link">Showcase</Link>
          <Link to="/commercial" className="footer-link">Commercial</Link>
          <Link to="/faq" className="footer-link">FAQ</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Service Areas</h4>
          <Link to="/hyde-park" className="footer-link">Hyde Park, OH</Link>
          <Link to="/mariemont" className="footer-link">Mariemont, OH</Link>
          <Link to="/northern-kentucky" className="footer-link">Northern Kentucky</Link>
          <span className="footer-link-plain">Indian Hill</span>
          <span className="footer-link-plain">Anderson Township</span>
          <span className="footer-link-plain">Montgomery, OH</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner container">
          <span>© {new Date().getFullYear()} Young Entrepreneur Landscaping LLC · Cincinnati OH</span>
          <span>{CONTACT.address}</span>
          <a href="https://www.bestwebsites.tech/" target="_blank" rel="noopener noreferrer" className="footer-credit">
            Built by BestWebsites
          </a>
        </div>
      </div>
    </footer>
  )
}
