# XDT2 Architect v0.1 Bootstrap Evidence

## Identity and authoritative target

- Stable owner: `XDT2-ARCHITECT`.
- Project: `xdt-architect`.
- Repository: `quainhon/XDT`.
- Owned scope: `xdt2-architect/`.
- Execution profile: `xdt_primary_worker`.
- Shared environment lane: `XDT_BUILD` only when environment-dependent execution is required.

Fresh `job.json` superseded legacy `quainhon/architect` references.

## Rule Pack evidence

Read and applied:
- `quainhon/ai-orchestrator/docs/RULE_KEEPER.md` blob `ef066e7d5507a0bc30652c7a8f42509caddfe6ac`;
- `quainhon/ai-orchestrator/docs/XDT_RULE.md` blob `8210856d62cb48a67ef6f50d1d6cc87dade629f4`;
- `quainhon/ai-orchestrator/projects/xdt-architect/project.json` blob `e964e4bbd88dc27428be2f7c3a796a9cec2e3e93`;
- `quainhon/ai-orchestrator/projects/registry.json` blob `ac99e0de97f40811a346c371b78b83e5bb5f25f7`.

Registry resolves `xdt-architect -> XDT2-ARCHITECT`, conversation `6ac1552d-7730-83e9-8b15-ad2637b722af`, path `xdt2-architect/`.

## XDT1 input evidence

XDT1 bootstrap is verified DONE:
- lifecycle completion commit: `6ab8bc6f7d5ab6db785666cd0fe2a80dd935d3ae`;
- verified material head recorded there: `0e028e7775a92b77d174397188e2b923e4aa8d06`;
- canary plan: `PLAN-CANARY-QN-MARKET-001`;
- current canary Material Plan blob: `aa4d04407c7b5e45edd7a57ffba3b497e721da6d`.

The Material Plan reuses:
- `location-scout.scout-types` owned by `TTQN5-LOCATION-SCOUT`;
- `qn-reel.organizer-models` owned by `TTQN4-REEL-CONTROL`.

It leaves two required shared materials unresolved:
- `qn-market.marketplace-core-contract`;
- `qn-market.cross-boat-reference-contract`.

## Build Plan contract

`schemas/build-plan.schema.json` defines machine-readable fields for:
- mission identity;
- verified Rule Pack and Material Plan inputs;
- architecture summary and proposals;
- components, responsibilities, owned scopes, dependencies, material consumption;
- interfaces and data/control flow;
- build order and work packages;
- acceptance criteria and integration points;
- risks, unresolved decisions, escalation requirements;
- construction authorization and restrictions;
- evidence references.

Each work package carries the lower-level handoff minimum: mission slice, Rule Pack references, material contract references, architecture boundary, deliverables, and acceptance criteria.

## Canary result

`plans/qn-market-canary.build-plan.json` decomposes the hypothetical mission into:
- `qn-market-boundary`;
- `qn-market-core`;
- `qn-market-reference-adapter`.

This is architecture evidence only. QN Market was not built.

The canary preserves XDT1 decisions rather than overriding them:
- both unresolved contracts remain unknown-owner material references;
- component owner assignments remain unresolved;
- dependent work packages remain `blocked_pending_escalation`;
- `authorization.construction_authorized=false`;
- escalation path is explicitly `XDT2 -> AI Orchestrator / QN Master -> XDT1 Material`.

## Boundary verification

- XDT2-created implementation artifacts are confined to `xdt2-architect/`.
- No QNCC, Location Scout, Reel Control, Reel Organizer, XDT1 material contract, or production repository was mutated.
- Existing downstream contracts are referenced by stable ID/revision only.
- No UI, database, service, router, state machine, or deployment was introduced.
- Existing TTQN/XDT routing metadata was read, not modified by the XDT2 implementation.

## Verification obligations

Before lifecycle DONE:
1. schema and canary JSON must parse;
2. canary must validate against `xdt.build-plan.v0.1`;
3. required minimum Build Plan fields must exist;
4. unresolved XDT1 decisions must remain unresolved and escalate;
5. construction authorization must remain false for this canary;
6. all XDT2 implementation paths must remain under `xdt2-architect/`.

## Limitation

The XDT1 Material v0.1 artifacts currently live at repository-root paths such as `plans/` and `schemas/`, although current XDT shared-repository registration now gives XDT1 the canonical path scope `xdt1-material/`. XDT2 consumes the verified current artifact exactly where it exists and does not relocate or mutate XDT1-owned material. Repository layout reconciliation, if desired, belongs to XDT1 / AI Orchestrator governance.

## Recommended next step

Use this Build Plan contract for the next authorized mission after XDT1 material preflight. Do not activate XDT3 from this QN Market canary because the canary's construction authorization is false.
