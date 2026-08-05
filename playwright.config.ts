import { defineConfig, devices } from "@playwright/test";

const remoteBaseUrl = process.env.PLAYWRIGHT_BASE_URL;
const baseURL = remoteBaseUrl ?? "http://127.0.0.1:3000";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  retries: 0,
  reporter: [["list"], ["html", { open: "never", outputFolder: "playwright-report" }]],
  use: {
    baseURL,
    trace: "retain-on-failure"
  },
  projects: [
    {
      name: "desktop-chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 1000 }
      }
    },
    {
      name: "mobile-chromium",
      use: {
        ...devices["iPhone 13"],
        browserName: "chromium"
      }
    },
    {
      name: "short-desktop-chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1366, height: 650 }
      }
    },
    {
      name: "tablet-chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1024, height: 768 }
      }
    },
    {
      name: "compact-tablet-chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 916, height: 994 }
      }
    },
    {
      name: "reduced-motion-chromium",
      use: {
        ...devices["Desktop Chrome"],
        contextOptions: { reducedMotion: "reduce" },
        viewport: { width: 1440, height: 1000 }
      }
    }
  ],
  webServer: remoteBaseUrl
    ? undefined
    : {
        command: "npm run dev -- --hostname 127.0.0.1 --port 3000",
        url: "http://127.0.0.1:3000/how-matter-control-works",
        reuseExistingServer: true,
        timeout: 120_000
      }
});
