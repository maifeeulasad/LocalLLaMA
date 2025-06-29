const fs = require('fs');

const BASE_URL = "https://www.reddit.com/r/LocalLLaMA";
const TOP_URL = `${BASE_URL}/top.json?t=all&limit=100`;
const HOT_URL = `${BASE_URL}/hot.json?t=all&limit=100`;
const BEST_URL = `${BASE_URL}/best.json?t=all&limit=100`;
const NEW_URL = `${BASE_URL}/new.json?t=all&limit=100`;

const URLs = [NEW_URL, HOT_URL, TOP_URL, BEST_URL];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  const uniqueIds = new Set(['1lmjg3p','1lmjimi']);

  // console.log(`🔍 Collecting post IDs from:`);
  // for (const url of URLs) {
  //   console.log(`➡️ ${url}`);
  //   const res = await fetch(url);
  //   const json = await res.json();

  //   json.data.children.forEach(child => {
  //     uniqueIds.add(child.data.id);
  //   });

  //   await sleep(500);
  // }

  const ids = Array.from(uniqueIds);
  console.log(`✅ Found ${ids.length} unique posts.`);

  for (let i = 0; i < ids.length; i++) {
    const postId = ids[i];
    try {
      console.log(`🔗 Fetching ${i + 1} of ${ids.length}: ${postId}`);

      const postUrl = `${BASE_URL}/comments/${postId}.json`;
      const postRes = await fetch(postUrl);
      const postJson = await postRes.json();

      fs.mkdirSync(`./src/dump/${postId}`, { recursive: true });
      fs.writeFileSync(
        `./src/dump/${postId}/index.json`,
        JSON.stringify(postJson, null, 2)
      );

      console.log(`✅ Saved: ./src/dump/${postId}/index.json`);

      // NB: never remove this, keep Reddit happy
      await sleep(1000);
    } catch (error) {
      console.error(`❌ Error fetching post ${postId}:`, error);
    }
  }

  console.log("🎉 Done! All posts saved.");
})();
