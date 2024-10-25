import { expect, test } from '@playwright/test';

test.describe('The Internet - invalid credentials login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveTitle(/Internet/);
  });

  test('login with invalid username', async ({ page }) => {
    // Arrange
    const username = 'tomsmith123';
    const password = 'SuperSecretPassword!';
    const expectedText = 'Your username is invalid!';

    // Act
    await page.locator('#username').fill(username);
    await page.locator('#password').fill(password);
    await page.getByText('Login').last().click();

    // Assert
    await expect(page.getByText(expectedText)).toBeVisible();
  });

  test('login with invalid password', async ({ page }) => {
    // Arrange
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!123';
    const expectedText = 'Your password is invalid!';

    // Act
    await page.locator('#username').fill(username);
    await page.locator('#password').fill(password);
    await page.getByText('Login').last().click();

    // Assert
    await expect(page.getByText(expectedText)).toBeVisible();
  });

  test('login with empty credentials', async ({ page }) => {
    // Arrange
    const username = '';
    const password = '';
    const expectedText = 'Your username is invalid!';

    // Act
    await page.locator('#username').fill(username);
    await page.locator('#password').fill(password);
    await page.getByText('Login').last().click();

    // Assert
    await expect(page.getByText(expectedText)).toBeVisible();
  });

  test('login with invalid username and password', async ({ page }) => {
    // Arrange
    const username = 'tomsmith123';
    const password = 'SuperSecretPassword!123';
    const expectedText = 'Your username is invalid!';

    // Act
    await page.locator('#username').fill(username);
    await page.locator('#password').fill(password);
    await page.getByText('Login').last().click();

    // Assert
    await expect(page.getByText(expectedText)).toBeVisible();
  });
});
