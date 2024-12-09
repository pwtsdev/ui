import { Locator, Page } from '@playwright/test';

export class ConfirmationBoxComponent {
  constructor(protected page: Page) {
    this.page = page;
  }

  // Locators
  readonly box = (): Locator => this.page.locator('div[aria-labelledby="swal2-title"]');

  // Actions
  async close(): Promise<void> {
    await this.box().getByRole('button', { name: 'OK' }).click();
  }
}
