import { useIUI, QueryLink, UIState } from "./context";
import { Slot } from "./slot";

export const Article = () => {
  const { makeQuery } = useIUI();

  return (
    <>
      <h1 className="text-3xl mb-2">
        U.S. presses the ‘reset button&apos; on technology that lets cars talk
        to each other
      </h1>
      <p className="m-0 text-sm">
        By:{" "}
        <QueryLink query="tell me bio info on the author Joel Rose">
          Joel Rose
        </QueryLink>
      </p>
      <p className="m-0 text-sm opacity-50 mb-3">Published: August 16, 2024</p>
      <div className="p-4 border flex justify-center bg-neutral-300">
        <Slot
          shouldUpdate={(uiState) => {
            return uiState.length > 0 &&
              uiState.at(-1)?.component === "SummaryComponent"
              ? [uiState.at(-1) as UIState]
              : false;
          }}
        >
          <button
            className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={async () => {
              makeQuery("Summarize article");
            }}
          >
            Summarize Article
          </button>
        </Slot>
      </div>
      <p className="m-0 pt-4 pb-2 text-lg">
        WASHINGTON — Safety advocates have been touting the potential of
        technology that allows vehicles to communicate wirelessly for years. So
        far, the rollout has been slow and uneven.
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        Now the{" "}
        <QueryLink query="provide insight on U.S. Department of Transportation">
          U.S. Department of Transportation
        </QueryLink>{" "}
        is releasing a roadmap it hopes will speed up deployment of that
        technology — and save thousands of lives in the process.
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        “This is proven technology that works,”{" "}
        <QueryLink query="provide bio info on Shailen Bhatt">
          Shailen Bhatt
        </QueryLink>
        , head of the Federal Highway Administration, said at an event Friday to
        mark the release of the deployment plan for vehicle-to-everything, or{" "}
        <QueryLink query="provide insights as to what v2x is">V2X</QueryLink>,
        technology across U.S. roads and highways.
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        V2X allows cars and trucks to exchange location information with each
        other, and potentially cyclists and pedestrians, as well as with the
        roadway infrastructure itself. Users could send and receive frequent
        messages to and from each other, continuously sharing information about
        speed, position, and road conditions — even in situations with poor
        visibility, including around corners or in dense fog or heavy rain.
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        “The roadway is safer when all the vehicles are connected, and when all
        those road users are connected,” Bhatt said in an interview.
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        Safety advocates say V2X technology could help prevent thousands of
        crashes a year, and also mitigate damage by lowering the speed of impact
        when crashes do occur. They hope that help will bring down the number of
        traffic fatalities in the U.S., which has climbed to more than 40,000
        per year.
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        “The plan is a vital first step towards realizing the full life-saving
        potential of this technology,” said Jennifer Homendy, the chair of the
        National Transportation Safety Board.
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        Homendy joined the press event virtually from{" "}
        <QueryLink query="Give me insigh info on Swanton, Ohio">
          Swanton, Ohio
        </QueryLink>
        , where the NTSB is investigating a series of crashes involving multiple
        trucks on the Ohio Turnpike this week. V2X technology could potentially
        have prevented the crashes that killed four people and injured several
        more, she said.
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        “V2X can help reverse the devastating public health crisis on our
        nation’s roads,” Homendy said, “and fundamentally transform our nation’s
        transportation landscape.”
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        Despite enthusiasm from safety advocates and federal regulators, the
        technology has faced a bumpy rollout. During the{" "}
        <QueryLink query="tell me about Obama">Obama</QueryLink> administration,
        the National Highway Traffic Safety Administration proposed making the
        technology mandatory on cars and light trucks. But the agency later
        dropped that idea during the Trump administration.
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        The deployment of V2X has been “hampered by regulatory uncertainty,”
        said{" "}
        <QueryLink query="tell me more about John Bozzella">
          John Bozzella
        </QueryLink>
        , president and CEO of the Alliance for Automotive Innovation, a trade
        group that represents automakers.
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        But he’s optimistic that the new plan will help.
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        “This is the reset button,” Bozzella said at Friday’s announcement.
        “This deployment plan is a big deal. It is a crucial piece of this V2X
        puzzle.”
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        The plan lays out some goals and targets for the new technology. In the
        short-term, the plan aims to have V2X infrastructure in place on on 20%
        of the National Highway System by 2028, and for 25% of the nation&apos;s
        largest metro areas to have V2X enabled at signalized intersections.
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        V2X technology still faces some daunting questions, including how to pay
        for the rollout of critical infrastructure and how to protect connected
        vehicles from cyberattack.
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        But safety advocates say it’s past time to find the answers.
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        “We know how to create safer cars using the incredible technology that
        has transformed life in America,” said{" "}
        <QueryLink query="Tell me about Dan Langenkamp">
          Dan Langenkamp
        </QueryLink>
        , whose wife, U.S. diplomat Sarah Langenkamp, was killed by a flatbed
        truck while riding her bicycle in Maryland almost two years ago.
      </p>

      <p className="m-0 pt-2 pb-2 text-lg">
        “How can we as government officials, as manufacturers, and just as
        Americans, not push this technology forward as fast as we possibly can,”
        Langenkamp said, “knowing that we have the power to rescue ourselves
        from this disaster, this crisis on our roads.”
      </p>
    </>
  );
};
