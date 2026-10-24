

import { getQueryClientSingleton } from "../../lib/QueryClient/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import LoginUI from "../../components/screens/login";

export default async function Login() {

  const queryClient = getQueryClientSingleton()


  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <LoginUI />
    </HydrationBoundary>
  );
}