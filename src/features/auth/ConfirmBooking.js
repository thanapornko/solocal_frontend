import { Modal, Button } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import useConfirm from "../../hooks/useConfirm";
import { useState } from "react";
import * as bookingApi from "../../api/booking-api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function ConfirmBooking({
  newDate,
  content,
  guideId
}) {
  const { authenticatedUser } = useAuth();
  const { open, setOpen } = useConfirm();
  // const [input, setInput] = useState({});
  const navigate = useNavigate();

  const params = useParams();

  const input = {
    destinationId: params.destinationId,
    guideId: guideId,
    date: newDate
  };

  console.log(guideId);
  const handleSubmitBooking = async e => {
    try {
      e.preventDefault();

      await bookingApi.createBooking(input);
      toast.success("booking successfully");
      navigate("/mybooking");
      window.scrollTo(0, 0);
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          toast.error(err.response.data.message);
        } else {
          toast.error(
            "An error occurred while trying to create a booking"
          );
        }
      } else {
        toast.error(
          "An error occurred while trying to create a booking"
        );
      }
    } finally {
      setOpen(false);
    }
  };
  console.log(authenticatedUser, "--AuthConfirmBooking");
  console.log(content, "--contentConfirmBooking");
  // console.log(
  //   content?.Guides[guideId]?.name,
  //   "--IDDDcontentConfirmBooking"
  // );

  return (
    <>
      <Modal
        show={open}
        size="md"
        className=" w-1/3 m-auto bg-transparent">
        <Modal.Header onClick={() => setOpen(false)} />
        <Modal.Body>
          <div className="space-y-4 px-6 pb-4 m-auto ">
            <h3 className="text-3xl text-center text-gray-900 font-bold font-display">
              SUMMARY
            </h3>
            <div>
              <div className="mb-2 block">
                <h2
                  name="name"
                  className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Name :{" "}
                </h2>
                <h2
                  value={authenticatedUser?.name}
                  className="block mb-2 text-base font-medium text-gray-400 font-display">
                  {authenticatedUser?.name}
                </h2>
              </div>
              <div className="mb-2 block">
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Email :{" "}
                </span>
                <span className="block mb-2 text-base font-medium text-gray-400 font-display">
                  {authenticatedUser?.email}
                </span>
              </div>
              <div className="mb-2 block">
                <span
                  name="destination"
                  className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Destination :{" "}
                </span>
                <span
                  value={content?.name}
                  className="block mb-2 text-base font-medium text-gray-400 font-display">
                  {content?.name}
                </span>
              </div>
              <div className="mb-2 block">
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Guide name :{" "}
                </span>
                <span className="block mb-2 text-base font-medium text-gray-400 font-display">
                  {/* {content?.Guides[guideId]?.name} */}
                </span>
              </div>
              <div className="mb-2 block">
                <span
                  name="date"
                  className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Date :{" "}
                </span>
                <span
                  value={newDate}
                  className="block mb-2 text-base font-medium text-gray-400 font-display">
                  {newDate}
                </span>
              </div>
              <div className="mb-2 block">
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Price :{" "}
                </span>
                <span className="block mb-2 text-base font-medium text-gray-400 font-display">
                  {content?.price}
                </span>
              </div>
            </div>
            <Button
              type="submit"
              onClick={handleSubmitBooking}
              className="w-full bg-green-600 hover:bg-green-500 rounded-lg  text-center">
              <p className="text-base text-white font-bold font-display">
                {" "}
                Confirm
              </p>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      {open && (
        <div className="fixed z-40 w-screen h-screen inset-0 bg-zinc-800 bg-opacity-60"></div>
      )}
    </>
  );
}
