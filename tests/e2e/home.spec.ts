import { test, expect } from '@playwright/test';

test('homepage has title and heading', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/UX Dashboard/);
  await expect(page.getByRole('heading', { name: 'UX Dashboard' })).toBeVisible();
});
