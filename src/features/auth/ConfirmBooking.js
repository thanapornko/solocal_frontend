import { Modal, Button } from "flowbite-react";
import useLayout from "../../hooks/useLayout";

export default function ConfirmBooking() {
  const { show, notShowing } = useLayout();
  return (
    <>
      <Modal
        show={show}
        size="md"
        className=" w-1/3 m-auto mt-12 bg-transparent">
        <Modal.Header onClick={notShowing} />
        <Modal.Body>
          <div className=" space-y-10 px-6 pb-4 m-auto ">
            <h3 className="text-3xl text-center text-gray-900 font-bold font-display">
              SUMMARY
            </h3>
            <div>
              <div className="mb-2 block">
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Name :{" "}
                </span>
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Tony{" "}
                </span>
              </div>
              <div className="mb-2 block">
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Email :{" "}
                </span>
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  ...{" "}
                </span>
              </div>
              <div className="mb-2 block">
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Destination :{" "}
                </span>
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  ...{" "}
                </span>
              </div>
              <div className="mb-2 block">
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Guide name :{" "}
                </span>
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  ...{" "}
                </span>
              </div>
              <div className="mb-2 block">
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Date :{" "}
                </span>
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  ...{" "}
                </span>
              </div>
              <div className="mb-2 block">
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  Price :{" "}
                </span>
                <span className="block mb-2 text-base font-bold text-gray-900 font-display">
                  ...{" "}
                </span>
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-500 rounded-lg  text-center">
              <p className="text-base text-white font-bold font-display">
                {" "}
                Login
              </p>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
      {show && (
        <div className="fixed z-40 w-screen h-screen inset-0 bg-zinc-800 bg-opacity-60"></div>
      )}
    </>
  );
}
