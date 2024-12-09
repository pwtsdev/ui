import { Locator, Page } from '@playwright/test';
import { RecentlyFixedBugsComponent } from '../components/recently-fixed-bugs.component';
import { BugModel } from '../models/bug.mode';
import { BasePage } from './base.page';

export class ReportPage extends BasePage {
  protected readonly url = 'report.html';
  protected readonly pageHeaderText = 'Report a Bug';

  // Components
  readonly recentlyFixedBugsComponent: RecentlyFixedBugsComponent;

  constructor(page: Page) {
    super(page);
    this.recentlyFixedBugsComponent = new RecentlyFixedBugsComponent(page);
  }

  // Locators
  readonly bugForm = (): Locator => this.page.locator('#bugForm');
  readonly confirmationBox = (): Locator => this.page.locator('div[aria-labelledby="swal2-title"]');

  // Action
  async submitNewBug(bug: BugModel): Promise<void> {
    await this.page.locator('#title').fill(bug.title);
    await this.page.locator('#description').fill(bug.description);
    await this.page.locator('#steps').fill(bug.steps);
    await this.page.getByRole('button', { name: 'Submit Bug' }).click();
  }

  async closeConformationBox(): Promise<void> {
    await this.confirmationBox().getByRole('button', { name: 'OK' }).click();
  }
}
