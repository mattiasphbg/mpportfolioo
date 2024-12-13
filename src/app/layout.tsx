import "~/styles/globals.css";
import React from "react";
import { ThemeProvider } from "src/components/theme-provider";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Mattias Pettersson",
  description: "Driven by data",
  icons: [{ rel: "icon", url: "/public/icon.ico" }],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Await the cookies call
  const cookieString = (await cookies()).toString();

  return (
    <>
      <html lang="en" suppressHydrationWarning={true}>
        <body className={`font-sans ${inter.variable}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <Header /> */}
            <TRPCReactProvider cookies={cookieString}>
              {children}
            </TRPCReactProvider>
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
