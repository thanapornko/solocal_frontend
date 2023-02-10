import { useState, useEffect } from "react";
import tao1 from "../images/tao1.jpg";
import tao2 from "../images/tao2.jpg";
import profile from "../images/profile.jpg";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import useConfirm from "../hooks/useConfirm";
import ConfirmBooking from "../features/auth/ConfirmBooking";
import * as destinationApi from "../api/destination-api";
import * as guideApi from "../api/guide-api";
import { useParams } from "react-router-dom";

export default function DestinationPage() {
  console.log("first");
  const { authenticatedUser } = useAuth();
  const { open, setOpen } = useConfirm();
  // const [open, setOpen] = useState(false);

  const params = useParams();
  // { dddd: '1111', eeee: '7777' }
  const [content, setContent] = useState({ Guide: {} });
  // const navigate = useNavigate();

  const handleOnClickForm = () => {
    console.log(authenticatedUser);
    if (!authenticatedUser) {
      return toast.error("Please login");
    }
    setOpen(!open);
    // navigate("/confirmbooking");
  };

  useEffect(() => {
    const fetchContent = async () => {
      const res = await destinationApi.addDestination(
        params.destinationId
      );
      setContent(res.data.destinations);
    };
    fetchContent();
  }, []);

  // useEffect(() => {
  //   const fetchDestinationImage = async () => {
  //     const res = await destinationApi.addDestinationImage(
  //       params.destinationId
  //     );
  //     setContent(res.data.destinations);
  //   };
  //   fetchDestinationImage();
  // }, []);

  // useEffect(() => {
  //   const fetchGuideImage = async () => {
  //     const res = await guideApi.addGuideImage(
  //       params.guideId
  //     );
  //     setContent(res.data.guides);
  //   };
  //   fetchGuideImage();
  // }, []);

  return (
    <>
      {open && <ConfirmBooking />}
      <div className="p-10">
        {/* title, pic, description */}
        <div className="text-zinc-900 text-5xl font-black font-display px-10 pb-10">
          {content.name}
        </div>
        <div className="flex justify-around">
          <img
            src={content.image1}
            className="h-100 w-2/5 "
            alt="tao1"
          />
          <img
            src={content.image2}
            className="h-100 w-2/5 "
            alt="tao2"
          />
        </div>
        <div className="flex">
          <p className="text-center text-zinc-500 text-3xl font-semibold font-display p-10">
            {content.description}
          </p>
        </div>
        {/* activities */}
        <div className="mt-10">
          <h2 className="text-zinc-900 text-5xl font-black font-display p-10">
            ACTIVITIES
          </h2>
          <p className="text-center text-zinc-500 text-3xl font-semibold font-display py-1 p-10">
            {content.activity}
          </p>
        </div>
        <h2 className="text-zinc-900 text-5xl font-black font-display mt-20 mb-10">
          GUIDE : {content.Guide.name}
        </h2>
        <div className="flex justify around">
          {/* guide */}
          <div className="border w-1/2 p-3">
            <div className="flex-col">
              <img
                src={content.Guide.profileImage}
                className="h-60 w-60 rounded-full m-auto border-4 mb-10"
                alt="profile"
              />
              <h3 className="text-center text-zinc-900 text-3xl font-black font-display">
                {content.Guide.name}
              </h3>
              <p className="text-center text-zinc-500 text-3xl font-semibold font-display pt-5">
                {content.Guide?.description}
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
              <button
                onClick={handleOnClickForm}
                className="text-center text-slate-100 text-xl font-bold font-display bg-green-600 rounded-3xl w-1/3 p-3 m-auto">
                Let's Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
