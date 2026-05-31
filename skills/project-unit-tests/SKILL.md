---
name: project-unit-tests
description: Guide for creating and maintaining unit tests in the Yappi.ai codebase. Covers Convex functions, Next.js components, and utility services. Use when the user asks to add tests, fix failing tests, or improve test coverage.
---

# Project Unit Tests

## Overview

This skill provides the standards and workflows for testing the Yappi.ai platform. Our stack includes Convex (backend), Next.js (frontend), and various AI/Voice integrations (Vapi, OpenAI).

## Testing Strategy

1. **Convex Functions**: Test business logic, database mutations, and queries.
2. **Frontend Components**: Test UI interactions and state management using React Testing Library.
3. **Services/Utils**: Test scraping logic (Puppeteer/Cheerio), LLM orchestration (LangChain), and API integrations.

## Workflows

### Adding a New Test

1. Identify the target file (e.g., `convex/organizations.ts`).
2. Create/Open the corresponding test file (e.g., `convex/organizations.test.ts`).
3. Follow the patterns in [STANDARDS.md](STANDARDS.md).
4. Run tests: `npm test` (or specific test command).

### Fixing Failing Tests

1. Read the error message carefully.
2. Check if the failure is due to a recent schema change (refer to `convex/schema.ts`).
3. Verify mock data matches the new organization-centric architecture.

## Key Domain Knowledge

- **Organization-Centric**: All data belongs to an `organization`. Tests must mock `orgId` and membership.
- **Convex Testing**: Use `convex-test` or similar patterns for mocking the database and auth context.
- **Vapi/Voice**: Mock Vapi responses to avoid real API calls during tests.

## Additional Resources

- [STANDARDS.md](STANDARDS.md): Detailed testing patterns and code snippets.
- [EXAMPLES.md](EXAMPLES.md): Full examples of complex test cases.
