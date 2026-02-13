# Deployment Instructions

Your project is now configured for **Static Export**. An `out` folder has been generated with all the HTML, CSS, and JS files needed.

## Option 1: Vercel (Recommended 🌟)
The easiest way to deploy Next.js apps.

1.  Go to [Vercel.com](https://vercel.com) and sign up/login with GitHub.
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your repository: **`teste-motion-website`**.
4.  In "Build and Output Settings", override the "Output Directory" to **`out`** (since we are doing a static export).
5.  Click **Deploy**.

## Option 2: GitHub Pages
1.  Go to your repository Settings on GitHub.
2.  Navigate to **Pages**.
3.  Set the Source to **GitHub Actions**.
4.  Use a Next.js Static Export workflow (GitHub will guide you).

## Option 3: Manual / Any Static Host
You can upload the contents of the **`out`** folder to any static hosting provider:
- Netlify (drag and drop the folder)
- Amazon S3
- Hostinger / Godaddy (via FTP)

**Local Testing:**
You can open `out/index.html` in your browser, though some features might require a local server to work perfectly (like `npx serve out`).
