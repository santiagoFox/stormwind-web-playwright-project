const { expect } = require('@playwright/test');
const { test } = require('../fixtures/fixtures');

test.describe('SC01 - Header / Navigation', () => {

  test('SC01-TC01 - Logo is visible', async ({ homePage }) => {
    await expect(homePage.logo).toBeVisible();
  });

  test('SC01-TC02 - "For Teams" nav link is visible', async ({ homePage }) => {
    await expect(homePage.navForTeams).toBeVisible();
  });

  test('SC01-TC03 - "For Individuals" nav link is visible', async ({ homePage }) => {
    await expect(homePage.navForIndividuals).toBeVisible();
  });

  test('SC01-TC04 - "Our Learning Process" nav link is visible', async ({ homePage }) => {
    await expect(homePage.navLearningProcess).toBeVisible();
  });

  test('SC01-TC05 - "Labs" nav link is visible', async ({ homePage }) => {
    await expect(homePage.navLabs).toBeVisible();
  });

  test('SC01-TC06 - "Talk With Sales Team" CTA is visible', async ({ homePage }) => {
    await expect(homePage.navTalkWithSales).toBeVisible();
  });

  test('SC01-TC07 - "Sign In" link is visible', async ({ homePage }) => {
    await expect(homePage.navSignIn).toBeVisible();
  });

});

test.describe('SC02 - Hero Section', () => {

  test('SC02-TC01 - Hero heading is visible', async ({ homePage }) => {
    await expect(homePage.heroHeading).toBeVisible();
  });

  test('SC02-TC02 - "Discover Team Tools" CTA is visible', async ({ homePage }) => {
    await expect(homePage.heroCtaTeams).toBeVisible();
  });

  test('SC02-TC03 - "See All Courses" CTA is visible', async ({ homePage }) => {
    await expect(homePage.heroCtaCourses).toBeVisible();
  });

});

test.describe('SC03 - Teams Section', () => {

  test('SC03-TC01 - "Manage your team\'s learning" label is visible', async ({ homePage }) => {
    await expect(homePage.teamsSectionLabel).toBeVisible();
  });

  test('SC03-TC02 - "Build a future-ready workforce" heading is visible', async ({ homePage }) => {
    await expect(homePage.teamsMainHeading).toBeVisible();
  });

  test('SC03-TC03 - Feature tabs are visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.tabTeamDashboard);
    await expect(homePage.tabTeamDashboard).toBeVisible();
    await expect(homePage.tabStudentReports).toBeVisible();
    await expect(homePage.tabAssignCourses).toBeVisible();
    await expect(homePage.tabLicenses).toBeVisible();
    await expect(homePage.tabLearningPaths).toBeVisible();
    await expect(homePage.tabSkillsAssessments).toBeVisible();
  });

});

test.describe('SC04 - Features Section', () => {

  test('SC04-TC01 - Features section heading is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.featuresHeading);
    await expect(homePage.featuresHeading).toBeVisible();
  });

  test('SC04-TC02 - "+4000 Courses" feature card is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.feature4000Courses);
    await expect(homePage.feature4000Courses).toBeVisible();
  });

  test('SC04-TC03 - "Certification Prep" feature card is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.featureCertPrep);
    await expect(homePage.featureCertPrep).toBeVisible();
  });

  test('SC04-TC04 - "Learning Paths" feature card is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.featureLearningPaths);
    await expect(homePage.featureLearningPaths).toBeVisible();
  });

  test('SC04-TC05 - "Skills Assessments" feature card is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.featureSkillsAssessments);
    await expect(homePage.featureSkillsAssessments).toBeVisible();
  });

});

test.describe('SC05 - Labs Section', () => {

  test('SC05-TC01 - "Hands On Experience" heading is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.labsHeading);
    await expect(homePage.labsHeading).toBeVisible();
  });

  test('SC05-TC02 - "Hands-on labs" card is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.labsHandsOn);
    await expect(homePage.labsHandsOn).toBeVisible();
  });

  test('SC05-TC03 - "Practice Exams" card is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.labsPracticeExams);
    await expect(homePage.labsPracticeExams).toBeVisible();
  });

});

test.describe('SC06 - Storm AI Section', () => {

  test('SC06-TC01 - "Storm AI Learning" heading is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.stormAILearningHeading);
    await expect(homePage.stormAILearningHeading).toBeVisible();
  });

  test('SC06-TC02 - "Meet Storm AI Tutor" heading is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.stormAITutorHeading);
    await expect(homePage.stormAITutorHeading).toBeVisible();
  });

  test('SC06-TC03 - "Learn More About Storm AI Tutor" button is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.learnMoreTutorBtn);
    await expect(homePage.learnMoreTutorBtn).toBeVisible();
  });

});

test.describe('SC07 - Testimonial Section', () => {

  test('SC07-TC01 - Testimonial quote is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.testimonialQuote);
    await expect(homePage.testimonialQuote).toBeVisible();
  });

  test('SC07-TC02 - Testimonial author "Alex Johnson" is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.testimonialAuthor);
    await expect(homePage.testimonialAuthor).toBeVisible();
  });

});

test.describe('SC08 - Bottom CTA Section', () => {

  test('SC08-TC01 - "Transform your team\'s skills" heading is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.bottomCtaHeading);
    await expect(homePage.bottomCtaHeading).toBeVisible();
  });

  test('SC08-TC02 - "Contact Sales" button is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.contactSalesBtn);
    await expect(homePage.contactSalesBtn).toBeVisible();
  });

});

test.describe('SC09 - Footer', () => {

  test('SC09-TC01 - "Epic Live Courses" footer section is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.footerEpicLiveCourses);
    await expect(homePage.footerEpicLiveCourses).toBeVisible();
  });

  test('SC09-TC02 - "Popular Topics" footer section is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.footerPopularTopics);
    await expect(homePage.footerPopularTopics).toBeVisible();
  });

  test('SC09-TC03 - "Get In Touch" footer section is visible', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.footerGetInTouch);
    await expect(homePage.footerGetInTouch).toBeVisible();
  });

  test('SC09-TC04 - Footer "Cisco" link is present', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.footerCisco);
    await expect(homePage.footerCisco).toBeVisible();
  });

  test('SC09-TC05 - Footer "Privacy Policy" link is present', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.footerPrivacyPolicy);
    await expect(homePage.footerPrivacyPolicy).toBeVisible();
  });

  test('SC09-TC06 - Footer "Terms and Conditions" link is present', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.footerTerms);
    await expect(homePage.footerTerms).toBeVisible();
  });

  test('SC09-TC07 - Footer "Careers" link is present', async ({ homePage }) => {
    await homePage.scrollToElement(homePage.footerCareers);
    await expect(homePage.footerCareers).toBeVisible();
  });

});
