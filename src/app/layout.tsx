import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QueryProvider from "@/components/query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resend Client",
  description:
    "Send emails from the client using javascript. No server required.",
  keywords: [
    "Resend",
    "React-email",
    "Emailjs",
    "Email javascript",
    "Client side",
    "Client email",
    "Email client",
    "Resend client",
  ],
  authors: [
    {
      name: "Paul Ehikhuemen",
      url: "https://github.com/lordelogos",
    },
  ],
  creator: "Paul Ehikhuemen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <QueryProvider>{children}</QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
