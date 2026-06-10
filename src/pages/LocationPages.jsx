import LocationPage from '../components/LocationPage'
import { PHOTOS } from '../data/siteData'

const LOCATIONS = {
  hydePark: {
    name: 'Hyde Park',
    slug: '/hyde-park',
    eyebrow: 'Hyde Park, Cincinnati OH',
    seoTitle: 'Landscaping Hyde Park OH | Paver Patios & Hardscaping',
    description: "Hyde Park's premier landscaping contractor. Custom paver patios, retaining walls, outdoor kitchens, and landscape design for Hyde Park Cincinnati since 2010.",
    hero: PHOTOS.hydePark,
    keywords: ['landscaping hyde park oh', 'landscapers hyde park oh', 'paver patio hyde park', 'hardscaping hyde park cincinnati', 'best landscaping company hyde park cincinnati'],
    body: [
      "Hyde Park is one of Cincinnati's most distinguished neighborhoods, with tree-lined streets, historic architecture, and homeowners who take pride in every detail of their property — including the outdoors. Young Entrepreneur Landscaping has been the trusted landscaping partner for Hyde Park residents since 2010.",
      "We design and build custom paver patios, retaining walls, outdoor kitchens, landscape lighting, and complete outdoor living transformations throughout Hyde Park and the surrounding East Side communities. Our portfolio includes some of the most recognized outdoor spaces in the neighborhood.",
      "Every project in Hyde Park starts with an on-site consultation and ends with Barrett or Nathan personally signing off on the finished work. No subcontractors. No shortcuts.",
    ],
    faqs: [
      { q: 'Do you serve all of Hyde Park?', a: 'Yes — we serve the entire Hyde Park area including the neighborhood surrounding Hyde Park Square, the Columbia Parkway corridor, and adjacent communities including Oakley, Mt. Lookout, and Mariemont.' },
      { q: 'What types of projects do you do in Hyde Park?', a: 'We handle everything from full backyard transformations to paver patio installations, retaining walls, outdoor kitchens, landscape lighting, and lawn care programs for Hyde Park properties.' },
      { q: 'How do I get a free estimate in Hyde Park?', a: 'Call us at (513) 498-6879 or use our contact form. We schedule an on-site consultation at your Hyde Park property at no charge.' },
    ],
  },

  mariemont: {
    name: 'Mariemont',
    slug: '/mariemont',
    eyebrow: 'Mariemont, Cincinnati OH',
    seoTitle: 'Landscaping Mariemont OH | Porch, Patio & Garden Design',
    description: "Mariemont's trusted landscaping company. Custom landscape design, porch additions, bluestone patios, and hardscaping for Mariemont Cincinnati properties since 2010.",
    hero: PHOTOS.mariemont,
    keywords: ['landscapers mariemont oh', 'landscaping mariemont cincinnati', 'patio builder mariemont oh', 'hardscaping mariemont', 'landscape design mariemont cincinnati'],
    body: [
      "Mariemont is a garden village by design — its English-style architecture and mature landscaping set expectations that outdoor spaces must be thoughtful, well-crafted, and lasting. Young Entrepreneur Landscaping has been working with Mariemont homeowners since 2010, and our Mariemont projects are some of our most celebrated work.",
      "Our Mariemont Porch & Bluestone Patio project is a signature example of what we do: reclaimed brick, hand-cut bluestone, a gabled porch, and carefully selected plantings that honor the character of the neighborhood while transforming how the family uses their home.",
      "We understand what Mariemont properties deserve and we bring that understanding to every consultation, design, and build.",
    ],
    faqs: [
      { q: 'Have you worked on Mariemont properties before?', a: 'Yes — we have completed multiple projects in Mariemont including our featured Mariemont Porch & Bluestone Patio project. We understand the architectural character of the village and design accordingly.' },
      { q: 'Can you match the character of Mariemont architecture?', a: 'Absolutely. We specialize in traditional materials like reclaimed brick, natural bluestone, and fieldstone that complement Mariemont\'s English village aesthetic.' },
      { q: 'Do you do garden design in Mariemont?', a: 'Yes — we design and install planting beds, garden spaces, and full landscape plans that complement the horticultural tradition Mariemont is known for.' },
    ],
  },

  northernKentucky: {
    name: 'Northern Kentucky',
    slug: '/northern-kentucky',
    eyebrow: 'Northern Kentucky · Covington · Fort Thomas · Florence',
    seoTitle: 'Landscaping Northern Kentucky | Cincinnati Landscaper Serving NKY',
    description: 'Premier landscaping contractor serving Northern Kentucky including Covington, Fort Thomas, Florence, Newport, Highland Heights, and surrounding communities since 2010.',
    hero: PHOTOS.carousel4,
    keywords: [
      'landscaping northern kentucky', 'lawn care northern kentucky',
      'landscaping covington ky', 'landscaping fort thomas ky', 'landscaping florence ky',
      'landscaping newport ky', 'landscaping highland heights ky', 'landscaping union ky',
    ],
    body: [
      "Young Entrepreneur Landscaping serves the full Northern Kentucky region — from Covington and Newport right across the river, to Fort Thomas, Highland Heights, Florence, Cold Spring, Union, Villa Hills, and beyond. We've been completing projects on both sides of the Ohio since 2010.",
      "Northern Kentucky homeowners demand the same quality and craftsmanship as their Cincinnati neighbors, and that's exactly what we deliver. Whether you're in a historic Covington row house with a tight urban lot or a spacious Fort Thomas property with rolling terrain, we design and build outdoor spaces tailored to your site and vision.",
      "We are fully licensed to operate in both Ohio and Kentucky, so there are no complications with permits or insurance for NKY projects.",
    ],
    faqs: [
      { q: 'Are you licensed to work in Kentucky?', a: 'Yes — we are licensed and insured to operate in both Ohio and Kentucky. We handle all necessary permits for Northern Kentucky projects.' },
      { q: 'Which Northern Kentucky cities do you serve?', a: 'We serve Covington, Newport, Fort Thomas, Florence, Highland Heights, Cold Spring, Bellevue, Union, Villa Hills, Erlanger, Fort Mitchell, Alexandria, and surrounding NKY communities.' },
      { q: 'Is there a travel fee for Northern Kentucky?', a: 'No — Northern Kentucky is a regular part of our service area. There are no additional travel charges for NKY projects.' },
    ],
  },
}

export function HydePark()         { return <LocationPage location={LOCATIONS.hydePark} /> }
export function Mariemont()        { return <LocationPage location={LOCATIONS.mariemont} /> }
export function NorthernKentucky() { return <LocationPage location={LOCATIONS.northernKentucky} /> }
