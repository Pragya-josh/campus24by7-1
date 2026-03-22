# Plesk Deployment Guide for Aivora Technologies (Static/Mocked DB version)

This guide walks you through the exact steps to deploy your Next.js application to your Plesk hosting environment (`aivoratechnolgies.in` / `api.campus24by7.com`), completely devoid of database and backend microservice dependencies.

Since we encountered infrastructure instability linking Plesk to external MS SQL Server and remote Identity APIs, the app has now been configured to operate **statically with simulated emails for Leads and static hardcoded credentials for logins**.

## 1. What Has Changed?
* **No Prisma:** `prisma` has been removed from the build process. The app will no longer attempt to establish database connections and will no longer crash due to missing tables.
* **No `resilientFetch` Microservice Routing:** The app will not attempt to route internal requests to `/api/Users/login` or `/api/lead/Leads/submit` which previously caused 503 backend crash cascades.
* **Mocked Login Routes:** There are two hardcoded identities you can use to log into the Admin / User portals:
  * **Admin Account:** 
    * **Email:** `admin@admin.com`
    * **Password:** `admin123`
  * **User Account:** 
    * **Email:** `user@user.com`
    * **Password:** `user123`
* **Lead Captures:** When a user completes a "Lead" form online, the data is collected, categorized by module/section, simulated as an email output (viewable in the server logs), and stored in memory.

## 2. Local Build Process
To compile your application for the Plesk standalone server:

1. Open your terminal in the project directory (`C:\Aivora Tech\Dev\campus24by7\web\campus24by7`).
2. Run the Next.js production compiler:
   ```bash
   npm run build
   ```
3. Run the Plesk preparation script:
   ```bash
   node prepare_plesk_deploy.js
   ```
   *Note: If you run into an `EBUSY` error during this step, it means your `deploy_plesk` folder is locked. Close File Explorer and run it again.*

## 3. Deployment to Plesk
1. Navigate to the `deploy_plesk` folder on your computer.
2. Select **all the contents inside** `deploy_plesk` and ZIP them into a single archive (e.g., `release.zip`).
   *(Do NOT zip the `deploy_plesk` folder itself, zip the items INSIDE the folder).*
3. Log into your Plesk Panel.
4. Go to **File Manager** -> **[your domain's root folder / httpdocs]**.
5. Click **Upload** and select your `release.zip`.
6. Highlight `release.zip`, click **Extract**, and overwrite all files.

## 4. Final Server Restart (CRITICAL)
For the Node.js server inside IIS to pick up the new Javascript logic, you MUST restart the daemon:
1. In Plesk, return to **Websites & Domains**.
2. Locate the **Node.js** app configuration panel for your site.
3. Click the **Restart App** button.

## 5. Identifying Form Categories
The `category` and `subCategory` parameters are automatically inferred by the UI in `/src/app/api/leads/route.ts`. Check your Plesk `iisnode` folder logs to see the simulated email output containing these categorized source tags.

If you eventually want to link this to a real inbox (Nodemailer or Resend), you will find the `--- SIMULATE EMAIL SENDING ---` section in `src/app/api/leads/route.ts` which you can replace with a literal `nodemailer.sendMail()` call.
