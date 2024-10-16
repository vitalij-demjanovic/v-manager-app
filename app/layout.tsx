import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";


const jetBrains = JetBrains_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "V-Manager",
  description: "Project management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={jetBrains.className}
      >
        {children}
      </body>
    </html>
  );
}
