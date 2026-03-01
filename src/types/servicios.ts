import type { IconName, BaseContent } from './common';

export interface Servicio extends BaseContent {
  icon: IconName;
  pain: string;
  promise: string;
  proof: string;
  features: string[];
  cta: string;
}
