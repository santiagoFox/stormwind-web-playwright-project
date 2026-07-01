const BasePage = require('./base.page');

class LabsPage extends BasePage {
  constructor(page) {
    super(page);

    // Navigation — 2026 redesign: Labs/For Teams/For Individuals are no longer
    // top-level nav items; the bar is Solutions / Our Learning Process / Browse /
    // Extras. The mobile menu button is display:none on desktop (assert attached).
    this.desktopNav            = page.getByTestId('desktop-nav');
    this.navSolutions          = page.getByTestId('desktop-nav-solutions');
    this.navLearningProcess    = page.getByTestId('desktop-nav-our-learning-process');
    this.navBrowse             = page.getByTestId('desktop-nav-browse');
    this.navExtras             = page.getByTestId('desktop-nav-extras');
    this.mobileMenuButton      = page.getByTestId('mobile-menu-button');

    // Intro section
    this.introSection          = page.getByTestId('labs-intro');
    this.introEyebrow          = page.getByTestId('labs-intro-eyebrow');
    this.introTitle            = page.getByTestId('labs-intro-title');
    this.introSubtitle         = page.getByTestId('labs-intro-subtitle');

    // Carousel container (renders empty / zero-size when no lab slides are
    // present in the environment — assert presence rather than visibility).
    this.carousel              = page.getByTestId('carousel');

    // Bottom CTA section
    this.ctaSection            = page.getByTestId('labs-cta');
    this.ctaTitle              = page.getByTestId('labs-cta-title');
    this.ctaDescription        = page.getByTestId('labs-cta-description');
    this.ctaButton             = page.getByTestId('labs-cta-button');
  }

  async open() {
    await this.navigate('/labs');
    await this.waitForPageLoad();
  }
}

module.exports = LabsPage;
