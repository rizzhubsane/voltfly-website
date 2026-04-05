import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Voltfly EV — Electric Scooter Rental for Delivery Partners in Delhi",
  description:
    "Rent electric scooties in Delhi for ₹230/day. Join 300+ delivery riders on Zomato, Zepto & Blinkit. Weekly plans, UPI payments, battery swap included.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="bg-page text-text-primary font-sans min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
