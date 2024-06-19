"use client"

import Image from "next/image"
import Media from "./media";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="flex justify-between items-center gap-10 px-12 pb-12 pt-20 border-t-2 border-[#7AB7B7] bg-[#323A3B]">
            <Media/>
            <div className="flex justify-end items-center gap-10 px-12 py-6 rounded">
                <Image src="/img/Testy.png" alt="testy" width={100} height={20} />
                <Image src="/content/first.png" alt="FIRST" width={80} height={20} />
            </div>
        </footer>

    )
}