import solocal from "../images/solocal.png";

export default function Navbar() {
  return (
    <ul className="flex p-2 bg-zinc-900 justify-between content-center">
      <div className="flex items-center pl-5">
        <li className="mr-1">
          <a
            className="text-slate-100 text-3xl font-bold font-display"
            href="#">
            <p>SOLOCAL</p>
          </a>
        </li>
        <li>
          <a href="#">
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
            href="#">
            MY BOOKING
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-slate-100 hover:text-neutral-400 text-xl font-bold font-display"
            href="#">
            LOGIN
          </a>
        </li>
      </div>
    </ul>
  );
}
