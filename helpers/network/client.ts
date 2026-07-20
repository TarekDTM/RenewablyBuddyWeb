// src/lib/api-client.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiClient<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },

        credentials: 'include',
    });
    if (response.status === 401) {
        // Optional: Global trigger to redirect to login or clear auth caches
        throw new Error('Unauthorized');
    }
    if (!response.ok) {
        // Standardize error handling
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
}