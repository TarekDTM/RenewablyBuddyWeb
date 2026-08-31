import { APIErrorResponse, APISuccessResponse } from './reponses';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';



export async function apiRequest<T>(
    endpoint: string,
    options: RequestInit,
    payload?: T
): Promise<APISuccessResponse<T> | APIErrorResponse<T>> {
    const { body, headers, ...customConfig } = options;
    const isFormData = body instanceof FormData;

    const configHeaders: HeadersInit = {
        ...(!isFormData && { 'Content-Type': 'application/json' }),
        ...headers,
    };

    const formattedBody = payload ? JSON.stringify(payload) : body;

    const response = await fetch(`${BASE_URL}${endpoint}`, {
        ...customConfig,
        headers: configHeaders,
        body: formattedBody,
    });

    if (response.status === 401) {
        throw new Error('Unauthorized');
    }

    if (!response.ok) {
        const errorData: APIErrorResponse<T> = await response.json()
        return errorData
    }


    // Handle both string and object errors
    return await response.json() as APISuccessResponse<T>;


}