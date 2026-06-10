// ─── SQUARESPACE CDN BASE ─────────────────────────────────────────────────────
const CDN = 'https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/'

export const LOGO = `${CDN}eb368ac6-1a5c-4992-a696-bbd5917779cd/YellLogo.png?format=400w`

// ─── PHOTOS ───────────────────────────────────────────────────────────────────
export const PHOTOS = {
  hero:       `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/thumbnail_IMG_4752.jpg`,
  about:      `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_1455.JPG`,
  carousel1:  `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/thumbnail_IMG_4752.jpg`,
  carousel2:  `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_1441.JPG`,
  carousel3:  `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_1430.JPG`,
  carousel4:  `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/background.JPG`,
  carousel5:  `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/Kalmbach.jpg`,
  carousel6:  `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_4909.jpg`,
  feature:    `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_4909.jpg`,
  grid1:      `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_5259.jpg`,
  grid2:      `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/thumbnail_IMG_4272.jpg`,
  grid3:      `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_1319.JPG`,
  grid4:      `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_2869.jpg`,
  grid5:      `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/thumbnail_IMG_1333.jpg`,
  mariemont:  `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_1441.JPG`,
  hydePark:   `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_1430.JPG`,
  anderson:   `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/background.JPG`,
  lighting:   `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/thumbnail_IMG_1333.jpg`,
  kitchen:    `${CDN}c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_4909.jpg`,
}

// ─── SERVICES ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    num: '01',
    title: 'Design | Build',
    slug: '/design-build',
    tags: ['CAD Design', '3D Elevations', 'Full Build'],
    description: 'From scaled CAD plans and 3-D elevations to complete in-house construction — Barrett or Nathan personally oversees every project from concept to completion.',
    keywords: ['landscape design cincinnati', 'design build landscaping cincinnati', 'custom landscaping cincinnati'],
    hero: PHOTOS.hero,
    body: `Our Design | Build service is the foundation of everything we do. We begin with an in-depth consultation at your property, learning your vision, lifestyle, and budget. From there, our team develops detailed CAD drawings and 3-D renderings so you can visualize the finished space before a single stone is moved.\n\nEvery project is built in-house by our own crew — no subcontractors, no surprises. Barrett or Nathan is on-site throughout the build, ensuring craftsmanship meets our exacting standards from day one to the final walkthrough.`,
    faqs: [
      { q: 'Do you handle both design and construction?', a: 'Yes — we are a true design-build firm. Our team handles everything from initial concept sketches through CAD drawings, permitting, and the full construction. You work with one team throughout.' },
      { q: 'How detailed are your design drawings?', a: 'We produce scaled 2-D CAD plans along with 3-D elevation renderings and reference photos so you can see exactly what the finished project will look like before we break ground.' },
      { q: 'How long does the design process take?', a: 'Typically 1–3 weeks depending on the project scope. We work through revisions until your vision is perfectly captured before moving into scheduling.' },
    ]
  },
  {
    num: '02',
    title: 'Hardscape & Masonry',
    slug: '/hardscape-masonry',
    tags: ['Paver Patios', 'Retaining Walls', 'Outdoor Kitchens'],
    description: 'Stone, brick, paver and concrete — patios, retaining walls, fireplaces, outdoor kitchens, pool decks, driveways, steps, and masonry repair across Cincinnati & Northern KY.',
    keywords: ['paver patio cincinnati', 'retaining wall cincinnati', 'outdoor kitchen cincinnati', 'hardscaping cincinnati'],
    hero: PHOTOS.carousel1,
    body: `Hardscape and masonry work is the backbone of a great outdoor space. We work in natural stone, brick, poured concrete, and premium pavers to create patios, retaining walls, driveways, steps, outdoor kitchens, fire pits, fireplaces, and pool decks that are built to last generations.\n\nEvery material is selected for both beauty and durability. Our masonry crew has decades of combined experience — you'll see it in the tight joints, level planes, and long-term structural integrity of every project we complete.`,
    faqs: [
      { q: 'What paver brands and styles do you work with?', a: 'We work with all major manufacturers including Belgard, Unilock, and Techo-Bloc, as well as natural bluestone, fieldstone, and reclaimed brick depending on your aesthetic goals.' },
      { q: 'Do you install outdoor kitchens?', a: 'Yes — we build complete outdoor kitchen spaces including built-in grills, pellet smokers, refrigerators, granite or bluestone countertops, and custom cabinetry.' },
      { q: 'Can you repair existing masonry?', a: 'Absolutely. We offer masonry repair and restoration including re-pointing joints, resetting sunken pavers, and repairing cracked retaining walls.' },
    ]
  },
  {
    num: '03',
    title: 'Lawn & Landscape',
    slug: '/lawn-landscape',
    tags: ['Garden Design', 'Lawn Care', 'Planting Beds'],
    description: 'Comprehensive lawn care and landscape installation — garden design, planting beds, mulching, sod, fertilization, and seasonal cleanups for Cincinnati & NKY properties.',
    keywords: ['lawn care cincinnati', 'garden design cincinnati', 'landscape installation cincinnati', 'mulching services cincinnati'],
    hero: PHOTOS.about,
    body: `A beautiful landscape starts with healthy, intentional plantings. We design and install planting beds, garden spaces, and full lawn programs that complement your hardscape and look their best through all four seasons.\n\nOur lawn care services cover everything from fertilization programs and weed control to sod installation, seeding, and seasonal cleanups. Native plant selections are available for clients who want low-maintenance, ecologically appropriate landscapes.`,
    faqs: [
      { q: 'Do you offer native plant landscaping?', a: 'Yes — we design and install native plant gardens that are beautiful, low-maintenance, and supportive of local pollinators. We can incorporate natives into any landscape plan.' },
      { q: 'What does a seasonal cleanup include?', a: 'Spring cleanups include bed edging, debris removal, mulch refresh, and plant bed preparation. Fall cleanups cover leaf removal, cutting back perennials, and winter prep.' },
      { q: 'Do you install sod?', a: 'Yes. We handle full lawn renovations including grading, soil prep, and sod installation. We use high-quality Kentucky bluegrass and fescue mixes suited to the Cincinnati climate.' },
    ]
  },
  {
    num: '04',
    title: 'Carpentry & Lighting',
    slug: '/carpentry-lighting',
    tags: ['Pergolas', 'Decks', 'Low Voltage Lighting'],
    description: 'Custom outdoor carpentry and professional low-voltage landscape lighting — pergolas, arbors, decks, and lighting systems that transform your property day and night.',
    keywords: ['pergola builder cincinnati', 'deck builder cincinnati', 'landscape lighting cincinnati', 'outdoor lighting installation cincinnati'],
    hero: PHOTOS.lighting,
    body: `Our carpentry division crafts custom pergolas, arbors, pavilions, and decks that extend your living space outdoors. Every structure is engineered for the Cincinnati climate — built from premium cedar, redwood, or composite materials with joinery and details that set our work apart.\n\nWe pair every outdoor structure with low-voltage landscape lighting systems that transform your property after dark. From path lights and uplighting to string light systems and LED step lights, our lighting designs are both functional and dramatic.`,
    faqs: [
      { q: 'What materials do you use for pergolas?', a: 'Primarily Western red cedar for its natural beauty and weather resistance. We can also build in composite materials or pressure-treated lumber depending on your maintenance preferences.' },
      { q: 'Do you design the lighting plan as well?', a: 'Yes — we design the lighting layout as part of the overall project, ensuring fixture placement, beam angles, and color temperatures are selected to showcase your landscape.' },
      { q: 'Are your lighting systems smart-home compatible?', a: 'Yes. We install systems compatible with popular smart home platforms so you can control your landscape lighting from your phone or integrate it with your home automation.' },
    ]
  },
  {
    num: '05',
    title: 'Water Management',
    slug: '/water-management',
    tags: ['French Drains', 'Grading', 'Erosion Control'],
    description: 'Expert drainage and water management — French drains, regrading, dry creek beds, and erosion control for flooding or drainage problems in Cincinnati and Northern KY.',
    keywords: ['french drain installation cincinnati', 'yard drainage cincinnati', 'erosion control cincinnati', 'drainage solutions cincinnati'],
    hero: PHOTOS.grid3,
    body: `Standing water, soggy yards, and erosion are common problems in Cincinnati's rolling terrain. We diagnose and solve drainage issues with engineered solutions including French drains, catch basins, dry creek beds, regrading, and swale construction.\n\nProper water management protects your investment. A well-drained property has healthier lawns and plantings, less foundation risk, and fewer maintenance headaches year after year. We solve the problem at the source — not just the symptom.`,
    faqs: [
      { q: 'How do I know if I need a French drain?', a: 'Common signs include water pooling in your yard after rain, wet basement walls, soggy lawn areas that never fully dry out, or visible erosion on slopes. We assess drainage issues during our consultation.' },
      { q: 'Do you handle grading and regrading?', a: 'Yes — we regrade yards to direct water away from foundations and toward appropriate outlets. This is often combined with drain installation for comprehensive water management.' },
      { q: 'Can you build a dry creek bed?', a: 'Absolutely. Dry creek beds are both functional and beautiful — they direct water flow while adding a naturalistic design element to your landscape.' },
    ]
  },
  {
    num: '06',
    title: 'Landscape Maintenance',
    slug: '/landscape-maintenance',
    tags: ['Year-Round', 'Commercial', 'Snow Removal'],
    description: 'Year-round residential and commercial maintenance programs — keeping every landscape pristine through all four seasons including winter snow removal.',
    keywords: ['landscape maintenance cincinnati', 'lawn maintenance cincinnati', 'residential snow removal cincinnati', 'commercial landscape maintenance cincinnati'],
    hero: PHOTOS.grid1,
    body: `A beautiful landscape requires consistent care. Our maintenance programs are designed to keep your property looking its best through every season — from spring green-up through summer growth cycles, fall cleanup, and winter snow management.\n\nWe offer customized maintenance plans for both residential and commercial properties. Regular clients receive priority scheduling and a dedicated crew that gets to know your property inside and out.`,
    faqs: [
      { q: 'Do you offer commercial maintenance contracts?', a: 'Yes — we service office parks, HOAs, retail centers, and multi-family properties. Commercial contracts include regular lawn care, seasonal plantings, and snow removal.' },
      { q: 'What does snow removal include?', a: 'Our snow removal service covers plowing, shoveling, and ice management for driveways, walkways, and parking areas. We offer seasonal contracts and per-event pricing.' },
      { q: 'Can I get maintenance for a property you did not install?', a: 'Yes. We maintain landscapes we did not originally build. We\'ll do a walkthrough to assess the property and recommend a maintenance program suited to its needs.' },
    ]
  },
]

// ─── CAROUSEL PROJECTS ────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    location: 'Montgomery, Ohio',
    title: 'Entertainment Pavilion & Patio',
    tags: ['Paver Patio', 'Cedar Pavilion', 'Outdoor Kitchen', 'Fireplace'],
    img: PHOTOS.carousel1,
    href: 'https://www.yelandscaping.com/montgomery-entertainment-pavilion-and-patio',
  },
  {
    location: 'Mariemont, Cincinnati',
    title: 'Porch & Bluestone Patio',
    tags: ['Bluestone', 'Reclaimed Brick', 'Gabled Porch', 'Plantings'],
    img: PHOTOS.carousel2,
    href: 'https://www.yelandscaping.com/mariemont-porch-and-patio',
  },
  {
    location: 'Hyde Park, Cincinnati',
    title: 'Outdoor Living Transformation',
    tags: ['Bluestone Patio', 'Stone Fireplace', 'Pavilion', 'Driveway'],
    img: PHOTOS.carousel3,
    href: 'https://www.yelandscaping.com/hyde-park-outdoor-living',
  },
  {
    location: 'Anderson Township, Ohio',
    title: 'Brick Patio & Pavilion',
    tags: ['Herringbone Brick', 'Vaulted Ceiling', 'Kitchenette', 'French Drain'],
    img: PHOTOS.carousel4,
    href: 'https://www.yelandscaping.com',
  },
  {
    location: 'Hyde Park, Cincinnati',
    title: 'Grand Entrance Design',
    tags: ['Fieldstone Walls', 'Cobblestone Drive', 'Strip Lighting'],
    img: PHOTOS.carousel5,
    href: 'https://www.yelandscaping.com',
  },
  {
    location: 'Montgomery, Ohio',
    title: 'Custom Outdoor Kitchen',
    tags: ['Granite Counters', 'Gas Grill', 'Pellet Smoker'],
    img: PHOTOS.carousel6,
    href: 'https://www.yelandscaping.com',
  },
]

// ─── SERVICE AREAS ────────────────────────────────────────────────────────────
export const AREAS_OHIO = [
  'Hyde Park', 'Mariemont', 'Indian Hill', 'Anderson Township',
  'Blue Ash', 'Montgomery', 'Mason', 'Madeira', 'Mt. Lookout',
  'Symmes Township', 'Oakley', 'West Chester', 'Milford',
  'Terrace Park', 'Newtown',
]

export const AREAS_NKY = [
  'Covington KY', 'Florence KY', 'Fort Thomas KY', 'Newport KY',
  'Highland Heights KY', 'Cold Spring KY', 'Bellevue KY', 'Union KY',
  'Villa Hills KY', 'Erlanger KY', 'Fort Mitchell KY', 'Alexandria KY',
]

// ─── PHOTO GRID ───────────────────────────────────────────────────────────────
export const GRID_PHOTOS = [
  { img: PHOTOS.grid1, label: 'Montgomery Pavilion' },
  { img: PHOTOS.grid2, label: 'Mariemont Porch' },
  { img: PHOTOS.grid3, label: 'Anderson Township Patio' },
  { img: PHOTOS.grid4, label: 'Hyde Park Grand Entrance' },
  { img: PHOTOS.grid5, label: 'Accent Lighting' },
]

// ─── GLOBAL FAQ ───────────────────────────────────────────────────────────────
export const GLOBAL_FAQS = [
  { q: 'What areas do you serve?', a: 'We serve Greater Cincinnati and Northern Kentucky including Hyde Park, Mariemont, Indian Hill, Anderson Township, Blue Ash, Montgomery, Mason, and all surrounding communities. Across the river we serve Covington, Fort Thomas, Florence, Newport, Highland Heights, and more.' },
  { q: 'Do you offer free estimates?', a: 'Yes — we offer complimentary on-site consultations for all projects. We visit your property, discuss your vision, and follow up with a detailed proposal.' },
  { q: 'How far in advance should I schedule?', a: 'Our schedule fills up quickly, particularly in spring and early summer. We recommend reaching out 4–8 weeks in advance for new projects. Maintenance clients receive priority scheduling.' },
  { q: 'Are you licensed and insured?', a: 'Yes. Young Entrepreneur Landscaping is fully licensed and carries comprehensive liability insurance and workers\' compensation coverage for all projects in Ohio and Kentucky.' },
  { q: 'Do you work on commercial properties?', a: 'Yes — we serve both residential and commercial clients including office parks, HOAs, retail centers, and multi-family properties. Commercial services include design, installation, and ongoing maintenance.' },
  { q: 'What is your payment schedule?', a: 'We typically require a deposit upon project scheduling, with progress payments tied to project milestones and a final payment upon completion. Full details are outlined in your project agreement.' },
  { q: 'Do your photos show real projects?', a: 'Every photo on our website is a real project completed by our team. We do not use AI-generated images or stock photography. Our portfolio is a genuine record of our work.' },
  { q: 'How long have you been in business?', a: 'Young Entrepreneur Landscaping was founded in 2010 and has been serving Greater Cincinnati and Northern Kentucky for over 15 years.' },
]

// ─── CONTACT INFO ─────────────────────────────────────────────────────────────
export const CONTACT = {
  phone: '(513) 498-6879',
  phoneHref: 'tel:5134986879',
  email: 'bweckel@yelandscaping.com',
  address: '4178 Round Bottom Rd, Newtown OH 45244',
  instagram: 'https://www.instagram.com/youngentrepreneur_landscaping/',
  instagramHandle: '@youngentrepreneur_landscaping',
}
