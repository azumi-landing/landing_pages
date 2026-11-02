import { CONTACT_PAGE_PATH, contactConfig } from './contact';

export const siteConfig = {
  name: 'HGuerra',
  url: 'https://hguerra.com',
  description:
    'Héctor Guerra: consultoría independiente en madurez, datos e inteligencia artificial. Del diagnóstico y la hoja de ruta a la implementación y la mejora continua.',
  defaultImage: '/og-consultoria.png',
  locale: 'es_HN'
} as const;

export const serviceLinks = [
  {
    href: '/metodologia', label: 'Metodología', shortLabel: 'Metodología',
    description: 'Evaluar capacidades, priorizar y construir el siguiente paso.',
    cta: 'Explorar cómo trabajo', icon: 'fa-route', kind: 'consultoria'
  },
  {
    href: '/soluciones', label: 'Soluciones', shortLabel: 'Soluciones',
    description: 'Consultoría y acompañamiento junto con ingeniería de datos e IA.',
    cta: 'Explorar soluciones', icon: 'fa-database', kind: 'ingenieria'
  }
] as const;

export const mainNavLinks = [
  { href: '/', label: 'Inicio' },
  ...serviceLinks.map(({ href, label }) => ({ href, label })),
  { href: '/tecnologia', label: 'Tecnología' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' }
] as const;

export const footerLinks = [
  ...mainNavLinks,
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/terminos', label: 'Términos' }
] as const;

export const publicSiteRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/metodologia', priority: '0.9', changefreq: 'monthly' },
  { path: '/soluciones', priority: '0.9', changefreq: 'monthly' },
  { path: '/tecnologia', priority: '0.7', changefreq: 'monthly' },
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

export function buildBrandPersonSchema() {
  const telephone = getWhatsappTelephone();

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': getSiteUrl('/sobre-mi#person'),
    name: 'Héctor Guerra',
    alternateName: siteConfig.name,
    jobTitle: 'Consultor independiente en madurez, datos e inteligencia artificial',
    url: getSiteUrl('/sobre-mi'),
    mainEntityOfPage: {
      '@id': getSiteUrl('/sobre-mi#webpage')
    },
    description: siteConfig.description,
    image: getSiteUrl('/mi_foto_pro.jpeg'),
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
    url: getSiteUrl('/'),
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: 'es',
    publisher: {
      '@id': getSiteUrl('/sobre-mi#person')
    }
  };
}

export function buildPersonSchema({
  path = '/sobre-mi',
  name = 'Héctor Guerra',
  description = siteConfig.description
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
    '@id': `${getSiteUrl(path)}#webpage`,
    url: getSiteUrl(path),
    name: title,
    description,
    inLanguage: 'es',
    isPartOf: {
      '@id': getSiteUrl('/#website')
    },
    mainEntity: {
      '@id': getSiteUrl('/sobre-mi#person')
    }
  };
}

export function buildServiceSchema({
  name,
  description,
  path,
  areaServed,
  category,
  audience,
  offers
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
  category?: string;
  audience?: string;
  offers?: {
    name: string;
    description: string;
    price: string;
    priceCurrency: string;
  };
}) {
  const serviceId = new URL(getSiteUrl(path));
  serviceId.hash = serviceId.hash ? `${serviceId.hash.slice(1)}-service` : 'service';

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': serviceId.toString(),
    serviceType: name,
    name,
    description,
    url: getSiteUrl(path),
    provider: {
      '@id': getSiteUrl('/sobre-mi#person')
    }
  };

  if (areaServed) {
    schema.areaServed = {
      '@type': 'Country',
      name: areaServed
    };
  }

  if (category) {
    schema.category = category;
  }

  if (audience) {
    schema.audience = {
      '@type': audience
    };
  }

  if (offers) {
    schema.offers = {
      '@type': 'Offer',
      name: offers.name,
      description: offers.description,
      price: offers.price,
      priceCurrency: offers.priceCurrency,
      url: getSiteUrl(path)
    };
  }

  return schema;
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
