export interface Project {
  id: number
  location: string
  name: string
  tags: string[]
  image: string
  url: string
}

const BASE = "https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/"

export const projects: Project[] = [
  { id: 1, location: "Montgomery, Ohio", name: "Entertainment Pavilion & Patio", tags: ["Paver Patio", "Cedar Pavilion", "Outdoor Kitchen", "Fireplace", "Lighting"], image: BASE + "fce6abdd-c9a0-476a-b4d6-fa01dfdfe149/thumbnail_IMG_1333.jpg", url: "/showcase/montgomery-entertainment-pavilion" },
  { id: 2, location: "Mariemont, Cincinnati", name: "Porch & Bluestone Patio", tags: ["Bluestone", "Reclaimed Brick", "Gabled Porch", "Plantings"], image: BASE + "c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_1441.JPG", url: "/showcase/mariemont-porch-patio" },
  { id: 3, location: "Hyde Park, Cincinnati", name: "Outdoor Living Transformation", tags: ["Bluestone Patio", "Stone Fireplace", "Pavilion", "Driveway"], image: BASE + "da7f3aea-af54-41c2-a2e0-a16bb4fcb854/IMG_1430.JPG", url: "/showcase/hyde-park-outdoor-living" },
  { id: 4, location: "Anderson Township, Ohio", name: "Brick Patio & Pavilion", tags: ["Herringbone Brick", "Vaulted Ceiling", "Kitchenette", "French Drain"], image: BASE + "f5e89627-0b18-4404-8318-fadecbe7a625/background.JPG", url: "/showcase/anderson-township-brick-pavilion" },
  { id: 5, location: "Hyde Park, Cincinnati", name: "Grand Entrance Design", tags: ["Fieldstone Walls", "Cobblestone Drive", "Strip Lighting"], image: BASE + "018d95b7-4ba0-4ff3-bf3a-607d2f8a717c/Kalmbach.jpg", url: "/showcase/hyde-park-grand-entrance" },
  { id: 6, location: "Montgomery, Ohio", name: "Custom Outdoor Kitchen", tags: ["Granite Counters", "Gas Grill", "Pellet Smoker", "Seating Wall"], image: BASE + "fce6abdd-c9a0-476a-b4d6-fa01dfdfe149/thumbnail_IMG_1333.jpg", url: "/showcase/montgomery-entertainment-pavilion" },
  { id: 7, location: "Anderson Township, Ohio", name: "Luxury Composite Deck", tags: ["Timber Tech Composite", "Two-Tiered", "Coastal Finish"], image: BASE + "a6c883e6-5516-4e47-9b8c-23c04d7364c6/thumbnail_IMG_4759.jpg", url: "/showcase/anderson-township-luxury-deck" },
  { id: 8, location: "Amberly Village, Ohio", name: "Natural Mid-Century Landscape", tags: ["Bluestone Flagging", "Natural Boulders", "Asymmetric Planting"], image: BASE + "8c37420f-638f-4500-8ca5-5815d65880e6/41C5E171-113E-4132-9DEA-2F3D4D0468E1.jpg", url: "/showcase/amberly-natural-landscape" },
  { id: 9, location: "Anderson Township, Ohio", name: "Custom Poolscape", tags: ["Travertine Decking", "Bullnose Coping", "Custom Lighting"], image: BASE + "a9510ebb-f0f0-44f8-81dd-9ad10a5392a9/IMG_3084.jpg", url: "/showcase/anderson-poolscape" },
  { id: 10, location: "Norwood, Ohio", name: "Living Garden", tags: ["Brick Shed", "Monolithic Steps", "Fieldstone Wall"], image: BASE + "31fc671b-c393-4bc7-998f-befa78d322da/thumbnail_IMG_2965+-+Copy+-+Copy.jpg", url: "/showcase/norwood-living-garden" },
]
