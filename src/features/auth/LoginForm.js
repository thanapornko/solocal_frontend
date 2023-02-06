import {
  Modal,
  Button,
  Label,
  TextInput
} from "flowbite-react";

export default function LoginForm() {
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
            type="password"
            required={true}
          />
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-500 rounded-lg  text-center">
          <p className="text-base text-white font-bold font-display">
            {" "}
            Login
          </p>
        </Button>

        <div className="text-sm font-light text-gray-500 text-center font-display">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="font-medium text-blue-600 hover:underline font-display">
            Register
          </a>
        </div>
      </div>
    </Modal.Body>
  );
}
