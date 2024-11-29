// BUG: https://github.com/microsoft/playwright/issues/23875

import { Logger } from 'tslog';

function globalTeardown(): void {
  const log = new Logger();
  log.info('🚀 GLOBAL TEARDOWN');
  log.info('🚀 GLOBAL TEARDOWN');

  // // Clean up the storage state files
  // const adminSessionPath = path.resolve(__dirname, ADMIN_LOGIN_SESSION);
  // const userSessionPath = path.resolve(__dirname, USER_LOGIN_SESSION);

  // if (fs.existsSync(adminSessionPath)) {
  //   fs.unlinkSync(adminSessionPath);
  //   log.info('👍 ADMIN_LOGIN_SESSION DELETED!');
  // }
  // if (fs.existsSync(userSessionPath)) {
  //   fs.unlinkSync(userSessionPath);
  //   log.info('👍 USER_LOGIN_SESSION DELETED!');
  //   log.info('👍 USER_LOGIN_SESSION DELETED!');
  // }
}

export default globalTeardown;
