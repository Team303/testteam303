import Image from "next/image"
import { IoLogoInstagram, IoLogoYoutube, IoLogoTwitter, IoLogoFlickr, IoLogoFacebook, IoLocation } from "react-icons/io5";

export default function Footer() {
    return (
        <footer className="flex justify-between items-center gap-10 px-12 pb-12 pt-20 border-t-2 border-[#7AB7B7] bg-[#323A3B]">
            <div className="flex justify-start items-center gap-10 text-3xl text-[#008080]">
                <a href="https://www.instagram.com/frcteam303/"><IoLogoInstagram /></a>
                <a href="https://www.youtube.com/@TheTESTTeam"><IoLogoYoutube /></a>
                <a href="https://twitter.com/frcteam303?lang=en"><IoLogoTwitter /></a>
                <a href="https://www.flickr.com/people/99551619@N07/"><IoLogoFlickr /></a>
                <a href="https://www.facebook.com/frcteam303/"><IoLogoFacebook /></a>

            </div>
            <div className="flex justify-end items-center gap-10 px-12 py-6 rounded">
                <Image src="/img/Testy.png" alt="testy" width={100} height={20} />
                <Image src="/content/first.png" alt="FIRST" width={80} height={20} />
            </div>
        </footer>

    )
}