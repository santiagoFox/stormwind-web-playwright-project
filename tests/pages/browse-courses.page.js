const BasePage = require('./base.page');

class BrowseCoursesPage extends BasePage {
  constructor(page) {
    super(page);

    // Hero
    this.heroPreheading = page.getByTestId('hero-preheading');
    this.heroHeading    = page.getByTestId('hero-heading');

    // Topic grid
    this.topicGridSection = page.getByTestId('topic-grid-section');
    this.topicAI          = page.getByTestId('topic-card-title').filter({ hasText: /Artificial Intelligence/i });
    this.topicBizSkills   = page.getByTestId('topic-card-title').filter({ hasText: 'Business Skills' });
    this.topicCloud       = page.getByTestId('topic-card-title').filter({ hasText: 'Cloud' });
    this.topicCompliance  = page.getByTestId('topic-card-title').filter({ hasText: 'Compliance' });
    this.topicCyber       = page.getByTestId('topic-card-title').filter({ hasText: 'Cybersecurity' });
    this.topicDataSci     = page.getByTestId('topic-card-title').filter({ hasText: 'Data Science' });
    this.topicDesktopApps = page.getByTestId('topic-card-title').filter({ hasText: 'Desktop Applications' });
    this.topicDevelopment = page.getByTestId('topic-card-title').filter({ hasText: 'Development' });
    this.topicDevOps      = page.getByTestId('topic-card-title').filter({ hasText: 'DevOps' });
    this.topicIT          = page.getByTestId('topic-card-title').filter({ hasText: /Information Technology/i });
    this.topicProjMgmt    = page.getByTestId('topic-card-title').filter({ hasText: 'Project Management' });
    this.topicSecurity    = page.getByTestId('topic-card-title').filter({ hasText: 'Security Awareness' });

    // Bottom CTA
    this.ctaHeading = page.getByTestId('cta-heading');
    this.ctaButton  = page.getByTestId('cta-button');
  }

  async open() {
    await this.navigate('/courses');
    await this.waitForPageLoad();
  }
}

module.exports = BrowseCoursesPage;
