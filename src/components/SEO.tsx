import { Helmet } from "react-helmet-async"

interface SEOProps {
  title: string
  description: string
  path?: string
}

export default function SEO({ title, description, path = "" }: SEOProps) {
  const canonical = "https://www.yelandscaping.com" + path

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
