# my-awesome-ai

Personal [Agent Skills](https://cursor.com/docs/skills) and [Cursor rules](https://cursor.com/docs/context/rules) by [afaraha8403](https://github.com/afaraha8403). Skills install via [skills.sh](https://skills.sh/) (`npx skills`); rules install via the bundled CLI.

## Install skills (skills.sh)

Install into the **current project**:

```bash
npx skills add afaraha8403/my-awesome-ai
```

Install **globally** (`~/.cursor/skills`):

```bash
npx skills add afaraha8403/my-awesome-ai -g
```

List skills in this repo without installing:

```bash
npx skills add afaraha8403/my-awesome-ai --list
```

Install specific skills:

```bash
npx skills add afaraha8403/my-awesome-ai --skill deep-deliberation --skill documentation-writer
```

## Install skills + rules (this CLI)

From any project directory:

```bash
npx my-awesome-ai
```

Non-interactive examples:

```bash
# Everything in this repo
npx my-awesome-ai --all -y

# Skills only
npx my-awesome-ai --skills cloakbrowser-fallback,documentation-writer -y

# Rules only
npx my-awesome-ai --rules changelog,testing,comments -y

# Global skills + project rules
npx my-awesome-ai --skills all --rules changelog,testing -g -y
```

List available items:

```bash
npx my-awesome-ai --list
```

Rules are copied to `.cursor/rules/` in the target project. Skills go to `.cursor/skills/` (or `~/.cursor/skills/` with `-g`).

## Skills

| Skill | Summary |
| --- | --- |
| `cloakbrowser-fallback` | Stealth Chromium when normal automation is blocked |
| `deep-deliberation` | Multi-stage problem analysis with red-team debates |
| `documentation-writer` | Research-first technical documentation workflow |
| `everything-seo` | Comprehensive SEO playbook: technical audits, semantic search, digital PR, CRO, Bing vs Google, AI content automation |
| `marketing-psychology` | Psychology for product and marketing copy (customized) |
| `nlm-skill` | NotebookLM CLI (`nlm`) and MCP server expert — manage notebooks, sources, generate podcasts, reports, and research |
| `seo-audit` | SEO audit workflow (customized) |
| `startup-marketing-brain` | Startup marketing advisor: bootstrapping, distribution, AI automation, monetization, go-to-market strategy |

## Rules

Rules are `.mdc` files for Cursor **Rules**. Review `description` and globs before enabling `alwaysApply` in a new repo.

| Rule | Typical use |
| --- | --- |
| `changelog` | Changelog maintenance |
| `cloudflare-workers` | Cloudflare Workers patterns |
| `comments` | Comments and JSDoc standards |
| `seo-ai-search` | SEO + AI-search implementation |
| `testing` | Testing philosophy |

Download a single rule from GitHub: open `rules/<name>.mdc` and save into your project's `.cursor/rules/`.

## Repository layout

```
skills/<skill-name>/SKILL.md   # skills.sh discovery
rules/<name>.mdc               # Cursor rules (CLI / manual)
bin/cli.js                     # my-awesome-ai installer
```

## License

MIT — see [LICENSE](LICENSE).
