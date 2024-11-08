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
      <body className={inter.className + " md:flex md:h-[130vh] overflow-x-hidden md:w-screen"}>
        <ToastContainer />

        <Sidebar>
          {SidebarBtn.map((btn, index) => {
            return <SidebarItem title={btn.title} key={index} className={btn.className} icon={btn.icon} link={btn.link} />
          })}
        </Sidebar>
        <h1 className="text-red-600 text-3xl font-bold text-center mt-36">We Are Sorry!!</h1>
        <p className="text-red-600 font-bold text-center mt-4 mx-4">Currently we don&apos;t have support for mobile version please try it with laptop and computer!!</p>
        <p className="text-green-600 font-bold text-center mt-4">Mobile Version is comming soon!!</p>
        <main className="ml-16 hidden md:block">
          {children}
        </main>
      </body>
    </html>
  );
}
