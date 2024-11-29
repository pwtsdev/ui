import { Logger } from 'tslog';

function globalSetup(): void {
  const log = new Logger();
  log.info('🚀 GLOBAL SETUP');

  // const loginUrl = 'https://pwts.dev/examples/ui/session/index.php';

  // if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
  //   throw new Error('ADMIN_USERNAME is not defined in the environment variables');
  // }
  // if (!process.env.USER_USERNAME || !process.env.USER_PASSWORD) {
  //   throw new Error('ADMIN_USERNAME is not defined in the environment variables');
  // }

  // const browser = await chromium.launch();

  // // Save storage state for admin
  // const adminContext = await browser.newContext();
  // const adminPage = await adminContext.newPage();
  // await adminPage.goto(loginUrl);
  // await adminPage.fill('#username', process.env.ADMIN_USERNAME);
  // await adminPage.fill('#password', process.env.ADMIN_PASSWORD);
  // await adminPage.getByRole('button', { name: 'Zaloguj się' }).click();
  // await adminPage.context().storageState({ path: ADMIN_LOGIN_SESSION });

  // // Save storage state for user
  // const userContext = await browser.newContext();
  // const userPage = await userContext.newPage();
  // await userPage.goto(loginUrl);
  // await userPage.fill('#username', process.env.USER_USERNAME);
  // await userPage.fill('#password', process.env.USER_PASSWORD);
  // await userPage.getByRole('button', { name: 'Zaloguj się' }).click();
  // await userPage.context().storageState({ path: USER_LOGIN_SESSION });
}

export default globalSetup;
