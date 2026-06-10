// Auto-generated service page wrappers
import ServicePage from '../components/ServicePage'
import { SERVICES } from '../data/siteData'

const bySlug = (slug) => SERVICES.find((s) => s.slug === slug)

export function DesignBuild()          { return <ServicePage service={bySlug('/design-build')} /> }
export function HardscapeMasonry()     { return <ServicePage service={bySlug('/hardscape-masonry')} /> }
export function LawnLandscape()        { return <ServicePage service={bySlug('/lawn-landscape')} /> }
export function CarpentryLighting()    { return <ServicePage service={bySlug('/carpentry-lighting')} /> }
export function WaterManagement()      { return <ServicePage service={bySlug('/water-management')} /> }
export function LandscapeMaintenance() { return <ServicePage service={bySlug('/landscape-maintenance')} /> }
