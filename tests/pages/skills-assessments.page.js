const BasePage = require('./base.page');

class SkillsAssessmentsPage extends BasePage {
  constructor(page) {
    super(page);

    // Page heading
    this.pageHeading = page.getByRole('heading', { name: 'Skills Assessments' });

    // Search & Filters
    this.searchInput       = page.getByTestId('search-input');
    this.filterChips       = page.getByTestId('filter-chips');
    this.filterChipAll     = page.getByTestId('filter-chip-all');
    this.filtersPanel      = page.getByTestId('filters-panel');
    this.filterContentType = page.getByTestId('filter-section-contentType');
    this.filterDifficulty  = page.getByTestId('filter-section-difficulty');
    this.filterInstructor  = page.getByTestId('filter-section-instructor');
    this.filterVendor      = page.getByTestId('filter-section-vendor');

    // Assessment cards
    this.courseGrid     = page.getByTestId('course-grid');
    this.firstCard      = page.getByTestId('course-card').first();
    this.firstCardTitle = page.getByTestId('course-card-title').first();

    // Pagination
    this.pagination      = page.getByTestId('pagination');
    this.paginationPage1 = page.getByTestId('pagination-page-1');
    this.paginationNext  = page.getByTestId('pagination-next');
    this.paginationLast  = page.getByTestId('pagination-last');

    // Bottom CTA
    this.ctaHeading = page.getByTestId('cta-heading');
    this.ctaButton  = page.getByTestId('cta-button');
  }

  async open() {
    await this.navigate('/courses/skills-assessments');
    await this.waitForPageLoad();
  }
}

module.exports = SkillsAssessmentsPage;
