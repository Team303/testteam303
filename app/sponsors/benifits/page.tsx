import Image from "next/image";

function check() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-label="Included in Free plan"
        className="w-5 h-5 mx-auto dark:text-violet-600"
      >
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </>
  );
}

export default async function Home() {
  return (
    <main className="flex flex-col justify-center items-center text-center px-20 py-48 gap-10 text-[#729AA9]">
      <Image src="/content/spon.svg" alt="sponsors" width="500" height="100" />
      <p className="w-4/5 text-sm">
        A big thank you to all of our sponsors! Our success depends on the
        support of our generous sponsors. Scroll down to see our current
        sponsors, as well as our sponsor packages. If you are interested in
        becoming a sponsor for Team 303, please feel free to contact us.{" "}
      </p>

      <div className="flex flex-row justify-center items-center font-bold gap-10 px-12 py-6">
        <a href="../sponsors" className="text-[#729AA9AA]">
          Sponsors
        </a>
        <a href="../sponsors/ramp" className="text-[#729AA9AA]">
          Ramp & Mentors
        </a>
        <a
          href="../sponsors/benifits"
          className="border-b-2 border-[#008080] text-[#7AB7B7]"
        >
          Sponsor Benifits
        </a>
      </div>

      {/* <h1 className="text-4xl mt-12 font-bold">Our Sponsorship Tiers</h1>       */}

      <div className="container mx-auto p-12 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th></th>
              <th scope="col">
                <h2 className="px-2 text-lg font-medium">Copper</h2>
                <p className="mb-3">
                  <span className="text-2xl font-bold">$1-499</span>
                </p>
              </th>
              <th scope="col">
                <h2 className="px-2 text-lg font-medium">Bronze</h2>
                <p className="mb-3">
                  <span className="text-2xl font-bold">$500-999</span>
                </p>
              </th>
              <th scope="col">
                <h2 className="px-2 text-lg font-medium">Sliver</h2>
                <p className="mb-3">
                  <span className="text-2xl font-bold">$1,000-4,999</span>
                </p>
              </th>
              <th scope="col">
                <h2 className="px-2 text-lg font-medium">Gold</h2>
                <p className="mb-3">
                  <span className="text-2xl font-bold">$5,000-9,999</span>
                </p>
              </th>
              <th scope="col">
                <h2 className="px-2 text-lg font-medium">Platinum</h2>
                <p className="mb-3">
                  <span className="text-2xl font-bold">$10,000+</span>
                </p>
              </th>
            </tr>
          </thead>
          <tbody className="space-y-6 text-center divide-y">
            <tr className="border-[#EEEEEE1a] border-b-2">
              <th scope="row" className="text-left">
                <h3 className="py-3">“Thank you” poster/team photo</h3>
              </th>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
            </tr>
            <tr className="border-[#EEEEEE1a] border-b-2">
              <th scope="row" className="text-left">
                <h3 className="py-3">Invitation to team events</h3>
              </th>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
            </tr>
            <tr className="border-[#EEEEEE1a] border-b-2">
              <th scope="row" className="text-left">
                <h3 className="py-3">
                  Sponsor logo with link to sponsor website on team website
                </h3>
              </th>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
            </tr>
            <tr className="border-[#EEEEEE1a] border-b-2">
              <th scope="row" className="text-left">
                <h3 className="py-3">
                  Acknowledgement through display on robot
                </h3>
              </th>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
            </tr>
            <tr className="border-[#EEEEEE1a] border-b-2">
              <th scope="row" className="text-left">
                <h3 className="py-3">Name on pamphlet</h3>
              </th>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
            </tr>
            <tr className="border-[#EEEEEE1a] border-b-2">
              <th scope="row" className="text-left">
                <h3 className="py-3">Button Display (sponsor buttons)</h3>
              </th>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
            </tr>
            <tr className="border-[#EEEEEE1a] border-b-2">
              <th scope="row" className="text-left">
                <h3 className="py-3">
                  Name at end of team videos (used for awards, ceremonies, etc.)
                </h3>
              </th>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
            </tr>
            <tr className="border-[#EEEEEE1a] border-b-2">
              <th scope="row" className="text-left">
                <h3 className="py-3">
                  Sponsor name announced during competitions
                </h3>
              </th>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
            </tr>
            <tr className="border-[#EEEEEE1a] border-b-2">
              <th scope="row" className="text-left">
                <h3 className="py-3">
                  Sponsor basket (T-shirt, premiums, thank you letter)
                </h3>
              </th>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
            </tr>
            <tr className="border-[#EEEEEE1a] border-b-2">
              <th scope="row" className="text-left">
                <h3 className="py-3">
                  Private demonstration/presentation from team
                </h3>
              </th>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
            </tr>
            <tr className="border-[#EEEEEE1a] border-b-2">
              <th scope="row" className="text-left">
                <h3 className="py-3">
                  Buttons for team members to wear displaying sponsor logo
                </h3>
              </th>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{}</span>
              </td>
              <td>
                <span>{check()}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
