import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modals from "../components/Modal";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Modals></Modals>
      <Outlet />
      <Footer />
    </div>
  );
}
