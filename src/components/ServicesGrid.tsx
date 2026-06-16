import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function ServicesGrid() {
  return (
    <section className="sec" style={{ background: '#ffffff' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div className="eyebrow rv">What We Do</div>
            <h2 className="rv" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem,4vw,3.8rem)', fontWeight: 300, color: '#2d4a26', lineHeight: 1.1 }}>
              Our <em style={{ color: '#b8832a' }}>Services</em>
            </h2>
          </div>
          <Link to="/contact" className="rv" style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b6258', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#2d4a26'; (e.currentTarget as HTMLElement).style.gap = '16px' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#6b6258'; (e.currentTarget as HTMLElement).style.gap = '8px' }}
          >Get a Quote &rarr;</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="max-lg:!grid-cols-1">
          {services.map((s, i) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className={`rv ${i > 0 ? `d${Math.min(i,4)}` : ''}`} style={{ padding: '48px 44px', background: '#faf8f4', textDecoration: 'none', display: 'block', borderRadius: '3px', position: 'relative', overflow: 'hidden', transition: 'background 0.35s', border: '1.5px solid transparent' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#e8f0e4'; (e.currentTarget as HTMLElement).style.borderColor = '#2d4a26' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#faf8f4'; (e.currentTarget as HTMLElement).style.borderColor = 'transparent' }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '4rem', fontWeight: 300, color: 'rgba(45,74,38,0.08)', lineHeight: 1, marginBottom: '20px' }}>{s.number}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.55rem', fontWeight: 300, color: '#2d4a26', marginBottom: '14px', lineHeight: 1.25 }}>{s.name}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                {s.keywords.map(k => <span key={k} style={{ fontSize: '0.56rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7a9468', border: '1px solid rgba(122,148,104,0.3)', padding: '4px 10px', borderRadius: '2px' }}>{k}</span>)}
              </div>
              <p style={{ fontSize: '0.88rem', fontWeight: 300, lineHeight: 1.85, color: '#6b6258', marginBottom: '22px' }}>{s.description}</p>
              <div style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b8832a', display: 'flex', alignItems: 'center', gap: '8px', transition: 'gap 0.3s' }}>
                Explore Service &rarr;
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
