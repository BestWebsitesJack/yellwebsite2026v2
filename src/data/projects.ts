export interface Project {
  id: number
  location: string
  name: string
  tags: string[]
  image: string
  url: string
}

const BASE = 'https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/'

export const projects: Project[] = [
  { id: 1, location: 'Montgomery, Ohio', name: 'Entertainment Pavilion & Patio', tags: ['Paver Patio', 'Cedar Pavilion', 'Outdoor Kitchen', 'Fireplace', 'Lighting'], image: BASE + 'dae8cfc5-81e7-4f0e-8e8e-bd36f03722e5/thumbnail_IMG_4752.jpg', url: '/showcase' },
  { id: 2, location: 'Mariemont, Cincinnati', name: 'Porch & Bluestone Patio', tags: ['Bluestone', 'Reclaimed Brick', 'Gabled Porch', 'Plantings'], image: BASE + 'c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_1441.JPG', url: '/showcase' },
  { id: 3, location: 'Hyde Park, Cincinnati', name: 'Outdoor Living Transformation', tags: ['Bluestone Patio', 'Stone Fireplace', 'Pavilion', 'Driveway'], image: BASE + 'IMG_1430.JPG', url: '/showcase' },
  { id: 4, location: 'Anderson Township, Ohio', name: 'Brick Patio & Pavilion', tags: ['Herringbone Brick', 'Vaulted Ceiling', 'Kitchenette', 'French Drain'], image: BASE + 'f5e89627-0b18-4404-8318-fadecbe7a625/background.JPG', url: '/showcase' },
  { id: 5, location: 'Hyde Park, Cincinnati', name: 'Grand Entrance Design', tags: ['Fieldstone Walls', 'Cobblestone Drive', 'Strip Lighting'], image: BASE + '018d95b7-4ba0-4ff3-bf3a-607d2f8a717c/Kalmbach.jpg', url: '/showcase' },
  { id: 6, location: 'Montgomery, Ohio', name: 'Custom Outdoor Kitchen', tags: ['Granite Counters', 'Gas Grill', 'Pellet Smoker', 'Seating Wall'], image: BASE + 'bdd88e9d-fe9e-4762-b36f-7cf4395ddcc7/IMG_4909.jpg', url: '/showcase' },
]
