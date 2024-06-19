import Image from "next/image"

export default function Hero() {
    return (
        <main className="bg-[url('/content/test.svg')] flex justify-between px-20 py-36 gap-8 items-center">
            <div>
                <Image src="/dark/test-dark.png" alt="image" width={600} height={100} />
            </div>
            <div>
                <Image src="/dark/dark.png" alt="image" width={650} height={100} />
            </div>
        </main>
    );
}