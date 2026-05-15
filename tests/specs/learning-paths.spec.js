const { expect } = require('@playwright/test');
const { test } = require('../fixtures/fixtures');

test.describe('SC20 - Page Heading', () => {

  test('SC20-TC01 - "Learning Paths" heading is visible', async ({ learningPathsPage }) => {
    await expect(learningPathsPage.pageHeading).toBeVisible();
  });

  test('SC20-TC02 - "Learning Paths" breadcrumb is visible', async ({ learningPathsPage }) => {
    await expect(learningPathsPage.breadcrumb).toBeVisible();
  });

});

test.describe('SC21 - Search & Filters', () => {

  test('SC21-TC01 - Search bar is visible', async ({ learningPathsPage }) => {
    await expect(learningPathsPage.searchInput).toBeVisible();
  });

  test('SC21-TC02 - Topic filter chips are visible', async ({ learningPathsPage }) => {
    await expect(learningPathsPage.topicChips).toBeVisible();
    await expect(learningPathsPage.filterChipAll).toBeVisible();
  });

  test('SC21-TC03 - Filters panel is visible', async ({ learningPathsPage }) => {
    await expect(learningPathsPage.filtersPanel).toBeVisible();
  });

  test('SC21-TC04 - Filter sections are visible', async ({ learningPathsPage }) => {
    await expect(learningPathsPage.filterContentType).toBeVisible();
    await expect(learningPathsPage.filterPathSize).toBeVisible();
    await expect(learningPathsPage.filterInstructor).toBeVisible();
    await expect(learningPathsPage.filterVendor).toBeVisible();
  });

});

test.describe('SC22 - Learning Path Cards', () => {

  test('SC22-TC01 - Learning path grid is visible', async ({ learningPathsPage }) => {
    await expect(learningPathsPage.learningPathGrid).toBeVisible();
  });

  test('SC22-TC02 - First learning path card is visible', async ({ learningPathsPage }) => {
    await expect(learningPathsPage.firstCard).toBeVisible();
  });

  test('SC22-TC03 - First card has a title', async ({ learningPathsPage }) => {
    await expect(learningPathsPage.firstCardTitle).toBeVisible();
  });

});

test.describe('SC23 - Pagination', () => {

  test('SC23-TC01 - Pagination is visible', async ({ learningPathsPage }) => {
    await learningPathsPage.scrollToElement(learningPathsPage.pagination);
    await expect(learningPathsPage.pagination).toBeVisible();
  });

  test('SC23-TC02 - Page 1 button is visible', async ({ learningPathsPage }) => {
    await learningPathsPage.scrollToElement(learningPathsPage.paginationPage1);
    await expect(learningPathsPage.paginationPage1).toBeVisible();
  });

  test('SC23-TC03 - "Next" button is visible', async ({ learningPathsPage }) => {
    await expect(learningPathsPage.paginationNext).toBeVisible();
  });

  test('SC23-TC04 - "Last" button is visible', async ({ learningPathsPage }) => {
    await expect(learningPathsPage.paginationLast).toBeVisible();
  });

});

test.describe('SC24 - Bottom CTA', () => {

  test('SC24-TC01 - "Ready to Elevate Your Team\'s Learning?" heading is visible', async ({ learningPathsPage }) => {
    await learningPathsPage.scrollToElement(learningPathsPage.ctaHeading);
    await expect(learningPathsPage.ctaHeading).toBeVisible();
  });

  test('SC24-TC02 - "CONTACT SALES" button is visible', async ({ learningPathsPage }) => {
    await learningPathsPage.scrollToElement(learningPathsPage.ctaButton);
    await expect(learningPathsPage.ctaButton).toBeVisible();
  });

});
