import { expect, test } from '@playwright/test';

test.describe('The Internet - locators', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveTitle(/Internet/);
  });

  test('find by xpath', async ({ page }) => {
    const usernameInput = page.locator('//form//input[@name="username"]');
    const passwordInput = page.locator('//form//input[@name="password"]');

    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
  });
});
