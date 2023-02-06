import { Modal } from "flowbite-react";
// import { toast } from "react-toastify";
import LoginForm from "../features/auth/LoginForm";
import useLayout from "../hooks/useLayout";

export default function Modals() {
  const { show, notShowing } = useLayout();

  return (
    <>
      <Modal
        show={show}
        size="md"
        className=" w-1/3 m-auto mt-12 bg-inherit">
        <Modal.Header onClick={notShowing} />
        <LoginForm />
      </Modal>
      {show && (
        <div className="fixed z-40 w-screen h-screen inset-0 bg-zinc-800 bg-opacity-60"></div>
      )}
    </>
  );
}
