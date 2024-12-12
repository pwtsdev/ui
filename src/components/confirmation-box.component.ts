import { Locator } from '@playwright/test';
import { BaseComponent } from './base.component';

export class ConfirmationBoxComponent extends BaseComponent {
  // Locators
  readonly box = (): Locator => this.page.locator('div[aria-labelledby="swal2-title"]');

  // Actions
  async close(): Promise<void> {
    await this.box().getByRole('button', { name: 'OK' }).click();
  }
}
