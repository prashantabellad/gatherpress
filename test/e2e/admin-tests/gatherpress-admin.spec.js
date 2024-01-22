const { test } = require('@playwright/test');
const { login } = require('../reusable-user-steps/common.js');

test.describe('As admin login into gatherPress', () => {
	test.beforeEach(async ({ page }) => {
		test.setTimeout(120000);
		await page.setViewportSize({ width: 1920, height: 720 });
		await page.waitForLoadState('networkidle');
	});

	test('The Event menu item should be preloaded after clicking Add New button', async ({
		page,
	}) => {
		await login({ page, username: 'testuser1' });

		await page.getByRole('link', { name: 'Events', exact: true }).click();
		await page.screenshot({ path: 'event-page.png' });

		await page
			.locator('#wpbody-content')
			.getByRole('link', { name: 'Add New' })
			.click();

		await page.getByLabel('Document Overview').click();

		await page.getByLabel('List View').locator('div').nth(1).isVisible();
		await page.getByLabel('Add title').isVisible();
		await page.getByLabel('Add title').fill('test event');
		await page.getByLabel('Venue Selector').selectOption('33:online-event');

		await page.screenshot({ path: 'add-new-event.png' });

		await page
			.getByRole('button', { name: 'Publish', exact: true })
			.click();
		await page
			.getByLabel('Editor publish')
			.getByRole('button', { name: 'Publish', exact: true })
			.click();

	});
});
