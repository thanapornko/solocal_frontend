import { useState } from "react";
import useAuth from "../hooks/useAuth";
import profile from "../images/profile.jpg";

export default function MyBookingPage() {
  const [edit, setEdit] = useState(false);
  const { authenticatedUser, updateProfile } = useAuth();
  const [file, setFile] = useState(null);

  const handleClickSave = async () => {
    // convert => multipart form data
    const formData = new FormData();
    // method append เพิ่มkey
    formData.append("profileImage", file);
    // ชื่อ key, file
    await updateProfile(formData);
    setEdit(!edit);
  };

  return (
    <>
      {edit ? (
        ////////////////////////////
        <div className="p-10 w-1/2 border shadow-xl rounded-lg mx-auto mt-20 mb-20">
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
                // แปลงเป็นลิ้ง
                // {
                //   authenticatedUser.profileImage ||
                //   profile
                // }
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
                name :
              </p>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
                placeholder={authenticatedUser.name}
              />
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Email :
              </p>
              <div className="text-1xl font-regular text-zinc-500 font-display my-3">
                {authenticatedUser.email}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
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
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Guide :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                Uncle Pol
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Date :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                12/12/2222
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Price :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                2,500 THB
              </div>
            </div>
          </div>
          <div className="flex m-5">
            <button
              edit="true"
              onClick={handleClickSave}
              // onClick={() => setEdit(!edit)}
              className="text-center text-slate-100 text-xl font-bold font-display bg-green-600 hover:bg-green-500 rounded-3xl w-1/3 p-3 m-auto mt-5">
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="p-10 w-1/2 border shadow-xl rounded-lg mx-auto mt-20 mb-20">
          <h1 className="text-center text-zinc-900 text-4xl font-black font-display mb-10">
            MY BOOKING
          </h1>
          <img
            src={authenticatedUser.profileImage || profile}
            className="h-60 w-60 rounded-full m-auto border-4 mb-10"
            alt="blackwidow"
          />
          <div className="my-5">
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                name :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                {authenticatedUser.name}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Email :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                {authenticatedUser.email}
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Destination :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                Tao Island
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Guide :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                Uncle Pol
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Date :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
                12/12/2222
              </div>
            </div>
            <div>
              <p className="text-2xl font-semibold text-zinc-900 font-display my-3">
                Price :
              </p>
              <div className="text-xl font-regular text-zinc-500 font-display my-3">
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
    </>
  );
}
