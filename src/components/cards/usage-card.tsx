import { siteLinks } from "@/lib/site-config";
import { CheckCheck, Copy } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { PackageInstallCopy } from "../ui/copy-with-options";
import { useState } from "react";
import { toast } from "sonner";
import { routes } from "@/lib/routes";

export function UsageCard() {
  const [activity, setActivity] = useState({
    class: false,
    send: false,
  });

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClass = () => {
    copyTextToClipboard('const clientMail = new ClientMail("rc_A1..")')
      .then(() => {
        setActivity({ ...activity, class: true });

        setTimeout(() => {
          setActivity({ ...activity, class: false });
        }, 3000);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleCopySend = () => {
    copyTextToClipboard(
      "clientMail.resend({ from: 'Acme <onboarding@resend.dev>', to: ['delivered@resend.dev'], subject: 'Hello World', html: '<strong>It works!</strong>',});"
    )
      .then(() => {
        setActivity({ ...activity, send: true });

        setTimeout(() => {
          setActivity({ ...activity, send: false });
        }, 3000);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <Card className="flex flex-col w-full py-4 px-6 gap-5">
      <div>
        <h2 className="font-medium">1. Install</h2>
        <p className="text-sm text-slate-700 dark:text-slate-400">
          Add the package to your javascript or typescript project
        </p>
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 mb-1">
        <pre className="text-sm max-w-[80%] overflow-ellipsis overflow-hidden">
          npm install client-mail
        </pre>
        <PackageInstallCopy packageName="client-mail" />
      </div>
      <div>
        <h2 className="font-medium">2. Create a class instance</h2>
        <p className="text-sm text-slate-700 dark:text-slate-400">
          Create an instance of the ClientMail class and pass in your public key
        </p>
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 mb-1">
        <pre className="text-sm max overflow-ellipsis overflow-hidden">
          {`const clientMail = new ClientMail("rc_A1..")`}
        </pre>
        <Button size={"icon"} variant={"ghost"} onClick={handleCopyClass}>
          {activity.class ? (
            <CheckCheck className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
      <div>
        <h2 className="font-medium text">3. Send your Emails</h2>
        <p className="text-sm text-slate-700 dark:text-slate-400">
          Using your preferred email service (e.g{" "}
          <a
            href={siteLinks.resendSite}
            target={"_blank"}
            className="font-medium border-b border-dashed"
          >
            Resend
          </a>
          )
        </p>
      </div>
      <div className="flex items-center justify-between px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 mb-1">
        <pre className="text-sm max overflow-ellipsis overflow-hidden">
          {`clientMail.resend(data);`}
        </pre>
        <Button size={"icon"} variant={"ghost"} onClick={handleCopySend}>
          {activity.send ? (
            <CheckCheck className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      </div>
      <h2 className="font-medium text">
        4. Read the{" "}
        <a
          href={routes.docs}
          target={"_blank"}
          className="font-bold border-b border-dashed"
        >
          docs ↗
        </a>
      </h2>
    </Card>
  );
}
