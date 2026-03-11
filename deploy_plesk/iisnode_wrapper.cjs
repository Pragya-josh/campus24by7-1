// This file bridges IISNode's require() with Next.js 15 ES modules.
import('./server.js').catch(err => {
    console.error('Failed to start Next.js server:', err);
    process.exit(1);
});
