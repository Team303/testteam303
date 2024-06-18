import Image from "next/image";

export default async function Home() {
  return (
    <main className="bg-[url('/content/test1.svg')] bg-repeat-y bg-[#091314] px-20 py-48 gap-10 text-[#7AB7B7]">
      <div className="flex flow-row items-center gap-10 m-12">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mx-12">4-H-Fair</h1>
          <hr className="w-12 mx-12 mt-3 border-[#7AB7B74a] border" />
          <p className="m-12">
            Each year, team 303 participates in the Somerset County 4-H Fair, an
            event that promotes local clubs and organizations. The team uses the
            fair as an opportunity to further encourage the values of STEM in
            their community. The team displays their robot, allowing visitors to
            drive it, along with several other interactive STEM activities.
          </p>
        </div>
        <div className="w-1/2">{/**Image **/}</div>
      </div>
      <div className="flex flow-row items-center gap-10 m-12">
        <div className="w-1/2">{/**Image **/}</div>
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mx-12">Forest Fest</h1>
          <hr className="w-12 mx-12 mt-3 border-[#7AB7B74a] border" />
          <p className="m-12">
            Team 303 annually participates at Forest Fest, an event hosted by
            their local intermediate school. At the event, the team showcases
            their robot, and allows students to drive and control it.
            Additionally, the team runs a range of interactive engineering
            activities, introducing younger students to the FIRST program, and
            promoting STEM.
          </p>
        </div>
      </div>
    </main>
  );
}
