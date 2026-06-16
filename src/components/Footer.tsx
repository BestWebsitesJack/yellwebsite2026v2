import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ background: '#2d4a26', paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '64px', marginBottom: '64px' }} className="max-lg:!grid-cols-2 max-sm:!grid-cols-1">
          <div>
            <img src={`${import.meta.env.BASE_URL}YellLogo.png`} alt="Young Entrepreneur Landscaping" style={{ height: '64px', width: 'auto', marginBottom: '24px', filter: 'brightness(0) invert(1)', opacity: 0.88 }} />
            <p style={{ fontSize: '0.82rem', fontWeight: 300, lineHeight: 1.85, color: 'rgba(255,255,255,0.5)', marginBottom: '20px' }}>
              Cincinnati's premier custom landscaping, hardscaping, and outdoor living company since 2010. Serving Greater Cincinnati and Northern Kentucky.
            </p>
            {['(513) 498-6879','bweckel@yelandscaping.com','4178 Round Bottom Rd, Newtown OH 45244'].map(t => (
              <p key={t} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginBottom: '6px' }}>{t}</p>
            ))}
          </div>
          {[
            { h: 'Services', links: [['Design | Build','/services/design-build'],['Hardscape & Masonry','/services/hardscape-masonry'],['Lawn & Landscape','/services/lawn-landscape'],['Carpentry & Lighting','/services/carpentry-lighting'],['Water Management','/services/water-management'],['Landscape Maintenance','/services/landscape-maintenance']] },
            { h: 'Company', links: [['About Us','/about'],['Showcase','/showcase'],['FAQ','/faq'],['Contact','/contact']] },
            { h: 'Service Areas', links: [['Cincinnati, OH','/'],['Hyde Park & Mariemont','/'],['Indian Hill','/'],['Northern Kentucky','/'],['Covington KY','/'],['Fort Thomas KY','/']] },
          ].map(col => (
            <div key={col.h}>
              <h4 style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#f5e8cc', marginBottom: '24px' }}>{col.h}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map(([l,h]) => (
                  <li key={l}><Link to={h} style={{ fontSize: '0.82rem', fontWeight: 300, color: 'rgba(255,255,255,0.48)', textDecoration: 'none', transition: 'color 0.3s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#ffffff'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.48)'}
                  >{l}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '28px', borderTop: '1px solid rgba(255,255,255,0.08)' }} className="max-sm:!flex-col max-sm:!gap-3">
          <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.32)' }}>2026 Young Entrepreneur Landscaping LLC &middot; Cincinnati OH &middot; (513) 498-6879</span>
          <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.32)' }}>Built by <a href="https://www.bestwebsites.tech/" target="_blank" rel="noreferrer" style={{ color: '#f5e8cc', textDecoration: 'none' }}>BestWebsites</a></span>
        </div>
      </div>
    </footer>
  )
}
