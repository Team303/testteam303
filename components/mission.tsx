'use client';

import Image from "next/image"
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <main className="flex flex-col lg:flex-row justify-between px-2 text-xs lg:text-sm lg:px-48 py-20 gap-10 items-center text-[#729AA9]">
            <motion.div
                initial={{ opacity: 0, y: 120, rotate: -10 }}
                whileInView={{
                    opacity: 1, y: 0, rotate: 0, transition: {
                        type: "spring",
                        bounce: 0.4,
                        duration: 1.2
                    }
                }}
            >
                <Image src="/dark/john-dark.png" alt="image" width={500} height={100} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{
                    opacity: 1, y: 0, transition: {
                        type: "spring",
                        bounce: 0.4,
                        duration: 1.2
                    }
                }}
                className="w-1/2">
                <Image src="/dark/mission-dark.svg" alt="txt" width={300} height={0} />
                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{
                        opacity: 1, y: 0, transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 1.6
                        }
                    }} className="py-12 text-sm">To inspire, motivate, and educate about FIRST, and to make STEAM an integral part of our students lives as well as our community. We are dedicated to teaching members real-world applications in both engineering and community outreach so that they will be able to succeed in the real world. We strive to maintain outstanding relationships between students, advisors, mentors, sponsors, and teachers. We believe that engineering is for everyone.
                </motion.p>
            </motion.div>
        </main>
    );
}

// import Image from "next/image"

// export default function Hero() {
//     return (
//         <main className="flex justify-between px-48 py-20 gap-10 items-center">
//             <div>
//                 <Image src="/img/mission.png" alt="image" width={500} height={100} />
//             </div>
//             <div className="w-1/2">
//                 <Image src="/content/missiontxt.png" alt="txt" width={300} height={0} />
//                 <p className="py-12 text-sm">To inspire, motivate, and educate about FIRST, and to make STEAM an integral part of our students lives as well as our community. We are dedicated to teaching members real-world applications in both engineering and community outreach so that they will be able to succeed in the real world. We strive to maintain outstanding relationships between students, advisors, mentors, sponsors, and teachers. We believe that engineering is for everyone.
//                 </p>
//             </div>
//         </main>
//     );
// }