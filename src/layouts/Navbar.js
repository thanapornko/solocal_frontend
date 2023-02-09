import { Link } from "react-router-dom";
import solocal from "../images/solocal.png";
import useLayout from "../hooks/useLayout";
import useAuth from "../hooks/useAuth";
import profile from "../images/profile.jpg";

export default function Navbar() {
  const { setShow, show } = useLayout();
  const { authenticatedUser, logout } = useAuth();

  return (
    <>
      <ul className="flex p-2 bg-zinc-900 justify-between content-center">
        <div className="flex items-center pl-5">
          <li className="mr-1">
            <Link
              to="/"
              className="text-slate-100 text-3xl font-bold font-display">
              <p>SOLOCAL</p>
            </Link>
          </li>
          <li>
            <Link to="/">
              <img
                src={solocal}
                className="h-14"
                alt="solocal"
              />
            </Link>
          </li>
        </div>
        <div className="flex items-center">
          <li className="mr-6">
            {!authenticatedUser ? (
              ""
            ) : (
              <Link
                to="/mybooking"
                className="text-slate-100 hover:text-neutral-400 text-xl font-bold font-display">
                MY BOOKING
              </Link>
            )}
          </li>
          {!authenticatedUser ? (
            <li className="mr-3">
              <a
                className="text-slate-100 hover:text-neutral-400 text-xl font-bold font-display "
                show="false">
                <p
                  className="mx=4"
                  onClick={() => {
                    setShow(!show);
                  }}>
                  LOGIN
                </p>
              </a>
            </li>
          ) : (
            <li className="mr-2">
              <a
                className="text-slate-100 hover:text-neutral-400 text-xl font-bold font-display "
                show="false">
                <p className="mx=4" onClick={logout}>
                  LOGOUT
                </p>
              </a>
            </li>
          )}
          {!authenticatedUser ? (
            ""
          ) : (
            <li className="mr-5">
              <img
                src={
                  authenticatedUser.profileImage || profile
                }
                className="h-10 w-10 rounded-full"
              />
            </li>
          )}
        </div>
      </ul>
    </>
  );
}
