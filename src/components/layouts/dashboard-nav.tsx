"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Github, Mails } from "lucide-react";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

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
          <span className="inline-block">Resend Client</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            className="hidden sm:block"
            href={"https://github.com/lordelogos"}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
