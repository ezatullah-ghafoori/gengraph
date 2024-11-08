import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import { SidebarBtn } from "@/constants/SidebarBtn";
import SidebarItem from "@/components/sidebar/SidebarItem";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GMath Calculator",
  description: "Developed by GhafooriSoft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className={inter.className + " flex h-[130vh] overflow-x-hidden w-screen"}>
        <ToastContainer />
        <Sidebar>
          {SidebarBtn.map((btn, index) => {
            return <SidebarItem title={btn.title} key={index} className={btn.className} icon={btn.icon} link={btn.link} />
          })}
        </Sidebar>
        <main className="ml-16">
          {children}
        </main>
      </body>
    </html>
  );
}
