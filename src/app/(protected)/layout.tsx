import QueryProvider from "@/components/query-provider";
import { UserContextProvider } from "@/context/user";
import { ClerkProvider } from "@clerk/nextjs";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <UserContextProvider>
        <QueryProvider>{children}</QueryProvider>
      </UserContextProvider>
    </ClerkProvider>
  );
}
