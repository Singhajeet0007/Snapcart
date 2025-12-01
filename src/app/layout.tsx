import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/Provider";

export const metadata: Metadata = {
  title: "SnapCart | 10 minutes grocery delivery app",
  description: "SnapCart is a grocery delivery app that gets your groceries to you in just 10 minutes. Shop from your favorite local stores and enjoy fast, reliable delivery right to your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen bg-linear-to-b from-green-100 to-white">
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
