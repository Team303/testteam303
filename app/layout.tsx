import type { Metadata } from "next";
import { Inter, Varela, Rubik } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";
import Footer from "../components/footer";

const inter = Rubik({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "The T.E.S.T. Team 303",
  description: "FIRST robotics team 303, based in Bridgewater, New Jersey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/img/Testy.png" sizes="any" />
      <body className={`bg-[#091314] ${inter.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
