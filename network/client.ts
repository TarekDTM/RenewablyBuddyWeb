// src/lib/api-client.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export async function apiRequest<T>(endpoint: string, options: RequestInit ,payload?: T ): Promise<T> {
    const { body, headers, ...customConfig } = options;

    const isFormData = body instanceof FormData;

    const configHeaders: HeadersInit = {
        // Only set Content-Type if it's NOT FormData (browser handles FormData headers)
        ...(!isFormData && { 'Content-Type': 'application/json' }),
        ...headers,
    };

    const formattedBody = payload ? JSON.stringify(payload): body;


    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...customConfig,
        headers: configHeaders,
        body: formattedBody,
    });

    if (response.status === 401) {
        throw new Error('Unauthorized');
    }

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    // Handle 204 No Content or empty responses safely
    if (response.status === 204) {
        return {} as T;
    }

    return response.json();
}