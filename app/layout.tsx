"use client";

import "./globals.css";
import { IUIProvider } from "@/components/context";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>
        Experiemental Demo of UI as a function of AI - A project by Chris
        Mckenzie
      </title>
      <IUIProvider>
        <body className={openSans.className}>
          {children}
          <footer className="p-10 bg-slate-100">
            <p className="text-center text-sm text-gray-500 mb-2">
              Build by{" "}
              <a
                href="https://card.christophermckenzie.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Chris Mckenzie
              </a>
              . Powered by{" "}
              <a
                href="https://openai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                OpenAI
              </a>
              . Article for demo sourced from{" "}
              <a
                href="https://www.npr.org/2024/08/16/nx-s1-5078616/cars-v2x-connected-vehicles-transportation-dot-nhtsa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                NPR
              </a>
              .
            </p>
            <p className="text-center text-sm text-gray-500">
              Please provide provide feedback or just review the code here{" "}
              <a
                href="https://github.com/kenzic/ai-ui-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                github.com/kenzic/ai-ui-demo
              </a>
            </p>
          </footer>
        </body>
      </IUIProvider>
    </html>
  );
}
