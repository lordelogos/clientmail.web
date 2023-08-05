import SSOCallback from "@/components/auth/sso-callback";
import { Background } from "@/components/ui/background";
import { type HandleOAuthCallbackParams } from "@clerk/types";

export interface SSOCallbackPageProps {
  searchParams: HandleOAuthCallbackParams;
}

export default function SSOCallbackPage({
  searchParams,
}: SSOCallbackPageProps) {
  return (
    <main className="h-screen w-screen flex items-center justify-center  dark:bg-slate-900/50">
      <Background>
        <SSOCallback searchParams={searchParams} />
      </Background>
    </main>
  );
}
