import { Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class ReportPage extends BasePage {
  protected readonly url = 'report.html';
  protected readonly pageHeaderText = 'Report a Bug';

  // Locators
  readonly recentlyFixedBox = (): Locator => this.page.locator('div .recent-fixed');
}
