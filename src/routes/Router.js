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
import AdminProtectedRoute from "../features/auth/AdminRoute";

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
        element: (
          <AdminProtectedRoute>
            <AdminPage />
          </AdminProtectedRoute>
        )
      },
      {
        path: "/admin/bkk",
        element: (
          <AdminProtectedRoute>
            <BkkPage />
          </AdminProtectedRoute>
        )
      },
      {
        path: "/admin/tao",
        element: (
          <AdminProtectedRoute>
            <TaoPage />
          </AdminProtectedRoute>
        )
      },
      {
        path: "/admin/cnx",
        element: (
          <AdminProtectedRoute>
            <CnxPage />
          </AdminProtectedRoute>
        )
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
