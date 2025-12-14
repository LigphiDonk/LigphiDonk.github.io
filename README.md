<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1U-oQ3YVA9l6Zun18oNiO6zZ79S-U16Dy

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Write a new post (Markdown)

1. Add a new Markdown file under `posts/`, for example `posts/my-first-post.md`
2. The filename becomes the default `slug` (you can override by setting `slug:` in frontmatter)
3. Put required frontmatter at the top:

```md
---
title: My Post Title
date: 2025-12-14
tags: [AI, Notes]
excerpt: A short summary (optional, auto-generated if missing)
readTime: 5 分钟阅读 (optional, auto-generated if missing)
coverImage: /images/xxx.png (optional)
---

## Content starts here
...
```
