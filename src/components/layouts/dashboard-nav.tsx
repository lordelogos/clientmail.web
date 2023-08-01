"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";
import { Github, Mails } from "lucide-react";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { siteConfig } from "@/lib/site-config";
import { AuthAvatar } from "../ui/auth-avatar";

export function DashboardNavigation() {
  return (
    <div className="w-full border-b-[0.5px] border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 pt-5">
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
          <Link
            className={cn(
              buttonVariants({
                size: "icon",
                variant: "ghost",
              }),
              "hidden sm:flex"
            )}
            href={"https://github.com/lordelogos"}
            target="_blank"
            rel="noreferrer"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">GitHub</span>
          </Link>
          <ThemeToggle />
          <AuthAvatar />
        </div>
      </div>
    </div>
  );
}
