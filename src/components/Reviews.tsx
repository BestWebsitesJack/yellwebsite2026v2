import { useEffect } from 'react'

export default function Reviews() {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')
    if (!existing) {
      const script = document.createElement('script')
      script.src = 'https://elfsightcdn.com/platform.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  return (
    <section className="bg-[#faf8f4] py-24">
      <div className="max-w-7xl mx-auto px-8 max-lg:px-6">
        <div className="eyebrow rv">What Clients Say</div>
        <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light text-[#2d4a26] leading-[1.1] mb-12 rv">
          Real Reviews. <em className="text-[#b8832a]">Real Clients.</em>
        </h2>
        <div className="rv">
          <div className="elfsight-app-80ac392a-86dc-4761-88ce-aade40ab1f18" data-elfsight-app-lazy />
        </div>
      </div>
    </section>
  )
}
