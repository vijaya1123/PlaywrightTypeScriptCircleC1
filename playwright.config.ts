import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 30 * 1000,   //30000 ms(30 secs)
  testDir: './tests',
  fullyParallel: true,
  //retries: process.env.CI ? 2 : 0,
  retries:1,
  //workers: process.env.CI ? 1 : undefined,
  workers: 1,
 reporter: [
    ['html'],
     ['allure-playwright', {
      outputFolder: 'allure-results',}], // allure-resultsDir configuration=================================playwright-config.ts===3 step
	 ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'test-results/results.json' }],
    //['dot'],
    ['list']
  ],



  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true,
    viewport: { width: 1280, height: 720 }, // Set default viewport size for consistency
    ignoreHTTPSErrors: true, // Ignore SSL errors if necessary
    permissions: ['geolocation'], // Set necessary permissions for geolocation-based tests
  },

  //grep: /@master/,

  projects: [
   {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] ,
      headless: true,
				viewport: { width: 1720, height: 850 },
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`
      }

    },
/*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] ,
        viewport: { width: 1720, height: 850 },
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`,
				launchOptions: {
					slowMo: 200
				}
      },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'],
        viewport: { width: 1720, height: 850 },
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`,
				launchOptions: {
					slowMo: 100
				}
      },
    },
    

    {
			name: `Edge`,
			use: {
				browserName: `chromium`,
				channel: `msedge`,
				//headless: false,
				viewport: { width: 1720, height: 850 },
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`,
				launchOptions: {
					slowMo: 100
				}
			}
		},

    {
			name: `Android`,
			use: {
				...devices[`Pixel 5`],
				browserName: `chromium`,
				//headless: false,
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`,
					launchOptions: {
					slowMo: 200
				}
			}
		},
		{
			name: `iOS`,
			use: {
				...devices[`iPhone 12`],
				browserName: `chromium`,
				//headless: false,
				screenshot: `only-on-failure`,
				video: `retain-on-failure`,
				trace: `retain-on-failure`,
					launchOptions: {
					slowMo: 200
				}
			}
		},
		*/

  ],


});
