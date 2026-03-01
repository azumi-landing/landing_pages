import type { IconName, BaseContent } from './common';

export interface StackItem extends BaseContent {
  icon: IconName;
  details: string[];
}
