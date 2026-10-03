# XDT4 Quality Control v0.1

Owner: `XDT4-QUALITY-CONTROL`  
Scope: `quainhon/XDT:xdt4-quality-control/`

XDT4 independently evaluates XDT3 construction evidence against inherited authorization, ownership, material/contract, and acceptance requirements.

Flow:

`XDT3 EVIDENCE -> QC INPUT -> CRITERION CHECKS -> VERDICT -> XDT5 HANDOFF | XDT3 CORRECTIVE RETURN`

Verdicts:
- `PASS`: every required criterion is proven, authorization and ownership are valid, and an XDT5-ready handoff may be emitted.
- `FAIL`: evidence proves a contract/acceptance/ownership violation; return bounded corrective findings to XDT3/owning implementation stage.
- `NEEDS_EVIDENCE`: required proof is absent or insufficient; no launch handoff.

XDT4 never repairs implementation, mutates predecessor/successor scopes, or launches artifacts. Worker claims are inputs, not proof. Missing, incomplete, unresolved, or unauthorized evidence fails closed.
