
exports.handler = async () => {
  const fetch = require("node-fetch");

  const NETLIFY_ACCESS_TOKEN = process.env.NETLIFY_ACCESS_TOKEN;
  const FORM_ID = "64e06fae1e5bcd000805def1"; // Replace with your actual form ID

  if (!NETLIFY_ACCESS_TOKEN) {
    console.error("Error: Missing Netlify Access Token");
    return { statusCode: 500, body: "Missing Netlify Access Token" };
  }

  if (!FORM_ID) {
    console.error("Error: Missing Form ID");
    return { statusCode: 500, body: "Missing Form ID" };
  }

  try {
    console.log(`Fetching submissions for form ID: ${FORM_ID}`);

    const response = await fetch(
      `https://api.netlify.com/api/v1/forms/${FORM_ID}/submissions`,
      {
        headers: {
          Authorization: `Bearer ${NETLIFY_ACCESS_TOKEN}`,
        },
      }
    );

    console.log(`Netlify API response status: ${response.status}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Netlify API Error: ${errorText}`);
      return { statusCode: response.status, body: `Netlify API Error: ${errorText}` };
    }

    const submissions = await response.json();
    console.log(`Fetched ${submissions.length} submissions`);

    return { statusCode: 200, body: JSON.stringify(submissions) };
  } catch (error) {
    console.error("Fetch error:", error);
    return { statusCode: 500, body: `Fetch error: ${error.message}` };
  }
};