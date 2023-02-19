import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function HomePage() {
  return (
    <>
      <div className="flex">
        <div className="flex-col h-auto p-20 bg-[url('./images/background2.jpg')] bg-cover bg-center bg-opacity-25 bg-opacity-75 py-40">
          <div className="text-center text-white text-7xl drop-shadow-3xl font-black font-display py-10">
            TRAVEL ALONE ?
          </div>
          <div className="text-center text-white text-3xl drop-shadow-3xl font-semibold font-display px-10 py-10">
            We are local travel agency emphasizing on
            providing private day trips by local guide,
            especially for solo travelers who love to travel
            and explore Thai local experiences. We provide 3
            fascinating destinations including Bangkok,
            Chiangmai, and Tao Island
          </div>
        </div>
      </div>
      <Carousel />
      <div className="p-20">
        <Card />
      </div>
    </>
  );
}
