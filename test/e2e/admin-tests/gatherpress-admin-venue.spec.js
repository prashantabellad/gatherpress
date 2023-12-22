const { test, request } = require('@playwright/test');
const { login } = require('../reusable-user-steps/common.js');
const { resourceUsage } = require('process');
const { response } = require('express');

test.describe('e2e test for venue through admin side', () => {
	test.beforeEach(async ({ page }) => {
		test.setTimeout(120000);
		await page.setViewportSize({ width: 1920, height: 720 });
		await page.waitForLoadState('networkidle');
	});

	test('The admin should be able to create a new post for Venue', async ({
		page,
	}) => {
		await login({ page, username: 'testuser1' });

		await page.getByRole('link', { name: 'Events', exact: true }).click();

		await page.getByRole('link', { name: 'Venues' }).click();
		await page.screenshot({ path: 'vanue-page.png' });

		await page
			.locator('#wpbody-content')
			.getByRole('link', { name: 'Add New' })
			.click();

		await page.getByLabel('Add title').isVisible();
		await page.getByLabel('Add title').fill('Test venue');
		await page.getByLabel('Add title').press('Tab');

		const venue = await page.$('.gp-venue__name');
		await venue.press('Backspace');

		await page
			.getByLabel('Empty block; start writing or')
			.fill('test venue information');

		await page.getByLabel('Toggle block inserter').click();
		await page.getByRole('option', { name: 'Paragraph' }).click();
		await page.screenshot({ path: 'new-venue.png' });
		await page.getByLabel('save draft').click()
		await page.goBack();
		

	});

	test.afterEach(async({request})=>{
		await request.post('/auth',{
			data:{
				'username': 'testuser1',
				'password':'zm86079&volj&!R5maIWEYX4'
			}
		});
		
		const apiurl = 'https://develop.gatherpress.org/wp-json/wp/v2/posts';

		const url= 'https://develop.gatherpress.org/venue/test-venue/';

			const response = await request.fetch(url,{
				method: 'get',
				params:{
					Title:'Test venue',
					
				}
			});
			console.log(response);
			
			
			const delresponse = await request.delete(url,{
				params:{
					Title:'Test venue',
					
				}
			});

			// console.log(delresponse.status());
		
		})
		
	})

