import { expect, test } from '@playwright/test';

test.describe('The Internet - locators', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveTitle(/Internet/);
  });

  test('get by text', async ({ page }) => {
    const loginButton = page.getByText('Login').last();

    await expect(loginButton).toBeVisible();
  });
});
