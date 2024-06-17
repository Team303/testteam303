import Hero from "../components/hero";
import Mission from "../components/mission";
import Bot from "../components/bot";
import { motion } from "framer-motion";

import { Varela, Roboto } from "next/font/google";

const varela = Varela({ weight: "400", subsets: ["latin"] });


export default async function Home() {
  return (
    <main className={`${varela.className} bg-[url('/content/test.svg')] bg-no-repeat bg-[#091314]`}>
      <Hero />
      <Mission />
      <Bot />
    </main>
  );
}