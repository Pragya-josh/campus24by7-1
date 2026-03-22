import { APP_CONFIG } from "@/config/app.config";

export async function resilientFetch(endpoint: string, options: RequestInit = {}) {
    const url = endpoint.startsWith('http')
        ? endpoint
        : `${APP_CONFIG.api.baseUrl}${endpoint}`;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal,
        });
        clearTimeout(id);
        return response;
    } catch (error: any) {
        clearTimeout(id);
        console.error(`[ResilientFetch Error] ${url}:`, error.message);
        
        // Return a simulated failing response instead of throwing
        // This prevents the entire page from crashing in Next.js
        return {
            ok: false,
            status: 503,
            json: async () => ({ 
                success: false, 
                message: error.name === 'AbortError' 
                    ? "Request timed out. The backend is taking too long." 
                    : "The backend service is currently unreachable.",
                error: error.message
            }),
            text: async () => "Service Unavailable",
            headers: new Headers()
        } as Response;
    }
}
