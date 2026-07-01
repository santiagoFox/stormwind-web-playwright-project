const BasePage = require('./base.page');

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    // Header / Navigation — 2026 redesign: For Teams/For Individuals/Labs were
    // replaced by the Solutions / Browse / Extras dropdown menus; the sales CTA
    // is now "REQUEST LIVE DEMO". Nav items use desktop-nav-* test IDs (unique,
    // so no mobile/desktop strict-mode clash).
    this.logo           = page.getByRole('link', { name: /stormwind/i }).first();
    this.navSolutions       = page.getByTestId('desktop-nav-solutions');
    this.navLearningProcess = page.getByTestId('desktop-nav-our-learning-process');
    this.navBrowse          = page.getByTestId('desktop-nav-browse');
    this.navExtras          = page.getByTestId('desktop-nav-extras');
    this.navRequestDemo = page.getByRole('link', { name: /request live demo/i }).first();
    this.navSignIn      = page.getByRole('link', { name: /sign in/i }).first();

    // Hero section
    this.heroHeading    = page.getByText(/Stop learning what you already know/i);
    this.heroCtaTeams   = page.getByRole('link', { name: /discover team tools/i });
    this.heroCtaLearningProcess = page.getByRole('link', { name: /see our learning process/i }).first();

    // Teams section
    this.teamsSectionLabel   = page.getByText(/Manage your team.s learning/i);
    this.teamsMainHeading    = page.getByText('Build a future-ready workforce');
    this.tabTeamDashboard    = page.getByRole('tab', { name: 'Team Dashboard' });
    this.tabStudentReports   = page.getByRole('tab', { name: 'Student Reports' });
    this.tabAssignCourses    = page.getByRole('tab', { name: 'Assign Courses' });
    this.tabLicenses         = page.getByRole('tab', { name: 'Licenses Management' });
    this.tabLearningPaths    = page.getByRole('tab', { name: 'Learning Paths' });
    this.tabSkillsAssessments = page.getByRole('tab', { name: 'Skill Assessments' });

    // Performance CTA section
    this.performanceHeading  = page.getByText('Turn learning into performance');
    this.discoverTeamToolsBtn = page.getByRole('link', { name: /discover team tools/i });

    // Features section
    this.featuresHeading     = page.getByText('Cutting-edge training from real industry experts');
    this.feature4000Courses  = page.getByTestId('feature-title-0').last();
    this.featureCertPrep     = page.getByTestId('feature-title-1').last();
    this.featureLearningPaths = page.getByTestId('feature-title-2').last();
    this.featureSkillsAssessments = page.getByTestId('feature-title-3').last();

    // Labs section — redesign replaced the individual lab cards (lab-title-0/1)
    // with an eyebrow/title/subtitle + an "Explore Industry-Based Labs" section.
    this.labsHeading         = page.getByTestId('labs-title');
    this.labsSubtitle        = page.getByTestId('labs-subtitle');
    this.exploreLabsSection  = page.getByTestId('explore-labs-section');

    // Workforce CTA section
    this.workforceHeading    = page.getByText('Take your workforce to the next level');
    this.exploreTeamsBtn     = page.getByRole('link', { name: /explore teams experience/i });

    // Storm AI section — home now surfaces only the Storm AI Tutor block
    // (the "Storm AI Learning" hero heading lives on /learning-process).
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
    // Redesign removed the Cisco / Privacy Policy / Terms footer links.
    this.footerCareers         = page.locator('footer').getByRole('link', { name: /careers/i });
  }

  async open() {
    await this.navigate('/');
    await this.waitForPageLoad();
  }

  async clickRequestDemo() {
    await this.navRequestDemo.click();
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
