"use client";

import * as React from "react";
import { useClerk } from "@clerk/nextjs";

import { Loader2 } from "lucide-react";
import { SSOCallbackPageProps } from "@/app/(auth)/auth/sso-callback/page";

export default function SSOCallback({ searchParams }: SSOCallbackPageProps) {
  const { handleRedirectCallback } = useClerk();

  React.useEffect(() => {
    void handleRedirectCallback(searchParams);
  }, [searchParams, handleRedirectCallback]);

  return (
    <div
      role="status"
      aria-label="Loading"
      aria-describedby="loading-description"
      className="flex items-center justify-center"
    >
      <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
    </div>
  );
}
