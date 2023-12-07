import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastProvider } from "@/components/providers/toaster-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduTech LMS",
  description:
    "EduTech is a elearning platform for students to learn and get help from teachers",
  keywords:
    "MERN(MongoDB, Express Js React Js, Node Js) Stack, Java, Python, MySQL, PHP, C C++...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
        <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
