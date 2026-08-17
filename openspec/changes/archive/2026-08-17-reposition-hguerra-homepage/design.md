## Context

See `proposal.md` for motivation and `specs/homepage-positioning/spec.md` for the behavior contract. The Astro home is currently a composed page backed by `src/data/home.ts`, `src/data/site.ts`, and shared components. T1 added `src/data/commercial.ts`, where `coreService`, `activeSolutions`, and an intentionally empty `VERIFIED_METRICS` are the canonical commercial and quantitative sources.

The T0 audit found the prior home treated two services as peers, emphasized several unsupported quantitative claims, and mixed professional positioning, offer detail, and technology claims. It also established that the repository has no test, lint, or dedicated Astro typecheck scripts; `npm run build` is the production check, and `npx tsc --noEmit` fails on pre-existing Astro barrel imports.

## Goals / Non-Goals

**Goals:**

- Make hierarchy explicit: Héctor Guerra and operational transformation first; one core service second; specialized solutions third.
- Retain the current static Astro/data architecture and use T1 records as the single source for commercial labels, paths, availability, and verified metrics.
- Make the specialized-solution section data-driven from active solution records so future additions are additive.
- Keep the existing visual system while improving page hierarchy, semantic landmarks, and responsive behavior.

**Non-Goals:**

- Redesign the active automation or field-operations landings, change their routes, prices, or funnel terms.
- Create a Sprint-only landing narrative, a public Cursos por WhatsApp offering, a technology catalogue, an energy offering, or any new claim evidence.
- Rework the contact flow, add analytics, alter external dependencies, or resolve unrelated typecheck/barrel issues.
- Turn dormant case-study data into public evidence.

## Decisions

### 1. Compose the home around explicit commercial roles

The page will lead with a personal, operational proposition; follow with problem framing; render a dedicated core-service section from `coreService`; then render a specialized-solutions section from `activeSolutions`. This replaces a peer `serviceLinks` presentation in the home only. The data model remains T1's concern.

Rendering manual cards for current services was rejected because it would reintroduce duplicated labels, paths, and status logic. Treating the Sprint as the core section was rejected because an entry offer is narrower than the service it supports.

### 2. Keep the section data local unless it is canonically commercial

`src/data/home.ts` will own page-specific copy for problems, workflow, profile, qualitative evidence, and secondary capabilities. `commercial.ts` will remain the source for service/solution identity, path, status, capability, CTA and metrics records. The page may compose presentational text around those records but will not copy commercial facts.

Moving all homepage copy into `commercial.ts` was rejected because it would make a small taxonomic module own non-commercial page narrative. Copying active solutions into `home.ts` was rejected because status changes could diverge from navigation and landings.

### 3. Treat evidence as conditional rather than fill empty proof space

The quantitative evidence area will be generated only from `VERIFIED_METRICS`. With its current empty set, the layout will omit that area rather than retaining placeholders, invented performance results, unnamed clients, testimonials, or sectors. A qualitative, clearly non-quantitative professional/profile section may remain if it does not claim unverified outcomes.

Replacing removed metrics with softer invented ranges or representative figures was rejected because it still violates the verification boundary. Publishing dormant case data was rejected because T0 classifies it as non-active and insufficiently attributable.

### 4. Place technical capabilities after commercial orientation

The technical section will use a concise grouped presentation after the service, solution, method, and evidence/profile narrative. It will frame Python, SQL, GCP, Linux, Docker, APIs, web/mobile applications, and IA as implementation capabilities rather than product categories or proof of specific integrations.

Keeping the technical list in the hero was rejected because it asks visitors to interpret tools before their business problem. Removing it entirely was rejected because the requested professional orientation still needs bounded technical context.

### 5. Preserve lightweight composition and verify real breakpoints

The existing Astro page and shared utility classes will be extended with the smallest needed local or existing shared styles. Cards and CTAs will use semantic headings and links; layout will stack cleanly at narrow widths and scale at existing Tailwind breakpoints. This avoids introducing a frontend framework, client-side state, or a generic card system for one page.

A broad component-library extraction was rejected because no other current page needs this exact homepage composition. Fixed desktop-first dimensions were rejected because acceptance explicitly includes 360 px and tablet verification.

## Risks / Trade-offs

- [Hero becomes too generic after removing metrics] -> Make the problem-to-system transformation concrete and link quickly to the core service.
- [Page-specific copy drifts from T1 terminology] -> Consume canonical record names, routes, CTAs, status, and metrics directly; validate active links after build.
- [Future active solution has longer content or a different card count] -> Use responsive grid behavior driven by `activeSolutions`, not a two-item fixed layout.
- [Empty metric collection creates a visual gap] -> Render the evidence area conditionally and keep professional context independent from numeric proof.
- [Responsive updates introduce overflow or weak focus behavior] -> Verify 360 px, tablet, and desktop with keyboard navigation and link checks before completion.
- [Required QA tools are absent] -> Run available scripts and document unavailable test/lint checks and the pre-existing TypeScript failure without treating them as passing.

## Migration Plan

1. Inspect the current home data and layout against T1 records; remove peer-service and unsupported-claim consumers from the homepage.
2. Update page-specific copy and homepage composition to establish presentation, problems, core service, active solutions, method, conditional evidence, secondary capabilities, profile, and contact flow.
3. Validate internal routes, lifecycle filtering, quantitative-claim source, semantic landmarks, keyboard traversal, and responsive layouts.
4. Run available automated checks and build preview smoke checks at the required viewports.
5. Deploy as a static content/layout change through the existing build pipeline. Roll back by reverting the homepage/data changes; no persistent data or route migration is involved.
