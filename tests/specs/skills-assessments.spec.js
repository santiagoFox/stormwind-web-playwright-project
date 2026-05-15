const { expect } = require('@playwright/test');
const { test } = require('../fixtures/fixtures');

test.describe('SC25 - Page Heading', () => {

  test('SC25-TC01 - "Skills Assessments" heading is visible', async ({ skillsAssessmentsPage }) => {
    await expect(skillsAssessmentsPage.pageHeading).toBeVisible();
  });

});

test.describe('SC26 - Search & Filters', () => {

  test('SC26-TC01 - Search bar is visible', async ({ skillsAssessmentsPage }) => {
    await expect(skillsAssessmentsPage.searchInput).toBeVisible();
  });

  test('SC26-TC02 - Topic filter chips are visible', async ({ skillsAssessmentsPage }) => {
    await expect(skillsAssessmentsPage.filterChips).toBeVisible();
    await expect(skillsAssessmentsPage.filterChipAll).toBeVisible();
  });

  test('SC26-TC03 - Filters panel is visible', async ({ skillsAssessmentsPage }) => {
    await expect(skillsAssessmentsPage.filtersPanel).toBeVisible();
  });

  test('SC26-TC04 - Filter sections are visible', async ({ skillsAssessmentsPage }) => {
    await expect(skillsAssessmentsPage.filterContentType).toBeVisible();
    await expect(skillsAssessmentsPage.filterDifficulty).toBeVisible();
    await expect(skillsAssessmentsPage.filterInstructor).toBeVisible();
    await expect(skillsAssessmentsPage.filterVendor).toBeVisible();
  });

});

test.describe('SC27 - Assessment Cards', () => {

  test('SC27-TC01 - Assessment card grid is visible', async ({ skillsAssessmentsPage }) => {
    await expect(skillsAssessmentsPage.courseGrid).toBeVisible();
  });

  test('SC27-TC02 - First assessment card is visible', async ({ skillsAssessmentsPage }) => {
    await expect(skillsAssessmentsPage.firstCard).toBeVisible();
  });

  test('SC27-TC03 - First card has a title', async ({ skillsAssessmentsPage }) => {
    await expect(skillsAssessmentsPage.firstCardTitle).toBeVisible();
  });

});

test.describe('SC28 - Pagination', () => {

  test('SC28-TC01 - Pagination is visible', async ({ skillsAssessmentsPage }) => {
    await skillsAssessmentsPage.scrollToElement(skillsAssessmentsPage.pagination);
    await expect(skillsAssessmentsPage.pagination).toBeVisible();
  });

  test('SC28-TC02 - Page 1 button is visible', async ({ skillsAssessmentsPage }) => {
    await skillsAssessmentsPage.scrollToElement(skillsAssessmentsPage.paginationPage1);
    await expect(skillsAssessmentsPage.paginationPage1).toBeVisible();
  });

  test('SC28-TC03 - "Next" button is visible', async ({ skillsAssessmentsPage }) => {
    await expect(skillsAssessmentsPage.paginationNext).toBeVisible();
  });

  test('SC28-TC04 - "Last" button is visible', async ({ skillsAssessmentsPage }) => {
    await expect(skillsAssessmentsPage.paginationLast).toBeVisible();
  });

});

test.describe('SC29 - Bottom CTA', () => {

  test('SC29-TC01 - "Ready to Elevate Your Team\'s Learning?" heading is visible', async ({ skillsAssessmentsPage }) => {
    await skillsAssessmentsPage.scrollToElement(skillsAssessmentsPage.ctaHeading);
    await expect(skillsAssessmentsPage.ctaHeading).toBeVisible();
  });

  test('SC29-TC02 - "CONTACT SALES" button is visible', async ({ skillsAssessmentsPage }) => {
    await skillsAssessmentsPage.scrollToElement(skillsAssessmentsPage.ctaButton);
    await expect(skillsAssessmentsPage.ctaButton).toBeVisible();
  });

});
