import { Locator, Page } from '@playwright/test';

export class HomePage {
  private readonly page: Page;
  private readonly url = 'index.html';
  private readonly pageHeaderText = 'Reported Bugs';

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  readonly pageHeader = (): Locator => this.page.getByRole('heading', { name: this.pageHeaderText });

  // Actions
  async open(): Promise<void> {
    await this.page.goto(this.url);
  }

  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }
}
