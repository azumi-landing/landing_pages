## 1. Homepage Content Model

- [x] 1.1 Update homepage-specific copy for the personal operational proposition, problem framing, working method, qualitative profile, and secondary technical capabilities without adding unsupported claims.
- [x] 1.2 Define homepage presentation data needed for an extensible specialized-solutions section while retaining `commercial.ts` as the source for service identity, availability, routes, CTAs, and verified metrics.
- [x] 1.3 Remove homepage-only peer-service, Sprint-first, technology-first, and unverified quantitative content that conflicts with the approved hierarchy.

## 2. Homepage Composition

- [x] 2.1 Recompose the hero and problem sections so they identify Héctor Guerra and the transformation of manual, dispersed, hard-to-control operations before mentioning technologies or offers.
- [x] 2.2 Render a distinct core-service section from `coreService` with a CTA to the canonical automation route, without promoting the Sprint as the primary homepage offer.
- [x] 2.3 Render Soluciones especializadas from `activeSolutions`, with Operaciones de Campo as the current specialized solution and no public representation of coming-soon or hidden solutions.
- [x] 2.4 Add or revise the workflow, evidence/profile, secondary capabilities, and contact sections in the approved narrative order while preserving the existing active contact route and CTA context.
- [x] 2.5 Render quantitative evidence only from `VERIFIED_METRICS` and omit metric-oriented UI when the collection is empty.

## 3. Usability And Commercial Boundaries

- [x] 3.1 Update semantic headings, landmarks, section links, focus states, and CTA labels needed for keyboard-operable homepage navigation.
- [x] 3.2 Adapt homepage layout and cards for 360 px mobile, tablet, and desktop without horizontal overflow or fixed assumptions about the number of active specialized solutions.
- [x] 3.3 Confirm the homepage does not publish Cursos por WhatsApp, energy, or EnerHubHN as HGuerra services or solutions.
- [x] 3.4 Update homepage metadata and structured data only where needed to match the revised public positioning without introducing unsupported facts.

## 4. Verification

- [x] 4.1 Run affected automated checks, documenting the absence of test/lint scripts and the status of the pre-existing `npx tsc --noEmit` barrel-import failure separately from this change.
- [x] 4.2 Run `npm run build` and inspect the generated homepage for route resolution, active-solution filtering, absence of coming-soon/energy/off-scope content, and quantitative claims sourced only from `VERIFIED_METRICS`.
- [x] 4.3 Run local browser smoke checks at 360 px mobile, tablet, and desktop for layout, horizontal overflow, keyboard access, primary navigation, section links, and all homepage commercial/contact CTAs.
