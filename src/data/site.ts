import { CONTACT_PAGE_PATH, contactConfig } from './contact';

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

function getWhatsappTelephone() {
  const normalizedNumber = contactConfig.whatsappNumber.replace(/[^\d+]/g, '');

  if (!normalizedNumber) {
    return undefined;
  }

  return normalizedNumber.startsWith('+') ? normalizedNumber : `+${normalizedNumber}`;
}

export function buildOrganizationSchema() {
  const telephone = getWhatsappTelephone();

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': getSiteUrl('/#organization'),
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: getSiteUrl('/logo.png'),
    image: getSiteUrl('/mi_foto_pro.jpeg'),
    founder: {
      '@id': getSiteUrl('/sobre-mi#person')
    },
    contactPoint: telephone
      ? [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            telephone,
            availableLanguage: ['es'],
            url: getSiteUrl(CONTACT_PAGE_PATH)
          }
        ]
      : undefined
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

export function buildPersonSchema({
  path = '/sobre-mi',
  name = siteConfig.name,
  description = 'Consultor e implementador para operación, automatización y diseño de soluciones digitales aplicadas.'
}: {
  path?: string;
  name?: string;
  description?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${getSiteUrl(path)}#person`,
    name,
    url: getSiteUrl(path),
    image: getSiteUrl('/mi_foto_pro.jpeg'),
    description,
    worksFor: {
      '@id': getSiteUrl('/#organization')
    }
  };
}

export function buildContactPageSchema({
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
    '@type': 'ContactPage',
    '@id': `${getSiteUrl(path)}#contactpage`,
    url: getSiteUrl(path),
    name: title,
    description,
    inLanguage: 'es',
    isPartOf: {
      '@id': getSiteUrl('/#website')
    },
    mainEntity: {
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
