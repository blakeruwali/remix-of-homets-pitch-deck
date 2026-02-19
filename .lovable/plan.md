

# Add "Repair Running Long" Dispatch Scenario Slide

## What This Slide Covers

A visual, step-by-step protocol slide for when a repair takes longer than expected on-site. It will cover three parallel tracks that CS/Dispatch must handle simultaneously:

1. **Customer Communication** — When and how to proactively update the customer waiting for the current job
2. **Board & Schedule Impact** — How dispatch adjusts the remaining jobs on that tech's board
3. **Affected Customers** — How to notify customers whose appointments are getting pushed

## Slide Layout (Slide 19)

**Title**: "Repair Running Long — Update & Dispatch Protocol"

**Structure**: A timeline-based layout with three time thresholds triggering specific actions:

**Threshold 1: Tech reports +30 min over estimate**
- CS calls current customer: "Our tech wants to make sure the job is done right — they need about 30 more minutes. Thank you for your patience."
- Dispatch: Flag next job on board, no changes yet

**Threshold 2: Tech reports +1 hour over estimate**
- CS calls current customer with update and sets new ETA
- Dispatch: Review remaining jobs — can another tech absorb the next job?
- CS calls next customer proactively: "We want to give you a heads up — your tech is finishing up a complex repair. We can [offer new window / send a different tech]."

**Threshold 3: Tech reports +2 hours or job carries into next window**
- Dispatch: Reassign all remaining jobs on that tech's board
- CS calls each affected customer with new tech info and updated ETA
- Log delay reason in ServiceTitan for reporting

**Footer**: Quick-reference "Do / Don't" strip — e.g., "DO call before the customer calls you" / "DON'T promise exact times — use windows"

## Technical Details

### File: `src/components/presentation/slideData.tsx`
- Add a new `RepairRunningLongSlide` component (before the `slides` export array)
- Append it to the `slides` array as slide 19
- Uses existing icons: `Clock`, `Phone`, `User`, `AlertTriangle`, `ArrowRight`, `Calendar`, `CheckCircle`
- Follows same dark background styling, color constants, and card patterns as existing slides
- No new imports or dependencies needed

