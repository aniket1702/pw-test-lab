import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,

  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  use: {
    browserName: 'chromium',
    headless: false,

  
    connectOptions: undefined,

    // Force local browser launch only
    launchOptions: {
      channel: 'chrome' // or remove if you want bundled chromium
    },

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  // 🚨 ALSO ADD THIS (VERY IMPORTANT)
  workers: 1,

  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        connectOptions: undefined // DOUBLE override to block selenium
      }
    }
  ],

  outputDir: 'test-results'
});
