# Testing Standards for Yappi.ai

## Convex Testing

Convex functions should be tested using the `convex-test` library.

### Mocking Auth & Organizations

Since the shift to an organization-centric model, most mutations require an `orgId`.

```typescript
import { convexTest } from "convex-test";
import { schema } from "./schema";
import { api } from "./_generated/api";

test("create organization", async () => {
  const t = convexTest(schema);
  
  // Mock user and membership
  await t.mutation(api.organizations.create, {
    name: "Test Biz",
    slug: "test-biz",
  });
  
  const org = await t.query(api.organizations.get, { slug: "test-biz" });
  expect(org.name).toBe("Test Biz");
});
```

## Frontend Testing

Use Vitest and React Testing Library for component tests.

### Component Mocking

Mock the `OrganizationContext` and Clerk auth for UI tests.

```tsx
import { render, screen } from "@testing-library/react";
import { OnboardingForm } from "./onboarding-form";

test("renders onboarding form", () => {
  render(<OnboardingForm />);
  expect(screen.getByText(/Business Name/i)).toBeInTheDocument();
});
```

## Service Testing

### Scraper Service

Mock `puppeteer` to test scraping logic without launching a browser.

```typescript
import { scrapeBusinessData } from "@/lib/services/scraper";

test("scrapes business data", async () => {
  // Mock puppeteer response
  const data = await scrapeBusinessData("Test Biz", "New York");
  expect(data.hours).toBeDefined();
});
```

## Best Practices

- **Isolate Side Effects**: Always mock external APIs (Vapi, Stripe, OpenAI).
- **Test Edge Cases**: Include tests for invalid `orgId`, expired trials, and unauthorized access.
- **Maintainable Mocks**: Keep mock data in a central `tests/fixtures` directory if it grows large.
