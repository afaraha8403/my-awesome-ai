# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Features
- Added a new `dissect` skill (`skills/dissect/SKILL.md`): an evidence-driven, staged pipeline for auditing an existing service, written plan, or codebase area and producing a minimal-build optimization plan. Adapted from an internal Canopy skill and significantly upgraded — author set to Ali Farahat, explicit `when_to_use` metadata, three human checkpoints, parallel read-only sub-agents, a Tree-of-Thought refactor-branch stage, an adversarial red-team panel, and a dynamic action-oriented verdict taxonomy (KEEP, FOLD, DROP, DEFER, ON-DEMAND, EXTRACT, RE-HOME, REFACTOR, OUT-OF-SCOPE) that replaces the rigid keep/fold/drop set.
- Added a new `global` rule (`rules/global.mdc` and `.cursor/rules/global.mdc`) defining the core meta-principle, dual-mode AI communication guidelines, simplicity standards, and repository hygiene practices.
- Refreshed the `everything-seo` and `startup-marketing-brain` skills with advanced, modern 2026 playbooks retrieved from Google NotebookLM using the `nlm` CLI.
- Integrated Generative Engine Optimization (GEO) and Retrieval-Augmented Generation (RAG) optimization techniques, including the BLUF method and formatting bias (HTML tables and definition lists).
- Added technical SEO updates for 2026, covering Bot Governance (distinguishing retrieval bots like `OAI-SearchBot` from training scrapers), the December 2025 Rendering Shift (non-200 HTTP status exclusion), INP supremacy (< 200ms using `scheduler.yield()`), and Schema Drift prevention.
- Added Agentic Growth Operations frameworks to `startup-marketing-brain`, detailing ad bulk-generation, automated optimization scripts, and real-time data tracking via MMPs.
- Added modern organic distribution playbooks (Engineering as Marketing, TikTok Organic-to-Paid funnel, and Twitter/X Content Loop) and monetization metrics (Founding 50 pre-sales, Lifetime Deals, and 3:1 LTV:CAC targets).

### Fixes
- Fixed broken reference links in the `seo-audit` skill by pointing them directly to the canonical `everything-seo` reference files instead of creating duplicate parallel files.

### Changes
- Enhanced the `deep-deliberation` skill: added explicit `when_to_use` / "do not use" metadata, a ground-truth pre-branching step in Stage 1, and a companion-skill note clarifying that it is the forward-looking (design) counterpart to the backward-looking (audit) `dissect` skill. Bumped to v1.2.0.
- Documented the `dissect` skill in `README.md` and clarified the `deep-deliberation` summary as forward-looking design vs `dissect` as backward-looking audit.
- Standardized frontmatter metadata across all eight skills in the repository, adding consistent `author: "Ali Farahat"`, versioning, tags, and `when_to_use` fields.
- Synchronized the mirrored skill files under `.agents/skills/` with the canonical `skills/` directory to prevent silent forks for OpenCode consumers.
- Documented the `global` rule in `README.md`.
