const BasePage = require('./base.page');

// Skill Assessments listing. Moved in the 2026 redesign from
// /courses/skills-assessments to /skill-assessments (now under the Browse menu).
// The dedicated filters panel (content-type/difficulty/instructor/vendor) was
// replaced by a single chip strip; cards/grid test IDs were renamed.
class SkillsAssessmentsPage extends BasePage {
  constructor(page) {
    super(page);

    // Page heading
    this.pageHeading = page.getByRole('heading', { name: 'Skills Assessments' });

    // Search (the chip strip / filters panel were removed in the redesign)
    this.searchBar    = page.getByTestId('search-bar');
    this.searchInput  = page.getByTestId('search-input');

    // Assessment cards (card test IDs are dynamic: skill-assessment-card-<uuid>)
    this.grid         = page.getByTestId('skill-assessment-grid').last();
    this.firstCard    = page.locator('[data-testid^="skill-assessment-card-"]').first();
    this.firstCardTitle = this.firstCard.getByRole('heading');

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
    await this.navigate('/skill-assessments');
    await this.waitForPageLoad();
  }
}

module.exports = SkillsAssessmentsPage;
