import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#2d4a26] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-10 max-lg:px-6">
        <div className="grid grid-cols-4 gap-16 mb-16 max-lg:grid-cols-2 max-lg:gap-10 max-sm:grid-cols-1">
          <div>
            <img src="/YellLogo.png" alt="Young Entrepreneur Landscaping" className="h-16 w-auto mb-6 brightness-0 invert opacity-90" />
            <p className="text-[.82rem] font-light leading-[1.85] text-white/55 mb-5">
              Cincinnati's premier custom landscaping, hardscaping, and outdoor living company since 2010. Serving Greater Cincinnati and Northern Kentucky.
            </p>
            <p className="text-[.78rem] text-white/55 mb-1">(513) 498-6879</p>
            <p className="text-[.78rem] text-white/55 mb-1">bweckel@yelandscaping.com</p>
            <p className="text-[.78rem] text-white/55">4178 Round Bottom Rd, Newtown OH 45244</p>
          </div>
          <div>
            <h4 className="text-[.62rem] font-semibold tracking-[.2em] uppercase text-[#f5e8cc] mb-6">Services</h4>
            <ul className="list-none flex flex-col gap-3.5">
              {[['Design | Build','/services/design-build'],['Hardscape & Masonry','/services/hardscape-masonry'],['Lawn & Landscape','/services/lawn-landscape'],['Carpentry & Lighting','/services/carpentry-lighting'],['Water Management','/services/water-management'],['Landscape Maintenance','/services/landscape-maintenance']].map(([l,h]) => (
                <li key={h}><Link to={h} className="text-[.8rem] font-light text-white/55 no-underline hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[.62rem] font-semibold tracking-[.2em] uppercase text-[#f5e8cc] mb-6">Company</h4>
            <ul className="list-none flex flex-col gap-3.5">
              {[['About Us','/about'],['Showcase','/showcase'],['FAQ','/faq'],['Contact','/contact']].map(([l,h]) => (
                <li key={h}><Link to={h} className="text-[.8rem] font-light text-white/55 no-underline hover:text-white transition-colors">{l}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[.62rem] font-semibold tracking-[.2em] uppercase text-[#f5e8cc] mb-6">Service Areas</h4>
            <ul className="list-none flex flex-col gap-3.5">
              {['Cincinnati, OH','Hyde Park & Mariemont','Indian Hill','Northern Kentucky','Covington KY','Fort Thomas KY'].map(a => (
                <li key={a}><span className="text-[.8rem] font-light text-white/55">{a}</span></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center pt-8 border-t border-white/10 max-sm:flex-col max-sm:gap-3">
          <span className="text-[.68rem] text-white/35">2026 Young Entrepreneur Landscaping LLC · Cincinnati OH · (513) 498-6879</span>
          <span className="text-[.68rem] text-white/35">Built by <a href="https://www.bestwebsites.tech/" target="_blank" rel="noreferrer" className="text-[#f5e8cc] no-underline">BestWebsites</a></span>
        </div>
      </div>
    </footer>
  )
}
