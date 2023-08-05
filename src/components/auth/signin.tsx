"use client";

import { isClerkAPIResponseError, useSignIn } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { Github, Loader2 } from "lucide-react";
import { routes } from "@/lib/routes";

export function SignIn() {
  const [providerLoading, setProviderLoading] = useState(false);
  const { signIn, isLoaded } = useSignIn();
  async function oauthSignIn() {
    if (!isLoaded) return null;
    try {
      setProviderLoading(true);
      await signIn.authenticateWithRedirect({
        strategy: "oauth_github",
        redirectUrl: routes.ssoCallback,
        redirectUrlComplete: routes.authCallback,
      });
    } catch (error) {
      setProviderLoading(false);

      const unknownError = "Something went wrong, please try again.";

      isClerkAPIResponseError(error)
        ? toast.error(error.errors[0]?.longMessage ?? unknownError)
        : toast.error(unknownError);
    }
  }
  return (
    <Button
      aria-label={`Sign in with Github`}
      size={"lg"}
      className="w-full gap-2"
      onClick={() => void oauthSignIn()}
      disabled={providerLoading}
    >
      {providerLoading ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
      ) : (
        <Github className="h-4 w-4" aria-hidden="true" />
      )}
      Sign in with Github
    </Button>
  );
}
