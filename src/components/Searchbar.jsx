import { BellIcon, LeftArrowIcon, SearchIcon } from "../Icons/Icons";
import userImg from "../Images/userImg.png";

export default function SearchBar() {
  return (
    <div className="w-full shadow-lg">
      <div className="grid grid-cols-1">
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row lg:justify-between lg:h-20 bg-[#100f12] border-b border-gray-600 shadow-md px-20 lg:items-center">
          <button className="hidden md:block">
            <span className="flex items-center gap-2 border border-gray-600 rounded-md p-2 text-white">
              <LeftArrowIcon />
            </span>
          </button>
          <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-2 md:gap-8">
            <div className="border border-gray-600 px-2 rounded-2xl mb-4 md:mb-0">
              <span className="flex items-center gap-2">
                <span className="text-gray-400 p-2">
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  placeholder="Search everything"
                  className=" p-2 bg-[#100f12] text-white text-sm rounded-2xl"
                />
              </span>
            </div>
            <div className="flex items-center gap-8">
              <div>
                <span className="text-xl text-gray-100">
                  <BellIcon />
                </span>
              </div>
              <div className="flex gap-2 items-center text-xs">
                <div>
                  <img
                    src={userImg}
                    className="h-10 rounded-full"
                    alt="userImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
