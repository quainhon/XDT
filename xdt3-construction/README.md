# XDT3 Construction v0.1

Owner: `XDT3-CONSTRUCTION`  
Canonical scope: `quainhon/XDT:xdt3-construction/`

XDT3 converts an authorized XDT2 Build Plan work package into a bounded construction record:

`AUTHORIZED BUILD PLAN -> EXECUTION PLAN/HANDOFF -> IMPLEMENTATION EVIDENCE -> XDT4 INPUT`

## Safety gates
- `authorization.construction_authorized` must be `true` before dispatch or implementation evidence may progress.
- Target repository/path and authoritative owner are explicit and immutable for the record.
- Cross-owner targets produce a handoff; XDT3 does not mutate them directly.
- Worker/AG output is implementation evidence only, never XDT4 approval.
- Missing authority, ownership, prerequisite, or scope fails closed.

## Artifacts
- `schemas/construction-record.schema.json` — machine-readable v0.1 contract.
- `fixtures/authorized-self.fixture.json` — synthetic authorized in-scope proof.
- `evidence/qn-market-unauthorized.refusal.json` — negative canary proof.
- `tests/bootstrap-validation.json` — bootstrap validation record.
- `docs/bootstrap-report.md` — scope/evidence summary.

XDT3 consumes XDT2 Build Plans read-only and does not redefine the XDT2 schema.
