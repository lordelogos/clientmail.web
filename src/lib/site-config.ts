import { Metadata } from "next";

export const siteLinks = {
  githubPersonal: "https://github.com/lordelogos",
  xPersonal: "https://twitter.com/pauloe_me",
  githubProject: "https://github.com/lordelogos/clientmail.web",
  resendSite: "https://resend.com",
  plunkSite: "https://useplunk.com",
  url: "https://clientmail.xyz",
};

export const siteInfo = {
  name: "Clientmail",
};

export const siteConfig: Metadata = {
  title: {
    default: `${siteInfo.name} - Send Emails from the Client-side Using Javascript.`,
    template: `%s - ${siteInfo.name}`,
  },
  description:
    "Client-mail: Send emails from the client-side using javascript. No server required. Streamline Your Email Workflow with Secure and User-Friendly Client-mail Services",
  openGraph: {
    title: "Clientmail - Send Email from your client-side with javascript",
    description:
      "ClientMail enables you to send emails directly from the client-side of your javacript and typescript project. There is no need to setup your own server to handle emails. It works with the most popular email services.",
    siteName: "Clientmail",
    type: "website",
    locale: "en-US",
    url: siteLinks.url,
  },
  twitter: {
    card: "summary_large_image",
    title: "Clientmail - Send Email from your client-side with javascript",
    description:
      "ClientMail enables you to send emails directly from the client-side of your javacript and typescript project. There is no need to setup your own server to handle emails. It works with the most popular email services.",
    creator: "@pauloe_me",
  },
  keywords: [
    "Clientmail",
    "React-email",
    "Emailjs",
    "Email javascript",
    "Client email",
    "Email client",
    "Resend",
    "Plunk",
  ],
  authors: [
    {
      name: "Paul Ehikhuemen",
      url: siteLinks.githubPersonal,
    },
  ],
  creator: "Paul Ehikhuemen",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};
