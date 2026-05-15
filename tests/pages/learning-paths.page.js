const BasePage = require('./base.page');

class LearningPathsPage extends BasePage {
  constructor(page) {
    super(page);

    // Page heading
    this.pageHeading = page.getByRole('heading', { name: 'Learning Paths' });
    this.breadcrumb  = page.getByTestId('breadcrumb-text-1');

    // Search & Filters
    this.searchInput      = page.getByTestId('search-input');
    this.topicChips       = page.getByTestId('learning-path-topic-chips');
    this.filterChipAll    = page.getByTestId('filter-chip-all');
    this.filtersPanel     = page.getByTestId('filters-panel');
    this.filtersTrigger   = page.getByTestId('filters-trigger');
    this.filterContentType = page.getByTestId('filter-section-contentType');
    this.filterPathSize   = page.getByTestId('filter-section-pathSize');
    this.filterInstructor = page.getByTestId('filter-section-instructor');
    this.filterVendor     = page.getByTestId('filter-section-vendor');

    // Learning path cards
    this.learningPathGrid = page.getByTestId('learning-path-grid');
    this.firstCard        = page.getByTestId('learning-path-card').first();
    this.firstCardTitle   = page.getByTestId('learning-path-card-title').first();

    // Pagination
    this.pagination     = page.getByTestId('pagination');
    this.paginationPage1 = page.getByTestId('pagination-page-1');
    this.paginationNext  = page.getByTestId('pagination-next');
    this.paginationLast  = page.getByTestId('pagination-last');

    // Bottom CTA
    this.ctaHeading = page.getByTestId('cta-heading');
    this.ctaButton  = page.getByTestId('cta-button');
  }

  async open() {
    await this.navigate('/learning-paths');
    await this.waitForPageLoad();
  }
}

module.exports = LearningPathsPage;
