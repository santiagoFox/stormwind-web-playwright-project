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

    // Courses Catalog section
    this.catalogPreheading  = page.getByTestId('hero-preheading').last();
    this.catalogHeading     = page.getByTestId('hero-heading').last();
    this.categoryIT         = page.getByTestId('category-card-0').last();
    this.categoryDevOps     = page.getByTestId('category-card-1').last();
    this.categoryFullStack  = page.getByTestId('category-card-2').last();
    this.categoryDataSci    = page.getByTestId('category-card-3').last();
    this.categoryProjMgmt   = page.getByTestId('category-card-4').last();
    this.categoryEndUser    = page.getByTestId('category-card-5').last();
    this.categoryBizSkills  = page.getByTestId('category-card-6').last();
    this.categoryCompliance = page.getByTestId('category-card-7').last();
    this.exploreLibraryBtn  = page.getByTestId('explore-courses-button');

    // Storm AI Learning section
    this.stormAIHeading     = page.getByTestId('stormai-learning-hero-title');
    this.tryItNowEyebrow    = page.getByTestId('stormai-learning-try-cta-eyebrow').first();
    this.stormAICtaTitle    = page.getByTestId('stormai-learning-try-cta-title').first();
    this.stormAICtaBtn      = page.getByTestId('stormai-learning-try-cta-button').first();

    // Storm AI Features section
    this.stormAIFeaturesTitle    = page.getByTestId('stormai-learning-features-title');
    this.stormAIFeatureStudy     = page.getByTestId('stormai-learning-feature-tab-0');
    this.stormAIFeatureExam      = page.getByTestId('stormai-learning-feature-tab-1');
    this.stormAIFeatureTopic     = page.getByTestId('stormai-learning-feature-tab-2');
    this.stormAIFeatureFast      = page.getByTestId('stormai-learning-feature-tab-3');
    this.stormAIFeatureExaminer  = page.getByTestId('stormai-learning-feature-tab-4');
    this.stormAIFeatureFlash     = page.getByTestId('stormai-learning-feature-tab-5');
    this.stormAIFeatureHighlight = page.getByTestId('stormai-learning-feature-tab-6');

    // Course Library section
    this.courseCatalogTitle = page.getByTestId('course-catalog-title');
    this.filterChipAI       = page.getByTestId('filter-chip-artificial-intelligence-(ai)');
    this.filterChipDevOps   = page.getByTestId('filter-chip-devops');
    this.courseCard         = page.getByTestId('course-card').first();

    // Bottom CTA
    this.ctaHeading = page.getByTestId('cta-heading');
    this.ctaButton  = page.getByTestId('cta-button');
  }

  async open() {
    await this.navigate('/learning-process');
    await this.waitForPageLoad();
  }
}

module.exports = LearningProcessPage;
