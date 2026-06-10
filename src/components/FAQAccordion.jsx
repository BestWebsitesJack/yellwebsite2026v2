import { useState } from 'react'

export default function FAQAccordion({ faqs }) {
  const [open, setOpen] = useState(null)

  return (
    <div>
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
          <button
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {faq.q}
            <span className="faq-icon">+</span>
          </button>
          <div
            className="faq-answer"
            style={{ maxHeight: open === i ? '400px' : '0' }}
          >
            <div className="faq-answer-inner">{faq.a}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
