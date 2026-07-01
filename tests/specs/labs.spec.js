const { expect } = require('@playwright/test');
const { test } = require('../fixtures/fixtures');

test.describe('SC30 - Header / Navigation', () => {

  test('SC30-TC01 - Desktop navigation is visible', async ({ labsPage }) => {
    await expect(labsPage.desktopNav).toBeVisible();
  });

  test('SC30-TC02 - "Solutions" nav menu is visible', async ({ labsPage }) => {
    await expect(labsPage.navSolutions).toBeVisible();
  });

  test('SC30-TC03 - "Our Learning Process" nav link is visible', async ({ labsPage }) => {
    await expect(labsPage.navLearningProcess).toBeVisible();
  });

  test('SC30-TC04 - "Browse" nav menu is visible', async ({ labsPage }) => {
    await expect(labsPage.navBrowse).toBeVisible();
  });

  test('SC30-TC05 - "Extras" nav menu is visible', async ({ labsPage }) => {
    await expect(labsPage.navExtras).toBeVisible();
  });

  // Redesign removed the top-level "For Individuals" nav item (former SC30-TC06).
  // The mobile menu button is display:none on desktop, so assert it is present
  // in the DOM rather than visible.
  test('SC30-TC07 - Mobile menu button is present', async ({ labsPage }) => {
    await expect(labsPage.mobileMenuButton).toBeAttached();
  });

});

test.describe('SC31 - Intro Section', () => {

  test('SC31-TC01 - Intro section is visible', async ({ labsPage }) => {
    await expect(labsPage.introSection).toBeVisible();
  });

  test('SC31-TC02 - "LABS" eyebrow label is visible', async ({ labsPage }) => {
    await expect(labsPage.introEyebrow).toBeVisible();
  });

  test('SC31-TC03 - "Gain Real Experience with Hands-On Labs" heading is visible', async ({ labsPage }) => {
    await expect(labsPage.introTitle).toBeVisible();
  });

  test('SC31-TC04 - Intro subtitle is visible', async ({ labsPage }) => {
    await expect(labsPage.introSubtitle).toBeVisible();
  });

});

test.describe('SC32 - Carousel', () => {

  test('SC32-TC01 - Carousel section is present', async ({ labsPage }) => {
    // The carousel container renders empty (zero-size) when no lab slides are
    // configured, so assert it is present in the DOM rather than visible.
    await expect(labsPage.carousel).toBeAttached();
  });

});

test.describe('SC33 - Bottom CTA', () => {

  test('SC33-TC01 - CTA section is visible', async ({ labsPage }) => {
    await labsPage.scrollToElement(labsPage.ctaSection);
    await expect(labsPage.ctaSection).toBeVisible();
  });

  test('SC33-TC02 - "Transform your team\'s learning experience" heading is visible', async ({ labsPage }) => {
    await labsPage.scrollToElement(labsPage.ctaTitle);
    await expect(labsPage.ctaTitle).toBeVisible();
  });

  test('SC33-TC03 - CTA description is visible', async ({ labsPage }) => {
    await labsPage.scrollToElement(labsPage.ctaDescription);
    await expect(labsPage.ctaDescription).toBeVisible();
  });

  test('SC33-TC04 - "Contact Sales" button is visible', async ({ labsPage }) => {
    await labsPage.scrollToElement(labsPage.ctaButton);
    await expect(labsPage.ctaButton).toBeVisible();
  });

});
