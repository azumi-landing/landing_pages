import type { IconName, BaseContent } from './common';

export interface AboutCard extends BaseContent {
  icon: IconName;
  bullets: string[];
}

export interface AboutFilter {
  icon: IconName;
  title: string;
  intro: string;
  exclusions: string[];
}
