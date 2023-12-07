const { test } = require("@playwright/test");
const { login } = require("../reusable-user-steps/common.js");

test.describe(" Validate test for admin side venue test", () => {
	test.beforeEach(async ({ page }) => {
		test.setTimeout(120000);
		await page.setViewportSize({ width: 1920, height: 720 });
		await page.waitForLoadState("networkidle");
	});

	
	test("The admin should create a new post for Venue",async({page})=>{

		await login({ page, username: 'testuser1' });

		await page.getByRole('link', { name: 'Events', exact: true }).click();

		await page.getByRole('link', { name: 'Venues' }).click();
		await page.screenshot({path: "vanue-page.png"});

		await page.locator('#wpbody-content').getByRole('link', { name: 'Add New' }).click();
		
		await page.getByLabel('Toggle block inserter').click();
		await page.screenshot({path:"new-venue.png"})
	})

});