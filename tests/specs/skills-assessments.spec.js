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

  // Redesign (2026): the topic filter chips and the dedicated filters panel
  // (content-type/difficulty/instructor/vendor sections) were removed — search
  // is the only filter UI now, so the former SC26-TC02/TC03/TC04 have no UI to
  // assert.

});

test.describe('SC27 - Assessment Cards', () => {

  test('SC27-TC01 - Assessment card grid is visible', async ({ skillsAssessmentsPage }) => {
    await expect(skillsAssessmentsPage.grid).toBeVisible();
  });

  test('SC27-TC02 - First assessment card is visible', async ({ skillsAssessmentsPage }) => {
    await expect(skillsAssessmentsPage.firstCard).toBeVisible();
  });

  test('SC27-TC03 - First card has a title', async ({ skillsAssessmentsPage }) => {
    await expect(skillsAssessmentsPage.firstCardTitle.first()).toBeVisible();
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
