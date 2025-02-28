exports.handler = async () => {
    const fetch = require("node-fetch");
  
    const NETLIFY_ACCESS_TOKEN = process.env.NETLIFY_ACCESS_TOKEN;
    const FORM_ID = "64e06fae1e5bcd000805def1"; // Get this from the Netlify admin panel
  
    const response = await fetch(
      `https://api.netlify.com/api/v1/forms/${FORM_ID}/submissions`,
      {
        headers: {
          Authorization: `Bearer ${NETLIFY_ACCESS_TOKEN}`,
        },
      }
    );
  
    if (!response.ok) {
      return { statusCode: 500, body: "Error fetching submissions" };
    }
  
    const submissions = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(submissions),
    };
  };
  