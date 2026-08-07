---
description: Add a new city — either a full flagship entry or a light canton-coverage entry
argument-hint: [city name, canton, flagship or light]
---

Add a new city: $ARGUMENTS

Decide which schema it needs (see CLAUDE.md's data model section):
- **Flagship** (`window.SWISS_CITIES`): 6-7 attractions + 4 food items, each tagged `tags: [couple/elders/family, relaxed/compact]` and `difficulty`.
- **Light** (`window.SWISS_CANTON_CITIES`): `light: true`, a `blurb`, a single `topSight`, a single `food`, a combined `transitNote`. Do NOT add `tags`/`difficulty` to light entries — the scoring function already guards for their absence, and adding them anyway won't break it but is inconsistent with every other light entry.

After adding, verify with a cache-busted URL (`?v=N`) since the browser caches `data.js` aggressively.
