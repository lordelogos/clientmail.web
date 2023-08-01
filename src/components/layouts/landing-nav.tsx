"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";
import { Mails } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

export function Navigation() {
  return (
    <div className="w-full">
      <div className="container flex h-16 items-center justify-between">
        <Link
          aria-label="Home"
          href={routes.home}
          className="items-center space-x-2 flex"
        >
          <Mails
            className="h-6 w-6 hidden sm:inline-block"
            aria-hidden="true"
          />
          <span className="inline-block">{siteConfig.title as string}</span>
        </Link>

        <div className="flex items-center gap-4">
          <a
            href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}`}
            className={cn(
              buttonVariants({
                size: "lg",
              })
            )}
          >
            Sign in
          </a>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
