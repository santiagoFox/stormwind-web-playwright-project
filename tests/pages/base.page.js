class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(path = '/') {
    await this.page.goto(path);
  }

  async getTitle() {
    return await this.page.title();
  }

  async scrollToElement(locator) {
    await locator.scrollIntoViewIfNeeded();
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('load');
  }
}

module.exports = BasePage;
