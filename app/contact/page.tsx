"use client";

import Image from "next/image";
import {
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoFlickr,
  IoLogoFacebook,
  IoLocation,
} from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const { toast } = useToast();
  return (
    <main className="flex flex-col justify-center items-center text-left px-20 py-48 gap-10">
      <Image
        src="/content/contact.svg"
        alt="contact us"
        width={400}
        height={5}
      />
      <br />
      <br />
      <br />
      <div className="flex justify-between gap-72 px-24">
        <div className="flex flex-col gap-3 items-left">
          <Button
            variant="secondary"
            className="text-left w-full border-2 border-[#AAAAAA1A] bg-[#AAAAAA1a] p-12 text-[#729AA9] hover:bg-[#AAAAAA2a]"
            onClick={() => {
              navigator.clipboard.writeText(
                "Team 303 RAMP, Inc P.O. Box 8113 Bridgewater, NJ 08807"
              );
              toast({
                description: "Copied to clipboard",
              });
            }}
          >
            <div className="flex flex-col">
              <h1 className="">Mail</h1>
              <p className="italic text-xs mt-2">
                Team 303 RAMP, Inc P.O. Box 8113 Bridgewater, NJ 08807
              </p>
            </div>
          </Button>

          <Button
            variant="secondary"
            className="text-left w-full border-2 border-[#AAAAAA1A] bg-[#AAAAAA1a] p-12 text-[#729AA9] hover:bg-[#AAAAAA2a]"
            onClick={() => {
              navigator.clipboard.writeText("outreach@team303.com");
              toast({
                description: "Copied to clipboard",
              });
            }}
          >
            <div className="flex flex-col">
              <h1 className="">Email</h1>
              <p className="italic text-xs mt-2">outreach@team303.com</p>
            </div>
          </Button>
        </div>

        <div className="flex justify-start flex-col items-center gap-10 text-3xl text-[#008080]">
          <a href="https://www.instagram.com/frcteam303/" target="#">
            <IoLogoInstagram />
          </a>
          <a href="https://www.youtube.com/@TheTESTTeam" target="#">
            <IoLogoYoutube />
          </a>
          <a href="https://twitter.com/frcteam303?lang=en" target="#">
            <IoLogoTwitter />
          </a>
          <a href="https://www.flickr.com/people/99551619@N07/" target="#">
            <IoLogoFlickr />
          </a>
          <a href="https://www.facebook.com/frcteam303/" target="#">
            <IoLogoFacebook />
          </a>
        </div>
      </div>
      <Toaster />
    </main>
  );
}
