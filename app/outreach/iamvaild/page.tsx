import Image from "next/image"

export default async function Home() {
    return (
        <main className="bg-[url('/content/test2.svg')] bg-repeat-y bg-[#091314] text-center px-20 py-48 gap-10">
            <div className="flex justify-center items-center flex-col text-[#7AB7B7]">
                <Image src="/outreach/iamvaild.jpg" alt="image" width={300} height={100} className="m-12 rounded-full border-[#7AB7B7aa] border-8"/>
                <h1 className="text-3xl font-bold">#IamVaild</h1>
                <p className="italic text-sm m-12">“Everything is valid, except for bullying, invalidity, and pineapple pizza.” – Charlie Schulz</p>
                <hr className="border-[#7AB7B74a] border w-4/5"/>
                <p className="w-3/4 text-sm m-12">Charlie Schulz joined the TEST Team, Team 303, at the start of the 2015 competition season RECYCLE RUSH. He was an integral and important part of the team for the next three seasons, participating on the drive team for both the 2017 game, Steam Works, and the 2018 game, Power-Up. He was a great teammate and friend to many people, both to his fellow teammates on Team 303, and to those on other teams. As a transgender student Charlie made all of us more accepting. During his time on the team, Charlie was a strong advocate for the fact that everyone was valid as they are, and that no one should feel ashamed of who they are, or feel that they have to change it. Despite all the obstacles Charlie faced, he never forgot to have a sense of humor and make the most out of life.</p>
                <p className="w-3/4 text-sm">After graduation from high school, Charlie began college life at TCNJ. Unbeknownst to many, Charlie had been struggling with mental health, and he sadly succumbed to this battle in his Freshman year, In his memory, his family created the hashtag #iamvalid to spread the message that Charlie advocated for, that everyone and everything is valid and not one should make you feel invalid. Now, in his memory, we encourage people to use the hashtag to advocate.</p>
                <p className="w-3/4 text-sm m-12">We also encourage people to check out our <a href="https://www.youtube.com/@TheTESTTeam">YouTube channel</a>, which we use as a platform to spread Charlie’s message of inclusivity and acceptance. </p>
                <hr className="border-[#7AB7B74a] border w-4/5"/>

            </div>

        </main>
    );
}