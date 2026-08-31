export type APIErrorResponse<T = Record<string, string>> = {
    error: string | APIError<T>;
};

export type APIError<T = Record<string, string>> = T & {
    message?: string;
    code?: string;
};

// Success responses use envelope pattern: {user: User}, {data: T}, etc.
export type APISuccessResponse<T = unknown> = Record<string, T>;