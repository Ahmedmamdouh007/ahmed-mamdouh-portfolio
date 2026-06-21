# Agent Instructions — Portfolio Project

This repository is set up for premium frontend design work. Before building or polishing UI, load and follow the relevant project skills.

## Installed skills

Skills live in `.agents/skills/` (Cursor discovers them automatically).

### Primary workflow (use in this order)

| Task | Skill | Path |
|------|-------|------|
| Landing pages, portfolios, redesigns | `design-taste-frontend` | `.agents/skills/design-taste-frontend/SKILL.md` |
| UI polish, motion, component craft | `emil-design-eng` | `.agents/skills/emil-design-eng/SKILL.md` |
| Animation review | `review-animations` | `.agents/skills/review-animations/SKILL.md` |
| Design/redesign/polish/audit/craft | `impeccable` | `.cursor/skills/impeccable/SKILL.md` |

### Taste-skill pack (Leonxlnx/taste-skill)

- `design-taste-frontend` — default for anti-slop frontend
- `design-taste-frontend-v1` — legacy v1 behavior only when explicitly requested
- `high-end-visual-design`, `minimalist-ui`, `industrial-brutalist-ui` — aesthetic variants
- `redesign-existing-projects` — audit-first upgrades
- `image-to-code`, `imagegen-frontend-web`, `imagegen-frontend-mobile` — image-led workflows
- `brandkit`, `gpt-taste`, `stitch-design-taste`, `full-output-enforcement` — supporting skills

## Required behavior

1. **Read the skill file first** when the task matches its description. Do not improvise design rules when a skill exists.
2. **Impeccable setup** — at the start of any impeccable session, run:
   ```bash
   node .cursor/skills/impeccable/scripts/context.mjs
   ```
   If output says `NO_PRODUCT_MD`, follow `.cursor/skills/impeccable/reference/init.md` before continuing.
3. **Impeccable sub-commands** — when the user invokes `/impeccable <command>`, read `reference/<command>.md` under the impeccable skill before acting.
4. **Frontend defaults** — for portfolio/landing work:
   - Start with `design-taste-frontend` (brief inference + design read)
   - Apply `emil-design-eng` for motion, states, and micro-interactions
   - Use `impeccable` for polish, audit, craft, shape, or live iteration
5. **Hooks** — `.cursor/hooks.json` runs impeccable's pre-edit detector on UI file changes. Respect its findings.

## Impeccable commands (quick reference)

| Command | Use when |
|---------|----------|
| `/impeccable init` | First-time project setup (PRODUCT.md, DESIGN.md) |
| `/impeccable craft <feature>` | Build a new surface end-to-end |
| `/impeccable polish <target>` | Final quality pass before ship |
| `/impeccable critique <page>` | Scored UX review |
| `/impeccable audit <area>` | a11y, perf, responsive checks |
| `/impeccable live` | Browser-based variant iteration |

## Project context

- **PRODUCT.md** — strategic context (register, users, brand personality). Read before design work.
- **DESIGN.md** — visual system (when present). Generate with `/impeccable document` once code exists.

## Register

This project is **brand** (portfolio): design is the product. Read `impeccable/reference/brand.md` for register-specific guidance.
