# 🚀 Manual Deployment Guide (Shared Plesk/IIS Hosting)

This document outlines the step-by-step process for deploying the Campus24by7 frontend to a shared Plesk hosting environment using the **Standalone Node.js** output.

## 📋 Prerequisites
- Access to Plesk Dashboard.
- Node.js extension enabled in Plesk.
- Local build completed successfully (`npm run build`).

---

## 🚫 The `out` folder (Important)
You might see an `out/` folder in your project root. **DO NOT USE THIS FOLDER.**
- The `out` folder is created by `next export` for static-only hosting.
- Because our app now has **API routes**, **server-side rendering**, and **Prisma/SQL**, a static export will **not work**.
- Always use the contents of `.next/standalone` as described below.

---

## 🏗️ Step 1: Local Build & Assembly
Because Next.js `standalone` mode optimizes for minimal size, it excludes static assets and some server logic. You must manually assemble the package.

1. **Prepare Database:** Ensure your local `.env` has a valid `DATABASE_URL`.
2. **Generate Prisma Client:**
   ```bash
   npx prisma generate
   ```
3. **Run the Build:**
   ```bash
   npm run build
   ```
4. **Assemble the Deployment Folder:**
   Navigate into `.next/standalone` and copy these from your **root project folder** manually:

| Original Source | Destination Path | Purpose |
| :--- | :--- | :--- |
| `public/` | `.next/standalone/public/` | Client-side images & assets |
| `.next/static/` | `.next/standalone/.next/static/` | Compiled CSS & JS bundles |
| `web.config` | `.next/standalone/web.config` | IIS configuration for Node.js |
| `src/prisma/` | `.next/standalone/src/prisma/` | (If using SQLite or local schema files) |

> [!IMPORTANT]
> **Ensure `server.js` is in the root:** After zipping the contents of `.next/standalone`, the `server.js` file must be directly inside your `httpdocs` folder, not inside a subfolder.


### 📍 Final Server Structure (Your Host Root / httpdocs)
It is critical that you copy the **folders** below into your root directory so Next.js can find your styles and images.

```text
/httpdocs (Your Web Root)
├── .next/
│   └── static/          <--- (IMPORTANT: Copy from your project root)
├── public/              <--- (IMPORTANT: Copy from your project root)
├── node_modules/        <--- (Contains Prisma/server code)
├── server.js            <--- (The entry point)
├── web.config           <--- (IIS settings)
└── package.json         <--- (Metadata)
```

> [!CAUTION]
> If your page looks like "plain text" with no styling or images, you missed copying the `.next/static` or `public` folders.

## 📤 Step 2: Upload to Server
1. **Empty Your Host:** Delete existing files from `httpdocs` to avoid version conflicts.
2. **Upload:** Use Plesk File Manager to upload and extract your zip inside the root folder.

---

## ⚙️ Step 3: Plesk Configuration
In the Plesk **Node.js** settings for your domain:
1. **Node.js Version:** Select 20.x if available (or 18.x).
2. **Application Startup File:** Set to `server.js`.
3. **Environment Variables:** 
   *Note: I have already added your DATABASE_URL and API URL to the `web.config` file. They will load automatically.*
   *If you want to override them, you can still add them in the Plesk UI:*
   - **NEXT_PUBLIC_API_URL**: `https://api.campus24by7.com`
   - **DATABASE_URL**: (The one from your web.config)
4. **Restart:** Click **Restart App**.

---

- **HTTP 500 (Internal Server Error) with web.config:** Some shared hosting providers (like Plesk) manage the `iisnode` handler automatically. If our `web.config` causes a 500 error immediately, use the **`web.config.safe`** version. This version only unhides the `.next` folder and adds MIME types without touching the server's Node.js handler settings.
- **Unauthorized Files:** If you see unknown `.php` files (like `haha.php`) in your logs, delete them immediately and scan your site, as these are likely malware attempts targeting common CMS vulnerabilities.

