const { test: base } = require('@playwright/test');
const HomePage = require('../pages/home.page');
const LearningProcessPage = require('../pages/learning-process.page');
const BrowseCoursesPage = require('../pages/browse-courses.page');
const LearningPathsPage = require('../pages/learning-paths.page');
const SkillsAssessmentsPage = require('../pages/skills-assessments.page');

const test = base.extend({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.open();
    await use(homePage);
  },
  learningProcessPage: async ({ page }, use) => {
    const learningProcessPage = new LearningProcessPage(page);
    await learningProcessPage.open();
    await use(learningProcessPage);
  },
  browseCoursesPage: async ({ page }, use) => {
    const browseCoursesPage = new BrowseCoursesPage(page);
    await browseCoursesPage.open();
    await use(browseCoursesPage);
  },
  learningPathsPage: async ({ page }, use) => {
    const learningPathsPage = new LearningPathsPage(page);
    await learningPathsPage.open();
    await use(learningPathsPage);
  },
  skillsAssessmentsPage: async ({ page }, use) => {
    const skillsAssessmentsPage = new SkillsAssessmentsPage(page);
    await skillsAssessmentsPage.open();
    await use(skillsAssessmentsPage);
  },
});

module.exports = { test };
