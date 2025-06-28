const fs = require('fs');

const BASE_URL = "https://www.reddit.com/r/LocalLLaMA";
const TOP_URL = `${BASE_URL}/top.json?t=all&limit=100`;
const HOT_URL = `${BASE_URL}/hot.json?t=all&limit=100`;
const BEST_URL = `${BASE_URL}/best.json?t=all&limit=100`;

const URLs = [TOP_URL, HOT_URL, BEST_URL];

(async () => {
  const uniqueIds = new Set();

  for (const url of URLs) {
    console.log(`Fetching list: ${url}`);
    const res = await fetch(url);
    const json = await res.json();

    json.data.children.forEach(child => {
      uniqueIds.add(child.data.id);
    });
  }

  console.log(`Found ${uniqueIds.size} unique post IDs`);

  for (const postId of uniqueIds) {
    const postUrl = `${BASE_URL}/comments/${postId}.json`;
    console.log(`Fetching post: ${postUrl}`);

    const postRes = await fetch(postUrl);
    const postJson = await postRes.json();

    fs.mkdirSync(`./src/dump/${postId}`, { recursive: true });
    fs.writeFileSync(
      `./src/dump/${postId}/index.json`,
      JSON.stringify(postJson, null, 2)
    );
  }

  console.log("✅ Done fetching & saving all unique posts.");
})();
