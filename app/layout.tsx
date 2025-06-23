import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pharmacist's AI Assistant",
  description: "AI-powered prescription processing system",
};

// This is like App.js - it wraps all pages
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation bar - appears on all pages */}
        <nav className="border-b bg-white">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              PharmAssist AI
            </Link>
            <div className="space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/upload">Upload</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </div>
          </div>
        </nav>

        {/* This is where page content gets rendered */}
        {children}

        {/* Toast notifications */}
        <Toaster />
      </body>
    </html>
  );
}
