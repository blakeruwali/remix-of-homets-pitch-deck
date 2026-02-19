

# Add Knowledge Base & Objection Handling to Mobile View

## Overview
The mobile view (`MobilePresentation.tsx`) currently only shows the dispatch guide. This update adds a sticky tab bar at the top so mobile users can switch between three views: **Guide**, **Knowledge Base**, and **Objections** -- giving team members full access to everything on their phones.

## What Changes

### 1. Sticky Tab Bar (top of mobile view)
Three tabs replace the current static hero: **Guide** | **Knowledge Base** | **Objections**. The tabs stick to the top while scrolling so switching is always one tap away. The hero section (logo, phone number) stays but moves below the tabs in the Guide view.

### 2. Knowledge Base on Mobile
- Imports the existing `kbSections` data from `kbData.tsx`
- Renders each of the 7 KB sections as collapsible accordions styled to match the dark mobile theme
- Each section shows its icon, title, and article count
- Tapping a section expands it to reveal its articles as nested accordions
- Article content renders inline with the same styling (bullet points, highlight boxes, tips)

### 3. Objection Handling on Mobile
- Imports the `objectionCategories` data from `slideData.tsx` (needs to be exported)
- Adds a search bar at the very top of the Objections tab for real-time filtering
- All 9 categories with 46 objections render as expandable cards
- Each card shows: trigger phrase, recommended response, and tip
- Search filters across triggers, responses, and tips instantly

### 4. Sticky CTA Update
The "Call Now" sticky button at the bottom remains on all three tabs.

## Technical Details

### Files to Modify

**`src/components/presentation/slideData.tsx`**
- Export `objectionCategories` so the mobile component can import it

**`src/components/presentation/MobilePresentation.tsx`**
- Add `useState` for active tab (`"guide" | "kb" | "objections"`)
- Add `useState` for objection search query
- Add sticky tab bar with three buttons at the top of the page
- Wrap existing guide content in a conditional render (`activeTab === "guide"`)
- Add KB view: import `kbSections`, render accordion sections using the existing `Section`/`SectionTitle` helper components and Radix accordion primitives
- Add Objections view: import `objectionCategories`, render search input + filterable objection cards
- All new views use the same color constants (ORANGE, RED, SURFACE2, etc.) already defined in the file

### New imports needed in MobilePresentation.tsx
- `kbSections` from `kbData.tsx`
- `objectionCategories` from `slideData.tsx`
- `useState`, `useMemo` from React
- Additional Lucide icons for KB section headers (Thermometer, MessageCircleQuestion, ShieldAlert, Monitor, Crown, FileCheck, Search, X, BookOpen, Presentation, Shield)

### No new files needed
Everything builds on existing data and components, just rendered in a mobile-optimized layout.

