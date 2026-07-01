const BasePage = require('./base.page');

class LearningProcessPage extends BasePage {
  constructor(page) {
    super(page);

    // Hero - Our Learning Process
    this.heroPreheading  = page.getByTestId('hero-preheading').first();
    this.heroHeading     = page.getByTestId('hero-heading').first();

    // Feature cards
    this.featureCourses    = page.getByTestId('feature-title-0').last();
    this.featureMicroLearn = page.getByTestId('feature-title-1').last();
    this.featureCertPrep   = page.getByTestId('feature-title-2').last();

    // Courses Catalog section header
    this.catalogPreheading  = page.getByTestId('hero-preheading').last();
    this.catalogHeading     = page.getByTestId('hero-heading').last();

    // Storm AI Learning section. Redesign (2026) removed the standalone
    // "Storm AI Learning" hero title and the multi-tab features section; the
    // section is now the "Experience Storm AI Learning in action" CTA block.
    this.tryItNowEyebrow    = page.getByTestId('stormai-learning-try-cta-eyebrow').first();
    this.stormAICtaTitle    = page.getByTestId('stormai-learning-try-cta-title').first();
    this.stormAICtaBtn      = page.getByTestId('stormai-learning-try-cta-button').first();

    // Course Library section (the filter-chip catalog that replaced the old
    // category-card grid).
    this.courseCatalogTitle = page.getByTestId('course-catalog-title');
    this.filterChipAI       = page.getByTestId('filter-chip-artificial-intelligence-(ai)');
    this.filterChipDevOps   = page.getByTestId('filter-chip-devops');
    this.filterChipIT       = page.getByTestId('filter-chip-information-technology-(it)');
    this.filterChipDataSci  = page.getByTestId('filter-chip-data-science');
    this.filterChipProjMgmt = page.getByTestId('filter-chip-project-management');
    this.filterChipCompliance = page.getByTestId('filter-chip-compliance');
    this.courseCard         = page.getByTestId('course-card').first();
    this.exploreLibraryBtn  = page.getByRole('link', { name: /explore the full library/i }).first();

    // Bottom CTA
    this.ctaHeading = page.getByTestId('cta-heading').last();
    this.ctaButton  = page.getByTestId('cta-button').last();
  }

  async open() {
    await this.navigate('/learning-process');
    await this.waitForPageLoad();
  }
}

module.exports = LearningProcessPage;
