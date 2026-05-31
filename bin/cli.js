#!/usr/bin/env node

/**
 * Install skills and/or Cursor rules from this package into a target project.
 * Skills are also installable via: npx skills add afaraha8403/my-awesome-ai
 */

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const PKG_ROOT = path.resolve(__dirname, "..");
const SKILLS_SRC = path.join(PKG_ROOT, "skills");
const RULES_SRC = path.join(PKG_ROOT, "rules");

function parseArgs(argv) {
  const opts = {
    target: process.cwd(),
    skills: null,
    rules: null,
    all: false,
    global: false,
    list: false,
    yes: false,
    help: false,
  };

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "-h" || arg === "--help") opts.help = true;
    else if (arg === "-y" || arg === "--yes") opts.yes = true;
    else if (arg === "--all") opts.all = true;
    else if (arg === "-g" || arg === "--global") opts.global = true;
    else if (arg === "--list") opts.list = true;
    else if (arg === "--target" && argv[i + 1]) opts.target = path.resolve(argv[++i]);
    else if (arg === "--skills") opts.skills = argv[++i] ?? "all";
    else if (arg === "--rules") opts.rules = argv[++i] ?? "all";
    else if (!arg.startsWith("-")) opts.target = path.resolve(arg);
  }

  return opts;
}

function listDir(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory() || d.name.endsWith(".mdc"))
    .map((d) => d.name.replace(/\.mdc$/, ""));
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

function resolveSelection(allNames, spec) {
  if (!spec || spec === "all") return allNames;
  return spec
    .split(",")
    .map((s) => s.trim())
    .filter((s) => {
      if (!allNames.includes(s)) {
        console.warn(`Warning: unknown item "${s}", skipping.`);
        return false;
      }
      return true;
    });
}

function printHelp() {
  console.log(`
my-awesome-ai — install Cursor skills and rules

Usage:
  npx my-awesome-ai [options] [target-dir]

Options:
  --list              List available skills and rules
  --all               Install all skills and rules
  --skills <names>    Comma-separated skill names, or "all"
  --rules <names>     Comma-separated rule names (without .mdc), or "all"
  --global, -g        Install skills to ~/.cursor/skills (rules stay project-only)
  --target <dir>      Project directory (default: cwd)
  -y, --yes           Non-interactive: use defaults when prompts would appear
  -h, --help          Show this help

Skills only (skills.sh compatible):
  npx skills add afaraha8403/my-awesome-ai
  npx skills add afaraha8403/my-awesome-ai -g

Examples:
  npx my-awesome-ai --all
  npx my-awesome-ai --skills tauri-v2,documentation-writer --rules production-stability,testing
  npx my-awesome-ai --list
`);
}

function createRl() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function ask(rl, question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function promptSelect(rl, label, names, defaults) {
  if (defaults.length === 0) return [];
  console.log(`\n${label}:`);
  names.forEach((n, i) => console.log(`  ${i + 1}. ${n}`));
  const answer = await ask(
    rl,
    `Enter numbers/names (comma-separated), "all", or Enter for [${defaults.join(", ")}]: `
  );
  const trimmed = answer.trim();
  if (!trimmed) return defaults;
  if (trimmed.toLowerCase() === "all") return names;
  const picked = new Set();
  for (const part of trimmed.split(",").map((s) => s.trim()).filter(Boolean)) {
    const num = Number(part);
    if (Number.isInteger(num) && num >= 1 && num <= names.length) {
      picked.add(names[num - 1]);
    } else if (names.includes(part)) {
      picked.add(part);
    } else {
      console.warn(`  Ignored: ${part}`);
    }
  }
  return [...picked];
}

async function main() {
  const opts = parseArgs(process.argv);
  const skillNames = listDir(SKILLS_SRC);
  const ruleNames = listDir(RULES_SRC).filter((n) =>
    fs.existsSync(path.join(RULES_SRC, `${n}.mdc`))
  );

  if (opts.help) {
    printHelp();
    return;
  }

  if (opts.list) {
    console.log("Skills:", skillNames.join(", ") || "(none)");
    console.log("Rules:", ruleNames.join(", ") || "(none)");
    return;
  }

  let selectedSkills = opts.skills
    ? resolveSelection(skillNames, opts.skills)
    : null;
  let selectedRules = opts.rules ? resolveSelection(ruleNames, opts.rules) : null;

  if (opts.all) {
    selectedSkills = skillNames;
    selectedRules = ruleNames;
  }

  const interactive =
    !opts.yes && selectedSkills === null && selectedRules === null && !opts.all;

  if (interactive) {
    const rl = createRl();
    try {
      const mode = await ask(
        rl,
        "Install (1) skills, (2) rules, (3) both [3]: "
      );
      const wantSkills = mode !== "2";
      const wantRules = mode !== "1";

      if (wantSkills) {
        selectedSkills = await promptSelect(rl, "Skills", skillNames, skillNames);
      } else {
        selectedSkills = [];
      }

      if (wantRules) {
        selectedRules = await promptSelect(rl, "Rules", ruleNames, ruleNames);
      } else {
        selectedRules = [];
      }
    } finally {
      rl.close();
    }
  } else {
    if (selectedSkills === null) selectedSkills = opts.skills === undefined && opts.rules ? [] : skillNames;
    if (selectedRules === null) selectedRules = opts.rules === undefined && opts.skills ? [] : ruleNames;
    if (selectedSkills === null && selectedRules === null) {
      selectedSkills = [];
      selectedRules = [];
    }
  }

  const skillsDest = opts.global
    ? path.join(process.env.USERPROFILE || process.env.HOME, ".cursor", "skills")
    : path.join(opts.target, ".cursor", "skills");

  const rulesDest = path.join(opts.target, ".cursor", "rules");

  if (selectedSkills.length) {
    fs.mkdirSync(skillsDest, { recursive: true });
    for (const name of selectedSkills) {
      const src = path.join(SKILLS_SRC, name);
      const dest = path.join(skillsDest, name);
      if (!fs.existsSync(src)) continue;
      if (fs.existsSync(dest)) {
        fs.rmSync(dest, { recursive: true, force: true });
      }
      copyDir(src, dest);
      console.log(`Skill: ${name} -> ${dest}`);
    }
  }

  if (selectedRules.length) {
    fs.mkdirSync(rulesDest, { recursive: true });
    for (const name of selectedRules) {
      const src = path.join(RULES_SRC, `${name}.mdc`);
      const dest = path.join(rulesDest, `${name}.mdc`);
      if (!fs.existsSync(src)) continue;
      fs.copyFileSync(src, dest);
      console.log(`Rule: ${name}.mdc -> ${dest}`);
    }
  }

  if (!selectedSkills.length && !selectedRules.length) {
    console.log("Nothing selected. Use --help for usage.");
    process.exit(1);
  }

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
