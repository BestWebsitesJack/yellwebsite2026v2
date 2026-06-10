// ============================================================
// YEL — Centralized Site Data
// ============================================================

export const CDN = 'https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/'

export const PHOTOS = {
  hero:           CDN + 'c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_1441.JPG',
  heroMontgomery: CDN + 'thumbnail_IMG_4752.jpg',
  about:          CDN + 'IMG_1455.JPG',
  carouselMontgomery: CDN + 'thumbnail_IMG_4752.jpg',
  carouselMariemont:  CDN + 'IMG_1441.JPG',
  carouselHydePark:   CDN + 'IMG_1430.JPG',
  carouselAnderson:   CDN + 'background.JPG',
  carouselKalmbach:   CDN + 'Kalmbach.jpg',
  carouselKitchen:    CDN + 'IMG_4909.jpg',
  featureKitchen:     CDN + 'IMG_4909.jpg',
  grid1:          CDN + 'IMG_5259.jpg',
  grid2:          CDN + 'thumbnail_IMG_4272.jpg',
  grid3:          CDN + 'IMG_1319.JPG',
  grid4:          CDN + 'IMG_2869.jpg',
  grid5:          CDN + 'thumbnail_IMG_1333.jpg',
  // Service page heroes
  hardscape:      CDN + 'background.JPG',
  lawn:           CDN + 'IMG_1430.JPG',
  carpentry:      CDN + 'thumbnail_IMG_1333.jpg',
  water:          CDN + 'IMG_1319.JPG',
  maintenance:    CDN + 'IMG_5259.jpg',
  showcase:       CDN + 'IMG_5259.jpg',
}

export const CONTACT = {
  phone:    '(513) 498-6879',
  phoneRaw: '5134986879',
  email:    'bweckel@yelandscaping.com',
  address:  '4178 Round Bottom Rd, Newtown OH 45244',
  instagram:'https://www.instagram.com/youngentrepreneur_landscaping/',
}

export const SERVICES = [
  {
    num: '01',
    title: 'Design | Build',
    slug: '/design-build',
    keywords: 'CAD Design · 3D Elevations · Full Build',
    desc: 'From scaled CAD plans and 3-D elevations to complete in-house construction — Barrett or Nathan personally oversees every project from concept to completion.',
  },
  {
    num: '02',
    title: 'Hardscape & Masonry',
    slug: '/hardscape-masonry',
    keywords: 'Paver Patios · Retaining Walls · Outdoor Kitchens',
    desc: 'Stone, brick, paver and concrete — patios, retaining walls, fireplaces, outdoor kitchens, pool decks, driveways, steps, and masonry repair.',
  },
  {
    num: '03',
    title: 'Lawn & Landscape',
    slug: '/lawn-landscape',
    keywords: 'Garden Design · Lawn Care · Planting Beds',
    desc: 'Comprehensive lawn care and landscape installation — garden design, planting beds, mulching, sod, fertilization, and seasonal cleanups.',
  },
  {
    num: '04',
    title: 'Carpentry & Lighting',
    slug: '/carpentry-lighting',
    keywords: 'Pergolas · Decks · Low Voltage Lighting',
    desc: 'Custom outdoor carpentry and professional low-voltage landscape lighting — pergolas, arbors, decks, and lighting systems that transform your property day and night.',
  },
  {
    num: '05',
    title: 'Water Management',
    slug: '/water-management',
    keywords: 'French Drains · Grading · Erosion Control',
    desc: 'Expert drainage and water management — French drains, regrading, dry creek beds, and erosion control for flooding or drainage problems.',
  },
  {
    num: '06',
    title: 'Landscape Maintenance',
    slug: '/landscape-maintenance',
    keywords: 'Year-Round · Commercial · Snow Removal',
    desc: 'Year-round residential and commercial maintenance programs — keeping every landscape pristine through all four seasons including winter snow removal.',
  },
]

export const PROJECTS = [
  {
    id: 1,
    location: 'Montgomery, Ohio',
    title: 'Entertainment Pavilion & Patio',
    tags: ['Paver Patio', 'Cedar Pavilion', 'Outdoor Kitchen', 'Fireplace'],
    photo: CDN + 'thumbnail_IMG_4752.jpg',
    slug: 'https://www.yelandscaping.com/montgomery-entertainment-pavilion-and-patio',
  },
  {
    id: 2,
    location: 'Mariemont, Cincinnati',
    title: 'Porch & Bluestone Patio',
    tags: ['Bluestone', 'Reclaimed Brick', 'Gabled Porch', 'Plantings'],
    photo: CDN + 'IMG_1441.JPG',
    slug: 'https://www.yelandscaping.com/mariemont-porch-and-patio',
  },
  {
    id: 3,
    location: 'Hyde Park, Cincinnati',
    title: 'Outdoor Living Transformation',
    tags: ['Bluestone Patio', 'Stone Fireplace', 'Pavilion', 'Driveway'],
    photo: CDN + 'IMG_1430.JPG',
    slug: 'https://www.yelandscaping.com/hyde-park-outdoor-living',
  },
  {
    id: 4,
    location: 'Anderson Township, Ohio',
    title: 'Brick Patio & Pavilion',
    tags: ['Herringbone Brick', 'Vaulted Ceiling', 'Kitchenette', 'French Drain'],
    photo: CDN + 'background.JPG',
    slug: '#',
  },
  {
    id: 5,
    location: 'Hyde Park, Cincinnati',
    title: 'Grand Entrance Design',
    tags: ['Fieldstone Walls', 'Cobblestone Drive', 'Strip Lighting'],
    photo: CDN + 'Kalmbach.jpg',
    slug: '#',
  },
  {
    id: 6,
    location: 'Montgomery, Ohio',
    title: 'Custom Outdoor Kitchen',
    tags: ['Granite Counters', 'Gas Grill', 'Pellet Smoker'],
    photo: CDN + 'IMG_4909.jpg',
    slug: '#',
  },
]

export const CINCINNATI_AREAS = [
  'Hyde Park','Mariemont','Indian Hill','Anderson Township','Blue Ash',
  'Montgomery','Mason','Madeira','Mt. Lookout','Symmes Township',
  'Oakley','West Chester','Milford','Terrace Park','Newtown',
]

export const NKY_AREAS = [
  'Covington KY','Florence KY','Fort Thomas KY','Newport KY',
  'Highland Heights KY','Cold Spring KY','Bellevue KY','Union KY',
  'Villa Hills KY','Erlanger KY','Fort Mitchell KY','Alexandria KY',
]
