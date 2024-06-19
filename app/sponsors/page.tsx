import Image from "next/image";
import { sponsors } from "../../components/data/sponsors.json";

export default async function Home() {
  const { platinum, gold, sliver, bronze } = sponsors;

  return (
    <>
      <main className="flex flex-col justify-center items-center text-center px-20 py-48 gap-10 bg-[url('/content/test2.svg')] bg-repeat-y bg-cover text-[#729AA9]">
        <Image
          src="/content/spon.svg"
          alt="sponsors"
          width="500"
          height="100"
        />
        <p className="w-4/5 text-sm">
          A big thank you to all of our sponsors! Our success depends on the
          support of our generous sponsors. Scroll down to see our current
          sponsors, as well as our sponsor packages. If you are interested in
          becoming a sponsor for Team 303, please feel free to contact us.{" "}
        </p>
        <div className="flex flex-row justify-center items-center font-bold gap-10 px-12 py-6">
          <a
            href="./sponsors"
            className="border-b-2 border-[#008080] text-[#7AB7B7]"
          >
            Sponsors
          </a>
          <a href="./sponsors/ramp" className="text-[#729AA9AA]">
            Ramp & Mentors
          </a>
        </div>

        <Image src="/sponsors/txt1.svg" alt="" width={320} height={5} />
        <div className="flex justify-normal flex-wrap flex-col justify-center items-center sm:flex-row gap-10 bg-[#A5E7E740] items-center p-12 rounded-3xl w-4/5">
          {platinum.map((item, index) => (
            <a key={index} href={item.link}>
              <Image
                src={`/sponsors/${item.image}`}
                alt="j&j"
                width="300"
                height="5"
              />
            </a>
          ))}
        </div>
        <Image src="/sponsors/txt2.svg" alt="" width={190} height={5} />
        <div className="flex justify-normal flex-wrap flex-col justify-center items-center sm:flex-row gap-10 bg-[#A5E7E740] items-center p-12 rounded-3xl w-4/5">
          {gold.map((item, index) => (
            <a key={index} href={item.link}>
              <Image
                src={`/sponsors/${item.image}`}
                alt="j&j"
                width="300"
                height="5"
              />
            </a>
          ))}
        </div>
        <Image src="/sponsors/txt3.svg" alt="" width={250} height={5} />
        <div className="flex justify-normal flex-wrap flex-col justify-center items-center sm:flex-row gap-10 bg-[#A5E7E740] items-center p-12 rounded-3xl w-4/5">
          {sliver.map((item, index) => (
            <a key={index} href={item.link}>
              <Image
                src={`/sponsors/${item.image}`}
                alt="j&j"
                width="300"
                height="5"
              />
            </a>
          ))}
        </div>
        <Image src="/sponsors/txt4.svg" alt="" width={250} height={5} />
        <div className="flex justify-normal flex-wrap flex-col justify-center items-center sm:flex-row gap-10 bg-[#A5E7E740] items-center p-12 rounded-3xl w-4/5">
          {bronze.map((item, index) => (
            <a key={index} href={item.link}>
              <Image
                src={`/sponsors/${item.image}`}
                alt="j&j"
                width="300"
                height="5"
              />
            </a>
          ))}
        </div>

        <div>NUMBERS</div>
      </main>
    </>
  );
}
//why
