import Image from "next/image"
import { BotCarousel, StoryCarousel } from "../../components/bots";


export default async function Home() {
    return (
        <main className="flex justify-center flex-col items-center px-20 py-40 bg-[url('/content/test2.svg')] bg-no-repeat bg-[#091314] text-[#6A8FB1] ">
            <Image src="/content/about.svg" width={300} height={5} alt="about" />
            <div className="w-full sm:w-4/5">
                <p className="text-center text-xs sm:text-sm p-12">Hailing from Bridgewater, New Jersey, The T.E.S.T. Team 303 competes in FIRST Mid-Atlantic events throughout the year. Based in Bridgewater-Raritan High School, the team participates in two kinds of robotics competitions each year: the FIRST Robotics Competition (FRC) in the winter/early spring, and the FIRST Tech Challenge (FTC) in the fall. Each competition season includes  a kickoff, in which that year’s challenge is revealed to teams at the same time worldwide, as well as six weeks for the teams to design, build, and test their robots, and travel to a variety of venues, in which Team 303 competes with and against other students from around the world. Both corporate and local sponsors are key to the team’s sustainability. These sponsors support the team financially and supply mentors and services, such as sheet metal fabrication. The contributions of the sponsors enable the team members to have the best possible resources, as well as the ability to acquire skills that are applicable to various future professions.</p>
            </div>
            <StoryCarousel />
            <BotCarousel />

        </main>
    );
}