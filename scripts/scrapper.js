const fs = require('fs');
const https = require('https');

const REDDIT_CLIENT_ID = process.env.REDDIT_CLIENT_ID;
const REDDIT_SECRET = process.env.REDDIT_SECRET;

if (!REDDIT_CLIENT_ID || !REDDIT_SECRET) {
  throw new Error("Missing Reddit client credentials in environment variables.");
}

const USER_AGENT = "LocalLLaMA - runner/1.0 by maifee";

const BASE_URL = "https://oauth.reddit.com/r/LocalLLaMA";
const TOKEN_URL = "https://www.reddit.com/api/v1/access_token";
const ENDPOINTS = ["new", "hot", "best"];
const LIMIT = 100;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getAccessToken() {
  return new Promise((resolve, reject) => {
    const auth = Buffer.from(`${REDDIT_CLIENT_ID}:${REDDIT_SECRET}`).toString("base64");

    const options = {
      method: "POST",
      headers: {
        "Authorization": `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": USER_AGENT
      }
    };

    const body = "grant_type=client_credentials";
    const req = https.request(TOKEN_URL, options, res => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        const parsed = JSON.parse(data);
        if (parsed.access_token) {
          resolve(parsed.access_token);
        } else {
          reject(new Error("Failed to obtain access token"));
        }
      });
    });

    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

function fetchJson(url, token) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "User-Agent": USER_AGENT
      }
    }, res => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (err) {
          reject(err);
        }
      });
    });

    req.on("error", reject);
    req.end();
  });
}

(async () => {
  try {
    const token = await getAccessToken();
    const uniqueIds = new Set();

    console.log(`🔐 Authenticated. Fetching from Reddit...`);

    for (const endpoint of ENDPOINTS) {
      const url = `${BASE_URL}/${endpoint}.json?limit=${LIMIT}`;
      console.log(`➡️ ${url}`);
      const json = await fetchJson(url, token);

      json.data.children.forEach(child => uniqueIds.add(child.data.id));

      fs.mkdirSync('./src/dump/__base__', { recursive: true });
      fs.writeFileSync(
        `./src/dump/__base__/${endpoint}.json`,
        JSON.stringify(json, null, 2)
      );

      await sleep(1000);
    }

    const ids = Array.from(uniqueIds);
    console.log(`✅ Found ${ids.length} unique posts.`);

    for (let i = 0; i < ids.length; i++) {
      const postId = ids[i];
      const postUrl = `${BASE_URL}/comments/${postId}.json`;
      try {
        console.log(`🔗 Fetching ${i + 1} of ${ids.length}: ${postId}`);
        const postJson = await fetchJson(postUrl, token);

        fs.mkdirSync(`./src/dump/${postId}`, { recursive: true });
        fs.writeFileSync(
          `./src/dump/${postId}/index.json`,
          JSON.stringify(postJson, null, 2)
        );

        console.log(`✅ Saved: ./src/dump/${postId}/index.json`);
        await sleep(2000);
      } catch (err) {
        console.error(`❌ Failed to fetch post ${postId}:`, err.message);
      }
    }

    console.log("🎉 Done! All posts saved.");
  } catch (err) {
    console.error("❌ Authentication or fetch failed:", err.message);
  }
})();
