import { test as base } from '@playwright/test';
import { ContactUsPage } from '../pages/contact-us.page';
import { HomePage } from '../pages/home.page';
import { ReportPage } from '../pages/report.page';

interface Pages {
  homePage: HomePage;
  reportPage: ReportPage;
  contactUsPage: ContactUsPage;
}

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  reportPage: async ({ page }, use) => {
    await use(new ReportPage(page));
  },
  contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  },
});

export { expect } from '@playwright/test';
