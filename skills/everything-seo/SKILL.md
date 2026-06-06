---
name: everything-seo
description: "Expert SEO advisor for modern search optimization. Use for: technical audits, on-page SEO, semantic search, keyword intent, E-E-A-T, digital PR, link building, CRO, content automation, Bing vs Google, schema markup, and GEO. Triggers: SEO, technical SEO, link building, keyword research, content, E-E-A-T, digital PR, CRO, Bing SEO."
version: "1.0.0"
author: "Notebook LM synthesis"
tags: ["SEO", "technical-SEO", "on-page-SEO", "link-building", "digital-PR", "CRO", "content-automation", "E-E-A-T", "Core-Web-Vitals"]
when_to_use: |
  - User asks about SEO, search optimization, or ranking improvement
  - User needs technical SEO audit, crawlability, or indexing help
  - User asks about on-page SEO, content optimization, or semantic SEO
  - User needs keyword research, intent mapping, or topical authority
  - User asks about link building, digital PR, or backlink strategies
  - User wants to improve E-E-A-T signals or site trustworthiness
  - User asks about Core Web Vitals, page speed, or performance
  - User needs schema markup, structured data, or rich results
  - User asks about CRO and SEO integration or A/B testing
  - User wants Bing SEO optimization or Google vs Bing differences
  - User asks about AI content automation or Generative Engine Optimization (GEO)
  - User mentions SEO penalties, SpamBrain, or algorithm updates
  - Do NOT use for: paid search (PPC), social media marketing, or general web design
---

# Everything SEO

A comprehensive SEO playbook covering modern search optimization for 2026: technical audits, semantic search, AI-driven content, digital PR, CRO integration, and multi-engine optimization.

## Core Philosophy

**SEO is Data Architecture.** Your website isn't just a website—it's a data source for the decentralized web and AI agents. Technical SEO is the foundation. Content is the signal. Links are the votes.

**Search Engines Think in Entities.** Modern algorithms use semantic evaluation and vector-space modeling. They don't match keywords—they match concepts, intent, and topical authority.

**AI-First Optimization.** LLMs and generative search (AI Overviews, ChatGPT search) require a new discipline: Generative Engine Optimization (GEO). Structure content for machines to extract, verify, and cite.

## How to Use This Skill

When the user asks an SEO question, follow this process:

1. **Identify the SEO layer:** Technical? On-page? Off-page? Content? CRO? Multi-engine?
2. **Load the relevant reference file** (see Reference Index below).
3. **Synthesize actionable advice** with specific tools, metrics, and thresholds.
4. **Provide concrete examples:** Show exact code snippets, tool names, and target values.
5. **Set boundaries:** For PPC, social media, or general web design questions, redirect to the appropriate skill.

## Reference Index

Load these reference files on demand based on the user's question:

| Reference File | When to Load |
|---|---|
| `references/technical_seo.md` | Technical audits, crawlability, indexing, Core Web Vitals, schema markup, JavaScript rendering, robots.txt, hreflang |
| `references/semantic_intent.md` | Keyword intent mapping, topical authority, E-E-A-T, semantic SEO, GEO, AI Overviews, content clusters |
| `references/link_building.md` | Digital PR, authority nodes, journalist sourcing, link reclamation, penalty avoidance, SpamBrain |
| `references/cro_integration.md` | SEO + CRO alignment, A/B testing without SEO damage, conversion elements, unified KPIs |
| `references/bing_google.md` | Bing vs Google optimization, exact-match keywords, social signals, IndexNow, algorithm differences |
| `references/content_automation.md` | AI content workflows, brand persona injection, competitor reverse-engineering, on-page enforcement |

## Quick-Reference Frameworks

### The 5-Pillar Technical SEO Audit
1. **Crawlability & Bot Governance:** Configure `robots.txt` to allow retrieval bots (e.g., `OAI-SearchBot`) while blocking training scrapers (e.g., `GPTBot`).
2. **Indexing & Architecture:** Canonicalize faceted navigation. Prevent combinatorial URL explosion.
3. **Performance (Core Web Vitals):** Target INP < 200ms, LCP < 2.5s, CLS < 0.1. Use `fetchpriority="high"` and AVIF.
4. **Structured Data (Schema):** Validate JSON-LD with Google's Rich Results Test. Combat Schema Drift. Use `SameAs` and `ProfilePage`.
5. **JavaScript & Rendering:** Prefer ISR over CSR. CSR causes 3-7 day indexing delays.

### The 4 Pillars of Intent Mapping
1. **Predictive Awareness (Informational):** Build glossary hubs and topic clusters. Establish topical authority.
2. **Conversational Investigation (Consideration):** Optimize for AI Overviews. Use BLUF, HTML tables, and definition lists.
3. **Tactical Commercial Logic (Decision):** Acknowledge the "Messy Middle." Provide informational off-ramps on commercial pages.
4. **Post-Purchase & Retention:** Map troubleshooting and docs keywords. Build a brand moat.

### The E-E-A-T Signal Stack
| Signal | What to Do |
|---|---|
| **Experience** | Product photos, personal anecdotes, case studies, specific metrics |
| **Expertise** | Author bios with credentials, technical depth, cited sources |
| **Authoritativeness** | Backlinks from trusted sites, original research, industry mentions |
| **Trustworthiness** | HTTPS, clear contact info, accurate content, privacy policy |

### The Digital PR Flywheel
1. **Create Authority Nodes:** Original surveys, calculators, industry reports.
2. **Pitch Journalists:** Use Connectively/Qwoted. Respond within 1 hour.
3. **Earn Editorial Links:** High-DA (70+) media coverage.
4. **Reclaim Unlinked Mentions:** Monitor with Ahrefs/Brandwatch. Politely ask for links.
5. **Compound:** Annual data updates refresh links. Relationships warm up response rates to 15-30%.

### The SEO + CRO Integration Loop
1. **Align KPIs:** Revenue influenced by organic traffic. Bounce rate by landing page.
2. **Safe A/B Testing:** Use canonical tags. Minimize layout shift. Follow JS framework best practices.
3. **Optimize Elements:** Clear value prop above fold. Social proof at decision points. Commitment-based CTAs.

### The Bing vs. Google Decision Matrix
| Factor | Google | Bing |
|---|---|---|
| Keywords | Semantic, context-aware | Exact-match, literal |
| Social Signals | Not a direct factor | Direct ranking factor |
| Domain Age | Less weight | Significant; .edu/.gov favored |
| JavaScript | Handles well | Limited; prefers SSR |
| Meta Keywords | Ignored | Still used |
| Indexing | Crawl-based | IndexNow push protocol |

## Examples of Good Responses

**User:** "How do I optimize for AI search and AI Overviews?"

**Response:**
1. Use the **BLUF method** (Bottom Line Up Front): Put the core answer in the first sentence.
2. Structure with **HTML tables** for comparative data and **definition lists** (`<dl>`) for specs.
3. Add **"Key Takeaway" boxes** at the top of the page for easy extraction.
4. Use **schema markup** with `SameAs` and `ProfilePage` to link entities to authoritative sources.
5. Validate all JSON-LD in Google's Rich Results Test before publishing.

**User:** "What's the best link building strategy in 2026?"

**Response:**
1. **Avoid:** PBNs, link exchanges, exact-match anchor text spam, paid links without `rel="sponsored"`. SpamBrain penalizes these.
2. **Do Digital PR:** Original data studies and surveys. Journalists need stats. One DA 80+ editorial link outweighs hundreds of low-quality links.
3. **Use journalist platforms:** Connectively (formerly HARO), Qwoted. Respond within 1 hour for 60%+ placement rate.
4. **Build free tools:** Calculators, comparators. They earn passive links from resource roundups.
5. **Reclaim unlinked mentions:** Monitor with Ahrefs Content Explorer. Conversion rate is very high.

**User:** "How do I audit my site's technical SEO?"

**Response:**
1. **Crawlability:** Check `robots.txt`. Allow `OAI-SearchBot`. Block `GPTBot` if you don't want training data harvested.
2. **Indexation:** Check for faceted navigation bloat. Canonicalize or noindex low-value filter combinations.
3. **Core Web Vitals:** Test with PageSpeed Insights. Target INP < 200ms, LCP < 2.5s, CLS < 0.1.
4. **Schema:** Run every unique page template through Google's Rich Results Test. Fix all errors (red).
5. **Rendering:** Check if critical content is visible in static HTML. Use ISR for e-commerce. Avoid CSR for product pages.

**User:** "How do I map keywords to search intent?"

**Response:**
1. **Categorize into 4 pillars:** Informational (glossary hubs), Consideration (comparison guides), Decision (commercial pages), Retention (docs/tutorials).
2. **Build topic clusters:** Start with a pillar page. Link to 5-10 supporting pages. Interlink them.
3. **For AI Overviews:** Use concise summaries, tables, and nested bullets. LLMs prefer low-computational-effort extraction.
4. **On commercial pages:** Add visible informational off-ramps. 60% of users need to retreat to info content before converting.
5. **Track:** Measure session depth, time on site, and pages per session. Low depth = poor intent mapping.

## What NOT to Do

- Do NOT recommend black-hat tactics: PBNs, link farms, cloaking, keyword stuffing, or bought links.
- Do NOT suggest exact-match anchor text for all backlinks. Diversify naturally.
- Do NOT ignore Bing. It powers ChatGPT and Copilot search.
- Do NOT recommend CSR for e-commerce or news sites. Use ISR or SSR.
- Do NOT provide PPC or paid search advice. This is an organic SEO skill.
- Do NOT give vague advice like "write quality content." Be specific about structure, schema, and technical execution.

## Agent Compatibility Notes

This skill uses the open SKILL.md standard and works across all compatible agents:
- **Claude Code** (`~/.claude/skills/` or `.claude/skills/`)
- **Codex CLI** (`~/.codex/skills/` or `.codex/skills/`)
- **OpenClaw** (`~/.openclaw/skills/` or `.openclaw/skills/`)
- **Cursor** (`.cursor/skills/`)
- **Gemini CLI** (`~/.gemini/skills/` or `.gemini/skills/`)
- **OpenCode** (`.agents/skills/`)

**Universal fields:** `name`, `description`, `version`, `author`, `tags` — supported by all agents.
**Optional:** `when_to_use` — supported by Claude Code, OpenClaw, Codex CLI, Gemini CLI. Safely ignored by others.

## SEO Mastery Checklist

- [ ] Technical audit complete: crawlability, indexing, CWV, schema, rendering.
- [ ] Intent mapping covers all 4 pillars with interlinked clusters.
- [ ] E-E-A-T signals demonstrated: bios, citations, original data, trust signals.
- [ ] Core Web Vitals pass: INP < 200ms, LCP < 2.5s, CLS < 0.1.
- [ ] Schema validates without errors in Rich Results Test.
- [ ] `robots.txt` distinguishes retrieval bots from training scrapers.
- [ ] Digital PR campaign producing 3-5x more high-authority links than outreach.
- [ ] Bing optimized: exact-match keywords, IndexNow, SSR, social signals.
- [ ] SEO + CRO teams share unified KPIs and revenue metrics.
- [ ] AI content workflow includes brand persona injection and competitor analysis.
- [ ] No manual penalties. Backlink profile is natural and diverse.
- [ ] Monitoring unlinked mentions and reclaiming them monthly.
