import { toast } from "react-toastify";
import Modals from "../../components/Modal";
import useAuth from "../../hooks/useAuth";

export default function Redirect() {
  const { authenticatedUser } = useAuth();

  if (!authenticatedUser) {
    return toast.error("Please login");
  }
  return <Modals />;
}
