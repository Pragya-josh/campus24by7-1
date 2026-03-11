import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const deployDir = path.join(__dirname, 'deploy_plesk');

console.log('--- STARTING PLESK DEPLOYMENT PREPARATION ---');

if (fs.existsSync(deployDir)) {
  console.log('Cleaning up old deploy_plesk directory...');
  try {
    fs.rmSync(deployDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  } catch (err) {
    if (err.code === 'EBUSY') {
      console.error('\nERROR: The deploy_plesk directory is currently in use or open in another program.');
      console.error('Please close any terminals or file explorers open in ' + deployDir + ' and try again.\n');
      process.exit(1);
    } else {
      throw err;
    }
  }
}

fs.mkdirSync(deployDir);

// 1. Copy standalone output
const standaloneDir = path.join(__dirname, '.next', 'standalone');
if (!fs.existsSync(standaloneDir)) {
  console.error('ERROR: .next/standalone not found. Run "npm run build" first.');
  process.exit(1);
}

console.log('Copying standalone files (dereferencing symlinks)...');
fs.cpSync(standaloneDir, deployDir, { recursive: true, dereference: true });

// 2. Patch the generated server.js for IISnode / Plesk
// We need to handle named pipes correctly in PORT env var.
console.log('Patching server.js for IIS compatibility...');
const serverJsPath = path.join(deployDir, 'server.js');
let serverJs = fs.readFileSync(serverJsPath, 'utf8');

// Replace standard port parsing with IISnode friendly parsing
serverJs = serverJs.replace(
    /const currentPort = parseInt\(process\.env\.PORT,\ 10\) \|\|\ 3000/,
    'const currentPort = isNaN(Number(process.env.PORT)) ? process.env.PORT : (parseInt(process.env.PORT, 10) || 3000)'
);

// Fix the absolute outputFileTracingRoot to be relative
// Next.js standalone often embeds the full path of the build machine.
serverJs = serverJs.replace(
    /"outputFileTracingRoot":\s*"[^"]*"/g,
    `"outputFileTracingRoot": __dirname`
);

// Fix turbopack root absolute path
serverJs = serverJs.replace(
    /"turbopack":\s*\{\s*"root":\s*"[^"]*"\s*\}/g,
    `"turbopack": { "root": __dirname }`
);

fs.writeFileSync(serverJsPath, serverJs);

// 3. Copy public folder
console.log('Copying public folder...');
fs.cpSync(path.join(__dirname, 'public'), path.join(deployDir, 'public'), { recursive: true });

// 4. Ensure static assets are in the right place
console.log('Copying static assets to .next/static...');
const nextStaticDir = path.join(deployDir, '.next', 'static');
fs.mkdirSync(nextStaticDir, { recursive: true });
fs.cpSync(path.join(__dirname, '.next', 'static'), nextStaticDir, { recursive: true });

// 4.5. Ensure Prisma folder and schema are copied
// Prisma requires the schema.prisma file to exist for the Query Engine to work in standalone mode
console.log('Copying prisma folder...');
if (fs.existsSync(path.join(__dirname, 'prisma'))) {
    fs.cpSync(path.join(__dirname, 'prisma'), path.join(deployDir, 'prisma'), { recursive: true });
}

// 5. Create IISNode CommonJS Wrapper for Next.js ES Module Server
console.log('Generating iisnode_wrapper.cjs for IIS CJS/ESM interop...');
const wrapperCode = `// This file bridges IISNode's require() with Next.js 15 ES modules.
import('./server.js').catch(err => {
    console.error('Failed to start Next.js server:', err);
    process.exit(1);
});
`;
fs.writeFileSync(path.join(deployDir, 'iisnode_wrapper.cjs'), wrapperCode);

// 6. Copy Web.config (the ultimate version)
console.log('Copying web.config.ultimate to web.config...');
fs.copyFileSync(path.join(__dirname, 'web.config.ultimate'), path.join(deployDir, 'web.config'));

// 7. Copy .npmrc if exists
console.log('Copying configuration files...');
if (fs.existsSync(path.join(__dirname, '.npmrc'))) {
  fs.copyFileSync(path.join(__dirname, '.npmrc'), path.join(deployDir, '.npmrc'));
}

console.log('--- DEPLOYMENT PREPARATION COMPLETE ---');
console.log(`Your Plesk ready files are in: ${deployDir}`);
console.log('To deploy to Plesk:');
console.log('1. Zip ONLY the contents of the deploy_plesk folder.');
console.log('2. Upload and extract to httpdocs.');
console.log('3. Restart Node in Plesk panel.');
