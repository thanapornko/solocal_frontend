import solocal from "../images/solocal.png";
import useLayout from "../hooks/useLayout";

export default function Navbar() {
  const { setShow } = useLayout();
  return (
    <>
      <ul className="flex p-2 bg-zinc-900 justify-between content-center">
        <div className="flex items-center pl-5">
          <li className="mr-1">
            <a
              className="text-slate-100 text-3xl font-bold font-display"
              href="/">
              <p>SOLOCAL</p>
            </a>
          </li>
          <li>
            <a href="/">
              <img
                src={solocal}
                className="h-14"
                alt="solocal"
              />
            </a>
          </li>
        </div>
        <div className="flex items-center">
          <li className="mr-6">
            <a
              className="text-slate-100 hover:text-neutral-400 text-xl font-bold font-display"
              href="/mybooking">
              MY BOOKING
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-slate-100 hover:text-neutral-400 text-xl font-bold font-display "
              show="false"
              onClick={() => setShow(true)}>
              <p className="mx=4">LOGIN</p>
            </a>
          </li>
        </div>
      </ul>
    </>
  );
}
