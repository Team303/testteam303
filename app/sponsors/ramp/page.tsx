import Image from "next/image"

export default async function Home() {
    return (
        <main className="flex flex-col justify-center items-center text-center px-20 py-48 gap-10 bg-[#EEE]">
            <Image src="/content/spon.svg" alt="sponsors" width="500" height="100" />
            <p className="w-4/5 text-sm">A big thank you to all of our sponsors! Our success depends on the support of our generous sponsors. Scroll down to see our current sponsors, as well as our sponsor packages. If you are interested in becoming a sponsor for Team 303, please feel free to contact us. </p>
            <div className="flex flex-row justify-center items-center font-bold gap-10 px-12 py-6">
                <a href="../sponsors" className="text-[#555]">Sponsors</a>
                <a href="#" className="border-b-2 border-[#008080]">Ramp & Mentors</a>
            </div>
            <Image src="/sponsors/ramp.png" alt="" width={1000} height={5} className="rounded-3xl" />
        </main>
    );
}