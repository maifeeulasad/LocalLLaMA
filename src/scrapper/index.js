const fs = require('fs');

const BASE_URL = "https://www.reddit.com/r/LocalLLaMA";

(async () => {
  const res = await fetch(`${BASE_URL}.json`);
  const json = await res.json();

  for (const child of json.data.children) {
    const postId = child.data.id;
    const postRes = await fetch(`${BASE_URL}/comments/${postId}.json`);
    const postJson = await postRes.json();
    console.log(`Post ${postId} details:`, postJson);

    fs.mkdirSync(`./src/dump/${postId}`, { recursive: true });
    fs.writeFileSync(`./src/dump/${postId}/index.json`, JSON.stringify(postJson, null, 2));
  }
})();
