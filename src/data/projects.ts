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
  { id: 1, location: "Montgomery, Ohio", name: "Entertainment Pavilion & Patio", tags: ["Paver Patio", "Cedar Pavilion", "Outdoor Kitchen", "Fireplace", "Lighting"], image: BASE + "dae8cfc5-81e7-4f0e-8e8e-bd36f03722e5/thumbnail_IMG_4752.jpg", url: "/showcase/montgomery-entertainment-pavilion" },
  { id: 2, location: "Mariemont, Cincinnati", name: "Porch & Bluestone Patio", tags: ["Bluestone", "Reclaimed Brick", "Gabled Porch", "Plantings"], image: BASE + "c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_1441.JPG", url: "/showcase/mariemont-porch-patio" },
  { id: 3, location: "Hyde Park, Cincinnati", name: "Outdoor Living Transformation", tags: ["Bluestone Patio", "Stone Fireplace", "Pavilion", "Driveway"], image: BASE + "da7f3aea-af54-41c2-a2e0-a16bb4fcb854/IMG_1430.JPG", url: "/showcase/hyde-park-outdoor-living" },
  { id: 4, location: "Anderson Township, Ohio", name: "Brick Patio & Pavilion", tags: ["Herringbone Brick", "Vaulted Ceiling", "Kitchenette", "French Drain"], image: BASE + "f5e89627-0b18-4404-8318-fadecbe7a625/background.JPG", url: "/showcase/anderson-township-brick-pavilion" },
  { id: 5, location: "Hyde Park, Cincinnati", name: "Grand Entrance Design", tags: ["Fieldstone Walls", "Cobblestone Drive", "Strip Lighting"], image: BASE + "018d95b7-4ba0-4ff3-bf3a-607d2f8a717c/Kalmbach.jpg", url: "/showcase/hyde-park-grand-entrance" },
  { id: 6, location: "Montgomery, Ohio", name: "Custom Outdoor Kitchen", tags: ["Granite Counters", "Gas Grill", "Pellet Smoker", "Seating Wall"], image: BASE + "bdd88e9d-fe9e-4762-b36f-7cf4395ddcc7/IMG_4909.jpg", url: "/showcase/montgomery-entertainment-pavilion" },
  { id: 7, location: "Anderson Township, Ohio", name: "Luxury Composite Deck", tags: ["Timber Tech Composite", "Two-Tiered", "Coastal Finish"], image: BASE + "d1f080f4-8562-430f-888c-4de3ab35b8d0/thumbnail_IMG_4592.jpg", url: "/showcase/anderson-township-luxury-deck" },
  { id: 8, location: "Amberly Village, Ohio", name: "Natural Mid-Century Landscape", tags: ["Bluestone Flagging", "Natural Boulders", "Asymmetric Planting"], image: BASE + "e19270b7-bf94-4a30-b923-121dca472ea8/IMG_0671%281%29.JPEG", url: "/showcase/amberly-natural-landscape" },
  { id: 9, location: "Anderson Township, Ohio", name: "Custom Poolscape", tags: ["Travertine Decking", "Bullnose Coping", "Custom Lighting"], image: BASE + "4e6680d2-4196-4850-acfb-3d9a63446299/IMG_3031.jpg", url: "/showcase/anderson-poolscape" },
  { id: 10, location: "Norwood, Ohio", name: "Living Garden", tags: ["Brick Shed", "Monolithic Steps", "Fieldstone Wall"], image: BASE + "ef1344c9-f5ab-4f63-9a3b-f3778c5e3890/IMG_1325.jpg", url: "/showcase/norwood-living-garden" },
]
