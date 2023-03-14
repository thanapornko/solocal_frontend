import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as adminApi from "../api/admin-api";

export default function TaoPage() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const fetchBkkBooking = async () => {
      try {
        const res = await adminApi.getTaoBooking();

        setContent(res.data.booking);
        // return res.data.booking;
      } catch (error) {
        console.log(error);
      }
    };
    fetchBkkBooking();
  }, []);

  console.log(content, "content");

  return (
    <>
      <div className="flex flex-grow bg-gray-100">
        {/* nav */}
        <div className="flex flex-col w-1/6 border bg-gray-200">
          <div className="flex-grow m-auto mt-6">
            <ul className="flex flex-col space-y-8 p-4 ">
              <li className="m-auto">
                <Link
                  to="/admin"
                  className="text-gray-900 hover:text-green-700 font-display text-xl font-semibold">
                  All
                </Link>
              </li>
              <li className="m-auto">
                <Link
                  to="/admin/bkk"
                  className="text-gray-900 hover:text-green-700 font-display text-xl font-semibold">
                  Bangkok
                </Link>
              </li>
              <li className="m-auto">
                <Link
                  to="/admin/tao"
                  className="text-gray-900 hover:text-green-700 font-display text-xl font-semibold ">
                  Tao Island
                </Link>
              </li>
              <li className="m-auto">
                <Link
                  to="/admin/cnx"
                  className="text-gray-900 hover:text-green-700 font-display text-xl font-semibold ">
                  Chiangmai
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* info */}
        <div className="flex-col w-5/6 justify-center bg-gray-100 mb-10">
          <div className="flex justify-center py-8">
            <p className="text-gray-900 font-display text-2xl font-semibold ">
              Booking Information
            </p>
          </div>
          {/* box  */}
          {content.map((el, idx) => (
            <div className="flex justify-center" key={idx}>
              <div className="flex-col w-5/6 bg-white mx-20 my-5 p-5">
                <div className="flex justify-between ">
                  <div className="my-5 mx-5 space-y-2 text-sm font-bold w-1/5 text-gray-600 font-display">
                    <p>Customer :</p>
                    <p>Email :</p>
                    <p>Destination :</p>
                    <p>Guide :</p>
                    <p>Price :</p>

                    <p>Date :</p>
                  </div>
                  <div className="my-5 mx-5 space-y-2 w-3/5 text-sm text-gray-600 font-display">
                    <p>{el.User?.name}</p>
                    <p>{el.User?.email}</p>
                    <p>{el.Guide.Destination?.name}</p>
                    <p>{el.Guide?.name}</p>
                    <p>{el.Guide.Destination?.price}</p>
                    <p>{el.date.slice(0, 10)}</p>
                  </div>
                  <div className="my-5 mx-5 space-y-2 w-1/5 text-sm text-gray-600">
                    <img src={el.User?.profileImage} />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* box  */}
        </div>
      </div>
    </>
  );
}
