import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Work', href: '/showcase' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => setOpen(false), [location])

  const light = !scrolled && isHome

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${!light ? 'bg-[#faf8f4]/97 backdrop-blur-md border-b border-[#e8e0d4] shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-4 max-lg:px-6">
        <Link to="/" className="no-underline flex-shrink-0">
          <img
            src="/YellLogo.png"
            alt="Young Entrepreneur Landscaping"
            className={`h-16 w-auto transition-all duration-400 ${light ? 'brightness-0 invert' : 'brightness-100'}`}
          />
        </Link>
        <ul className="flex gap-12 list-none max-lg:hidden">
          {links.map(l => (
            <li key={l.href}>
              <Link
                to={l.href}
                className={`text-[.78rem] font-medium tracking-[.12em] uppercase no-underline transition-colors relative group ${light ? 'text-white/85 hover:text-white' : 'text-[#6b6258] hover:text-[#2d4a26]'}`}
              >
                {l.label}
                <span className={`absolute -bottom-1 left-0 right-0 h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${light ? 'bg-white' : 'bg-[#2d4a26]'}`} />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className={`text-[.75rem] font-semibold tracking-[.12em] uppercase px-8 py-3.5 no-underline rounded-sm transition-all max-lg:hidden ${light ? 'text-[#2d4a26] bg-white hover:bg-[#f5e8cc]' : 'text-white bg-[#2d4a26] hover:bg-[#3d6334]'}`}
        >
          Free Quote
        </Link>
        <button className={`hidden max-lg:flex ${light ? 'text-white' : 'text-[#2d4a26]'}`} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="hidden max-lg:flex flex-col bg-[#faf8f4] border-t border-[#e8e0d4] px-6 py-6 gap-5">
          {links.map(l => (
            <Link key={l.href} to={l.href} className="text-[.85rem] font-medium tracking-[.1em] uppercase text-[#2d4a26] no-underline">{l.label}</Link>
          ))}
          <Link to="/contact" className="text-[.78rem] font-semibold tracking-[.1em] uppercase text-white bg-[#2d4a26] px-6 py-3.5 text-center no-underline rounded-sm">Free Quote</Link>
        </div>
      )}
    </nav>
  )
}
