import { Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
  protected readonly url = 'index.html';
  protected readonly pageHeaderText = 'Reported Bugs';

  // Locators
  readonly statBox = (): Locator => this.page.locator('div .stats-box');
  readonly recentlyFixedBox = (): Locator => this.page.locator('div .recent-fixed');

  // Action
  async getBugTitles(): Promise<string[]> {
    return await this.page.locator('main li a').allInnerTexts();
  }
}
