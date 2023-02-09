import { Modal, Button } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import useConfirm from "../../hooks/useConfirm";

export default function ConfirmBooking() {
  const { authenticatedUser } = useAuth();
  const { open, setOpen } = useConfirm();
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
                <h2 className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Username :{" "}
                </h2>
                <h2 className="block mb-2 text-base font-medium text-gray-400 font-display">
                  {authenticatedUser.username}
                </h2>
              </div>
              <div className="mb-2 block">
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Email :{" "}
                </span>
                <span className="block mb-2 text-base font-medium text-gray-400 font-display">
                  {authenticatedUser.email}
                </span>
              </div>
              <div className="mb-2 block">
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Destination :{" "}
                </span>
                <span className="block mb-2 text-base font-medium text-gray-400 font-display">
                  Tao Island
                </span>
              </div>
              <div className="mb-2 block">
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Guide name :{" "}
                </span>
                <span className="block mb-2 text-base font-medium text-gray-400 font-display">
                  Uncle Pol
                </span>
              </div>
              <div className="mb-2 block">
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Date :{" "}
                </span>
                <span className="block mb-2 text-base font-medium text-gray-400 font-display">
                  11/11/2111
                </span>
              </div>
              <div className="mb-2 block">
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Price :{" "}
                </span>
                <span className="block mb-2 text-base font-medium text-gray-400 font-display">
                  2,500 THB
                </span>
              </div>
            </div>
            <Button
              type="submit"
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
