'use client';

import Image from "next/image"
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"
import { Varela, Roboto_Mono } from "next/font/google";

const varela = Roboto_Mono({ weight: "500", subsets: ["latin"] });

export default function Nav() {
    return (
        <>

            <Image src="/ummm.svg" className="absolute" alt="logo" width={400} height={80} />

            <nav className={`${varela.className} z-50 flex filter fixed p-16 h-20 justify-between items-center w-full bg-gradient-to-r from-[#00000000] from-35% to-[#091314] text-[#7AB7B7] italic tracking-wide`}>
                <div className=""><Image src="/303.png" alt="logo" width={120} height={80} /></div>
                <div className="flex space-x-16 items-center">
                    <a className="" href="./">Home</a>
                    <a className="" href="./story">Story</a>
                    <a className="" href="./sponsors">Sponsors</a>
                    <a className="" href="./outreach">Outreach</a>


                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }} className="box rounded-full" href="./contact"><Button className="bg-[#008080] px-6 py-3 text-[#091314] border-none hover:bg-[#7AB7B7]" variant="outline">Contact Us</Button></motion.a>
                </div>
            </nav>


        </>
    )
}