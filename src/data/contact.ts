import { businessServices, commercialDestinations } from './commercial';

export const CONTACT_PAGE_PATH = commercialDestinations.contactPath;
export const contactConfig = {
  whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '',
  whatsappMessage: 'Hola Héctor, quiero conversar sobre un desafío de mi empresa y evaluar cómo avanzar con datos e inteligencia artificial.'
};

export const contactServices = [
  ...businessServices.map(({ id, title }) => ({ value: id, label: title })),
  { value: 'otro', label: 'No estoy seguro / Otra necesidad' }
] as const;
export type ContactServiceValue = (typeof contactServices)[number]['value'];
export const formTopics = [
  { value: '', label: '¿En qué necesitás avanzar?', disabled: true },
  ...contactServices.map((service) => ({ ...service, disabled: false }))
];
const validServices = new Set<string>(contactServices.map(({ value }) => value));
const previousServices: Record<string, ContactServiceValue> = {
  'automatizacion-con-ia-agentica': 'ia',
  'automatizacion-de-procesos': 'datos',
  'gestion-operaciones-de-campo': 'otro'
};

export function isValidContactService(value?: string | null): value is ContactServiceValue {
  return Boolean(value && validServices.has(value));
}
export function normalizeContactService(value?: string | null): ContactServiceValue | '' {
  if (isValidContactService(value)) return value;
  return value && Object.hasOwn(previousServices, value) ? previousServices[value] : '';
}
export function getContactServiceLabel(value?: string | null) {
  return contactServices.find((service) => service.value === normalizeContactService(value))?.label ?? 'Por definir juntos';
}

const contexts: Record<string, { service: ContactServiceValue; originLabel: string }> = {
  '/': { service: 'otro', originLabel: 'Inicio' },
  '/metodologia': { service: 'madurez', originLabel: 'Metodología' },
  '/soluciones': { service: 'otro', originLabel: 'Soluciones' },
  '/tecnologia': { service: 'otro', originLabel: 'Tecnología' },
  '/sobre-mi': { service: 'otro', originLabel: 'Sobre mí' },
  '/automatizacion-con-ia-agentica': { service: 'ia', originLabel: 'Consulta sobre IA aplicada' },
  '/automatizacion-de-procesos': { service: 'datos', originLabel: 'Consulta sobre datos' }
};
export function normalizeContactOrigin(path = '') {
  const normalized = path.replace(/\/+$/, '') || (path ? '/' : '');
  return Object.hasOwn(contexts, normalized) ? normalized : '';
}
export function getContactContextByPath(path: string) {
  return contexts[normalizeContactOrigin(path)] ?? { service: 'otro' as const, originLabel: '' };
}

export function getContactServiceGuidance(value?: string | null) {
  const service = businessServices.find(({ id }) => id === normalizeContactService(value));
  if (!service) return undefined;
  return {
    originLabel: service.title,
    contextMessage: `Seleccionaste ${service.title.toLowerCase()}. Contame qué querés mejorar y qué está dificultando avanzar. No necesitás tener una solución definida.`,
    detailPlaceholder: `${service.need} Contame tu situación, el equipo involucrado y el cambio que esperás conseguir.`,
    expectationTitle: 'Primero entendemos tu situación',
    expectationItems: [
      'Reviso el desafío y las capacidades con las que ya contás.',
      'Conversamos para acordar si puedo ayudarte y qué alcance tiene sentido.',
      'Si avanzamos, definimos entregables, condiciones y criterios para evaluar el trabajo.'
    ]
  };
}

export function buildContactHref(options: { service?: string | null; originPath?: string | null; originLabel?: string | null } = {}) {
  const params = new URLSearchParams();
  const service = normalizeContactService(options.service);
  const origin = normalizeContactOrigin(options.originPath ?? '');
  if (service) params.set('service', service);
  if (origin) params.set('origin', origin);
  return params.size ? `${CONTACT_PAGE_PATH}?${params}` : CONTACT_PAGE_PATH;
}
export function getWhatsAppHref(message = contactConfig.whatsappMessage) {
  const number = contactConfig.whatsappNumber.replace(/[^\d]/g, '');
  if (!number) return CONTACT_PAGE_PATH;
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${number}?${params}`;
}
