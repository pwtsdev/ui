import { test as setup } from '@playwright/test';
import { Logger } from 'tslog';
import { TI_LOGIN_SESSION } from '../../playwright.config';

setup('the internet - login and save storage', async ({ page }) => {
  const log = new Logger();
  log.info('🚀 THE INTERNET SETUP FUNCTION');

  if (!process.env.TI_USER || !process.env.TI_PASSWORD) {
    throw new Error('The Internet username or password is not defined in the environment variables');
  }

  await page.goto('/login');
  await page.fill('#username', process.env.TI_USER);
  await page.fill('#password', process.env.TI_PASSWORD);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.context().storageState({ path: TI_LOGIN_SESSION });
});
