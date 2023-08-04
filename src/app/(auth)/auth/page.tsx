import { Background } from "@/components/ui/background";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import { Mails } from "lucide-react";
import Link from "next/link";

export default function Auth() {
  return (
    <main className="h-screen w-screen flex items-center justify-center  dark:bg-slate-900/50">
      <Background>
        <SignedOut>
          <SignIn />
        </SignedOut>
        <SignedIn>
          <div className="z-10 h-fit w-[90%] sm:w-full max-w-md overflow-hidden border border-slate-200 dark:border-slate-800 rounded-lg sm:shadow-xl">
            <div className="flex flex-col items-center justify-center gap-5 bg-white dark:bg-slate-950 px-4 py-6 pt-8 text-center sm:px-16 rounded-lg">
              <Link href={routes.home}>
                <Mails className="w-10 h-10" />
              </Link>
              <h3 className="text-xl font-semibold">Welcome back!</h3>
              <Link
                href={routes.authCallback}
                className={cn(buttonVariants({ size: "lg" }), "gap-2 w-full")}
              >
                <span>Continue to dashboard</span>
              </Link>
              <p className="text-sm">
                By clicking continue, you agree to our Terms of service and
                Privacy Policy.
              </p>
            </div>
          </div>
        </SignedIn>
      </Background>
    </main>
  );
}
