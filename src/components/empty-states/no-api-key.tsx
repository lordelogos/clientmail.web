import { KeyRound } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { GenerateKeyDialog } from "../dialogs/generate-key";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function NoApiKeyState() {
  return (
    <Card className="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-white dark:bg-slate-950 py-12">
      <CardHeader className="flex flex-col items-center gap-4">
        <KeyRound className="w-10 h-10" />
        <CardTitle className="text-xl font-medium text-center">
          No API Keys
        </CardTitle>
      </CardHeader>
      <CardDescription className="mb-5">
        <Balancer className="text-center">
          Connect your email service api keys to start sending emails
        </Balancer>
      </CardDescription>
      <CardFooter>
        <GenerateKeyDialog />
      </CardFooter>
    </Card>
  );
}
