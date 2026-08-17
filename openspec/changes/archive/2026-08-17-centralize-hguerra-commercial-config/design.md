## Context

See `proposal.md` for motivation and `specs/commercial-content-config/spec.md` for required behavior. The current Astro site keeps static content in `src/data/`, with two active service landings represented as peer links in `site.ts` and detailed content in `serviceLandings.ts`. `contact.ts` already owns the contact route, the environment-backed WhatsApp number, and URL construction.

The archived T0 audit found naming competition between Automatización Inteligente de Procesos, IA Agéntica, and automatización de procesos; it also found literal `wa.me` URLs, a CTA/destination mismatch, and quantitative public claims with no validated evidence. No existing source establishes a fixed price for the field-operations offer. The repository has no test, lint, or dedicated Astro typecheck script. `npm run build` is the declared production verification, while `npx tsc --noEmit` currently fails on pre-existing `.astro` barrel imports.

## Goals / Non-Goals

**Goals:**

- Add one focused typed commercial configuration module in `src/data/`, equivalent to `coreService` and `solutions[]`.
- Make the core service, specialized solutions, funnel offers, shared CTAs, destinations, and lifecycle status addressable by stable keys.
- Keep Operaciones de Campo as an active solution built on the core, and configure Cursos por WhatsApp without exposing it publicly.
- Establish `VERIFIED_METRICS` as the only renderable quantitative commercial source and prevent unsupported claims from reaching active consumers.
- Keep EnerHubHN structurally separate from the HGuerra offer while allowing a future discrete external link.

**Non-Goals:**

- Create a second core service, an energy offering, or a public Cursos por WhatsApp offering.
- Invent a fixed price for Piloto de Operaciones de Campo or validate an existing claim without evidence.
- Change the EmailJS form flow, public environment-variable contract, external providers, pricing policy, routes, or design system.
- Introduce a CMS, database, remote configuration, state management layer, or broad content architecture.
- Resolve the pre-existing TypeScript barrel-import failures or introduce an unrelated lint/test toolchain solely for this content configuration change.

## Decisions

### Keep canonical commercial content in one typed data module

Add a focused module such as `src/data/commercial.ts` that exports readonly `coreService`, `solutions`, transverse funnel offers, shared CTA metadata, and `VERIFIED_METRICS`. Existing data modules will consume its stable records rather than duplicate commercial values.

This mirrors the current static, data-driven Astro architecture and avoids runtime dependencies. A CMS, database, generic registry framework, or nested taxonomy abstraction was rejected because the site has a small, static content surface.

### Use an explicit core-to-solution taxonomy

`coreService` represents Automatización de Procesos e IA and retains the current active automation route for compatibility. `solutions` holds domain-specific offerings with `active`, `coming-soon`, or `hidden` status. The active field-operations solution references the core but owns its route, CTA, capabilities, and Piloto entry offer. Cursos por WhatsApp is a `coming-soon` record only; its status prevents it from becoming a public route or navigation item.

This makes future specialized solutions additive. Retaining two independent top-level service records was rejected because it preserves the taxonomy conflict documented in T0.

### Model offers as structured records and share the funnel

The core-service record owns Sprint de Automatización. A separate reusable funnel collection owns Llamada de encaje, Diagnóstico operativo, and Soporte y mejora continua so either the core or any solution can reference the same terms. Records hold canonical IDs, display names, HNL prices where established, qualifiers, duration or cadence, and applicable conditions. Piloto de Operaciones de Campo deliberately has no numeric price.

Structured values prevent duplicated commercial terms while allowing page-specific surrounding prose. Storing only formatted strings or copying the funnel into each solution was rejected because it would hide and repeat price, currency, condition, and timeframe data.

### Render quantitative metrics only from verified evidence

`VERIFIED_METRICS` remains independent from prices and offer durations. It contains only outcome, scale, or performance claims that include an evidence reference. It starts empty unless implementation can identify a claim whose evidence is explicitly validated; T0's internal hints are not enough to promote a public claim automatically. Active consumers that use numerical commercial claims must remove them or switch to a verified record.

An unrestricted metrics collection was rejected because it would make unsupported legacy claims appear canonical. Replacing unverified metrics with approximations was rejected because it would create new unsupported claims.

### Preserve contact helpers and centralize destinations by composition

`contact.ts` remains the compatibility boundary for the contact route, context query, and environment-backed WhatsApp URL builder. The commercial configuration refers to shared action keys; consumers obtain concrete URLs through the existing helper. Known literal `wa.me` links are removed from active data.

Moving all contact behavior into the new module was rejected because it would expand this taxonomic change into a contact-flow refactor and risk current contextual links.

### Keep EnerHubHN a separate related brand

EnerHubHN does not enter `coreService`, `solutions`, commercial navigation, offers, or metrics. No public link is added without a canonical approved destination. If one is supplied later, it will belong to a separate related-brand link record and be rendered discretely.

Adding energy as another HGuerra solution was rejected because it contradicts the intended brand separation.

## Risks / Trade-offs

- [A solution status is ignored by a consumer] → Derive public navigation and listings only from active solution records; inspect routes and shared links after adoption.
- [Field operations acquires a fabricated price] → Keep its entry-offer price absent until an approved commercial source exists.
- [An empty `VERIFIED_METRICS` is mistaken for missing functionality] → Export it intentionally and document that T0 did not validate current public claims.
- [Removing unverified values changes marketing copy] → Restrict edits to the metric-bearing fragment and retain qualitative copy where it remains truthful.
- [Contact helper imports create cycles] → Keep the commercial module declarative and preserve `contact.ts` as the URL-builder owner; verify import direction before moving exports.
- [Acceptance expects unavailable QA tools to pass] → Run `npm run build`; report test/lint absence and the pre-existing `npx tsc --noEmit` failure separately rather than attribute them to this change.

## Migration Plan

1. Add typed core, solution, funnel, CTA, and verified-metric records with stable keys.
2. Migrate navigation and active consumers to the core/solution taxonomy while preserving active routes and contextual contact behavior.
3. Remove or stop rendering quantitative commercial claims not represented by `VERIFIED_METRICS`.
4. Replace known literal WhatsApp destinations and shared CTA duplicates.
5. Run available checks and inspect generated pages for active-solution visibility, preserved routes, CTA destinations, and absence of unverified metrics.
6. Roll back by reverting consumer imports and the new data module; no persisted data or migration is involved.
