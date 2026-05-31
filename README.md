# my-awesome-ai

Personal [Agent Skills](https://cursor.com/docs/skills) and [Cursor rules](https://cursor.com/docs/context/rules) collected in one public repo. Skills install via [skills.sh](https://skills.sh/) (`npx skills`); rules install via the bundled CLI (rules are not part of the skills.sh install flow today).

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
npx skills add afaraha8403/my-awesome-ai --skill tauri-v2 --skill deep-deliberation
```

## Install skills + rules (this CLI)

From any project directory:

```bash
npx my-awesome-ai
```

Non-interactive examples:

```bash
# Everything
npx my-awesome-ai --all -y

# Skills only
npx my-awesome-ai --skills tauri-v2,documentation-writer -y

# Rules only
npx my-awesome-ai --rules production-stability,testing,comments -y

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
| `agent-browser` | Browser automation CLI for AI agents |
| `ai-seo` | SEO for AI search / LLM visibility |
| `caveman` | Ultra-compressed agent communication mode |
| `cloakbrowser-fallback` | Stealth Chromium when normal automation is blocked |
| `content-strategy` | Content planning and topic strategy |
| `deep-deliberation` | Multi-stage problem analysis with red-team debates |
| `documentation-writer` | Research-first technical documentation workflow |
| `e2e-testing-patterns` | End-to-end testing patterns |
| `fallow` | Fallow CLI / workflow skill |
| `marketing-psychology` | Psychology for product and marketing copy |
| `mcp-builder` | Building MCP servers |
| `n8n-mcp-tools-expert` | n8n MCP tools |
| `n8n-workflow-patterns` | n8n workflow patterns |
| `playwright-cli` | Playwright CLI testing workflows |
| `project-unit-tests` | Unit testing standards (Convex / Next.js) |
| `security-review` | Security review checklist and references |
| `seo-audit` | SEO audit workflow |
| `stripe-best-practices` | Stripe integration practices |
| `tauri-v2` | Tauri v2 desktop app development |

## Rules

Rules are `.mdc` files for Cursor **Rules**. Many originated in specific projects; review `description` / content before enabling `alwaysApply` in a new repo.

| Rule | Typical use |
| --- | --- |
| `admin-design-system` | Admin UI design system |
| `changelog` | Changelog maintenance |
| `cloudflare-workers` | Cloudflare Workers patterns |
| `comments` | Comments and JSDoc standards |
| `mcp-registry` | MCP registry conventions |
| `mcp-testing` | MCP testing |
| `production-stability` | Production safety and migrations |
| `seo-ai-search` | SEO + AI-search implementation |
| `testing` | Testing philosophy |
| `understand-anything` | Understand Anything knowledge graph |
| `yappi-core` | Yappi project conventions |

Download a single rule from GitHub: open `rules/<name>.mdc` and save into your project's `.cursor/rules/`.

## Repository layout

```
skills/<skill-name>/SKILL.md   # skills.sh discovery
rules/<name>.mdc               # Cursor rules (CLI / manual)
bin/cli.js                     # my-awesome-ai installer
```

## License

MIT — see [LICENSE](LICENSE). Individual skills may include their own `LICENSE` files where noted (e.g. `security-review`).

## Author

[afaraha8403](https://github.com/afaraha8403)
