// import { Inter } from "next/font/google";
import "./globals.css";
import './base.css'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Quicksand, Nunito } from 'next/font/google'; // Импортируем нужные шрифты

const quicksand = Quicksand({ weight: '400', subsets: ['latin'] });
const nunito = Nunito({ weight: '800', subsets: ['latin'] });

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VetCare",
  description: "For Your Pet\’s Natural Life & Care",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className} >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
