export interface ProjectPhoto {
  url: string
  caption?: string
}

export interface ProjectDetail {
  slug: string
  location: string
  title: string
  subtitle: string
  intro: string
  heroImage: string
  sections: { text: string; image: string }[]
}

const BASE = "https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/"

export const projectDetails: ProjectDetail[] = [
  {
    slug: "montgomery-entertainment-pavilion",
    location: "Montgomery, Ohio",
    title: "Montgomery",
    subtitle: "Entertainment Pavilion and Patio",
    intro: "This Montgomery home had little to offer in any sort of outdoor living space, but a blank slate. We worked closely with the homeowners to come up with a design for an epic outdoor entertainment and living space that met their needs, wants, and budget.",
    heroImage: BASE + "dae8cfc5-81e7-4f0e-8e8e-bd36f03722e5/thumbnail_IMG_4752.jpg",
    sections: [
      { text: "A mixture of pavers and natural stone were used to create a beautiful patio, steps, seating wall, firepit, kitchen and stunning fireplace. All custom designed and built.", image: BASE + "bdd88e9d-fe9e-4762-b36f-7cf4395ddcc7/IMG_4909.jpg" },
      { text: "The outdoor kitchen includes a natural gas grill and pellet smoker, along with storage for all the kitchen needs. Granite counters were installed on the kitchen, columns, and fireplace.", image: BASE + "34b53f3f-e10b-441d-9a5e-0f778367df47/IMG_5259.jpg" },
      { text: "A custom exposed framing cedar hip and valley pavilion was built to finish the space, creating a truly beautiful and functional space.", image: BASE + "e1b39726-79c3-4e0f-9cad-668c8251e427/IMG_5290.jpg" },
      { text: "Accent lighting and lush plantings were added for the cherry on top.", image: BASE + "fce6abdd-c9a0-476a-b4d6-fa01dfdfe149/thumbnail_IMG_1333.jpg" },
    ],
  },
  {
    slug: "mariemont-porch-patio",
    location: "Mariemont, Cincinnati",
    title: "Mariemont",
    subtitle: "Porch and Patio",
    intro: "This traditional Mariemont home had a cramped brick patio and old front and side walks in need of replacement. We built a new smooth finish bluestone patio at floor level of the home for a seamless transition. The patio brick was reclaimed to use as a border and seating wall.",
    heroImage: BASE + "c7c7b8b6-61a3-48b6-9b50-1a59564dbf35/IMG_1441.JPG",
    sections: [
      { text: "We worked with a builder to construct this gabled porch off the family room of the house to extend the home outdoors.", image: BASE + "d8294968-4581-42bf-bae3-26aaa1bcc2d8/thumbnail_IMG_4272.jpg" },
      { text: "Lush plantings were added to complete the space.", image: BASE + "403b6a5a-d4e3-4d88-935f-07d7ea87f68e/IMG_1455.JPG" },
      { text: "The front walk was re-done using full range pattern bluestone and new plantings. The finished product is a beautiful, private, relaxing place.", image: BASE + "a05d0460-a14f-47c7-bdad-2ba1b6a08eee/IMG_1444.JPG" },
      { text: "Every detail was considered, from the reclaimed brick border to the new plantings framing the space.", image: BASE + "0157bdcd-1627-47f1-871d-7e09c4106964/IMG_1456.JPG" },
    ],
  },
  {
    slug: "hyde-park-outdoor-living",
    location: "Hyde Park, Cincinnati",
    title: "Hyde Park",
    subtitle: "Outdoor Living",
    intro: "This Hyde Park home was in dire need of an outdoor space and front entrance upgrade. We worked with the client to design and build an outdoor living space that included a patio, fireplace, and pavilion. The driveway was completely replaced and expanded, along with a stunning new front walk, steps, and landscape.",
    heroImage: BASE + "da7f3aea-af54-41c2-a2e0-a16bb4fcb854/IMG_1430.JPG",
    sections: [
      { text: "An impressive field stone fireplace, integrated into the existing retaining wall, was built. Along with a beautiful full range bluestone patio and steps.", image: BASE + "b9de7931-63fe-43e2-a620-afd62108ccb1/thumbnail_IMG_3576.jpg" },
      { text: "A prefabricated pavilion was installed to complete the space.", image: BASE + "45aa6700-a2d0-47b8-bedd-1a92709975e8/thumbnail_IMG_3796.jpg" },
      { text: "Front bluestone walk and steps, plantings, and retaining walls to accommodate the new drive.", image: BASE + "f0b124e3-5dc2-4bc3-966c-a2c866cc8a14/thumbnail_IMG_3657.jpg" },
      { text: "The completed transformation gave this Hyde Park home an entirely new outdoor living experience.", image: BASE + "457b83dc-3bc6-4e58-be39-a7759fc46dab/thumbnail_IMG_4263.jpg" },
    ],
  },
  {
    slug: "anderson-township-brick-pavilion",
    location: "Anderson Township, Ohio",
    title: "Anderson Township",
    subtitle: "Brick and Pavilion",
    intro: "This home had minimal usable backyard space with an old deck. The area was cleared and walls were built to retain a brick patio and pavilion.",
    heroImage: BASE + "f5e89627-0b18-4404-8318-fadecbe7a625/background.JPG",
    sections: [
      { text: "A brick patio in a herringbone pattern was built to maximize the hardscape space while allowing some usable lawn. A large French drain was installed to direct water from the back hill. A painted brick kitchenette and counter area was built.", image: BASE + "f1cf20a8-2dfb-48e8-87a7-ac51d48dc1bd/IMG_2337.jpg" },
      { text: "A custom pavilion was built with a vaulted tongue and groove stained wood ceiling. The kitchen includes a stainless steel storage area, inset granite open shelves, a glass door refrigerator, and granite countertops.", image: BASE + "6b7b2c23-ee42-4a82-928d-ff5ef169b647/IMG_1319.JPG" },
      { text: "The patio was built directly off the home's French doors, connecting it to the main living area and making the outdoor space much more accessible.", image: BASE + "0ad20731-9715-4d2d-baa0-5ba4d763ab28/IMG_1311.JPG" },
    ],
  },
  {
    slug: "anderson-township-luxury-deck",
    location: "Anderson Township, Ohio",
    title: "Anderson Township",
    subtitle: "Luxury Deck",
    intro: "This Anderson home had a dilapidated deck in dire need of replacement.",
    heroImage: BASE + "d1f080f4-8562-430f-888c-4de3ab35b8d0/thumbnail_IMG_4592.jpg",
    sections: [
      { text: "A new two-tiered Timber Tech Composite deck was built. The grey decking color provided a coastal feel to the space. The white fascia boards provide excellent definition and contrast to the structure.", image: BASE + "e44ccf66-edc3-41b7-8c1c-84b999e3117b/thumbnail_IMG_4756.jpg" },
      { text: "Outdoor furniture and a TV were added to complete the space.", image: BASE + "a6c883e6-5516-4e47-9b8c-23c04d7364c6/thumbnail_IMG_4759.jpg" },
    ],
  },
  {
    slug: "amberly-natural-landscape",
    location: "Amberly Village, Ohio",
    title: "Amberly",
    subtitle: "Natural Landscape",
    intro: "This mid-century home in Amberly Village had an outdated and undersized paver patio with a back lawn area that simply butted up to a honeysuckle line, providing little interest and no privacy during winter months. The front stoop and steps were awkwardly formed stamped concrete that did not match the mid-century house.",
    heroImage: BASE + "e19270b7-bf94-4a30-b923-121dca472ea8/IMG_0671%281%29.JPEG",
    sections: [
      { text: "The goal was to bring a more natural feel to the landscape and hardscape that aligned with mid-century architecture, while providing winter privacy and a beautiful view from the home's large windows.", image: BASE + "625028b2-9ad0-4fb3-84ee-037fc61d244a/landscpae+d_i+1.JPG" },
      { text: "The back patio was replaced with natural tumbled bluestone flagging set in an organic form. Large natural boulders and outcroppings were incorporated to create the feeling that they were there before the house.", image: BASE + "8c37420f-638f-4500-8ca5-5815d65880e6/41C5E171-113E-4132-9DEA-2F3D4D0468E1.jpg" },
      { text: "Natural plantings were added using a loose asymmetric structure and colorful palette. A mix of deciduous and evergreen trees provides privacy while maintaining variety and contrast.", image: BASE + "497ee6c2-831b-405c-8d40-ea63dec65a2c/portfolio11.JPG" },
    ],
  },
  {
    slug: "anderson-poolscape",
    location: "Anderson Township, Ohio",
    title: "Anderson Township",
    subtitle: "Poolscape",
    intro: "This Anderson pool project included working with the homeowner to design a poolscape layout that maximized the space's potential while staying proportional to the house, seamlessly connecting it with the existing patio, and remaining within budget.",
    heroImage: BASE + "4e6680d2-4196-4850-acfb-3d9a63446299/IMG_3031.jpg",
    sections: [
      { text: "We worked with the pool contractor to select pool size, layout, alignment and elevation. Close cooperation with other contractors ensures the project is done just how you dreamt it.", image: BASE + "f3470e1c-5bf3-4c74-b92c-6dc4b4fa10ed/IMG_1369.JPG" },
      { text: "Imported Italian travertine tile was used for the pool deck, with bullnose pool coping. A custom travertine riser was installed around the perimeter of the pool to connect it more closely to the patio.", image: BASE + "8205d08f-d995-43c2-b864-d2ee5f25b6d7/IMG_1366.JPG" },
      { text: "Grading, sod installation, lighting, and fencing were all completed to give the client a stress-free, top-to-bottom construction experience.", image: BASE + "a9510ebb-f0f0-44f8-81dd-9ad10a5392a9/IMG_3084.jpg" },
    ],
  },
  {
    slug: "norwood-living-garden",
    location: "Norwood, Ohio",
    title: "Norwood",
    subtitle: "Living Garden",
    intro: "This home had a relatively small working plot dominated by an old silver maple and a dilapidated garage. The drive to the back was effectively too narrow to use. The entire plot was gutted.",
    heroImage: BASE + "ef1344c9-f5ab-4f63-9a3b-f3778c5e3890/IMG_1325.jpg",
    sections: [
      { text: "In place of the garage, a classic brick shed was built. Rustic brick and limestone lintels were used to provide traditional charm.", image: BASE + "3e5bc6c1-653f-460d-bf2f-00ba115e186f/IMG_0701.jpg" },
      { text: "The previously sloped back plot was terraced to create a hard-pack limestone gravel patio area surrounded by gardens. Large monolithic stone steps and a fieldstone seating wall with bluestone coping were built to create the terrace.", image: BASE + "339e3763-059a-4526-9f10-5893444077f1/IMG_1825.jpg" },
      { text: "A mix of building materials created a cohesive space. Plantings were chosen to provide different seasonal interest, with a custom cedar door and reclaimed traditional windows installed in the shed.", image: BASE + "3d0d6e28-4c9e-4e80-9606-4958f000abe2/IMG_1338.JPG" },
      { text: "The result intertwines a living space with the gardens, providing both a relaxing and functional space without sacrificing garden area.", image: BASE + "31fc671b-c393-4bc7-998f-befa78d322da/thumbnail_IMG_2965 - Copy - Copy.jpg" },
    ],
  },
  {
    slug: "hyde-park-grand-entrance",
    location: "Hyde Park, Cincinnati",
    title: "Hyde Park",
    subtitle: "Grand Entrance",
    intro: "This home had a single driveway with a long, thin, dilapidated walk leading to dilapidated steps and an undersized stoop. The whole space was re-imagined to make it more accessible while providing front living space and staying true to the home's existing style.",
    heroImage: BASE + "018d95b7-4ba0-4ff3-bf3a-607d2f8a717c/Kalmbach.jpg",
    sections: [
      { text: "Field stone walls were built to match the house's stonework, framing and retaining the new patio area.", image: BASE + "0ef20324-954c-4704-94df-52f466a3f375/IMG_2869.jpg" },
      { text: "A new blacktop driveway circle was installed, lined with granite cobblestone edging. Strip lights were custom installed between the granite cobblestones to light the drive.", image: BASE + "de6f7e5c-f8f8-4b2b-97e3-2b81fd5d103b/IMG_1382 - Copy - Copy.JPG" },
      { text: "A limestone flagging area was built for easy passenger access. Monolithic stone steps and a custom fabricated steel railing were installed, along with a new stone walk and stoop.", image: BASE + "718e5b17-e32b-4706-b7f7-99607db59b0b/IMG_1375.JPG" },
      { text: "The front patio area was completed to serve as both a place to relax and a place to greet guests, giving this home a much-needed quality of life upgrade.", image: BASE + "30f27c87-37df-43c2-addc-55ed3eebf86b/IMG_1374.JPG" },
    ],
  },
]
