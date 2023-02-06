import { useState } from "react";
import useLayout from "../hooks/useLayout";
import validateRegister from "../validators/validate-register";

const initialInput = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};

export default function RegisterPage() {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const { show, setShow } = useLayout();

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const result = validateRegister(input);
    // console.dir(error);
    if (result) {
      setError(result);
    } else {
      setError({});
    }
  };

  return (
    <>
      <div className="p-10">
        <div className="flex flex-col items-center justify-center px-6 py-8 ">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-zinc-900 text-5xl font-black font-display px-10 pb-10">
                Register
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmitForm}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-bold text-gray-900 font-display">
                    Enter your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={handleChangeInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-blue-600 block w-full p-2.5"
                    placeholder="name"
                  />
                  <div className="text-red-500 text-sm pt-1">
                    {error.name}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-bold text-gray-900 font-display">
                    Enter your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={handleChangeInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-blue-600 block w-full p-2.5"
                    placeholder="aaa@gmail.com"
                  />
                  <div className="text-red-500 text-sm pt-1">
                    {error.email}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-bold text-gray-900 font-display">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={handleChangeInput}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-blue-600 block w-full p-2.5"
                  />
                  <div className="text-red-500 text-sm pt-1">
                    {error.password}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-bold text-gray-900 font-display">
                    Confirm password
                  </label>
                  <input
                    type="confirmPassword"
                    name="confirmPassword"
                    value={input.confirmPassword}
                    onChange={handleChangeInput}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:border-blue-600 block w-full p-2.5"
                  />
                  <div className="text-red-500 text-sm pt-1">
                    {error.confirmPassword}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-green-600 hover:bg-green-500 font-bold rounded-lg text-sm px-5 py-2.5 text-center font-display">
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 text-center font-display">
                  Already have an account?{" "}
                  <a
                    className="font-medium text-blue-600 hover:underline font-display"
                    show="false"
                    onClick={() => setShow(true)}>
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
