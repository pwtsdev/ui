import { expect, test } from '@playwright/test';

test.describe('The Internet - login page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveTitle(/Internet/);
  });

  test('login with valid credentials', async ({ page }) => {
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.getByText('Login').last().click();

    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
  });
});
