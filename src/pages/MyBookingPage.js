import { useState } from "react";
import profile from "../images/profile.jpg";

export default function MyBookingPage() {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <div className="flex justify-between my-20 mx-20">
        {edit ? (
          ////////////////////////////
          <div className="pl-20">
            <h1 className="text-center text-zinc-900 text-5xl font-black font-display mb-10">
              MY BOOKING
            </h1>
            <img
              src={profile}
              className="h-60 w-60 rounded-full m-auto border-4 mb-10"
              alt="profile"
            />
            <div className="my-5">
              <div>
                <p className="text-3xl font-semibold text-zinc-900 font-display my-3">
                  Name :
                </p>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                  placeholder="Tony"
                />
              </div>
              <div>
                <p className="text-3xl font-semibold text-zinc-900 font-display my-3">
                  Email :
                </p>
                <div className="text-2xl font-regular text-zinc-500 font-display my-3">
                  TonyStark@gmail.com
                </div>
              </div>
              <div>
                <p className="text-3xl font-semibold text-zinc-900 font-display my-3">
                  Destination :
                </p>
                <select
                  id="destinations"
                  name="destinations"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
                  <option value="tao">Tao Island</option>
                  <option value="cnx">Chiangmai</option>
                  <option value="bkk">Bangkok</option>
                </select>
              </div>
              <div>
                <p className="text-3xl font-semibold text-zinc-900 font-display my-3">
                  Guide :
                </p>
                <div className="text-2xl font-regular text-zinc-500 font-display my-3">
                  Uncle Pol
                </div>
              </div>
              <div>
                <p className="text-3xl font-semibold text-zinc-900 font-display my-3">
                  Date :
                </p>
                <div className="text-2xl font-regular text-zinc-500 font-display my-3">
                  12/12/2222
                  <button>
                    <i className="fa-solid fa-pen-to-square ml-2"></i>
                  </button>
                </div>
              </div>
              <div>
                <p className="text-3xl font-semibold text-zinc-900 font-display my-3">
                  Price :
                </p>
                <div className="text-2xl font-regular text-zinc-500 font-display my-3">
                  2,500 THB
                </div>
              </div>
            </div>
            <div className="flex m-5">
              <button
                edit="true"
                onClick={() => setEdit(!edit)}
                className="text-center text-slate-100 text-xl font-bold font-display bg-green-600 hover:bg-green-500 rounded-3xl w-1/3 p-3 m-auto mt-5">
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="pl-20">
            <h1 className="text-center text-zinc-900 text-5xl font-black font-display mb-10">
              MY BOOKING
            </h1>
            <img
              src={profile}
              className="h-60 w-60 rounded-full m-auto border-4 mb-10"
              alt="profile"
            />
            <div className="my-5">
              <div>
                <p className="text-3xl font-semibold text-zinc-900 font-display my-3">
                  Name :
                </p>
                <div className="text-2xl font-regular text-zinc-500 font-display my-3">
                  Tony Stark
                </div>
              </div>
              <div>
                <p className="text-3xl font-semibold text-zinc-900 font-display my-3">
                  Email :
                </p>
                <div className="text-2xl font-regular text-zinc-500 font-display my-3">
                  TonyStark@gmail.com
                </div>
              </div>
              <div>
                <p className="text-3xl font-semibold text-zinc-900 font-display my-3">
                  Destination :
                </p>
                <div className="text-2xl font-regular text-zinc-500 font-display my-3">
                  Tao Island
                </div>
              </div>
              <div>
                <p className="text-3xl font-semibold text-zinc-900 font-display my-3">
                  Guide :
                </p>
                <div className="text-2xl font-regular text-zinc-500 font-display my-3">
                  Uncle Pol
                </div>
              </div>
              <div>
                <p className="text-3xl font-semibold text-zinc-900 font-display my-3">
                  Date :
                </p>
                <div className="text-2xl font-regular text-zinc-500 font-display my-3">
                  12/12/2222
                </div>
              </div>
              <div>
                <p className="text-3xl font-semibold text-zinc-900 font-display my-3">
                  Price :
                </p>
                <div className="text-2xl font-regular text-zinc-500 font-display my-3">
                  2,500 THB
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
        <div className="text-center text-xl font-semibold font-display p-5 border w-2/5 ">
          Calendar will be here ka
        </div>
      </div>
    </>
  );
}
