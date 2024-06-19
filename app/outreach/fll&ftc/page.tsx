"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default async function Home() {
  return (
    <main className="bg-[url('/content/test1.svg')] bg-repeat-y bg-cover px-20 py-48 gap-10 text-[#7AB7B7] flex justify-center">
      <div className="w-4/5">
        <h1 className="text-6xl text-center font-bold mb-24">FLL & FTC</h1>

        <div className="relative z-10 grid gap-3 grid-cols-12 grid-rows-4 text-left">
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full row-span-4 lg:col-span-5 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          >
            <p className="font-bold text-3xl">FIRST LEGO League</p>
            <p className="font-light text-ms my-4">
              This past year Team 303 has re-established 12 FLL Explore teams in
              our local elementary schools to connect with our youth on a deeper
              level and instill FIRST ideals within younger students.
            </p>
            <p className="font-light text-ms">
              Each week, mentors went to each school and helped guide the
              students through the FLL Explore Curriculum. Then, 303 went above
              and beyond by making fun FLL-style challenges for the students to
              accomplish. Students are left happy and excited for future FIRST
              opportunities every week.
            </p>
            <p className="font-bold text-3xl mt-6">MSTDC</p>
            <p className="font-light text-ms my-4">
              This past year Team 303 has established 16 new teams that will
              participate in the Middle School Technology Design
              Challenge(MSTDC). Leading up to the challenge, the team mentors
              the students as they design, build, and program.
            </p>
            <p className="font-light text-ms">
              Each week, the team visits the local Middle School, leading
              students through the engineering design process, in various
              challenges such as Sumo and Football Throw. Team 303 helps to host
              the event at the local Middle School. Schools from surrounding
              districts attend with their teams for a fun competition.
            </p>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full row-span-2 lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          >
            <Image
              src="/outreach/ftc&fll1.png"
              alt="img"
              className="w-84"
              width={200}
              height={"100"}
            />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full row-span-2 lg:col-span-4 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          >
            <Image
              src="/outreach/ftc&fll2.png"
              alt="img"
              className="w-84"
              width={200}
              height={"100"}
            />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full row-span-2 lg:col-span-4 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          >
            <Image
              src="/outreach/ftc&fll3.png"
              alt="img"
              className="w-84"
              width={200}
              height={"100"}
            />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full row-span-2 lg:col-span-3 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          >
            <Image
              src="/outreach/ftc&fll4.png"
              alt="img"
              className="w-84"
              width={200}
              height={"100"}
            />
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full lg:col-span-4 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          >
            <p className="font-bold text-3xl">BRIK Rampage</p>
            <p className="font-light text-ms my-4">
              In 2023, the team hosted an event called Brik Rampage in our local
              middle school. This event is a competition for local FLL Challenge
              teams to vie for the highest scores each game and place as high as
              they can. Team 303 helps FIRST by planning, running, and
              volunteering at the event to make sure it runs smoothly for all
              involved.
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full lg:col-span-4 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          >
            <p className="font-bold text-3xl">303 On Tour</p>
            <p className="font-light text-ms my-4">
              During build season, team 303 brought an FTC robot to one of their
              local intermediate schools, where the team gave students the
              opportunity to drive the robot, giving them a glimpse of FIRST and
              robotics at a higher level. On top of that, the team also hosted
              different STEAM related activities, such as bridge-building,
              marble runs, and programming challenges.
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.1 },
            }}
            className="col-span-full lg:col-span-4 overflow-hidden relative p-8 rounded-xl bg-[#FFFFFF12] border-2 border-[#FFFFFF15]"
          >
            <p className="font-bold text-3xl">Steam workshops</p>
            <p className="font-light text-ms my-4">
              Team 303 reached out to one of their local elementary schools,
              hoping to encourage STEM in their community. The team visited the
              school weekly, planning and running several engineering, design,
              and programming activites. The team later expanded on this
              program, reaching out to three schools in their district and
              starting 28 new LEGO robotics teams.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
