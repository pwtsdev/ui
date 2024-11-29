import { test as teardown } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { Logger } from 'tslog';
import { TI_LOGIN_SESSION } from '../../playwright.config';

teardown('the internet - cleanup login session', () => {
  const log = new Logger();
  log.info('🚀 THE INTERNET TEARDOWN FUNCTION');

  const sessionPath = path.resolve(__dirname, TI_LOGIN_SESSION);
  if (fs.existsSync(sessionPath)) {
    fs.unlinkSync(sessionPath);
    log.info('👍 TI_LOGIN_SESSION DELETED!');
  }
});
