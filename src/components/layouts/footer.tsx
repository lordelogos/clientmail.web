import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full">
      <section
        id="footer-bottom"
        aria-labelledby="footer-bottom-heading"
        className="container flex items-center space-x-4 h-16"
      >
        <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <a
            aria-label="Resend client side service author"
            href="http://pauloe.me"
            target="_blank"
            rel="noreferrer"
            className="font-semibold transition-colors hover:text-foreground"
          >
            Paul Ehikhuemen
          </a>
          .
        </div>
        <div className="flex items-center space-x-1">
          <Link
            href={"https://github.com/lordelogos"}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                }),
              )}
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={"https://twitter.com/pauloe_me"}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                }),
              )}
            >
              <Twitter className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Twitter</span>
            </div>
          </Link>
        </div>
      </section>
    </footer>
  );
}
