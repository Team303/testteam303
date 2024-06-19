import Image from "next/image"
import { IoLogoInstagram, IoLogoYoutube, IoLogoTwitter, IoLogoFlickr, IoLogoFacebook, IoLocation } from "react-icons/io5";

export default async function Home() {
    return (
        <main className="flex flex-col justify-center items-center text-left px-20 py-48 gap-10">
            <Image src="/content/contact.svg" alt="contact us" width={400} height={5} />
            <br /><br /><br />
            <div className="flex justify-between gap-72 px-24">
                <div>
                    <h1 className="text-xl py-4">Mail:</h1>
                    <p>Team 303 RAMP, Inc P.O. Box 8113 Bridgewater, NJ 08807</p>

                    <h1 className="text-xl py-4">Email:</h1>
                    <p >firstteam303@brrsd.k12.nj.us<br />
                        president@team303ramp.com<br />
                        vicepresident@team303ramp.com<br />
                        webmaster@team303ramp.com</p>
                </div>

                <div className="flex justify-start flex-col items-center gap-10 text-3xl text-[#008080]">
                    <a href="https://www.instagram.com/frcteam303/"><IoLogoInstagram /></a>
                    <a href="https://www.youtube.com/@TheTESTTeam"><IoLogoYoutube /></a>
                    <a href="https://twitter.com/frcteam303?lang=en"><IoLogoTwitter /></a>
                    <a href="https://www.flickr.com/people/99551619@N07/"><IoLogoFlickr /></a>
                    <a href="https://www.facebook.com/frcteam303/"><IoLogoFacebook /></a>

                </div>

            </div>

        </main>
    );
}