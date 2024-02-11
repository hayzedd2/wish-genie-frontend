import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "./components/custom-comp/Navbar";
import {Work_Sans} from "next/font/google"

const workSans = Work_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Add desired weights
  });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head />
        <body className={workSans.className}>
          <Navbar/>
          {children}</body>
      </html>
    </ClerkProvider>
  );
}
