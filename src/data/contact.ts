export const CONTACT_PAGE_PATH = '/contacto';

export const contactConfig = {
  whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '',
  responseTime: 'menos de 1 hora',
  whatsappMessage: 'Hola HGuerra, quiero contarte un desafío operativo para evaluar una posible solución.'
};

export const contactServices = [
  {
    value: 'arquitectura-producto-y-automatizacion',
    label: 'Arquitectura de producto y automatización aplicada'
  },
  {
    value: 'gestion-operaciones-de-campo',
    label: 'Gestión de Operaciones de Campo'
  },
  {
    value: 'automatizacion-con-ia-agentica',
    label: 'Automatización con IA Agéntica'
  },
  {
    value: 'automatizacion-de-procesos',
    label: 'Automatización de Procesos'
  },
  {
    value: 'otro',
    label: 'Otro / No estoy seguro'
  }
] as const;

export type ContactServiceValue = (typeof contactServices)[number]['value'];

export const formTopics = [
  { value: '', label: 'Selecciona tu línea de servicio o necesidad', disabled: true },
  ...contactServices
];

const validContactServiceValues = new Set<string>(contactServices.map((service) => service.value));

export const contactContextByPath = {
  '/': {
    service: 'arquitectura-producto-y-automatizacion',
    originLabel: 'Inicio'
  },
  '/gestion-de-operaciones-de-campo': {
    service: 'gestion-operaciones-de-campo',
    originLabel: 'Gestión de Operaciones de Campo'
  },
  '/automatizacion-con-ia-agentica': {
    service: 'automatizacion-con-ia-agentica',
    originLabel: 'Automatización con IA Agéntica'
  },
  '/automatizacion-de-procesos': {
    service: 'automatizacion-de-procesos',
    originLabel: 'Automatización de Procesos'
  }
} as const satisfies Record<string, { service: ContactServiceValue; originLabel: string }>;

export function isValidContactService(value?: string | null): value is ContactServiceValue {
  return Boolean(value && validContactServiceValues.has(value));
}

export function getContactServiceLabel(value?: string | null) {
  return contactServices.find((service) => service.value === value)?.label ?? 'Otro / No estoy seguro';
}

export function getContactContextByPath(path: string) {
  return contactContextByPath[path as keyof typeof contactContextByPath] ?? {
    service: 'otro' as ContactServiceValue,
    originLabel: path
  };
}

interface BuildContactHrefOptions {
  service?: string | null;
  originPath?: string | null;
  originLabel?: string | null;
}

export function buildContactHref(options: BuildContactHrefOptions = {}) {
  const params = new URLSearchParams();

  if (isValidContactService(options.service)) {
    params.set('service', options.service);
  }

  if (options.originPath) {
    params.set('origin', options.originPath);
  }

  if (options.originLabel) {
    params.set('originLabel', options.originLabel);
  }

  const query = params.toString();
  return query ? `${CONTACT_PAGE_PATH}?${query}` : CONTACT_PAGE_PATH;
}

export function getWhatsAppHref(message = contactConfig.whatsappMessage) {
  if (!contactConfig.whatsappNumber) {
    return CONTACT_PAGE_PATH;
  }

  const params = new URLSearchParams();

  if (message) {
    params.set('text', message);
  }

  const query = params.toString();
  return query
    ? `https://wa.me/${contactConfig.whatsappNumber}?${query}`
    : `https://wa.me/${contactConfig.whatsappNumber}`;
}
