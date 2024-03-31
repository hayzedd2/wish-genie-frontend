import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "./components/custom-comp/Navbar";
import { Cardo } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SignedIn } from "@clerk/nextjs";
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
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <head />
        <body className={`${workSans.className} min-h-screen bg-primarybg`}>
          <SignedIn>
            <Navbar />
          </SignedIn>

          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
