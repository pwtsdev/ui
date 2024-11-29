import { expect, test } from '@playwright/test';
import { ADMIN_LOGIN_SESSION, USER_LOGIN_SESSION } from '../../../playwright.config';

test.describe.serial('Advanced examples', () => {
  const baseUrl = 'https://pwts.dev/examples/ui/session/books.php';

  test('load storage state - admin', { tag: '@session5' }, async ({ browser }) => {
    const context = await browser.newContext({ storageState: ADMIN_LOGIN_SESSION });
    const page = await context.newPage();

    await page.goto(baseUrl);

    await expect(page.getByText('Jesteś zalogowany jako admin')).toBeVisible();
  });

  test('load storage state - user', { tag: '@session5' }, async ({ browser }) => {
    const context = await browser.newContext({ storageState: USER_LOGIN_SESSION });
    const page = await context.newPage();

    await page.goto(baseUrl);

    await expect(page.getByText('Jesteś zalogowany jako użytkownik')).toBeVisible();
  });
});
