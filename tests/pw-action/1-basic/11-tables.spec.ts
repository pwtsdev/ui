import { expect, Locator, test } from '@playwright/test';
import { UserTableModel } from '../../../src/models/user.table.model';

test.describe('Basic examples', () => {
  const people: UserTableModel[] = [];

  test('table - html to object', { tag: '@pwbasic' }, async ({ page }) => {
    await page.goto('/tables');

    const rows = await page.locator('table[id=table1] tbody tr').all();
    for (const row of rows) {
      const cells = await row.locator('td').all();

      const lastName: string = await cells[0].innerText();
      const firstName: string = await cells[1].innerText();
      const email: string = await cells[2].innerText();
      const due: string = await cells[3].innerText();
      const website: string = await cells[4].innerText();
      const actions: Locator = cells[5];

      const userTableModel: UserTableModel = {
        lastName: lastName,
        firstName: firstName,
        email: email,
        due: due,
        website: website,
        actions: actions,
      };

      people.push(userTableModel);
    }

    const tim = people.find((p) => p.firstName === 'Tim');
    expect(tim).toBeDefined();
    expect(tim?.due).toBe('$50.00');

    await tim?.actions.getByText('edit').click();
    await expect(page).toHaveURL(/tables#edit/);
  });

  test('table - locators', { tag: '@pwbasic' }, async ({ page }) => {
    await page.goto('/tables');

    const table = page.locator('table[id=table1]');
    const timConway = table.getByRole('row', { name: 'tconway@earthlink.net	' });
    await timConway.getByRole('link', { name: 'edit' }).click();
    await expect(page).toHaveURL(/tables#edit/);
  });
});
