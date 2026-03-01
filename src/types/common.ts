// Tipos base compartidos en toda la aplicación

// Iconos de FontAwesome (formato fa-*)
export type IconName = string;

// Estados de UI
export type ModalState = 'open' | 'closed';

// Variantes de botones
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';

// Direcciones para carousels
export type Direction = 'prev' | 'next';

// Estados de carga/operación
export type StatusVariant = 'urgent' | 'progress' | 'done' | 'neutral';

// Base para todo contenido
export interface BaseContent {
  id: string;
  title: string;
  description?: string;
}

// Props de sección estándar
export interface SectionProps {
  class?: string;
  id?: string;
}
