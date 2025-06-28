# 📚 r/LocalLLaMA Archive

**A free, open, automatically-updating snapshot of r/LocalLLaMA — keeping community discussions, insights, and model links accessible, even if the original subreddit ever disappears.**

---

## ✨ What is this?

This is a **static archive** of [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA) — automatically scraping **new posts** every hour and saving them as JSON and simple static pages.

It’s built with:
- **React + Ant Design** (for clean browsing)
- **Node.js scrapers** (fetch & dump posts)
- **Static hosting via GitHub Pages**

🔗 **Live Archive**: [Visit here](https://maifeeulasad.github.io/LocalLLaMA/)  
📂 **Repo**: [View source](https://github.com/maifeeulasad/LocalLLaMA)

---

## 🔒 Why?

- Subreddits get banned, private, or wiped all the time.
- We don’t want thousands of hours of community knowledge — local LLM experiments, model links, guides — to vanish.
- By saving it as static files, it’s **easy to fork, mirror, or self-host**.

---

## ⚡ Features

- ✅ Hourly scraping of `hot`, `top`, and `best` posts
- ✅ Each post saved as JSON for transparency
- ✅ Clean static pages for browsing
- ✅ Built for **forking** — anyone can mirror this easily
- ✅ **No user tracking**, no ads

---

## 🧩 How it works

1. **Scraper:** Runs on GitHub Actions every hour.
2. **Builder:** Regenerates the static site pages automatically.
3. **Deploy:** Pushes to GitHub Pages.
4. **Browse:** You can read, search, and explore right in your browser.

---

## 🔍 Search

This site includes a **fuzzy search bar** (powered by Fuse.js) so you can quickly find posts by keywords — even across thousands of JSON files.

---

## 🌍 Fork, Mirror & Contribute

This is **not meant to be the only copy**.  
The real value is when **many people fork and mirror it**!

**How to mirror:**
```bash
git clone https://github.com/maifeeulasad/LocalLLaMA.git
# Keep your fork in sync
pnpm install
pnpm run build
# Deploy to your own GitHub Pages, server, or static hosting
