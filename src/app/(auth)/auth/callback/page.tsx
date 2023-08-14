import { Background } from "@/components/ui/background";
import AuthCallback from "@/components/auth/auth-callback";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign-in",
  description: "Sign into clientmail",
};

export default function AuthLogin() {
  return (
    <main className="h-screen w-screen flex items-center justify-center  dark:bg-slate-900/50">
      <Background>
        <AuthCallback />
      </Background>
    </main>
  );
}
