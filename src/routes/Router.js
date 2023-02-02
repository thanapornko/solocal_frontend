import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import DestinationPage from "../pages/DestinationPage";
import MyBookingPage from "../pages/MyBookingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/dstination/:id",
    element: <DestinationPage />
  },
  {
    path: "/mybooking",
    element: <MyBookingPage />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
