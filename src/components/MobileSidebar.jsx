import {
  BrowseIcon,
  FilesIcon,
  TrendingIcon,
  ListIcon,
  QueIcon,
  UserIcon,
} from "../Icons/Icons";

export default function MobileSidebar() {
  return (
    <div>
      <div className="mt-5 ">
        <div className="text-sm lg:text-xs flex flex-col gap-4">
          <div className="">
            <span className="lg:pl-4 py-2 text-xs font-semibold text-gray-700/50">
              MAIN
            </span>
            <div className="flex flex-col gap-2 px-2 mt-2">
              <ul className="flex flex-col">
                <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                  <span className="text-xl text-gray-400/75">
                    <BrowseIcon />
                  </span>
                  <span className="">Browse</span>
                </li>
                <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                  <span className="text-xl text-gray-400/75">
                    <TrendingIcon />
                  </span>
                  <span className="">Trending</span>
                </li>
                <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                  <span className="text-xl text-gray-400/75">
                    <UserIcon />
                  </span>
                  <span className="">Following</span>
                </li>
                <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                  <span className="text-xl text-gray-400/75">
                    <ListIcon />
                  </span>
                  <span className="">Data List</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:mt-4 text-xs">
            <span className="pl-4 py-2 font-semibold text-gray-700/50">
              SECONDARY
            </span>
            <div className="flex flex-col gap-2 px-2 mt-2">
              <ul className="flex flex-col">
                <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                  <span className="text-xl text-gray-400/75">
                    <QueIcon />
                  </span>
                  <span className="">Support</span>
                </li>
                <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                  <span className="text-xl text-gray-400/75">
                    <TrendingIcon />
                  </span>
                  <span className="">Inbox</span>
                </li>
                <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                  <span className="text-xl text-gray-400/75">
                    <FilesIcon />
                  </span>
                  <span className="">File Manager</span>
                </li>
                <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                  <span className="text-xl text-gray-400/75">
                    <ListIcon />
                  </span>
                  <span className="">Data List</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
