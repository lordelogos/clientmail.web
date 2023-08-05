import { Footer } from "@/components/layouts/footer";
import { Navigation } from "@/components/layouts/landing-nav";
import { Background } from "@/components/ui/background";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { Balancer } from "react-wrap-balancer";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white/50 dark:bg-slate-950/50">
      <Background>
        <Navigation />
        <div className="container flex-1 flex items-center justify-center">
          <section
            id="hero"
            aria-labelledby="hero-heading"
            className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 text-center"
          >
            <Balancer
              as={"h1"}
              className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]"
            >
              Send Emails Effortlessly From your Code, No Servers Required!
            </Balancer>
            <Balancer className="max-w-[46rem] text-sm sm:text-lg lg:text-xl text-muted-foreground">
              Send Emails Directly from JavaScript Code - No Servers Needed.
              Streamlined Communication Made Easy. Try Client-mail Today
            </Balancer>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href={routes.auth}
                className={cn(
                  buttonVariants({
                    size: "lg",
                  })
                )}
              >
                Get Started
              </Link>
              <a
                href={routes.docs}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
              >
                Read Docs
              </a>
            </div>
          </section>
        </div>
        <Footer />
      </Background>
    </main>
  );
}
