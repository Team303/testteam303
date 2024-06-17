import type { Metadata } from "next";
import { Inter, Varela } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

const inter = Varela({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "The T.E.S.T. Team 303",
  description: "FIRST robotics team 303, based in Bridgewater, New Jersy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/img/Testy.png" sizes="any" />
      <body className={`bg-[#EEE] ${inter.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
