const { test, expect } = require('@playwright/test');
const { login } = require('../reusable-user-steps/common.js');


test.describe('e2e test for venue through admin side', () => {
	test.beforeEach(async ({ page }) => {
		test.setTimeout(120000);
		await page.setViewportSize({ width: 1920, height: 720 });
		await page.waitForLoadState('networkidle');

		await login({ page, username: 'testuser1' });
		
		await page
		.getByRole('heading', { name: 'Dashboard', level: 1 })
		.isVisible();

	});

	test('The admin user should redirected to the venue page', async({page})=>{

		await page.getByRole('link', { name: 'Events', exact: true }).click();

		await page.getByRole('link', { name: 'Venues' }).click();
		await page.screenshot({ path: 'vanue-page.png' });

	})

	test('The admin should be able to create a new post for Venue', async ({
		page,
	}) => {
		
		await page.getByRole('link', { name: 'Events', exact: true }).click();

		await page.getByRole('link', { name: 'Venues' }).click();
		
		await page
			.locator('#wpbody-content')
			.getByRole('link', { name: 'Add New' })
			.click();

		const venue_title = await page.getByLabel('Add title').fill('Test venue');
		await page.getByLabel('Add title').press('Tab');

		const venue = await page.$('.gp-venue__name');
		await venue.press('Backspace');

		await page
			.getByLabel('Empty block; start writing or')
			.fill('test venue information');

		await page.getByLabel('Toggle block inserter').click();

		await page.getByRole('option', { name: 'Paragraph' }).click();

		await page.getByRole('button', { name: 'Publish', exact: true }).click();
		
		await page
			.getByLabel('Editor publish')
			.getByRole('button', { name: 'Publish', exact: true })
			.click();

		await page.getByText({venue_title},'is now live.').isVisible({timeout:60000});

	});
});
