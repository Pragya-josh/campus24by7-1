# Deployment Documentation for Shared Windows Plesk Hosting

This guide documents the changes made to the application to support deployment on Shared Windows Plesk hosting and instructions on how to set up the CI/CD pipeline.

## 1. Application Changes

### **Static Export Configuration**
Since shared hosting environments often lack native persistent Node.js server support (or it's complex to configure), we have configured Next.js to use **Static Exports**. This pre-renders all pages into HTML/CSS/JS files during the build process.

- **`next.config.mjs`**: Added `output: 'export'` and `trailingSlash: true`.
- **Dynamic Routes**: Added `generateStaticParams` to dynamic pages (`/blog/[slug]` and `/features/[slug]`) to pre-calculate all possible paths at build time.

### **IIS Configuration**
- **`public/web.config`**: Created a `web.config` file. This is essential for Windows Server (IIS).
  - It handles **Client-Side Routing**: If a user refreshes a page like `/contact`, IIS would normally return 404 because that file doesn't exist. The rewrite rule sends all requests to `/index.html` (or the appropriate folder index) so the React router can handle it.
  - Added MIME types for `.webp` and `.webmanifest` to ensure assets load correctly.

## 2. CI/CD Pipeline (GitHub Actions)

We have created a GitHub Actions workflow file at `.github/workflows/deploy.yml` that automates the deployment process.

### **Workflow Steps:**
1.  **Checkout**: Pulls the latest code from the `main` branch.
2.  **Setup Node.js**: Installs Node.js v18.
3.  **Install**: Runs `npm ci` to install dependencies.
4.  **Build**: Runs `npm run build`. This generates the static output in the `out/` folder.
5.  **Deploy**: Connects to your Plesk server via FTPS and uploads the contents of `out/` to the `httpdocs/` directory.

## 3. Setup Instructions

### **A. GitHub Repository Secrets**
To make the CI/CD pipeline work, you need to add your FTP credentials to your GitHub repository secrets.

1.  Go to your GitHub Repository -> **Settings** -> **Secrets and variables** -> **Actions**.
2.  Click **New repository secret**.
3.  Add the following secrets:
    *   `FTP_SERVER`: Your Plesk server hostname or IP address (e.g., `ftp.yourdomain.com`).
    *   `FTP_USERNAME`: Your FTP username.
    *   `FTP_PASSWORD`: Your FTP password.

### **B. Plesk Configuration**
1.  Ensure your domain points to the correct directory (usually `httpdocs`).
2.  **Node.js**: You do **not** need to enable Node.js in Plesk. This is a static site deployment.
3.  **SSL**: Ensure SSL/TLS is enabled (Let's Encrypt) since we force HTTPS in links.

### **C. Testing**
1.  Push these changes to your `main` branch.
2.  Go to the **Actions** tab in GitHub to watch the build and deploy process.
3.  Once completed, visit your website. Check that navigating to subpages (like `/pricing`) and refreshing the browser works without 404 errors.

## 4. Maintenance / Adding New Content
- **New Blog Posts/Features**: Since we use static export, whenever you add a new blog post or feature slug to the code, you must re-deploy (push to main) for the new page to be generated.
- **Dynamic Features**: Features like "Contact Form" submission will need an external backend service (like Formspree or emailjs) or a separate API because there is no backend server running.

## 5. Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions, follow these steps:

### **Step 1: Build Locally**
Open your terminal in the project directory and run:
```bash
npm run build
```
This will create an `out` folder containing all the static files (`.html`, `.css`, `.js`, etc.).

### **Step 2: Prepare for Upload**
1.  Open the `out` folder.
2.  Select **all files and folders** inside.
3.  Right-click and zip them into a file named `deploy.zip`.

### **Step 3: Upload to Plesk**
1.  Log in to your **Plesk Panel**.
2.  Go to **Websites & Domains** -> **File Manager**.
3.  Navigate to the public directory for your domain (usually `httpdocs`).
4.  **Delete** the existing files (be careful not to delete any other important folders not related to usage).
5.  Click **Upload** and select your `deploy.zip` file.
6.  Once uploaded, select the checkbox next to `deploy.zip`.
7.  Click **Extract Files** (Check "Replace existing files").
8.  After extraction, you can delete the `deploy.zip` file.

### **Step 4: Verify**
Visit your website. The `web.config` file included in the build ensures that routing works correctly.
