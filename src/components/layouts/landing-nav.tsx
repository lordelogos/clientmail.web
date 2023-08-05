"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "../ui/theme-toggle";
import { Mails } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { siteInfo } from "@/lib/site-config";

export function Navigation() {
  return (
    <div className="w-full sticky top-0 pt-5">
      <div className="container flex h-16 items-center justify-between">
        <Link
          aria-label="Home"
          href={routes.home}
          className="items-center space-x-2 flex"
        >
          <Mails className="h-6 w-6 inline-block" aria-hidden="true" />
          <span className="inline-block">{siteInfo.name as string}</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href={routes.auth}
            className={cn(buttonVariants(), "hidden sm:flex")}
          >
            Sign in
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
