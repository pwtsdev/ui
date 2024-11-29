import { expect, test } from '@playwright/test';

test.describe('M08 - solution', () => {
  test('login with session storage', { tag: ['@M08', '@solution'] }, async ({ page }) => {
    await page.goto('/secure');
    await expect(page.getByText('Welcome to the Secure Area.')).toBeVisible();
  });
});
