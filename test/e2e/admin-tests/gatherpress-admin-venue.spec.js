const { test } = require("@playwright/test");
const { login } = require("../reusable-user-steps/common.js");
const { getGatherpressPosts } = require("../utils/gatherpress-api-calls.js");

test.describe("e2e test for venue through admin side", () => {
	test.beforeEach(async ({ page }) => {
		test.setTimeout(120000);
		await page.setViewportSize({ width: 1920, height: 720 });
		await page.waitForLoadState("networkidle");
	});

	test("The admin should be able to create a new post for Venue", async ({
		page,
	}) => {
		await login({ page, username: "testuser1" });

		await page.getByRole("link", { name: "Events", exact: true }).click();

		await page.getByRole("link", { name: "Venues" }).click();
		await page.screenshot({ path: "vanue-page.png" });

		await page
			.locator("#wpbody-content")
			.getByRole("link", { name: "Add New" })
			.click();

		await page.getByLabel("Add title").isVisible();
		await page.getByLabel("Add title").fill("Test venue - TODAY");
		await page.getByLabel("Add title").press("Tab");

		const venue = await page.$(".gp-venue__name");
		await venue.press("Backspace");

		await page
			.getByLabel("Empty block; start writing or")
			.fill("test venue information - TODAY");

		await page.getByLabel("Toggle block inserter").click();
		await page.getByRole("option", { name: "Paragraph" }).click();
		await page.screenshot({ path: "new-venue.png" });

		await page.getByLabel("save draft").click();
		await page.goBack();
	});

	test.afterEach(async ({ request }) => {
		const posts = await getGatherpressPosts({
			request,
			title: "Test venue - TODAY",
		});
		const { id } = posts[0]
		console.log(`ID is ${JSON.stringify(posts)}`)
	});
});
