import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import DestinationPage from "../pages/DestinationPage";
import MyBookingPage from "../pages/MyBookingPage";
import RegisterPage from "../pages/RegisterPage";
import AdminPage from "../pages/AdminPage";
import BkkPage from "../pages/BkkPage";
import TaoPage from "../pages/TaoPage";
import CnxPage from "../pages/CnxPage";

import Layout from "../layouts/Layout";
import ProtectedRoute from "../features/auth/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/destinations/:destinationId",
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
        path: "/admin",
        element: <AdminPage />
      },
      {
        path: "/admin/bkk",
        element: <BkkPage />
      },
      {
        path: "/admin/tao",
        element: <TaoPage />
      },
      {
        path: "/admin/cnx",
        element: <CnxPage />
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
