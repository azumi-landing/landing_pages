import type { IconName, ButtonVariant, StatusVariant, BaseContent } from './common';

// Tarjeta dentro del mockup de app móvil
export interface AppCard {
  title: string;
  status: StatusVariant;
  details: string;
  meta: string[];
}

// Mockup de aplicación móvil
export interface AppMockup {
  title: string;
  user: string;
  cards: AppCard[];
  actions: { label: string; variant: ButtonVariant }[];
}

// Estadística en dashboard
export interface DashboardStats {
  value: string;
  label: string;
}

// Tabla en dashboard
export interface DashboardTable {
  headers: string[];
  rows: string[][];
}

// Mockup de dashboard web
export interface DashboardMockup {
  title: string;
  url: string;
  user: string;
  sidebarIcons: IconName[];
  stats: DashboardStats[];
  table: DashboardTable;
}

// Feature/funcionalidad destacada
export interface SectorFeature {
  icon: IconName;
  label: string;
}

// Paso del flujo de trabajo
export interface WorkflowStep {
  phase: string;
  title: string;
  description: string;
  icon: IconName;
  actor: 'web' | 'mobile' | 'both';
}

// Sector completo con modal
export interface Sector extends BaseContent {
  icon: IconName;
  shortDescription: string;
  fullDescription: string;
  mobileApp: AppMockup;
  dashboard: DashboardMockup;
  features: SectorFeature[];
  workflow: WorkflowStep[];
}

// Sector "Otros" (sin modal)
export interface OtherSector {
  icon: IconName;
  title: string;
  description: string;
}
