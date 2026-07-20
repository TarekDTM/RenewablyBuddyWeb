// src/hooks/api/useAuth.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export const authKeys = {
  session: ['auth-session'] as const,
};

export function useAuth() {
  const queryClient = useQueryClient();

  // 1. Get Current User Session
  const { data: user, isLoading, isError } = useQuery<User | null, Error>({
    queryKey: authKeys.session,
    queryFn: () => apiClient<User>('/auth/me'),
    retry: false, 
    staleTime: 1000 * 60 * 10, // Keep session fresh for 10 minutes
  });

  // 2. Login Mutation
  const loginMutation = useMutation({
    mutationFn: (credentials: Record<string, string>) => 
      apiClient<User>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      }),
    onSuccess: (userData) => {
      // Direct cache update following TanStack best practices
      queryClient.setQueryData(authKeys.session, userData);
    },
  });

  // 3. Logout Mutation
  const logoutMutation = useMutation({
    mutationFn: () => apiClient<void>('/auth/logout', { method: 'POST' }),
    onSuccess: () => {
      // Wipe the query cache entirely on logout
      queryClient.setQueryData(authKeys.session, null);
      queryClient.clear(); 
    },
  });

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    isError,
    login: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    logout: logoutMutation.mutate,
  };
}