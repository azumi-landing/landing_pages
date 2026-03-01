import type { IconName, BaseContent } from './common';

export interface FlowLevel extends BaseContent {
  level: number;
  highlight: 'blue' | 'green' | 'yellow' | 'purple' | 'orange' | 'result';
  icon: IconName;
  items: FlowItem[];
}

export interface FlowItem {
  icon: IconName;
  text: string;
  small?: string;
}

export interface ResultItem {
  icon: IconName;
  text: string;
  highlight?: string;
}
