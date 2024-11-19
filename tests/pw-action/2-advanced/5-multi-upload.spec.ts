import { expect, test } from '@playwright/test';

test.describe('Advanced examples', () => {
  test('multi upload', { tag: '@pwadvanced' }, async ({ page }) => {
    await page.goto('https://pwts.dev/examples/ui/multiupload.html');

    const uploadPromise = page.waitForEvent('filechooser');
    await page.locator('#fileInput').click();

    const upload = await uploadPromise;
    await upload.setFiles(['uploads/pwts.txt', 'uploads/pwts2.txt']);

    await expect(page.getByText('pwts.txt')).toBeVisible();
    await expect(page.getByText('pwts2.txt')).toBeVisible();

    await page.locator('#clearAllButton').click();
    await expect(page.getByText('pwts.txt')).toBeHidden();
    await expect(page.getByText('pwts2.txt')).toBeHidden();
  });
});
