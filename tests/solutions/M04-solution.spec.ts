import { expect, test } from '@playwright/test';

test.describe('M04 - solution', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://testpages.eviltester.com/styled/validation/input-validation.html ');
    await expect(page).toHaveTitle(/Input Validation/);
  });

  test('login with valid credentials', { tag: ['@M04', '@solution'] }, async ({ page }) => {
    // Arrange
    const firstName = 'Captain';
    const lastName = 'Jack Sparrow';
    const age = '20';
    const notes = 'Aye! Aye! Captain!';

    // Act
    await page.getByLabel('First name:').fill(firstName);
    await page.getByLabel('Last name:').fill(lastName);
    await page.getByLabel('Age:').fill(age);
    await page.getByLabel('Notes:').fill(notes);
    await page.getByRole('button', { name: 'Submit' }).click();

    // Assert
    await expect(page.getByRole('listitem')).toContainText([firstName, lastName, age, notes]);
  });
});
