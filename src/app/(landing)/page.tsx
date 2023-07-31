import { Footer } from "@/components/layouts/footer";
import { Navigation } from "@/components/layouts/nav";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { Balancer } from "react-wrap-balancer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <Navigation />
      <div className="container flex-1 flex items-center justify-center">
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 text-center"
        >
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            Send Emails Effortlessly From your Code, No Servers Required!
          </h1>
          <Balancer className="max-w-[46rem] text-sm sm:text-lg lg:text-xl text-muted-foreground">
            Send Emails Directly from JavaScript Code - No Servers Needed.
            Streamlined Communication Made Easy. Try Client-Powered Emails Today
          </Balancer>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}`}
              className={cn(
                buttonVariants({
                  size: "lg",
                }),
              )}
            >
              Get Started
            </a>
            <a
              href={routes.docs}
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                }),
              )}
            >
              Read Docs
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
