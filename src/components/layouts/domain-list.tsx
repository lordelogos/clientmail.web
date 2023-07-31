import { Link, Trash } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export function DomainList() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Trusted domains</CardTitle>
        <CardDescription>
          These domains are allowed to use this service in production
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DomainListItem key={1} />
        <DomainListItem key={2} />
      </CardContent>
    </Card>
  );
}

function DomainListItem() {
  return (
    <div className="flex items-center justify-between py-2 rounded-m group">
      <div className="flex items-center gap-2">
        <Link className="w-[14px] h-[14px]" />
        <p className="text-sm font-medium">Example.com</p>
      </div>
      <Button
        size={"icon"}
        variant={"ghost"}
        className="pointer-events-auto:text-transparent group-hover:text-slate-950 dark:group-hover:text-slate-50"
      >
        <Trash className="w-4 h-4" />
      </Button>
    </div>
  );
}
