import { useState, useEffect } from 'react'

export default function PageLoader() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1900)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`page-loader ${loaded ? 'loaded' : ''}`}>
      <div className="loader-brand">Young Entrepreneur Landscaping</div>
      <div className="loader-bar-track">
        <div className="loader-bar" />
      </div>
    </div>
  )
}
