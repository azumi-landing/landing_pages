import type { IconName } from './common';
import type { FlowLevel } from './diagrama';

export interface HeroMetric {
  value: string;
  label: string;
}

export interface ProblemCard {
  icon: IconName;
  title: string;
  description: string;
}

export interface CapabilityCard {
  icon: IconName;
  title: string;
  pain: string;
  solution: string;
  outcome: string;
  bullets: string[];
}

export interface CaseStudyCard {
  icon: IconName;
  label: string;
  title: string;
  challenge: string;
  approach: string;
  result: string;
  stack: string;
}

export interface StackGroup {
  icon: IconName;
  title: string;
  description: string;
  items: string[];
}

export interface DifferentiatorCard {
  icon: IconName;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactTopic {
  value: string;
  label: string;
  disabled?: boolean;
  selected?: boolean;
}

export interface ServiceLandingTheme {
  serviceLabel: string;
  sectionMark: string;
  badgeIcon: IconName;
  accent: string;
  accentAlt: string;
  accentSoft: string;
  accentGlow: string;
  accentShadow: string;
  pattern: 'grid' | 'mesh' | 'flow';
}

export interface ServiceLandingContactContent {
  eyebrow?: string;
  title: string;
  description: string;
  detailsTitle: string;
  detailsItems: string[];
  topics: ContactTopic[];
  formTitle?: string;
  detailPlaceholder?: string;
  source: string;
}

export interface ServiceLandingConfig {
  seoTitle: string;
  seoDescription: string;
  seoImage?: string;
  path: string;
  theme: ServiceLandingTheme;
  badge: string;
  title: string;
  subtitle: string;
  benefits: string[];
  metrics: HeroMetric[];
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  problemTitle: string;
  problemSubtitle: string;
  problemCards: ProblemCard[];
  riskTitle: string;
  riskDescription: string;
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  capabilities: CapabilityCard[];
  workflowTitle: string;
  workflowSubtitle: string;
  workflow: FlowLevel[];
  casesTitle: string;
  casesSubtitle: string;
  cases: CaseStudyCard[];
  stackTitle: string;
  stackSubtitle: string;
  stackGroups: StackGroup[];
  differentiationTitle: string;
  differentiationSubtitle: string;
  differentiators: DifferentiatorCard[];
  notIdealTitle: string;
  notIdealIntro: string;
  notIdealItems: string[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: FaqItem[];
  contact: ServiceLandingContactContent;
}
