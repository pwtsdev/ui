import { expect, test } from '@playwright/test';

test.describe('M06 - solution', () => {
  const testData = [
    {
      title: 'Invalid status code when sending POST request',
      description: 'When I send POST request to /books I should see 200 OK but instead getting 404!',
      phoneNumber: '100200300',
      validationMessage: 'Form submitted successfully!',
    },
    {
      title: '',
      description: 'When I send POST request to /books I should see 200 OK but instead getting 404!',
      phoneNumber: '100200300',
      validationMessage: 'Title is required!',
    },
    {
      title: 'title',
      description: '',
      phoneNumber: '100200300',
      validationMessage: 'Description is required!',
    },
    {
      title: 'title',
      description: 'description',
      phoneNumber: '',
      validationMessage: 'Phone number is required!',
    },
  ];

  testData.forEach(({ title, description, phoneNumber, validationMessage }) => {
    test(
      `Submit an issue - form validation: title: ${title} + description: ${description} + phoneNumber: ${phoneNumber}`,
      { tag: ['@M07', '@solution'] },
      async ({ page }) => {
        await page.goto('https://pwts.dev/examples/ui/M07/index.html');

        // cookies
        const acceptCookiesButton = page.getByRole('button', { name: 'Accept' });
        await page.addLocatorHandler(acceptCookiesButton, async () => {
          await acceptCookiesButton.click();
          await expect(acceptCookiesButton).toBeHidden();
        });

        // form
        const iframe = page.frameLocator('iframe');
        await iframe.locator('#title').pressSequentially(title, { delay: 50 });
        await iframe.locator('#description').pressSequentially(description, { delay: 50 });

        // upload
        const uploadPromise = page.waitForEvent('filechooser');
        await iframe.locator('#images').click();

        const upload = await uploadPromise;
        await upload.setFiles(['uploads/pwts.txt', 'uploads/pwts2.txt']);

        await expect(iframe.getByText('pwts.txt')).toBeVisible();
        await expect(iframe.getByText('pwts2.txt')).toBeVisible();
        await expect(iframe.getByText('Uploaded files: 2')).toBeVisible();

        // dialog
        page.once('dialog', async (dialog) => {
          await dialog.accept(phoneNumber);
        });

        // send form
        await iframe.getByRole('button', { name: 'Submit' }).click();

        // screenshot
        function getRandomInt(max: number): number {
          return Math.floor(Math.random() * max);
        }

        const randomNumber = getRandomInt(100000).toString();
        await iframe.locator('#alerts-container').screenshot({ path: 'tmp/screenshot' + randomNumber + '.png' });
        await expect(iframe.getByText(validationMessage)).toBeVisible();
      },
    );
  });
});
