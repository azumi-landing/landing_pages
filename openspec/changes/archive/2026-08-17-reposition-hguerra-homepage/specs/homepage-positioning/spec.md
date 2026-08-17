## Purpose

Presentar a Héctor Guerra y su oferta como un hub comercial claro que lleva desde problemas operativos hacia el servicio core y las soluciones especializadas activas.

## ADDED Requirements

### Requirement: Homepage introduces Héctor Guerra and the operational transformation offered
The homepage SHALL identify Héctor Guerra in its opening presentation and communicate a value proposition focused on transforming manual processes, dispersed information, and hard-to-control business operations into simple, measurable, automated systems. The opening presentation SHALL establish operational and business outcomes before naming technologies or entry offers.

#### Scenario: A visitor reads the homepage opening
- **WHEN** a visitor views the opening content of the homepage
- **THEN** they can identify Héctor Guerra, the types of operational problems addressed, and the intended transformation without needing to inspect a service landing

#### Scenario: A visitor encounters technical capabilities
- **WHEN** the homepage mentions technical capabilities
- **THEN** they appear after the primary positioning and do not replace the value proposition with a technology catalogue

### Requirement: Homepage presents Automatización de Procesos e IA as the single core service
The homepage SHALL present Automatización de Procesos e IA as HGuerra's single core service, with a conceptual description covering automation tailored to administrative, commercial, and operational processes. The core-service section SHALL link to the canonical active automation route using a CTA that communicates exploration of automation. It SHALL NOT present the Sprint de Automatización as the homepage's primary offer or main narrative.

#### Scenario: A visitor explores the core service
- **WHEN** a visitor uses the core-service CTA
- **THEN** it leads to the active canonical route for Automatización de Procesos e IA

#### Scenario: A visitor scans the homepage hierarchy
- **WHEN** a visitor compares the core service with other commercial offerings
- **THEN** Automatización de Procesos e IA is visibly identified as the core service rather than as one peer specialty among several

### Requirement: Homepage lists only active specialized solutions
The homepage SHALL provide an extensible section titled Soluciones especializadas that renders only active records from the canonical commercial solution collection. Each rendered solution SHALL communicate its specialized role and link to its own canonical active route. The section SHALL allow an additional active solution to appear through the commercial collection without redesigning the homepage taxonomy.

#### Scenario: A visitor views the current specialized solution
- **WHEN** a visitor views Soluciones especializadas with the current commercial configuration
- **THEN** they see Operaciones de Campo described as systems for orders, personnel, evidence, and supervision outside the office, with a CTA to its active route

#### Scenario: A solution is not active
- **WHEN** a solution has coming-soon or hidden status in the commercial collection
- **THEN** the homepage does not render it as a publicly available solution, navigation target, or commercial CTA

#### Scenario: A future solution becomes active
- **WHEN** another specialized solution is marked active in the canonical commercial collection
- **THEN** the homepage can present it inside Soluciones especializadas while retaining Automatización de Procesos e IA as the only core service

### Requirement: Homepage gives visitors a complete, evidence-bounded orientation path
The homepage SHALL provide a coherent path covering the problems addressed, how Héctor Guerra works, professional experience or evidence, technical capabilities as secondary context, professional profile, and a contact CTA. Quantitative metrics, outcomes, or performance claims SHALL render only when supplied by `VERIFIED_METRICS`; no unsupported quantity, client claim, testimonial, sector claim, or result SHALL be introduced as evidence.

#### Scenario: No verified metrics are available
- **WHEN** `VERIFIED_METRICS` is empty
- **THEN** the homepage omits quantitative evidence blocks and preserves qualitative evidence or professional context that does not assert an unsupported metric

#### Scenario: A verified metric is available
- **WHEN** the homepage renders a quantitative evidence claim
- **THEN** the claim originates from `VERIFIED_METRICS` and retains the metric's validated meaning

### Requirement: Homepage preserves HGuerra commercial boundaries and usable presentation
The homepage SHALL NOT publish energy or EnerHubHN as an HGuerra service, core service, or specialized solution. It SHALL preserve existing active service and contact routes. Its primary navigation, section links, and commercial CTAs SHALL remain keyboard-operable and understandable at mobile, tablet, and desktop viewport sizes, including a 360 px-wide mobile viewport.

#### Scenario: A visitor navigates commercial destinations
- **WHEN** a visitor follows a homepage service or contact CTA
- **THEN** it resolves to an existing active internal destination and remains usable without relying on hover-only interaction

#### Scenario: A visitor uses a small viewport
- **WHEN** a visitor views the homepage at 360 px width
- **THEN** primary content, CTA labels, and specialized-solution cards remain readable and accessible without horizontal page overflow

#### Scenario: A visitor looks for energy services
- **WHEN** a visitor reviews the homepage's core service and specialized solutions
- **THEN** energy and EnerHubHN are not represented as offers from HGuerra
