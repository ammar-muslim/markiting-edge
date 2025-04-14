import type { Metadata } from "next";
import { Inter, Noto_Kufi_Arabic } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ClientLayout from "./components/layout/ClientLayout";

// استخدام خط Inter بدل Geist
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const kufiArabic = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi-arabic",
  subsets: ["arabic"],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Marketing Edge",
  description: "Your trusted source for marketing insights and strategies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${kufiArabic.className} antialiased min-h-screen bg-gray-50`}>
        <ClientLayout>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <ToastContainer 
                theme="colored" 
                position="top-center"
                className="mt-16"
                toastClassName="rounded-lg shadow-lg"
              />
              {children}
            </main>
            <Footer />
          </div>
        </ClientLayout>
      </body>
    </html>
  );
}
