import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export const ADMIN_LOGIN_SESSION = path.join(__dirname, 'tmp/admin-login-session.json');
export const USER_LOGIN_SESSION = path.join(__dirname, 'tmp/user-login-session.json');
export const TI_LOGIN_SESSION = path.join(__dirname, 'tmp/ti-login-session.json');

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  // GLOBAL SETUP TEARDOWN!
  globalSetup: require.resolve('./tests/setup/global/global.setup'),
  globalTeardown: require.resolve('./tests/setup/global/global.teardown'),

  use: {
    baseURL: 'https://the-internet.herokuapp.com',
    trace: 'on',
    video: 'off',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'session',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['login session - setup'],
    },
    {
      name: 'login session - setup',
      use: { ...devices['Desktop Chrome'] },
      testMatch: 'login-session.setup.ts',
      teardown: 'login session - teardown',
    },
    {
      name: 'login session - teardown',
      testMatch: 'login-session.teardown.ts',
    },
    {
      name: 'the-internet-session',
      use: { ...devices['Desktop Chrome'], storageState: TI_LOGIN_SESSION },
      dependencies: ['ti login session - setup'],
    },
    {
      name: 'ti login session - setup',
      use: { ...devices['Desktop Chrome'] },
      testMatch: 'ti-login-session.setup.ts',
      teardown: 'ti login session - teardown',
    },
    {
      name: 'ti login session - teardown',
      testMatch: 'ti-login-session.teardown.ts',
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'iphone15',
    //   use: { ...devices['iPhone 15'] },
    // },
  ],
});
