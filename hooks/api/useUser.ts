// src/hooks/api/useUser.ts
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../../network/client';

// Define types/interfaces for type safety
interface UserProfile {
  id: string;
  name: string;
  email: string;
}

// 1. Maintain a single source of truth for query keys
export const userKeys = {
  all: ['users'] as const,
  detail: (id: string) => [...userKeys.all, id] as const,
};

// 2. The Clean Custom Hook
export function useUserProfile(userId: string) {
  return useQuery<UserProfile, Error>({
    queryKey: userKeys.detail(userId),
    queryFn: () => apiClient<UserProfile>(`/users/${userId}`),
    enabled: Boolean(userId), // Prevents running the query automatically if userId is missing
    staleTime: 1000 * 60 * 5,  // Data is considered fresh for 5 minutes
  });
}