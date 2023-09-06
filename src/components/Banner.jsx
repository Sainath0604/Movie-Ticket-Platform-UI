import "../Style/component.css";
import { WifiIcon } from "../Icons/Icons";

function Banner() {
  return (
    <div className="bgImage flex justify-start px-10 relative h-[330px]">
      <div>
        <div className="flex flex-col justify-center items-start h-full relative gap-6">
          <button className="text-white flex items-center gap-2 font-bold text-sm px-3 rounded-lg bg-[#a42d26] py-1">
            <span>
              <WifiIcon />
            </span>
            <span>Live</span>
          </button>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-300">
              NETFLIX
            </h1>
            <h1 className="text-xl md:text-2xl font-bold text-gray-300">
              Unlimited movies, TV shows and more
            </h1>
            <h1 className="text-lg md:text-xl font-bold text-gray-300">
              Watch anywhere. Cancel anytime.
            </h1>
          </div>
          <div className="flex mt-6">
            <button className="px-8 py-4 bg-[#a42d26] rounded-xl text-xs font-semibold text-white shadow-lg">
              Watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
