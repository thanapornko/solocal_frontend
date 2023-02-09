import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import DestinationPage from "../pages/DestinationPage";
import MyBookingPage from "../pages/MyBookingPage";
import RegisterPage from "../pages/RegisterPage";
import Layout from "../layouts/Layout";
import ConfirmBookingPage from "../pages/ConfirmBookingPage";
import ProtectedRoute from "../features/auth/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/destinations",
        element: <DestinationPage />
      },
      {
        path: "/mybooking",
        element: (
          <ProtectedRoute>
            <MyBookingPage />
          </ProtectedRoute>
        )
      },
      {
        path: "/register",
        element: <RegisterPage />
      },
      {
        path: "/confirmbooking",
        element: <ConfirmBookingPage />
      }
    ]
  }
  // {
  //   path: "/",
  //   element: (
  //     <Layout>
  //       <HomePage />
  //     </Layout>
  //   )
  // },
  // {
  //   path: "/destinations",
  //   element: <DestinationPage />
  // },
  // {
  //   path: "/mybooking",
  //   element: <MyBookingPage />
  // }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
