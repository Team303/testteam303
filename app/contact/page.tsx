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
import Clip from "@/components/clip";
import { motion } from "framer-motion";
import Media from "@/components/media";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center text-left px-20 py-48 gap-10">
      <Image
        src="/content/contact.svg"
        alt="contact us"
        width={400}
        height={5}
      />
      <div className="flex flex-col justify-center items-center my-12 gap-12">
        <Clip />
        <Media />
        
      </div>
      <Toaster />
    </main>
  );
}
