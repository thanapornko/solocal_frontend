import { ToastContainer } from "react-toastify";
// import Spinner from "./components/Spinner";
import "./index.css";
import Router from "./routes/Router";

export default function App() {
  return (
    <>
      {/* <Spinner /> */}
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar
        theme="light"
      />
    </>
  );
}
