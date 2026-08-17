## Context

See `proposal.md` for motivation. The repository is an Astro 5 site with mostly prerendered pages, one on-demand contact route, Firebase App Hosting, EmailJS and no existing automated test/lint/typecheck workflow. The audit spans application code, commercial content, local configuration and the public deployment, while external consoles and source datasets are unavailable.

The existing report at `docs/audits/hguerra-current-site.md` captures evidence gathered against commit `e8fae0f` and the public site on 2026-08-17. The apply phase must treat that report as a candidate baseline to validate, not as authority independent of the inspected sources.

## Goals / Non-Goals

**Goals:**

- Produce a reproducible snapshot tied to branch, commit, date and domain.
- Distinguish public runtime behavior, active source, dormant source and internal evidence.
- Inventory technical state and commercial assertions without converting assumptions into facts.
- Record successful, failed and unavailable QA checks explicitly.
- Keep the report useful as input to later OpenSpec changes.
- Avoid exposing environment values or personal data beyond what is necessary for the audit.

**Non-Goals:**

- Fix findings, refactor code or alter dependencies.
- Rewrite, soften or remove public copy.
- Redesign pages or change positioning.
- Submit the production contact form.
- Claim access to Firebase, EmailJS, analytics, Search Console, DNS or client evidence not present in the repository.
- Decide whether dormant files should be deleted.

## Decisions

### 1. Keep the durable audit under `docs/`, not only inside the change

The report remains at `docs/audits/hguerra-current-site.md` so later changes can use it after this OpenSpec change is archived. OpenSpec artifacts explain scope, method and execution; they do not duplicate the full 14-section inventory.

Alternative considered: store all findings only in `openspec/changes/`. Rejected because archived planning artifacts are less direct as a long-lived project baseline.

### 2. Skip capability specs

The change declares `skip_specs: true`. It adds documentation and does not change externally observable behavior or a system requirement.

Alternative considered: invent an `audit-reporting` capability. Rejected because OpenSpec requirements should describe system behavior, not satisfy validation mechanically.

### 3. Use explicit evidence tiers

Every material claim is classified using these tiers:

| Tier | Meaning |
|---|---|
| Public runtime | Observed directly on `hguerra.com` |
| Active source | Reachable from current pages/components/configuration |
| Dormant source | Present but with no active consumer detected |
| Internal evidence | Repository documentation that supports or conflicts with copy |
| Unavailable evidence | External systems or records not accessible during the audit |

Absence from available evidence is reported as "unverified" or "requires evidence", never as false.

Alternative considered: audit only rendered pages. Rejected because dormant claims and configuration can be reintroduced by later refactors.

### 4. Combine static inspection with non-destructive runtime checks

Static inspection covers architecture, content, dependencies and configuration. Runtime checks cover HTTP status, metadata, JSON-LD parsing, browser console, failed requests, mobile overflow and local build smoke. The real form is not submitted.

Alternative considered: rely only on source. Rejected because redirect status, DNS, response headers and deployed metadata cannot be inferred reliably from source alone.

### 5. Preserve defects to maintain a true baseline

Even trivial findings are documented rather than fixed during this change. Any fix would make the report describe a mixed before/after state and violate the planning boundary.

Alternative considered: fix low-risk defects while auditing. Rejected because the user explicitly requested no accidental redesign or repositioning, and separate changes provide clearer traceability.

### 6. Record QA failures as findings

A failed typecheck, vulnerability audit or unavailable script does not get hidden or relabeled as passing. The report captures command, outcome and likely scope without attributing pre-existing failures to the audit.

## Risks / Trade-offs

- [Production can change after capture] -> Record timestamp, branch, commit and deployment-verification limitation.
- [Repository and deployed commit cannot be proven identical] -> State content correspondence without claiming byte-level identity.
- [Unavailable external consoles leave blind spots] -> List each unavailable system and avoid conclusions about its settings.
- [Commercial claims may be mistaken for falsehoods] -> Separate absence of evidence from evidence of absence.
- [Dormant-code classification can miss dynamic imports] -> Combine import/call-path inspection with build and browser observations.
- [QA commands may use a drifted `node_modules`] -> Record package ranges, lock versions, installed versions and `npm ci --dry-run` output.
- [Audit output may expose credentials or PII] -> Include variable names and control implications, never secret values.
- [Long report becomes stale] -> Treat it as a dated baseline and require later changes to cite or refresh affected sections.

## Migration Plan

1. Reconfirm Git state and the commit being audited.
2. Reconcile the existing report with current source and public responses if either has changed.
3. Execute proportional non-destructive QA and record exact outcomes.
4. Verify all 14 required report sections and acceptance criteria.
5. Validate the OpenSpec change.

No runtime deployment or data migration exists. Rollback is documentation-only: revert the audit report and change artifacts without touching application code.
