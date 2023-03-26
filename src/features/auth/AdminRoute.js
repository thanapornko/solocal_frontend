import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function AdminProtectedRoute({ children }) {
  const { authenticatedUser } = useAuth();

  console.log(authenticatedUser);

  //   if (!authenticatedUser) {
  //     return <Navigate to={"/"} />;
  //   }

  if (authenticatedUser?.isAdmin === false) {
    return <Navigate to={"/"} />;
  }
  return children;
}
