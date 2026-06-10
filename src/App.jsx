import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageLoader from './components/PageLoader'
import CustomCursor from './components/CustomCursor'

// Pages
import Home from './pages/Home'
import Showcase from './pages/Showcase'
import About from './pages/About'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Commercial from './pages/Commercial'
import { DesignBuild, HardscapeMasonry, LawnLandscape, CarpentryLighting, WaterManagement, LandscapeMaintenance } from './pages/ServicePages'
import { HydePark, Mariemont, NorthernKentucky } from './pages/LocationPages'

export default function App() {
  return (
    <BrowserRouter>
      <PageLoader />
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"                      element={<Home />} />
          <Route path="/showcase"              element={<Showcase />} />
          <Route path="/about"                 element={<About />} />
          <Route path="/faq"                   element={<FAQ />} />
          <Route path="/contact"               element={<Contact />} />
          <Route path="/commercial"            element={<Commercial />} />
          <Route path="/design-build"          element={<DesignBuild />} />
          <Route path="/hardscape-masonry"     element={<HardscapeMasonry />} />
          <Route path="/lawn-landscape"        element={<LawnLandscape />} />
          <Route path="/carpentry-lighting"    element={<CarpentryLighting />} />
          <Route path="/water-management"      element={<WaterManagement />} />
          <Route path="/landscape-maintenance" element={<LandscapeMaintenance />} />
          <Route path="/hyde-park"             element={<HydePark />} />
          <Route path="/mariemont"             element={<Mariemont />} />
          <Route path="/northern-kentucky"     element={<NorthernKentucky />} />
          <Route path="*" element={
            <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, padding: '0 24px', textAlign: 'center' }}>
              <h1 style={{ fontFamily: 'Cormorant Garamond', fontSize: '4rem', fontWeight: 300, color: 'var(--green)' }}>404</h1>
              <p style={{ color: 'var(--text-soft)' }}>Page not found.</p>
              <a href="/" className="btn-main green" style={{ marginTop: 8 }}>Back to Home</a>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
