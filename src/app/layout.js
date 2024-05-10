// import { Inter } from "next/font/google";
import "./globals.css";
import './base.css'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Quicksand, Nunito } from 'next/font/google'; // Импортируем нужные шрифты
import Head from "next/head";

const quicksand = Quicksand({ weight: '400', subsets: ['latin'] });
const nunito = Nunito({ weight: '800', subsets: ['latin'] });

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VetCare",
  description: "For Your Pet\’s Natural Life & Care",
  icons: {
    icon: "/public/favicon/favicon-16x16.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="./../../public/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./../../public/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="./../../public/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="./../../public/favicon/site.webmanifest"></link>
      </Head>
      <body className={nunito.className} >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
