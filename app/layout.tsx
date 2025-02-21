import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rashmi Suralkar | Senior Front-End Developer",
  description:
    "Senior Front-End Developer with over 15 years of experience in web development and front-end technologies. Specialised in Angular, React, Next.js, JavaScript / TypeScript along with Accessibility.",
  keywords: [
    "Frontend Developer",
    "Angular",
    "NgRx",
    "JavaScript",
    "TypeScript",
    "Bootstrap",
    "Accessibility",
    "React",
    "Next.js",
    "Web Development",
    "Github",
    "Microservices",
    "HTML5/CSS3/SASS",
    "Web Components",
    "Web Performance",
    "NodeJS",
    "ExpressJS",
  ],
  authors: [{ name: "Rashmi Suralkar" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prashmi9.github.io/Rashmi-Portfolio/",
    title: "Rashmi Suralkar | Senior Front-End Developer",
    description:
      "Experienced frontend developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Rashmi Suralkar Portfolio",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="canonical"
          href="https://prashmi9.github.io/Rashmi-Portfolio/"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
