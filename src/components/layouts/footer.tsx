import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Github, Twitter } from "lucide-react";
import { siteConfig, siteLinks } from "@/lib/site-config";
import Image from "next/image";

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
            aria-label={siteConfig.creator ?? ""}
            href={siteLinks.githubPersonal}
            target="_blank"
            rel="noreferrer"
            className="font-semibold transition-colors hover:text-foreground"
          >
            <span className="hidden sm:inline">{siteConfig.creator}</span>{" "}
            <Image
              src={"/profile.jpeg"}
              width={24}
              height={24}
              className="rounded-full inline-block"
              alt="Paul Ehikhuemen's github profile"
            />
          </a>
        </div>
        <div className="flex items-center space-x-1">
          <Link href={siteLinks.githubProject} target="_blank" rel="noreferrer">
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
          <Link href={siteLinks.xPersonal} target="_blank" rel="noreferrer">
            <div
              className={cn(
                buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })
              )}
            >
              <Twitter className="h-4 w-4" aria-hidden="true" />
              <span className="sr-only">Twitter (x.com)</span>
            </div>
          </Link>
        </div>
      </section>
    </footer>
  );
}
