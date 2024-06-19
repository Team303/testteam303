"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Bento from "@/components/bento";

export default function Home() {
  return (
    <main className="bg-[url('/content/test1.svg')] bg-repeat-y bg-cover px-20 py-48 gap-10 text-[#7AB7B7] flex justify-center">
      <div className="w-4/5">
        <h1 className="text-6xl text-center font-bold mb-24">FLL & FTC</h1>
        <Bento />
      </div>
    </main>
  );
}
