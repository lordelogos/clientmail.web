import { Mails } from "lucide-react";

export default function Auth() {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-white dark:bg-slate-950">
      <div className="flex flex-col items-center justify-center gap-2 animate-pulse">
        <Mails className="w-10 h-10" />
        <span className="font-bold inline-block text-lg">Resend Client</span>
      </div>
    </main>
  );
}
