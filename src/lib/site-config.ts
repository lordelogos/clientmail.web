import { Metadata } from "next";

export const siteLinks = {
  githubPersonal: "https://github.com/lordelogos",
  xPersonal: "https://twitter.com/pauloe_me",
  githubProject: "https://github.com/lordelogos/clientmail.web",
};

export const siteConfig: Metadata = {
  title: "Client-mail",
  description:
    "Client-mail: Send emails from the client-side using javascript. No server required. Streamline Your Email Workflow with Secure and User-Friendly Client-mail Services",
  keywords: [
    "Client-mail",
    "React-email",
    "Emailjs",
    "Email javascript",
    "Client side",
    "Client email",
    "Email client",
    "Resend",
  ],
  authors: [
    {
      name: "Paul Ehikhuemen",
      url: siteLinks.githubPersonal,
    },
  ],
  creator: "Paul Ehikhuemen",
};
