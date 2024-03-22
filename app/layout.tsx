import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "./components/custom-comp/Navbar";
import { Cardo } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
const workSans = Cardo({
  subsets: ["latin"],
  weight: ["400", "700"], // Add desired weights
});
// const workFont = Work
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head />
        <body className={`${workSans.className} min-h-screen bg-primarybg`}>
          <Navbar />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
