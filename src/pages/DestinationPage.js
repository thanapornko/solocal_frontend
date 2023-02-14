import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import useConfirm from "../hooks/useConfirm";
import ConfirmBooking from "../features/auth/ConfirmBooking";
import * as destinationApi from "../api/destination-api";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function DestinationPage() {
  const { authenticatedUser } = useAuth();
  const { open, setOpen } = useConfirm();

  const [date, setDate] = useState(new Date());

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

  const onChange = date => {
    setDate(date);
  };

  const newDate = date.toLocaleDateString().slice(0, 10);

  console.log(
    "newdate---------------------------",
    newDate
  );
  console.log(content);

  return (
    <>
      {open && (
        <ConfirmBooking
          newDate={newDate}
          content={content}
        />
      )}
      <div className="py-10 px-20">
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
          <p className="text-center text-zinc-500 text-2xl font-semibold font-display p-10">
            {content.description}
          </p>
        </div>
        {/* activities */}
        <div>
          <h2 className="text-zinc-900 text-4xl font-black font-display px-10 pb-5 pt-10">
            ACTIVITIES
          </h2>
          <p className="text-center text-zinc-500 text-2xl font-semibold font-display px-10">
            {content.activity}
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-center text-slate-100 text-xl font-bold font-display bg-green-600 rounded-3xl w-1/3 p-3 m-auto mt-5">
            PRICE : {content.price}
          </h2>
        </div>
        <div className="bg-zinc-800 rounded-3xl">
          <h2 className="text-stone-300 text-4xl font-black font-display px-10 py-5 mt-20">
            GUIDE : {content.Guide.name}
          </h2>
          <div className="flex">
            {/* guide */}
            <div className="border-t border-r w-1/2 p-10">
              <div className="flex-col">
                <img
                  src={content.Guide.profileImage}
                  className="h-60 w-60 rounded-full m-auto mb-5"
                  alt="profile"
                />
                <h3 className="text-center text-stone-300 text-3xl font-bold underline underline-offset-8 font-display">
                  {content.Guide.name}
                </h3>
                <p className="text-center text-stone-300 text-2xl font-semibold font-display mt-5">
                  {content.Guide?.description}
                </p>
              </div>
            </div>
            {/* calendar */}
            <div className="border-t w-1/2 flex-col py-10 px-40">
              <p className="text-center text-stone-300 text-xl font-black font-display mb-5">
                SELECT DATE
              </p>

              <Calendar
                className="mb-5"
                onChange={onChange}
                value={date}
              />
              <div className="flex">
                <button
                  onClick={handleOnClickForm}
                  className="text-center text-slate-100 text-xl font-bold font-display bg-green-600 hover:bg-green-500  rounded-3xl w-2/3 p-3 m-auto">
                  Let's Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
