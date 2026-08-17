import {
  activeSolutions,
  commercialCtas,
  commercialDestinations,
  coreService
} from './commercial';

const fieldOperationsSolution = activeSolutions.find(
  (solution) => solution.id === 'operaciones-de-campo'
);

if (!fieldOperationsSolution) {
  throw new Error('The field operations solution must remain active.');
}

export const CONTACT_PAGE_PATH = commercialDestinations.contactPath;

export const contactConfig = {
  whatsappNumber: import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '',
  whatsappMessage: commercialCtas.whatsapp.message
};

export const contactServices = [
  {
    value: fieldOperationsSolution.contactService,
    label: fieldOperationsSolution.name
  },
  {
    value: coreService.contactService,
    label: coreService.name
  },
  {
    value: 'otro',
    label: 'Otro / No estoy seguro'
  }
] as const;

export type ContactServiceValue = (typeof contactServices)[number]['value'];

export const formTopics = [
  { value: '', label: 'Seleccioná tu línea de servicio o necesidad', disabled: true },
  ...contactServices
];

const validContactServiceValues = new Set<string>(contactServices.map((service) => service.value));

export const contactContextByPath = {
  '/': {
    service: 'otro',
    originLabel: 'Inicio'
  },
  [fieldOperationsSolution.path]: {
    service: fieldOperationsSolution.contactService,
    originLabel: fieldOperationsSolution.name
  },
  [coreService.path]: {
    service: coreService.contactService,
    originLabel: coreService.name
  }
} as const satisfies Record<string, { service: ContactServiceValue; originLabel: string }>;

export function isValidContactService(value?: string | null): value is ContactServiceValue {
  return Boolean(value && validContactServiceValues.has(value));
}

export function getContactServiceLabel(value?: string | null) {
  return contactServices.find((service) => service.value === value)?.label ?? 'Otro / No estoy seguro';
}

export const contactServiceGuidance: Partial<Record<ContactServiceValue, {
  originLabel: string;
  contextMessage: string;
  detailPlaceholder: string;
  expectationTitle: string;
  expectationItems: string[];
}>> = {
  [coreService.contactService]: {
    originLabel: coreService.name,
    contextMessage:
      'Venís por automatización de procesos. Para responder mejor, contame el proceso completo aunque todavía esté general: seguimiento, atención, integración de datos, aprobaciones o cualquier flujo operativo. La idea es detectar si conviene IA agéntica, RPA, pipelines de datos o una combinación, y por dónde conviene empezar con control.',
    detailPlaceholder:
      'Ejemplo: "Tenemos un proceso de seguimiento/integración/operación que hoy depende de WhatsApp, Excel, scripts sueltos o revisión manual. Quiero saber qué tecnología encaja mejor y cómo empezar con bajo riesgo."',
    expectationTitle: 'Primero buscamos el punto de entrada correcto',
    expectationItems: [
      'Identificamos un primer flujo sencillo dentro del proceso complejo.',
      'Definimos si conviene IA agéntica, RPA, pipelines o una combinación.',
      'Si el primer flujo tiene sentido, planteamos cómo escalar por etapas con control.'
    ]
  }
};

export function getContactServiceGuidance(value?: string | null) {
  return isValidContactService(value) ? contactServiceGuidance[value] : undefined;
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
