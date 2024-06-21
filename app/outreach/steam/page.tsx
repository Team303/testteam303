"use client";

import Image from "next/image";
import { MovingImgs } from "@/components/rotating-imgs";

export default async function Home() {
  return (
    <main className="bg-[url('/content/test2.svg')] bg-repeat-y bg-cover px-20 py-48 gap-10 text-[#7AB7B7]">
      <div className="flex flow-row items-center gap-10 m-12">
        <div className="w-full text-center flex justify-center items-center flex-col">
          <h1 className="text-5xl font-bold mx-12">STEAM & Sensor Fair</h1>
          <Image
            src="/outreach/steam.png"
            alt="img"
            width="350"
            height="10"
            className="rounded-md mt-12"
          />
          <p className="m-12 w-4/5">
            The Steam Fair is an annual event that Team 303 hosts at the High
            School. Every year, each member of 303 pairs up and they make a
            presentation and activity for the incoming attendees. These
            activities each represent an aspect of STEAM, ranging from
            slime-making competitions to popsicle explosions! The mission of
            this initiative is to be able to spread STEAM to people of all ages.
            The event allows people to experience STEAM in ways they never
            thought possible. Making STEAM fun and interactive is a huge goal
            for 303, and we strive to allow people to pursue their interests in
            STEAM.
          </p>
          <hr className="border-[#7AB7B74a] border w-4/5" />
          <p className="m-12">
            The Steam Fair is an annual event that Team 303 hosts at the High
            School. Every year, each member of 303 pairs up and they make a
            presentation and activity for the incoming attendees. These
            activities each represent an aspect of STEAM, ranging from
            slime-making competitions to popsicle explosions!
          </p>
        </div>
      </div>

      <MovingImgs />

      <div className="flex flow-row items-center gap-10 m-12">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mx-12">4-H-Fair</h1>
          <hr className="w-12 mx-12 mt-3 border-[#7AB7B74a] border" />
          <p className="m-12">
            Each year, team 303 participates in the Somerset County 4-H Fair, an
            event that promotes local clubs and organizations. The team uses the
            fair as an opportunity to further encourage the values of STEM in
            their community. The team displays their robot, allowing visitors to
            drive it, along with several other interactive STEM activities.
          </p>
        </div>
        <div className="w-1/2">{/**Image **/}</div>
      </div>
      <div className="flex flow-row items-center gap-10 m-12">
        <div className="w-1/2">{/**Image **/}</div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mx-12">Forest Fest</h1>
          <hr className="w-12 mx-12 mt-3 border-[#7AB7B74a] border" />
          <p className="m-12">
            Team 303 annually participates at Forest Fest, an event hosted by
            their local intermediate school. At the event, the team showcases
            their robot, and allows students to drive and control it.
            Additionally, the team runs a range of interactive engineering
            activities, introducing younger students to the FIRST program, and
            promoting STEM.
          </p>
        </div>
      </div>
    </main>
  );
}
