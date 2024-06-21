import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  IoLogoInstagram,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoFlickr,
  IoLogoFacebook,
  IoLocation,
} from "react-icons/io5";

export default function Media() {
  return (
    <>
      <div className="flex justify-start items-center gap-10 text-3xl text-[#008080]">
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="box rounded-full"
          href="https://www.instagram.com/frcteam303/"
          target="#"
        >
          <IoLogoInstagram />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="box rounded-full"
          href="https://www.youtube.com/@TheTESTTeam"
          target="#"
        >
          <IoLogoYoutube />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="box rounded-full"
          href="https://twitter.com/frcteam303?lang=en"
          target="#"
        >
          <IoLogoTwitter />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="box rounded-full"
          href="https://www.flickr.com/people/99551619@N07/"
          target="#"
        >
          <IoLogoFlickr />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="box rounded-full"
          href="https://www.facebook.com/frcteam303/"
          target="#"
        >
          <IoLogoFacebook />
        </motion.a>
      </div>
    </>
  );
}
