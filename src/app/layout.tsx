import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { GeistSans } from "geist/font/sans";

import TopNav from "./_components/topnav";

export const metadata = {
  title: "T3 Gallery",
  description: "A simple gallery app built with T3",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col gap-8 bg-black text-white">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
