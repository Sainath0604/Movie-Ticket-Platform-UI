import userImg from "../Images/userImg.png";
import {
  TrendingIcon,
  BrowseIcon,
  UserIcon,
  VideoIcon,
  PlayListIcon,
  WifiIcon,
  DownArrowIcon,
} from "../Icons/Icons";

export default function MobileSidebar() {
  return (
    <div>
      <div className="mt-5 ">
        <div className="text-sm lg:text-xs flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="pl-2 lg:pl-4 py-2 text-xs font-bold text-[#414145]">
              News Feed
            </span>
            <div className="flex flex-col gap-2 px-4">
              <ul className="flex flex-col gap-2 border-b border-gray-600 text-base font-semibold text-white">
                <li className="flex items-center gap-4 hover:bg-[#9e2b24] hover:text-white py-2 px-4 rounded-2xl cursor-pointer">
                  <span className="text-xl">
                    <BrowseIcon />
                  </span>
                  <span>Browse</span>
                </li>
                <li className="flex items-center gap-4 hover:bg-[#9e2b24] hover:text-white py-2 px-4 rounded-2xl cursor-pointer">
                  <span className="text-xl">
                    <TrendingIcon />
                  </span>
                  <span>Trending</span>
                </li>
                <li className="flex items-center gap-4 hover:bg-[#9e2b24] hover:text-white py-2 px-4 rounded-2xl cursor-pointer">
                  <span className="text-xl">
                    <UserIcon />
                  </span>
                  <span className="">Following</span>
                </li>
                <li className="flex items-center gap-4 hover:bg-[#9e2b24] hover:text-white py-2 px-4 rounded-2xl cursor-pointer">
                  <span className="text-xl">
                    <VideoIcon />
                  </span>
                  <span className="">Your videos</span>
                </li>
                <li className="flex items-center gap-4 hover:bg-[#9e2b24] hover:text-white py-2 px-4 rounded-2xl cursor-pointer mb-4">
                  <span className="text-xl">
                    <PlayListIcon />
                  </span>
                  <span className="">Playlist</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-xs">
            <span className="pl-2 lg:pl-4 py-2 text-xs font-bold text-[#414145]">
              Following
            </span>
            <div className="flex flex-col gap-2 px-4 mt-2">
              <ul className="flex flex-col text-[#414145] border-b border-gray-600">
                <li className="flex items-center justify-between gap-2 hover:bg-[#9e2b24] hover:text-white py-2 px-4 rounded-2xl cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="">
                      <img
                        className="h-5 w-5 rounded-full"
                        src={userImg}
                        alt="img"
                      />
                    </span>
                    <span className="font-semibold">Ikato.t</span>
                  </div>
                  <span className="text-white">
                    <WifiIcon />
                  </span>
                </li>
                <li className="flex items-center justify-between gap-2 hover:bg-[#9e2b24] hover:text-white py-2 px-4 rounded-2xl cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="">
                      <img
                        className="h-5 w-5 rounded-full"
                        src={userImg}
                        alt="img"
                      />
                    </span>
                    <span className="font-semibold">Nick.B</span>
                  </div>
                  <span className="bg-green-600 h-1 w-1 rounded-full flex justify-center mr-1"></span>
                </li>
                <li className="flex items-center justify-between gap-2 hover:bg-[#9e2b24] hover:text-white py-2 px-4 rounded-2xl cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="">
                      <img
                        className="h-5 w-5 rounded-full"
                        src={userImg}
                        alt="img"
                      />
                    </span>
                    <span className="font-semibold">Vika.J</span>
                  </div>
                  <span className="text-white">
                    <WifiIcon />
                  </span>
                </li>
                <li className="flex items-center justify-between gap-2 hover:bg-[#9e2b24] hover:text-white py-2 px-4 rounded-2xl cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="">
                      <img
                        className="h-5 w-5 rounded-full"
                        src={userImg}
                        alt="img"
                      />
                    </span>
                    <span className="font-semibold">Alesanda.B</span>
                  </div>
                  <span className="bg-green-600 h-1 w-1 rounded-full flex justify-center mr-1"></span>
                </li>
                <li className="flex items-center justify-between gap-2 hover:bg-[#9e2b24] hover:text-white py-2 px-4 rounded-2xl cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="">
                      <img
                        className="h-5 w-5 rounded-full"
                        src={userImg}
                        alt="img"
                      />
                    </span>
                    <span className="font-semibold">Jessie.J</span>
                  </div>
                  <span className="bg-green-600 h-1 w-1 rounded-full flex justify-center mr-1"></span>
                </li>
                <li className="flex items-center justify-between gap-2 hover:bg-[#9e2b24] hover:text-white py-2 px-4 rounded-2xl cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="">
                      <img
                        className="h-5 w-5 rounded-full"
                        src={userImg}
                        alt="img"
                      />
                    </span>
                    <span className="font-semibold">Dadd.H</span>
                  </div>
                  <span className="bg-green-600 h-1 w-1 rounded-full flex justify-center mr-1"></span>
                </li>
                <button>
                  <li className="flex items-center justify-between gap-2 hover:bg-[#9e2b24] hover:text-white py-2 px-4 rounded-2xl mb-4">
                    <div className="flex items-center gap-4">
                      <span className="w-5 h-5 text-white flex justify-center items-center px-[6px] py-[3px] rounded-full bg-[#9e2b24]">
                        <DownArrowIcon />
                      </span>
                      <span className="font-semibold">Load more</span>
                    </div>
                  </li>
                </button>
              </ul>
            </div>
            <div className="flex mt-2 h-10 justify-center items-center text-[#414145]">
              <span className="text-sm font-semibold">IKAKO Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
