const { expect } = require('@playwright/test');
const { test } = require('../fixtures/fixtures');

test.describe('SC10 - Page Hero', () => {

  test('SC10-TC01 - "OUR LEARNING PROCESS" preheading is visible', async ({ learningProcessPage }) => {
    await expect(learningProcessPage.heroPreheading).toBeVisible();
  });

  test('SC10-TC02 - "Start your certification-ready training" heading is visible', async ({ learningProcessPage }) => {
    await expect(learningProcessPage.heroHeading).toBeVisible();
  });

});

test.describe('SC11 - Feature Cards', () => {

  test('SC11-TC01 - "+4000 Courses" card is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.featureCourses);
    await expect(learningProcessPage.featureCourses).toBeVisible();
  });

  test('SC11-TC02 - "Micro learning" card is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.featureMicroLearn);
    await expect(learningProcessPage.featureMicroLearn).toBeVisible();
  });

  test('SC11-TC03 - "Certification prep" card is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.featureCertPrep);
    await expect(learningProcessPage.featureCertPrep).toBeVisible();
  });

});

test.describe('SC12 - Courses Catalog', () => {

  test('SC12-TC01 - "COURSES CATALOG" preheading is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.catalogPreheading);
    await expect(learningProcessPage.catalogPreheading).toBeVisible();
  });

  test('SC12-TC02 - "Learn from expert-led courses" heading is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.catalogHeading);
    await expect(learningProcessPage.catalogHeading).toBeVisible();
  });

  // Redesign (2026): the standalone "Courses Catalog" category-card grid
  // (former SC12-TC03..TC11) was replaced by the filter-chip "Course Library"
  // section — that coverage now lives in SC15 (category chips + course cards +
  // Explore the full library button).

});

test.describe('SC13 - Storm AI Learning', () => {

  // Redesign removed the standalone "Storm AI Learning" hero heading (former
  // SC13-TC01); the section now leads with the CTA block asserted below.
  test('SC13-TC02 - "TRY IT NOW" eyebrow is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.tryItNowEyebrow);
    await expect(learningProcessPage.tryItNowEyebrow).toBeVisible();
  });

  test('SC13-TC03 - "Experience Storm AI Learning in action" heading is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.stormAICtaTitle);
    await expect(learningProcessPage.stormAICtaTitle).toBeVisible();
  });

  test('SC13-TC04 - "See More Details" button is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.stormAICtaBtn);
    await expect(learningProcessPage.stormAICtaBtn).toBeVisible();
  });

});

// SC14 (Storm AI "Learn faster…" multi-tab features section) was removed in the
// 2026 redesign — that section no longer exists on /learning-process.

test.describe('SC15 - Course Library', () => {

  test('SC15-TC01 - "Explore our complete course library" heading is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.courseCatalogTitle);
    await expect(learningProcessPage.courseCatalogTitle).toBeVisible();
  });

  test('SC15-TC02 - Category filter chips are visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.filterChipAI);
    await expect(learningProcessPage.filterChipAI).toBeVisible();
    await expect(learningProcessPage.filterChipDevOps).toBeVisible();
    await expect(learningProcessPage.filterChipIT).toBeVisible();
    await expect(learningProcessPage.filterChipDataSci).toBeVisible();
    await expect(learningProcessPage.filterChipProjMgmt).toBeVisible();
    await expect(learningProcessPage.filterChipCompliance).toBeVisible();
  });

  test('SC15-TC03 - Course cards are visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.courseCard);
    await expect(learningProcessPage.courseCard).toBeVisible();
  });

  test('SC15-TC04 - "Explore the full library" button is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.exploreLibraryBtn);
    await expect(learningProcessPage.exploreLibraryBtn).toBeVisible();
  });

});

test.describe('SC16 - Bottom CTA', () => {

  test('SC16-TC01 - "Ready to level up your learning?" heading is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.ctaHeading);
    await expect(learningProcessPage.ctaHeading).toBeVisible();
  });

  test('SC16-TC02 - "CONTACT SALES" button is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.ctaButton);
    await expect(learningProcessPage.ctaButton).toBeVisible();
  });

});
