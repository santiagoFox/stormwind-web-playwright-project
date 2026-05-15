const { expect } = require('@playwright/test');
const { test } = require('../fixtures/fixtures');

test.describe('SC17 - Page Hero', () => {

  test('SC17-TC01 - "EXPLORE OUR COURSES CATALOG" preheading is visible', async ({ browseCoursesPage }) => {
    await expect(browseCoursesPage.heroPreheading).toBeVisible();
  });

  test('SC17-TC02 - "Find the training you need" heading is visible', async ({ browseCoursesPage }) => {
    await expect(browseCoursesPage.heroHeading).toBeVisible();
  });

});

test.describe('SC18 - Topic Grid', () => {

  test('SC18-TC01 - Topic grid section is visible', async ({ browseCoursesPage }) => {
    await browseCoursesPage.scrollToElement(browseCoursesPage.topicGridSection);
    await expect(browseCoursesPage.topicGridSection).toBeVisible();
  });

  test('SC18-TC02 - "Artificial Intelligence" topic card is visible', async ({ browseCoursesPage }) => {
    await browseCoursesPage.scrollToElement(browseCoursesPage.topicAI);
    await expect(browseCoursesPage.topicAI).toBeVisible();
  });

  test('SC18-TC03 - "Business Skills" topic card is visible', async ({ browseCoursesPage }) => {
    await browseCoursesPage.scrollToElement(browseCoursesPage.topicBizSkills);
    await expect(browseCoursesPage.topicBizSkills).toBeVisible();
  });

  test('SC18-TC04 - "Cloud" topic card is visible', async ({ browseCoursesPage }) => {
    await browseCoursesPage.scrollToElement(browseCoursesPage.topicCloud);
    await expect(browseCoursesPage.topicCloud).toBeVisible();
  });

  test('SC18-TC05 - "Compliance" topic card is visible', async ({ browseCoursesPage }) => {
    await browseCoursesPage.scrollToElement(browseCoursesPage.topicCompliance);
    await expect(browseCoursesPage.topicCompliance).toBeVisible();
  });

  test('SC18-TC06 - "Cybersecurity" topic card is visible', async ({ browseCoursesPage }) => {
    await browseCoursesPage.scrollToElement(browseCoursesPage.topicCyber);
    await expect(browseCoursesPage.topicCyber).toBeVisible();
  });

  test('SC18-TC07 - "Data Science" topic card is visible', async ({ browseCoursesPage }) => {
    await browseCoursesPage.scrollToElement(browseCoursesPage.topicDataSci);
    await expect(browseCoursesPage.topicDataSci).toBeVisible();
  });

  test('SC18-TC08 - "Desktop Applications" topic card is visible', async ({ browseCoursesPage }) => {
    await browseCoursesPage.scrollToElement(browseCoursesPage.topicDesktopApps);
    await expect(browseCoursesPage.topicDesktopApps).toBeVisible();
  });

  test('SC18-TC09 - "Development" topic card is visible', async ({ browseCoursesPage }) => {
    await browseCoursesPage.scrollToElement(browseCoursesPage.topicDevelopment);
    await expect(browseCoursesPage.topicDevelopment).toBeVisible();
  });

  test('SC18-TC10 - "DevOps" topic card is visible', async ({ browseCoursesPage }) => {
    await browseCoursesPage.scrollToElement(browseCoursesPage.topicDevOps);
    await expect(browseCoursesPage.topicDevOps).toBeVisible();
  });

  test('SC18-TC11 - "Information Technology" topic card is visible', async ({ browseCoursesPage }) => {
    await browseCoursesPage.scrollToElement(browseCoursesPage.topicIT);
    await expect(browseCoursesPage.topicIT).toBeVisible();
  });

  test('SC18-TC12 - "Project Management" topic card is visible', async ({ browseCoursesPage }) => {
    await browseCoursesPage.scrollToElement(browseCoursesPage.topicProjMgmt);
    await expect(browseCoursesPage.topicProjMgmt).toBeVisible();
  });

  test('SC18-TC13 - "Security Awareness" topic card is visible', async ({ browseCoursesPage }) => {
    await browseCoursesPage.scrollToElement(browseCoursesPage.topicSecurity);
    await expect(browseCoursesPage.topicSecurity).toBeVisible();
  });

});

test.describe('SC19 - Bottom CTA', () => {

  test('SC19-TC01 - "Empower your team with industry-ready training" heading is visible', async ({ browseCoursesPage }) => {
    await browseCoursesPage.scrollToElement(browseCoursesPage.ctaHeading);
    await expect(browseCoursesPage.ctaHeading).toBeVisible();
  });

  test('SC19-TC02 - "CONTACT SALES" button is visible', async ({ browseCoursesPage }) => {
    await browseCoursesPage.scrollToElement(browseCoursesPage.ctaButton);
    await expect(browseCoursesPage.ctaButton).toBeVisible();
  });

});
