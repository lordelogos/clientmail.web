import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export function AddDomainForm() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Add a domain</CardTitle>
        <CardDescription>
          Please provide the domains from where your requests will be
          originating.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-2">
          <Label htmlFor="domain-name" className="flex items-center gap-2">
            Domain name(s)
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="w-4 h-4" />
                </TooltipTrigger>
                <TooltipContent>
                  Use a Comma (,) to separate multiple domain names
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Label>
          <div className="flex flex-col gap-4">
            <Input id="domain-name" placeholder="e.g. example.com, abc.com" />
            <Button variant={"default"} className="w-full">
              Add Domain
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
