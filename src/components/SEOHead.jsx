import { Helmet } from 'react-helmet-async'

const BASE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LandscapeService',
  name: 'Young Entrepreneur Landscaping',
  url: 'https://www.yelandscaping.com',
  telephone: '+15134986879',
  email: 'bweckel@yelandscaping.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4178 Round Bottom Rd',
    addressLocality: 'Newtown',
    addressRegion: 'OH',
    postalCode: '45244',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.1031,
    longitude: -84.5120,
  },
  areaServed: [
    'Cincinnati OH', 'Hyde Park OH', 'Mariemont OH', 'Indian Hill OH',
    'Anderson Township OH', 'Blue Ash OH', 'Montgomery OH', 'Mason OH',
    'Covington KY', 'Fort Thomas KY', 'Florence KY', 'Newport KY',
  ],
  priceRange: '$$$$',
  foundingDate: '2010',
  sameAs: ['https://www.instagram.com/youngentrepreneur_landscaping/'],
}

export default function SEOHead({ title, description, canonical, schema }) {
  const fullTitle = title
    ? `${title} | Young Entrepreneur Landscaping`
    : "Young Entrepreneur Landscaping | Cincinnati's Premier Landscape Design & Build"

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || "Cincinnati's premier custom landscaping company since 2010. Residential & commercial landscape design, hardscaping, paver patios, outdoor living & lawn care. Serving Greater Cincinnati & Northern KY."} />
      {canonical && <link rel="canonical" href={`https://www.yelandscaping.com${canonical}`} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || ''} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://images.squarespace-cdn.com/content/v1/6557ac866ae3484563fdf5dd/eb368ac6-1a5c-4992-a696-bbd5917779cd/YellLogo.png?format=1500w" />
      <script type="application/ld+json">
        {JSON.stringify(schema || BASE_SCHEMA)}
      </script>
    </Helmet>
  )
}
