import {Work_Sans} from "next/font/google"

const workSans = Work_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Add desired weights
  });

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${workSans.className} min-h-screen w-full flex items-center justify-center`}>{children}</div>;
}
