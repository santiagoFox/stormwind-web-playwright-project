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

  test('SC12-TC03 - "IT" category is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.categoryIT);
    await expect(learningProcessPage.categoryIT).toBeVisible();
  });

  test('SC12-TC04 - "DevOps" category is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.categoryDevOps);
    await expect(learningProcessPage.categoryDevOps).toBeVisible();
  });

  test('SC12-TC05 - "Full Stack Developer" category is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.categoryFullStack);
    await expect(learningProcessPage.categoryFullStack).toBeVisible();
  });

  test('SC12-TC06 - "Data Science" category is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.categoryDataSci);
    await expect(learningProcessPage.categoryDataSci).toBeVisible();
  });

  test('SC12-TC07 - "Project Management" category is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.categoryProjMgmt);
    await expect(learningProcessPage.categoryProjMgmt).toBeVisible();
  });

  test('SC12-TC08 - "End User" category is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.categoryEndUser);
    await expect(learningProcessPage.categoryEndUser).toBeVisible();
  });

  test('SC12-TC09 - "Business Skills" category is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.categoryBizSkills);
    await expect(learningProcessPage.categoryBizSkills).toBeVisible();
  });

  test('SC12-TC10 - "Compliance" category is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.categoryCompliance);
    await expect(learningProcessPage.categoryCompliance).toBeVisible();
  });

  test('SC12-TC11 - "EXPLORE THE FULL LIBRARY" button is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.exploreLibraryBtn);
    await expect(learningProcessPage.exploreLibraryBtn).toBeVisible();
  });

});

test.describe('SC13 - Storm AI Learning', () => {

  test('SC13-TC01 - "Storm AI Learning" heading is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.stormAIHeading);
    await expect(learningProcessPage.stormAIHeading).toBeVisible();
  });

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

test.describe('SC14 - Storm AI Features', () => {

  test('SC14-TC01 - "Learn faster. Retain more. Finish stronger." heading is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.stormAIFeaturesTitle);
    await expect(learningProcessPage.stormAIFeaturesTitle).toBeVisible();
  });

  test('SC14-TC02 - Storm AI feature tabs are visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.stormAIFeatureStudy);
    await expect(learningProcessPage.stormAIFeatureStudy).toBeVisible();
    await expect(learningProcessPage.stormAIFeatureExam).toBeVisible();
    await expect(learningProcessPage.stormAIFeatureTopic).toBeVisible();
    await expect(learningProcessPage.stormAIFeatureFast).toBeVisible();
    await expect(learningProcessPage.stormAIFeatureExaminer).toBeVisible();
    await expect(learningProcessPage.stormAIFeatureFlash).toBeVisible();
    await expect(learningProcessPage.stormAIFeatureHighlight).toBeVisible();
  });

});

test.describe('SC15 - Course Library', () => {

  test('SC15-TC01 - "Explore our complete course library" heading is visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.courseCatalogTitle);
    await expect(learningProcessPage.courseCatalogTitle).toBeVisible();
  });

  test('SC15-TC02 - Category filter chips are visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.filterChipAI);
    await expect(learningProcessPage.filterChipAI).toBeVisible();
    await expect(learningProcessPage.filterChipDevOps).toBeVisible();
  });

  test('SC15-TC03 - Course cards are visible', async ({ learningProcessPage }) => {
    await learningProcessPage.scrollToElement(learningProcessPage.courseCard);
    await expect(learningProcessPage.courseCard).toBeVisible();
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
