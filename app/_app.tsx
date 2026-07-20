import {useState} from 'react'
import {
   QueryCache, MutationCache,

  HydrationBoundary,
  QueryClient,  
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import { useRouter } from "next/navigation";

interface ApiError extends Error {
  status?: number;
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] =   useState(() => {
    const handleAuthError = (error: ApiError ) => {
      // Adjust this condition based on how your fetch wrapper throws errors
      if (    error?.status === 401 || error?.message === "Unauthorized") {
        // 1. (Optional) Clear auth tokens from local storage or trigger token refresh here
        console.warn("Session expired. Redirecting to login...");
        
        // 2. Redirect to login page
        router.push("/login");
      }
    };

    return new QueryClient({
      // Hook into global errors across all queries and mutations
      queryCache: new QueryCache({
        onError: (error) => handleAuthError(error),
      }),
      mutationCache: new MutationCache({
        onError: (error) => handleAuthError(error),
      }),
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 5, // 5 minutes
          // Don't retry on auth errors—if a token is dead, it's dead.
          retry: (failureCount, error: ApiError) => {
            if (error?.status === 401) return false;
            return failureCount < 2; // Retry other errors up to 2 times
          },
        },
      },
    });
  });

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </HydrationBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}