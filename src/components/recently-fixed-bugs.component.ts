import { Locator } from '@playwright/test';
import { BaseComponent } from './base.component';

export class RecentlyFixedBugsComponent extends BaseComponent {
  // Locators
  readonly recentlyFixedBox = (): Locator => this.page.locator('div .recent-fixed');

  // Actions
  async getRecentlyFixedBugs(): Promise<string[]> {
    return await this.recentlyFixedBox().locator('li').allInnerTexts();
  }
}
