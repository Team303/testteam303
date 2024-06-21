'use client';

import Image from "next/image"
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Bot() {
  return (
    <main className="flex flex-col lg:flex-row font-medium justify-between px-2 lg:px-48 text-xs lg:text-sm py-20 gap-20 items-center text-[#6A8FB1]">
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{
          opacity: 1, y: 0, transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.2
          }
        }}
        className="w-1/2 text-sm py-12">
        <Image src="/dark/2024-dark.svg" alt="image" width={500} height={100} />
        <motion.p initial={{ opacity: 0, y: 120 }}
          whileInView={{
            opacity: 1, y: 0, transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1
            }
          }} className="pb-6 pt-4">Check out our 2024 robot the for the FIRST robotics competition, Crescendo<br /></motion.p>

        <Accordion type="single" collapsible className="w-full">
          <motion.div initial={{ opacity: 0, y: 120 }}
            whileInView={{
              opacity: 1, y: 0, transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
              }
            }}>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-bold pt-4 pb-1 border-[#729AA9]">Hatboro-Horsham</AccordionTrigger>
              <AccordionContent>
                The team faced many wiring and inspection issues resulting in several issues the pit crew desperately fixed, and the team still managed to secure 3rd pick from alliance 4.
              </AccordionContent>
            </AccordionItem>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 120 }}
            whileInView={{
              opacity: 1, y: 0, transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
              }
            }}>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-bold pt-4 pb-1">Warren Hills</AccordionTrigger>
              <AccordionContent>
                The team came back with a revised robot for their week 4 event, which did exceptionally well during the first couple games,however misfortune led to some mechanical failures later into the event. The team proudly accept EI award, and are now going to Lehigh, to participate in the Mid-Atlantic District Championships
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        </Accordion>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 120, }}
        whileInView={{
          opacity: 1, y: 0, transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1
          }
        }} className="w-3/5">
        <Image src="/dark/2024bot-dark.png" alt="txt" width={1000} height={0} />

      </motion.div>
    </main>
  );
}

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion"

// import Image from "next/image"

// export default function Bot() {
//   return (
//     <main className="flex justify-between px-48 py-20 gap-20 items-center">
//       <div className="w-1/2 text-sm py-12">
//         <Image src="/content/2024.svg" alt="image" width={500} height={100} />
//         <p className="pb-6">Check out our 2024 robot the for the FIRST robotics competition, Crescendo<br /></p>

//         <Accordion type="single" collapsible className="w-full">
//           <AccordionItem value="item-1">
//             <AccordionTrigger className="text-lg font-bold pt-4 pb-1">Hatboro-Horsham</AccordionTrigger>
//             <AccordionContent>
//               The team faced many wiring and inspection issues resulting in several issues the pit crew desperately fixed, and the team still managed to secure 3rd pick from alliance 4.
//             </AccordionContent>
//           </AccordionItem>
//           <AccordionItem value="item-2">
//             <AccordionTrigger className="text-lg font-bold pt-4 pb-1">Warren Hills</AccordionTrigger>
//             <AccordionContent>
//               The team came back with a revised robot for their week 4 event, which did exceptionally well during the first couple games,however misfortune led to some mechanical failures later into the event. The team proudly accept EI award, and are now going to Lehigh, to participate in the Mid-Atlantic District Championships
//             </AccordionContent>
//           </AccordionItem>
//         </Accordion>
//       </div>
//       <div className="w-1/3">
//         <Image src="/img/chompy.png" alt="txt" width={300} height={0} />

//       </div>
//     </main>
//   );
// }