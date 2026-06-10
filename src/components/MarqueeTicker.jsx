import './MarqueeTicker.css'

const ITEMS = [
  'Paver Patios','Retaining Walls','Outdoor Kitchens','Landscape Design',
  'Hardscaping','Pergolas & Decks','Outdoor Lighting','Lawn Care Cincinnati',
  'French Drains','Fire Pits & Fireplaces','Pool Decks','Northern Kentucky',
  'Design Build','Garden Design','Sod Installation','Snow Removal',
]

export default function MarqueeTicker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
