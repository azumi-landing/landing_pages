import type { IconName, BaseContent } from './common';

export interface CasoExito extends BaseContent {
  sector: string;
  sectorIcon: IconName;
  dolor: string;
  solucion: string;
  metricas: string[];
  stack: string;
}
