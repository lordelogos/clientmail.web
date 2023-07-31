import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function GenerateKeyForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Generate keys</CardTitle>
        <CardDescription>
          Generate a public key for use in one-click
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email-service">Email service</Label>
              <Select>
                <SelectTrigger id="email-service">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper" defaultValue={"resend"}>
                  <SelectItem value="resend">Resend</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="api-key">API Key</Label>
              <Input
                id="api-key"
                placeholder="Enter your resend private key."
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Generate key</Button>
      </CardFooter>
    </Card>
  );
}
