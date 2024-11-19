import { expect, test } from '@playwright/test';

test.describe('Advanced examples', () => {
  test('upload', { tag: '@pwadvanced' }, async ({ page }) => {
    await page.goto('/upload');

    // 1. Wait for file chooser window
    const uploadPromise = page.waitForEvent('filechooser');
    await page.locator('#file-upload').click();

    // 2. After the file picker dialog is opened, uploadPromise resolves with a FileChooser object.
    const upload = await uploadPromise;
    await upload.setFiles('uploads/pwts.txt');
    await page.locator('#file-submit').click();

    await expect(page.getByText('File Uploaded!')).toBeVisible();
  });

  test('download', { tag: '@pwadvanced' }, async ({ page }) => {
    await page.goto('/download');

    // 1. Waits for a download event, which occurs when the user clicks a link to initiate a file download.
    const downloadPromise = page.waitForEvent('download');
    await expect(page.getByRole('link', { name: 'pwts.txt' })).toBeVisible();
    await page.getByRole('link', { name: 'pwts.txt' }).click();

    // 2. Once the download starts, downloadPromise resolves and returns an object representing the downloaded file.
    const download = await downloadPromise;
    await download.saveAs('tmp/download-pwts.txt');
  });
});
