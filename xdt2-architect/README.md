# XDT2 Architect v0.1

XDT2 Architect converts:

`Mission + Effective Rule Pack + Approved XDT1 Material Plan -> Machine-readable Build Plan`

## Scope

Owned path: `xdt2-architect/`.

XDT2 owns architecture decomposition, component boundaries, dependencies, interfaces, build sequence, work packages, and acceptance criteria.

XDT2 does not implement product features, deploy production, redefine XDT1 materials/contracts, or change downstream ownership.

Material/contract conflicts use:

`XDT2 -> AI Orchestrator / QN Master -> XDT1 Material`

## Durable v0.1 artifacts

- `schemas/build-plan.schema.json` — canonical Build Plan contract for XDT2 v0.1.
- `plans/qn-market-canary.build-plan.json` — canary consumption of XDT1's approved-with-unresolved QN Market Material Plan.
- `docs/bootstrap-report.md` — verification/evidence.

## Build Plan separation

The contract keeps three classes explicit:

1. verified inputs — source-backed Rule Pack and Material Plan references;
2. architectural proposals — XDT2-owned decomposition choices;
3. unresolved decisions — ownership/contract questions that must escalate instead of being silently solved.

## Construction gate

A Build Plan is consumable by a future Construction department only when its authorization permits construction. A plan with unresolved blocking material/ownership decisions remains machine-readable but must keep construction authorization false.
