import Navbar from "../layouts/Navbar";
import Card from "../components/Card";
import Footer from "../layouts/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex ">
        <div className="flex-col h-auto p-10 bg-[url('./images/background1.jpg')] bg-cover bg-center bg-opacity-25 bg-opacity-75">
          <div className="text-center text-slate-100 text-7xl font-black font-display py-10">
            TRAVEL ALONE ?
          </div>
          <div className="bg-slate-100 py-10 px-10 my-5 m-auto rounded-2xl w-96">
            <p className="text-center m-auto text-zinc-900 text-5xl font-bold">
              GO SOLO !
            </p>
          </div>
          <div className="text-center text-slate-100 text-3xl font-semibold font-display px-10 py-10">
            We are local travel agency emphasizing on
            providing private day trips by local guide,
            especially for solo travelers who love to travel
            and explore Thai local experiences. We provide 3
            fascinating destinations including Bangkok,
            Chiangmai, and Tao Island
          </div>
        </div>
      </div>
      <div className="p-20">
        <Card />
      </div>
      <Footer />
    </>
  );
}
