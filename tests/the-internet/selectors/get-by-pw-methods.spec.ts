import { expect, test } from '@playwright/test';

test.describe('The Internet - locators', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveTitle(/Internet/);
  });

  test('get by pw methods', async ({ page }) => {
    const usernameInput = page.getByLabel('Username');
    const passwordInput = page.getByLabel('Password');
    const loginButton = page.getByRole('button', { name: 'Login' });

    await usernameInput.fill('username');
    await passwordInput.fill('password');
    await loginButton.click();

    await expect(page.getByText('Your username is invalid!')).toBeVisible();
  });
});
