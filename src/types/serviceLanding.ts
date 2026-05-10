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

export interface ServiceCasesCta {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface StackGroup {
  icon: IconName;
  title: string;
  description: string;
  items: string[];
}

export interface ProofMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ProofPoint {
  icon: IconName;
  title: string;
  description: string;
}

export interface ServiceTrustItem {
  value: string;
  label: string;
}

export interface ServiceTrustContent {
  eyebrow?: string;
  title: string;
  description: string;
  items: ServiceTrustItem[];
}

export interface ServiceExecutionContent {
  eyebrow?: string;
  title: string;
  description: string;
  bullets: string[];
  ctaLabel?: string;
}

export interface DifferentiatorCard {
  icon: IconName;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
}

export interface BeforeAfterCase {
  icon: IconName;
  industry: string;
  title: string;
  before: string;
  after: string;
}

export interface IdealForSection {
  title: string;
  yesTitle: string;
  yesItems: string[];
  noTitle: string;
  noItems: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface MethodologyStep {
  step: number;
  title: string;
  description: string;
  icon: IconName;
  items: string[];
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
  casesCta?: ServiceCasesCta;
  beforeAfterTitle?: string;
  beforeAfterSubtitle?: string;
  beforeAfterCases?: BeforeAfterCase[];
  idealForSection?: IdealForSection;
  proofTitle: string;
  proofSubtitle: string;
  proofMetrics: ProofMetric[];
  proofPoints: ProofPoint[];
  trustBand: ServiceTrustContent;
  stackTitle: string;
  stackSubtitle: string;
  stackGroups: StackGroup[];
  differentiationTitle: string;
  differentiationSubtitle: string;
  differentiators: DifferentiatorCard[];
  methodologyTitle?: string;
  methodologySubtitle?: string;
  methodologySteps?: MethodologyStep[];
  notIdealTitle: string;
  notIdealIntro: string;
  notIdealItems: string[];
  execution: ServiceExecutionContent;
  faqTitle: string;
  faqSubtitle: string;
  faqs: FaqItem[];
  contact: ServiceLandingContactContent;
}
