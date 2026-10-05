# XDT4 Quality Control v0.1

Owner: `XDT4-QUALITY-CONTROL`  
Scope: `quainhon/XDT:xdt4-quality-control/`

XDT4 independently evaluates XDT3 construction evidence against inherited authorization, ownership, material/contract, and acceptance requirements.

Flow:

`XDT3 EVIDENCE -> QC INPUT -> CRITERION CHECKS -> VERDICT -> TERMINAL QC PASS (CHAIN_COMPLETE) | XDT3 CORRECTIVE RETURN`

Verdicts:
- `PASS`: every required criterion is proven, authorization and ownership are valid, and the build pipeline is completed (`CHAIN_COMPLETE`). XDT4 is the terminal stage of the standard four-stage build workflow; there is no XDT5 successor and no automatic deployment.
- `FAIL`: evidence proves a contract/acceptance/ownership violation; return bounded corrective findings to XDT3/owning implementation stage.
- `NEEDS_EVIDENCE`: required proof is absent or insufficient; pipeline does not complete.

XDT4 never repairs implementation, mutates predecessor scopes, or deploys artifacts. Worker claims are inputs, not proof. Missing, incomplete, unresolved, or unauthorized evidence fails closed. Deployment, when needed, is a separate explicitly authorized task. Historical v0.1 records with `xdt5_handoff` remain interpretable for auditability.
