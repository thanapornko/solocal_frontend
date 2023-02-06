import {
  Modal,
  Button,
  Label,
  TextInput
} from "flowbite-react";

export default function RegisterForm() {
  return (
    <Modal.Body>
      <div className="space-y-5 px-6 pb-4 m-auto">
        <h3 className="text-3xl text-center text-gray-900 font-bold font-display">
          Register
        </h3>
        <div>
          <div className="mb-1 block">
            <Label
              htmlFor="name"
              value="Enter your name"
              className="text-lg text-gray-900 font-display"
            />
          </div>
          <TextInput
            id="name"
            placeholder="name"
            className="font-display"
            required={true}
          />
        </div>
        <div>
          <div className="mb-1 block">
            <Label
              htmlFor="email"
              value="Enter your email"
              className="text-lg text-gray-900 font-display"
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
          <div className="mb-1 block">
            <Label
              htmlFor="password"
              value="Enter your password"
              className="text-lg text-gray-900 font-display"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            required={true}
          />
        </div>
        <div>
          <div className="mb-1 block">
            <Label
              htmlFor="confirmPassword"
              value="Confirm your password"
              className="text-lg text-gray-900 font-display"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            required={true}
          />
        </div>
        <div className="w-full pt-3 pb-5">
          <Button className="w-1/2 m-auto ">
            <p className="text-lg font-display">Register</p>
          </Button>
        </div>
      </div>
    </Modal.Body>
  );
}
