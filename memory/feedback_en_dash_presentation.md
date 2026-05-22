---
name: feedback_en_dash_presentation
description: Keep en-dashes in display/presentational string content; only replace with hyphens in operator/code contexts
metadata:
  type: feedback
---

Keep en-dashes (–) in strings used for display purposes (e.g., date ranges like "Jan 2025 – Present"). ESLint warnings about U+2013 vs U+002D are intended for operator contexts in code, not JSX string content. Do not replace en-dashes in presentational strings.

**Why:** User explicitly confirmed en-dashes are intentional for visual polish in displayed text.

**How to apply:** When an ESLint/lint warning flags a U+2013 character, check whether it's in a string literal used for display. If so, leave it as-is and note the distinction to the user.
