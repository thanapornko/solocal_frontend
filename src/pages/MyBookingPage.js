import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import profile from "../images/profile.jpg";
import * as bookingApi from "../api/booking-api";
import * as userApi from "../api/user-api";

export default function MyBookingPage() {
  const [edit, setEdit] = useState(false);
  const { authenticatedUser, updateProfile } = useAuth();
  const [content, setContent] = useState({});
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState("");

  // console.log("auth ---- ", authenticatedUser.name);

  useEffect(() => {
    if (!name) {
      setName(authenticatedUser.name);
    }
  }, [authenticatedUser.name]);

  const handleChangeName = async e => {
    setName(e.target.value);
  };

  const handleClickSave = async () => {
    try {
      // convert => multipart form data
      const formData = new FormData();
      // method append เพิ่มkey
      formData.append("profileImage", file);
      // ชื่อ key, file
      await updateProfile(formData);
      await userApi.updateUserName({ name });
      toast.success("successfully updated!");
      setEdit(!edit);
      window.scrollTo(0, 0);
    } catch (err) {
      toast.error(
        err.response?.data.message || "Failed to update"
      );
    }
  };
  console.log("---------------name", name);

  //////////////////////////////////////////
  const fetchBookingId = async userId => {
    try {
      const res = await bookingApi.getBooking(userId);
      console.log(res.data.booking.id);
      return res.data.booking.id;
    } catch (error) {
      toast.error("You don't have any bookings to delete");
    }
  };

  const handleCancelBooking = async () => {
    const userId = authenticatedUser.id;
    const bookingId = await fetchBookingId(userId);

    const result = window.confirm(
      "Are you sure to cancel this booking?"
    );
    if (!result) {
      console.log("Booking cancellation canceled");
      return;
    }

    try {
      await bookingApi.deleteBooking(bookingId);
      toast.success(
        "The booking was successfully cancelled"
      );
      navigate("/");
      window.scrollTo(0, 0);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(authenticatedUser.profileImage, "pic");

  ///////////////////////////////
  useEffect(() => {
    const fetchContent = async () => {
      const res = await bookingApi.getBooking(
        authenticatedUser.id
      );

      setContent(res.data.booking);
    };
    fetchContent();
  }, []);

  console.log(authenticatedUser, "--content mybooking");

  ///////////////////////////////
  const date =
    content && content.date
      ? new Date(
          content.date.toLocaleString()
        ).toLocaleDateString()
      : "-";

  return (
    <>
      {edit ? (
        ////////////////////////////
        <div className="p-10 w-1/2 border shadow-xl rounded-lg mx-auto my-10">
          <h1 className="text-center text-zinc-900 text-4xl font-black font-display mb-10">
            MY BOOKING
          </h1>
          <div className="text-center">
            <button>
              <img
                src={
                  file
                    ? URL.createObjectURL(file)
                    : authenticatedUser.profileImage ||
                      profile
                }
                className="h-60 w-60 rounded-full m-auto border-4 mb-5"
              />
              <input
                onChange={e => {
                  if (e.target.files[0]) {
                    setFile(e.target.files[0]);
                  }
                }}
                type="file"
                className="text-sm text-grey-500
            hover:file:cursor-pointer hover:file:bg-grey-300
            hover:file:text-blue-500
          "
              />
            </button>
          </div>
          <div className="my-5">
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Name :
              </p>
              {/* <div className="text-xl font-regular text-zinc-500 font-display my-3">
                {authenticatedUser.name}
              </div> */}
              <input
                type="text"
                id="name"
                value={name}
                onChange={e => handleChangeName(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                placeholder={authenticatedUser?.name}
              />
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Email :
              </p>
              <div className="text-1xl font-regular text-zinc-500 font-display my-3">
                {authenticatedUser?.email}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Destination :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                {content &&
                content.Guide &&
                content.Guide.Destination
                  ? content.Guide.Destination.name
                  : "-"}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Guide :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                {content && content.Guide
                  ? content.Guide?.name
                  : "-"}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Date :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                {date}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Price :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                {content && content.Guide
                  ? content.Guide?.Destination.price
                  : "-"}
              </div>
            </div>
          </div>
          <div className="flex m-5">
            <button
              edit="true"
              onClick={handleClickSave}
              className="text-center text-slate-100 text-xl font-bold font-display bg-green-600 hover:bg-green-500 rounded-3xl w-1/3 p-3 m-auto mt-5 m-3">
              Save
            </button>
            <button
              edit="true"
              onClick={() => setEdit(false)}
              className="text-center text-slate-100 text-xl font-bold font-display bg-gray-600 hover:bg-gray-500 rounded-3xl w-1/3 p-3 m-auto mt-5 m-3">
              Cancel
            </button>
            <button
              edit="true"
              onClick={handleCancelBooking}
              className="text-center text-slate-100 text-xl font-bold font-display bg-red-600 hover:bg-red-500 rounded-3xl w-1/3 p-3 m-auto mt-5 m-3">
              Cancel Booking
            </button>
          </div>
        </div>
      ) : (
        <div className="p-10 w-1/2 border shadow-xl rounded-lg mx-auto my-10">
          <h1 className="text-center text-zinc-900 text-4xl font-black font-display mb-10">
            MY BOOKING
          </h1>
          <img
            src={authenticatedUser?.profileImage || profile}
            className="h-60 w-60 rounded-full m-auto border-4 mb-10"
            alt="profile"
          />
          <div className="my-5">
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Name :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                {/* {authenticatedUser.name} */}
                {name}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Email :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                {authenticatedUser?.email}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Destination :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                {content &&
                content.Guide &&
                content.Guide.Destination
                  ? content.Guide.Destination.name
                  : "-"}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Guide :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                {content && content.Guide
                  ? content.Guide?.name
                  : "-"}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Date :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                {date}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Price :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                {content && content.Guide
                  ? content.Guide.Destination.price
                  : "-"}
              </div>
            </div>
          </div>
          <div className="flex m-5">
            <button
              edit="false"
              onClick={() => setEdit(true)}
              className="text-center text-slate-100 text-xl font-bold font-display bg-gray-600 hover:bg-gray-500 rounded-3xl w-1/3 p-3 m-auto mt-5">
              Edit
            </button>
          </div>
        </div>
      )}
      {/* {content && content.Destination ? (
        <div className="p-5 border shadow-xl text-slate-100 bg-green-500 font-bold font-display rounded-lg mx-auto mb-20">
          Your booking is complete. We'll contact you via
          email as soon as possible.
        </div>
      ) : (
        ""
      )} */}
    </>
  );
}
