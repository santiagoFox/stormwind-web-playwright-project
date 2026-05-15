const BasePage = require('./base.page');

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    // Header / Navigation
    this.logo           = page.getByRole('link', { name: /stormwind/i }).first();
    this.navForTeams    = page.getByRole('link', { name: 'For Teams' });
    this.navForIndividuals = page.getByRole('link', { name: 'For Individuals' });
    this.navLearningProcess = page.getByRole('link', { name: 'Our Learning Process' });
    this.navLabs        = page.getByRole('link', { name: 'Labs' });
    this.navTalkWithSales = page.getByRole('link', { name: /talk with sales team/i });
    this.navSignIn      = page.getByRole('link', { name: /sign in/i });

    // Hero section
    this.heroHeading    = page.getByText(/This is how your company grows with/i);
    this.heroCtaTeams   = page.getByRole('link', { name: /discover team tools/i });
    this.heroCtaCourses = page.getByRole('link', { name: /see all courses/i });

    // Teams section
    this.teamsSectionLabel   = page.getByText(/Manage your team.s learning/i);
    this.teamsMainHeading    = page.getByText('Build a future-ready workforce');
    this.tabTeamDashboard    = page.getByTestId('tab-button-dt-0');
    this.tabStudentReports   = page.getByTestId('tab-button-dt-1');
    this.tabAssignCourses    = page.getByTestId('tab-button-dt-2');
    this.tabLicenses         = page.getByTestId('tab-button-dt-3');
    this.tabLearningPaths    = page.getByTestId('tab-button-dt-4');
    this.tabSkillsAssessments = page.getByTestId('tab-button-dt-6');

    // Performance CTA section
    this.performanceHeading  = page.getByText('Turn learning into performance');
    this.discoverTeamToolsBtn = page.getByRole('link', { name: /discover team tools/i });

    // Features section
    this.featuresHeading     = page.getByText('Cutting-edge training from real industry experts');
    this.feature4000Courses  = page.getByTestId('feature-title-0').last();
    this.featureCertPrep     = page.getByTestId('feature-title-1').last();
    this.featureLearningPaths = page.getByTestId('feature-title-2').last();
    this.featureSkillsAssessments = page.getByTestId('feature-title-3').last();

    // Labs section
    this.labsHeading         = page.getByText('Hands On Experience');
    this.labsHandsOn         = page.getByTestId('lab-title-0').last();
    this.labsPracticeExams   = page.getByTestId('lab-title-1').last();

    // Workforce CTA section
    this.workforceHeading    = page.getByText('Take your workforce to the next level');
    this.exploreTeamsBtn     = page.getByRole('link', { name: /explore teams experience/i });

    // Storm AI section
    this.stormAILearningHeading = page.getByTestId('stormai-learning-hero-title');
    this.stormAITutorHeading    = page.getByText('Meet Storm AI Tutor');
    this.learnMoreTutorBtn      = page.getByRole('link', { name: /learn more about storm ai tutor/i });

    // Testimonial section
    this.testimonialQuote    = page.getByText(/With StormWind, I finally have full visibility/i);
    this.testimonialAuthor   = page.getByText('Alex Johnson');

    // Bottom CTA section
    this.bottomCtaHeading    = page.getByText(/Transform your team.s skills/i);
    this.contactSalesBtn     = page.getByRole('link', { name: /contact sales/i });

    // Footer
    this.footerEpicLiveCourses = page.getByText('Epic Live Courses', { exact: false });
    this.footerPopularTopics   = page.getByText('Popular Topics', { exact: false });
    this.footerGetInTouch      = page.getByText('Get In Touch', { exact: false });
    this.footerCisco           = page.locator('footer').getByRole('link', { name: 'Cisco' });
    this.footerPrivacyPolicy   = page.locator('footer').getByRole('link', { name: /privacy policy/i });
    this.footerTerms           = page.locator('footer').getByRole('link', { name: /terms and conditions/i });
    this.footerCareers         = page.locator('footer').getByRole('link', { name: /careers/i });
  }

  async open() {
    await this.navigate('/');
    await this.waitForPageLoad();
  }

  async clickNavForTeams() {
    await this.navForTeams.click();
    await this.waitForPageLoad();
  }

  async clickNavForIndividuals() {
    await this.navForIndividuals.click();
    await this.waitForPageLoad();
  }

  async clickTalkWithSales() {
    await this.navTalkWithSales.click();
    await this.waitForPageLoad();
  }

  async clickSignIn() {
    await this.navSignIn.click();
    await this.waitForPageLoad();
  }

  async clickContactSales() {
    await this.scrollToElement(this.contactSalesBtn);
    await this.contactSalesBtn.click();
  }
}

module.exports = HomePage;
