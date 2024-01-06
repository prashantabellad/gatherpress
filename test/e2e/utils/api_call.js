const { chromium } = require('playwright');
const axios = require('axios');

const deleteWordPressPost = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const postIdToDelete = 1564; 
  const wordpressApiUrl = 'https://develop.gatherpress.org/wp-json/wp/v2/gp_venue/';
  const username = 'testuser1'; 
  const password = process.env.WP_ADMIN_PASSWORD; 

  
  const credentials = Buffer.from(`${username}:${password}`).toString('base64');
  const headers = {
    'Authorization': `Basic ${credentials}`,
    'Content-Type': 'application/json',
  };

  try {
   
    await axios.delete(`${wordpressApiUrl}${postIdToDelete}`, { headers });

    console.log('Post deleted successfully.');
  } catch (error) {
    console.error('Error deleting post:', error.response ? error.response.data : error.message);
  } finally {
    await browser.close();
  }
};


module.exports=deleteWordPressPost()
