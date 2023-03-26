import {
  Modal,
  Button,
  Label,
  TextInput
} from "flowbite-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import useLayout from "../../hooks/useLayout";

export default function LoginForm() {
  const { login, authenticatedUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setShow } = useLayout();

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      await login(email, password);
      toast.success("Welcome");
      console.log("authenticatedUser:", authenticatedUser);
      console.log("email:", email);
      if (email === "admin@gmail.com") {
        console.log("Redirecting to /admin");
        navigate("/admin");
      }
      setShow(false);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };
  return (
    <Modal.Body>
      <div className=" space-y-10 px-6 pb-4 m-auto ">
        <h3 className="text-3xl text-center text-gray-900 font-bold font-display">
          Login
        </h3>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email"
              value="Enter your email"
              className="block mb-2 text-base font-bold text-gray-900 font-display"
            />
          </div>
          <TextInput
            id="email"
            placeholder="Email address"
            className="font-display"
            required={true}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Enter your password"
              className="block mb-2 text-base font-bold text-gray-900 font-display"
            />
          </div>
          <TextInput
            id="password"
            placeholder="Password"
            type="password"
            required={true}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <Button
          type="submit"
          onClick={handleSubmitForm}
          className="w-full bg-green-600 hover:bg-green-500 rounded-lg  text-center">
          <p className="text-base text-white font-bold font-display">
            {" "}
            Login
          </p>
        </Button>

        <div className="text-sm font-light text-gray-500 text-center font-display">
          Don’t have an account?{" "}
          <Link
            onClick={() => setShow(false)}
            to="/register"
            className="font-medium text-blue-600 hover:underline font-display">
            Register
          </Link>
        </div>
      </div>
    </Modal.Body>
  );
}
