import { expect, test } from '@playwright/test';

test.describe.serial('Advanced examples', () => {
  test('save storage state - admin', { tag: '@session' }, async ({ page }) => {
    await page.goto('https://pwts.dev/examples/ui/session/index.php');

    await page.fill('#username', 'admin');
    await page.fill('#password', 'admin123');
    await page.getByRole('button', { name: 'Zaloguj się' }).click();

    await page.context().storageState({ path: 'tmp/admin-login-session.json' });

    await expect(page.getByText('Jesteś zalogowany jako admin')).toBeVisible();
  });

  test('load storage state - admin', { tag: '@session' }, async ({ browser }) => {
    const context = await browser.newContext({ storageState: 'tmp/admin-login-session.json' });
    const page = await context.newPage();

    await page.goto('https://pwts.dev/examples/ui/session/books.php');

    await expect(page.getByText('Jesteś zalogowany jako admin')).toBeVisible();
  });
});
