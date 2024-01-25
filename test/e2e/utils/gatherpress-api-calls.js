const { chromium } = require("playwright");

// Make the API call
const username = "testuser1"; // Replace with your WordPress username
const appPassword = process.env.WP_ADMIN_PASSWORD; // Replace with your application password
const base64Credentials = Buffer.from(`${username}:${appPassword}`).toString(
	"base64"
);

const getGatherpressPosts = async ({ request, title }) => {
	// // Launch a browser
	// const browser = await chromium.launch();

	// // Create a new context
	// const context = await browser.newContext();

	const url = "https://develop.gatherpress.org/wp-json/wp/v2/gp_venue"; // Replace with your WordPress API URL
	try {
		console.log("HERE!!!!!!!");
		const response = await request.get(url, {
			headers: {
				Authorization: `Basic ${base64Credentials}`,
			},
		});

		if (response.ok()) {
			console.log("HERE22!");
			const jsonData = await response.json();
			const venue = jsonData.filter((data) =>
				data.title.rendered.includes(title)
			);
			console.log(`venue##### ${JSON.stringify(response)}`);
			return venue;
		} else {
			console.error(
				`Failed to fetch posts: ${response.status()} - ${response.statusText()}`
			);
			return null;
		}
	} catch (error) {
		console.error("Error fetching WordPress posts:", error);
		return null;
	}
};

const deleteWordpressPost = async ({ request, postId }) => {
	const url = `https://develop.gatherpress.org/wp-json/wp/v2/gp_venue/${postId}`;
	const headers = {
		Authorization: `Basic ${base64Credentials}`,
	};

	try {
		console.log(`INSIDE DELETE: ${postId}`);
		const response = await request.delete(url, { headers });
		console.log(`DELETE RESP: ${response}`);
		if (response.ok()) {
			console.log(`Post with ID ${postId} deleted successfully.`);
			return true;
		} else {
			console.error(
				`Failed to delete post: ${response.status()} - ${response.statusText()}`
			);
			return false;
		}
	} catch (error) {
		console.error("###Error deleting WordPress post:", error);
		return false;
	}
};

module.exports = { getGatherpressPosts, deleteWordpressPost };
