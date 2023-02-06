// import Navbar from "../layouts/Navbar";
// import Footer from "../layouts/Footer";
import tao1 from "../images/tao1.jpg";
import tao2 from "../images/tao2.jpg";
import profile from "../images/profile.jpg";
import Modals from "../components/Modal";

export default function DestinationPage() {
  return (
    <>
      <div className="p-10">
        {/* title, pic, description */}
        <div className="text-zinc-900 text-5xl font-black font-display px-10 pb-10">
          DESTINATION1
        </div>
        <div className="flex justify-around">
          <img
            src={tao1}
            className="h-100 w-2/5 "
            alt="tao1"
          />
          <img
            src={tao2}
            className="h-100 w-2/5 "
            alt="tao2"
          />
        </div>
        <div className="flex">
          <p className="text-center text-zinc-500 text-3xl font-semibold font-display p-10">
            If you’re looking for a quiet island to relax on
            in Thailand surrounded by incredible marine life
            look no further than Koh Tao. There are plenty
            of things to do here which will really allow you
            to experience the beauty of this place. This
            includes amazing snorkeling, incredible diving,
            mind-blowing viewpoints, and palm tree-covered
            beaches.
          </p>
        </div>
        {/* activities */}
        <div className="mt-10">
          <h2 className="text-zinc-900 text-5xl font-black font-display p-10">
            ACTIVITIES
          </h2>
          <p className="text-center text-zinc-500 text-3xl font-semibold font-display py-1 p-10">
            9.00 Pick up at the hotel 9.35 Arrive at the
            pier 10.00 Arrive at Nang Yuan Island. You can
            walk around the island or .. 12.00 Lunch on boat
            13.00 Pick up at the hotel 14.35 Arrive at the
            pier 15.00 Arrive at Nang Yuan Island. You can
            walk around the island or .. 16.15 Lunch on boat
            17.00 Arrive at Nang Yuan Island. You can walk
            around the island or .. pier 15.00 Arrive at
            Nang Yuan Island. You can walk around the island
            or .. 16.15 Lunch on boat 17.00 Arrive at Nang
            Yuan Island. You can walk around the island or
            ..
          </p>
        </div>
        <h2 className="text-zinc-900 text-5xl font-black font-display mt-20 mb-10">
          GUIDE : UNCLE POL
        </h2>
        <div className="flex justify around">
          {/* guide */}
          <div className="border w-1/2 p-3">
            <div className="flex-col">
              <img
                src={profile}
                className="h-60 w-60 rounded-full m-auto border-4 mb-10"
                alt="profile"
              />
              <h3 className="text-center text-zinc-900 text-3xl font-black font-display">
                UNCLE POL
              </h3>
              <p className="text-center text-zinc-500 text-3xl font-semibold font-display pt-5">
                asgmbopwnqnbqlwmebvpwnmbe
                rhqhrhawqesdhHqwmelbmn sdkgjeiAHGPhigiAHIG
                sdihgikHIGDOHDSoihgpoihdoiho aejhopajophj
              </p>
            </div>
          </div>
          {/* calendar */}
          <div className="border w-1/2 p-3 flex-col ">
            <p className="text-center text-zinc-900 text-xl font-black font-display mb-3">
              AVAILABLE DATE
            </p>
            <div className="m-auto border w-2/3 h-2/3">
              Calendar will be here ka
            </div>
            <div className="flex m-5">
              <button className="text-center text-slate-100 text-xl font-bold font-display bg-green-600 rounded-3xl w-1/3 p-3 m-auto">
                Let's Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
