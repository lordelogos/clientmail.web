"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Mails } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";

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
          <span className="inline-block">Resend Client</span>
        </Link>

        <div className="flex items-center gap-4">
          <Button
            className={cn(
              buttonVariants({
                size: "lg",
              }),
              "hidden sm:block",
            )}
          >
            Sign in
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
