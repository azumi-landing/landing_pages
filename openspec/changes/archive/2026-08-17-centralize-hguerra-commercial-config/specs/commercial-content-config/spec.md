## Purpose

Mantener una taxonomía comercial única y extensible para HGuerra, con un servicio core, soluciones especializadas, un funnel transversal y métricas que solo se publican cuando tienen evidencia validada.

## ADDED Requirements

### Requirement: HGuerra has one canonical core service
The site SHALL represent Automatización de Procesos e IA as HGuerra's single core service. Its canonical record SHALL define its name, description, active route, CTA, capabilities, entry offer, initial price where applicable, and indicative delivery period. The core entry offer SHALL be Sprint de Automatización, starting at L 19,900 and taking 10 to 15 business days depending on scope.

#### Scenario: A core-service consumer renders the automation offer
- **WHEN** a page or reusable component presents the core service or its entry offer
- **THEN** it reads the name, CTA, capabilities, starting price, and indicative delivery period from the canonical core-service record

#### Scenario: A consumer needs the core-service route
- **WHEN** navigation or a CTA links to the core service
- **THEN** it uses the existing active core-service route from the canonical record without introducing a competing route in this change

### Requirement: Specialized solutions extend the core service
The site SHALL represent specialized offerings as solution records associated with the core service, not as peer core services. Each solution record SHALL define its name, route or slug, description, lifecycle status, CTA, entry offer, capabilities, and price only when a supported commercial price exists. The supported statuses SHALL distinguish active, coming-soon, and hidden availability.

#### Scenario: Active field-operations solution is rendered
- **WHEN** the site renders Gestión/Digitalización de Operaciones de Campo
- **THEN** it treats it as an active specialized solution with Piloto de Operaciones de Campo as its entry offer and does not display an invented fixed price

#### Scenario: Coming-soon WhatsApp courses are configured
- **WHEN** Cursos por WhatsApp is represented in the solution configuration
- **THEN** it has a coming-soon status and is not published as an active navigation item, route, or commercial offering

#### Scenario: A future specialized solution is added
- **WHEN** a future solution is added to the commercial configuration
- **THEN** it can define its own status, route, CTA, entry offer, capabilities, and supported price without changing the core-service taxonomy

#### Scenario: A hidden solution is configured
- **WHEN** a solution has hidden status
- **THEN** it is excluded from public navigation, routes, and commercial listings

### Requirement: Transversal funnel offers have a canonical source
The site SHALL expose canonical reusable records for offers available from both the core service and specialized solutions. The records SHALL define:

- Llamada de encaje: free of charge and 15 minutes.
- Diagnóstico operativo: starting at L 4,900 and creditable to an implementation contracted within 30 days.
- Soporte y mejora continua: starting at L 4,000 monthly.

#### Scenario: A consumer renders a transversal offer
- **WHEN** a page or reusable component presents the call, diagnosis, or support offer
- **THEN** it obtains the price, currency, qualifier, duration or cadence, and applicable condition from the canonical funnel-offer record

#### Scenario: A solution references the diagnosis offer
- **WHEN** a specialized solution uses Diagnóstico operativo as its entry CTA or next step
- **THEN** it references the shared funnel-offer record rather than duplicating its price, eligibility condition, or label

### Requirement: Shared commercial actions and destinations are canonical
The site SHALL provide canonical reusable definitions for shared commercial CTAs and destinations, including the contact route and WhatsApp destination. Consumers that implement the same shared action or destination SHALL use the canonical definition rather than constructing duplicate commercial URLs, labels, or WhatsApp numbers.

#### Scenario: A shared WhatsApp action is rendered
- **WHEN** a page or reusable component renders a shared WhatsApp commercial CTA
- **THEN** its destination is derived from the canonical commercial destination and it does not contain a separate literal WhatsApp number

#### Scenario: A context-specific commercial CTA is rendered
- **WHEN** a consumer needs a service- or solution-specific contact action
- **THEN** it composes that action from the canonical contact destination and selected context while retaining page-specific copy only when that copy is not shared

### Requirement: Quantitative commercial metrics are verified before rendering
The site SHALL expose `VERIFIED_METRICS` as the only source of renderable quantitative commercial metrics. Each metric record SHALL identify its display value, meaning, and evidence reference. A metric without validated evidence SHALL NOT be added to `VERIFIED_METRICS`, approximated, substituted with an invented number, or rendered on a public surface.

#### Scenario: A validated metric is rendered
- **WHEN** a public page or component renders a quantitative commercial metric
- **THEN** it reads the metric from `VERIFIED_METRICS` and the record identifies its evidence reference

#### Scenario: An unsupported metric is encountered
- **WHEN** an existing or proposed quantitative commercial claim lacks validated evidence
- **THEN** the site does not render it and may retain a non-public TODO identifying evidence needed for a future decision

#### Scenario: No metric has validated evidence at initialization
- **WHEN** no quantitative commercial claim has validated evidence available
- **THEN** `VERIFIED_METRICS` is present and empty rather than treating an unverified claim as validated

### Requirement: Related brands remain outside HGuerra's commercial taxonomy
The site SHALL NOT model EnerHubHN, energy management, or energy efficiency as an HGuerra core service or specialized solution. If a canonical EnerHubHN destination is later approved, the site MAY render it only as a discrete related-brand link outside commercial navigation, offer listings, and service taxonomies.

#### Scenario: Commercial navigation is rendered
- **WHEN** the site renders commercial services or specialized solutions
- **THEN** EnerHubHN and energy offerings are absent from that taxonomy

#### Scenario: A related-brand link is added later
- **WHEN** an approved canonical EnerHubHN destination becomes available
- **THEN** it is rendered only as a discrete external related-brand link and not as an HGuerra offer

### Requirement: Existing content contracts remain compatible during staged adoption
The site SHALL preserve current rendering contracts for service landings, contact context, navigation, and shared contact actions while adopting the canonical commercial configuration. The change SHALL preserve active routes and SHALL NOT require unrelated pages to render every configured solution or funnel offer.

#### Scenario: A landing adopts a canonical commercial value
- **WHEN** an active landing or shared section adopts a canonical service, solution, offer, CTA, destination, or metric
- **THEN** it continues to render with its existing page-specific structure and supported content

#### Scenario: An unverified legacy metric is removed from an active consumer
- **WHEN** an active consumer currently renders a quantitative commercial claim absent from `VERIFIED_METRICS`
- **THEN** the consumer no longer renders that quantitative claim without requiring unrelated copy to be repositioned
