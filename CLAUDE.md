# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

JavaScript Playwright test suite for the **StormWind marketing website** (`https://stormwind-new-website.vercel.app`).
Uses Page Object Model (POM) with a `BasePage` foundation and Playwright fixtures.
This project is separate from the StormWind LMS app automation (which lives in `stormwind_playwright_project`).
Figma is the source of truth for what pages and sections to test.

## Commands

```bash
# Run all tests
npx playwright test

# Run a single spec file
npx playwright test tests/specs/home.spec.js

# Run a single test by name
npx playwright test --grep "SC01-TC01"

# Run with headed browser (visible)
npx playwright test --headed

# Open HTML report after a run
npx playwright show-report
```

## Directory structure

```
playwright.config.js        ← baseURL, timeouts, reporter config
tests/
  pages/
    base.page.js            ← BasePage (all page objects extend this)
    home.page.js            ← HomePage  → /
    learning-process.page.js← LearningProcessPage → /learning-process
    browse-courses.page.js  ← BrowseCoursesPage → /courses
    learning-paths.page.js  ← LearningPathsPage → /learning-paths
    skills-assessments.page.js ← SkillsAssessmentsPage → /courses/skills-assessments
  specs/
    home.spec.js            ← SC01–SC09  (35 tests)
    learning-process.spec.js← SC10–SC16  (27 tests)
    browse-courses.spec.js  ← SC17–SC19  (17 tests)
    learning-paths.spec.js  ← SC20–SC24  (15 tests)
    skills-assessments.spec.js ← SC25–SC29 (14 tests)
  fixtures/
    fixtures.js             ← extends Playwright test with page fixtures
```

## Test numbering convention

Tests are numbered sequentially across all spec files using SC (Scenario) and TC (Test Case) IDs:
- `SC01-TC01`, `SC01-TC02` ... within the same `test.describe` block
- SC numbers continue across files (home=SC01–09, learning-process=SC10–16, etc.)
- When adding a new page, continue numbering from the last used SC

## Locator strategy — priority order

1. `getByTestId(id)` — preferred when `data-testid` is present (this site has excellent coverage)
2. `getByRole(role, { name })` — for elements without testids (h1, buttons, links)
3. `getByText(text)` — fallback for readable-text assertions

Avoid CSS selectors and XPath.

## Mobile/desktop dual rendering

This is a Next.js SSR site that renders **both** mobile and desktop versions in the DOM simultaneously, hiding one via CSS (`hidden md:grid` pattern). On Desktop Chrome (1280px viewport):
- Mobile carousel elements are `display:none`
- Desktop grid elements are visible

When a testid appears **twice** (mobile + desktop), always use `.last()` to target the desktop (visible) version. Use `.first()` when scoping to the first of two identical CTA sections.

```js
// Pattern for dual-rendered elements:
this.featureTitle = page.getByTestId('feature-title-0').last();
```

## Curly apostrophe pattern

Some heading text uses curly apostrophes (`'` U+2019) which won't match a straight apostrophe in `getByText`. Use a regex with `.` to match any character:

```js
this.bottomCtaHeading = page.getByText(/Transform your team.s skills/i);
```

## Page object conventions

- Every page object extends `BasePage`.
- Constructor declares **all** locators as `this.xxx` properties.
- `open()` calls `this.navigate(path)` then `this.waitForPageLoad()`.
- Scroll before asserting off-screen elements: `await page.scrollToElement(locator)`.

```js
class FooPage extends BasePage {
  constructor(page) {
    super(page);
    this.heading = page.getByTestId('hero-heading');
  }

  async open() {
    await this.navigate('/foo');
    await this.waitForPageLoad();
  }
}
module.exports = FooPage;
```

## Adding a new page

1. Fetch the live page HTML and extract `data-testid` values:
   ```bash
   curl -s https://stormwind-new-website.vercel.app/<path> | grep -o 'data-testid="[^"]*"' | sort | uniq
   ```
2. Create `tests/pages/<name>.page.js` extending `BasePage`.
3. Create `tests/specs/<name>.spec.js` with SC/TC numbering continuing from the last used SC.
4. Register the fixture in `tests/fixtures/fixtures.js`.
5. Run the new spec to confirm all tests pass before committing.
