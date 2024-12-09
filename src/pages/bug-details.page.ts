import { Page } from '@playwright/test';
import { ConfirmationBoxComponent } from '../components/confirmation-box.component';
import { BasePage } from './base.page';

export class BugDetailsPage extends BasePage {
  protected readonly pageHeaderText = 'Issue #';

  // Components
  readonly confirmation: ConfirmationBoxComponent;

  constructor(page: Page) {
    super(page);
    this.confirmation = new ConfirmationBoxComponent(page);
  }

  // Locator

  // Action
  open(): Promise<void> {
    throw new Error('Can not open page via URL!');
  }

  async getDescription(): Promise<string> {
    return this.page.locator('p:below(h3:has-text("Description"))').first().innerText();
  }

  async getStepsToReproduce(): Promise<string> {
    return this.page.locator('ul:below(h3:has-text("Steps to Reproduce"))').first().innerText();
  }

  async addComment(comment: string): Promise<void> {
    await this.page.locator('#commentText').fill(comment);
    await this.page.getByRole('button', { name: 'Post Comment' }).click();
  }
}
