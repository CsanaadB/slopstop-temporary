import { test, expect } from '@playwright/test';

test('playwright launches and navigates', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});
