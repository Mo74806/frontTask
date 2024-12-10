import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ErrorBoundary from "@/ErrorBoundary";
import LeftSidebar from "@/components/LeftSidebar";
import Nav from "@/components/Nav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Front Assignment",
  description: "Generated by Next js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex w-100 overflow-hidden antialiased row   `}
      >
        {/* error boundary */}
        <ErrorBoundary>
          {/* nav bar in case of small devices */}
          <Nav />
          {/* side bar in case of bigger devices */}
          <div className="w-auto dinline">
            <LeftSidebar />
          </div>
          <div
            style={{ height: "100vh" }}
            className="flex-grow dinline overflow-scroll"
          >
            {/* //content */}
            <div className="lg:px-[100px]   px-[20px]">{children}</div>
          </div>
          {/* toaster to notify messages */}
          <Toaster />
        </ErrorBoundary>
      </body>
    </html>
  );
}