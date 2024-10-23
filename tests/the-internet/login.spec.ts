import { expect, test } from '@playwright/test';

test.describe('The Internet - login page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveTitle(/Internet/);
  });

  test('login with valid credentials', async ({ page }) => {
    // Arrange
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';
    const expectedText = 'You logged into a secure area!';

    // Act
    await page.locator('#username').fill(username);
    await page.locator('#password').fill(password);
    await page.getByText('Login').last().click();

    // Assert
    await expect(page.getByText(expectedText)).toBeVisible();
  });

  test('login with valid credentials - record', async ({ page }) => {
    // Arrange
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';
    const expectedText = 'Welcome to the Secure Area.';

    // Act
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: ' Login' }).click();

    // Assert
    await expect(page.getByRole('heading', { name: expectedText })).toBeVisible();
  });
});
