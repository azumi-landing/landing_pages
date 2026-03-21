export const siteConfig = {
  name: 'HGuerra',
  url: 'https://hguerra.com',
  description:
    'Consultoría e implementación para convertir problemas operativos complejos en soluciones claras, adoptables y útiles para equipos reales.',
  defaultImage: '/og-home.svg',
  locale: 'es_HN'
} as const;

export const serviceLinks = [
  {
    href: '/gestion-de-operaciones-de-campo',
    label: 'Gestión de Operaciones de Campo',
    shortLabel: 'Operaciones de campo',
    description: 'App móvil offline, dashboard web y trazabilidad para operación en terreno.'
  },
  {
    href: '/automatizacion-con-ia-agentica',
    label: 'Automatización con IA Agéntica',
    shortLabel: 'IA agéntica',
    description: 'Agentes, orquestación e integración para automatizar decisiones con control.'
  },
  {
    href: '/automatizacion-de-procesos',
    label: 'Automatización de Procesos',
    shortLabel: 'Procesos',
    description: 'Pipelines, integraciones y automatización de flujos críticos con datos confiables.'
  }
] as const;

export const footerLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/sobre-mi', label: 'Sobre HGuerra' },
  ...serviceLinks.map(({ href, label }) => ({ href, label })),
  { href: '/contacto', label: 'Contacto' },
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/terminos', label: 'Términos' }
] as const;

export const publicSiteRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/gestion-de-operaciones-de-campo', priority: '0.9', changefreq: 'weekly' },
  { path: '/automatizacion-con-ia-agentica', priority: '0.8', changefreq: 'weekly' },
  { path: '/automatizacion-de-procesos', priority: '0.8', changefreq: 'weekly' },
  { path: '/contacto', priority: '0.7', changefreq: 'weekly' },
  { path: '/sobre-mi', priority: '0.7', changefreq: 'monthly' },
  { path: '/privacidad', priority: '0.3', changefreq: 'yearly' },
  { path: '/terminos', priority: '0.3', changefreq: 'yearly' }
] as const;

export function getSiteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': getSiteUrl('/#organization'),
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: getSiteUrl('/hg-favicon.svg'),
    image: getSiteUrl(siteConfig.defaultImage)
  };
}

export function buildWebPageSchema({
  path,
  title,
  description
}: {
  path: string;
  title: string;
  description: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${getSiteUrl(path)}#webpage`,
    url: getSiteUrl(path),
    name: title,
    description,
    inLanguage: 'es',
    isPartOf: {
      '@id': getSiteUrl('/#website')
    }
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': getSiteUrl('/#website'),
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: 'es',
    publisher: {
      '@id': getSiteUrl('/#organization')
    }
  };
}

export function buildServiceSchema({
  name,
  description,
  path
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${getSiteUrl(path)}#service`,
    serviceType: name,
    name,
    description,
    url: getSiteUrl(path),
    provider: {
      '@id': getSiteUrl('/#organization')
    }
  };
}

export function buildBreadcrumbSchema(
  items: ReadonlyArray<{
    name: string;
    path: string;
  }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getSiteUrl(item.path)
    }))
  };
}

export function buildFAQSchema(
  faqs: ReadonlyArray<{
    question: string;
    answer: string;
  }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
