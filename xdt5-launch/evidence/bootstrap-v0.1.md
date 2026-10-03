# XDT5 Launch v0.1 bootstrap evidence

Job: `XDT5-LAUNCH-BOOTSTRAP-V0-1-001`

Scope: `xdt5-launch/` only.

Safety properties:
- XDT4 PASS is mandatory and evidence-linked.
- Launch authority is mandatory.
- Required human gates require approval evidence.
- Artifact-type operational proofs are mandatory.
- Declared blockers fail closed.
- Synthetic READY fixture performs no external mutation.
- Validator is pure evaluation code; it contains no deployment/network mutation capability.

Verification command: `node xdt5-launch/tests/commissioning.test.mjs`.
