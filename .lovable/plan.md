

# Improving the Customer Service & Dispatch Guide

## Current State
12 slides covering service types, system types, fees, residential vs. commercial, 5 sales scripts, and a cheat sheet. The mobile view still shows the old investor deck content.

## Proposed Improvements

### 1. Fix Mobile View
The `MobilePresentation.tsx` still renders the old investor deck (problem/solution/traction/ask). It needs to be updated to display the dispatch guide content instead -- either as a scrollable single-page reference or as swipeable slide cards.

### 2. Add Missing Operational Slides

**Slide: Call Flow / Decision Tree**
A visual flowchart showing the full call intake process: Answer -> Identify Emergency? -> Service Type -> System Type -> Residential/Commercial -> Select Script -> Book. Gives dispatchers a single-glance map of every call.

**Slide: Emergency & After-Hours Protocol**
Covers what qualifies as an emergency (gas leak, no heat in winter, flooding), after-hours procedures, escalation contacts, and any special pricing or guarantees that apply.

**Slide: Scheduling & Dispatch Rules**
Covers the 90-minute arrival guarantee, how to set time windows, tech assignment logic, geographic zones (Nassau vs. Suffolk), and what to do when fully booked.

**Slide: Customer Information Checklist**
A quick-reference of everything to collect on every call: name, address, phone, email, system type, system age, problem description, preferred time window, membership status, how they heard about Homets.

### 3. Update Header Bar Text
The top bar still says "Homets Air & Heat -- Investor Deck." Change it to "Customer Service & Dispatch Guide."

### 4. Update Memory
Update the project memory to reflect the new deck-only structure (no more investor slides).

## Technical Details

### Files Modified

**`src/components/presentation/slideData.tsx`**
- Add 4 new slide components: `CallFlowSlide`, `EmergencyProtocolSlide`, `SchedulingRulesSlide`, `CustomerChecklistSlide`
- Insert them logically into the `slides` array (after the reference slides, before the sales scripts)
- New slide count: 16

**`src/components/presentation/MobilePresentation.tsx`**
- Replace investor deck content with a scrollable dispatch guide layout
- Sections for: quick call flow, service types, system types, fee reference, emergency protocol, and key phone numbers
- Keep the sticky CTA bar at the bottom

**`src/components/presentation/PresentationShell.tsx`**
- Update the header text from "Investor Deck" to "Customer Service & Dispatch Guide"

### Proposed Slide Order (16 slides)
1. Dispatch Guide (cover)
2. Call Flow / Decision Tree
3. Job Types & Business Units
4. Type of Service
5. System Types
6. Customer Information Checklist
7. Diagnostic Fees
8. Residential vs. Commercial
9. Scheduling & Dispatch Rules
10. Emergency & After-Hours Protocol
11. Diagnostic Sales Script
12. Estimate Sales Script
13. Maintenance Sales Script
14. Membership Sales Script
15. Plumbing Sales Script
16. Scripts Cheat Sheet

### Design Approach
- All new slides follow existing patterns: dark background (`hsl(0,0%,7%)`), brand colors (ORANGE, RED, WARM, GREEN), rounded-2xl cards, Lucide icons
- Call Flow slide uses a step-based horizontal flow with arrows connecting each decision point
- Emergency slide uses red/alert styling to visually stand out
- Checklist slide uses a clean two-column form-field layout

