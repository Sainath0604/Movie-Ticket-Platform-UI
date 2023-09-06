import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import PropTypes from "prop-types";
import userImg from "../Images/userImg.png";
import {
  TrendingIcon,
  CrossIcon,
  HamburgerIcon,
  BrowseIcon,
  UserIcon,
  VideoIcon,
  PlayListIcon,
  WifiIcon,
  DownArrowIcon,
} from "../Icons/Icons";
import MobileSidebar from "./MobileSidebar";

function Sidebar({ activeComponent, handleComponentChange }) {
  return (
    <div className="bg-[#100f12]">
      <div className="hidden md:block min-h-screen">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 h-16 p-4 text-lg lg:ml-4">
            <span className="bg-[#9a251d] text-white text-xs font-semibold rounded-full px-2 py-1">
              N
            </span>
            <span className="font-semibold cursor-pointer">
              <Link to="#">
                <div className="flex text-base font-bold">
                  <span className="text-white">Adze.</span>
                  <span className="text-[#962a23]">DESIGN</span>
                </div>
              </Link>
            </span>
          </div>
          <div className="flex flex-col justify-between ">
            <div className="">
              <div className="text-sm lg:text-xs flex flex-col gap-4">
                <div className="flex flex-col">
                  <span className="lg:pl-4 py-2 text-xs font-bold text-[#414145]">
                    News Feed
                  </span>
                  <div className="flex flex-col gap-2 px-4">
                    <ul className="flex flex-col gap-2 border-b border-gray-600 text-base font-semibold text-white">
                      <li
                        className={`flex items-center gap-4 py-2 px-4 rounded-2xl cursor-pointer text-white ${
                          activeComponent === "Dashboard"
                            ? "bg-[#9e2b24] text-white"
                            : "hover:bg-[#9e2b24] hover:text-white"
                        }`}
                        onClick={() => handleComponentChange("Dashboard")}
                      >
                        <span className="text-xl">
                          <BrowseIcon />
                        </span>
                        <span>Browse</span>
                      </li>
                      <li
                        className={`flex items-center gap-4 py-2 px-4 rounded-2xl cursor-pointer text-white ${
                          activeComponent === "Movies"
                            ? "bg-[#9e2b24] text-white"
                            : "hover:bg-[#9e2b24] hover:text-white"
                        }`}
                        onClick={() => handleComponentChange("Movies")}
                      >
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
                  <span className="lg:pl-4 py-2 text-xs font-bold text-[#414145]">
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
        </div>
      </div>

      {/* For mobile screen */}

      <Disclosure as="nav" className="bg-[#100f12] block md:hidden h-1/5">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 bg-gray-900">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <div className="block h-6 w-6 text-gray-400">
                        <CrossIcon />
                      </div>
                    ) : (
                      <div className="block h-6 w-6 text-gray-400">
                        <HamburgerIcon />
                      </div>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex items-center gap-4 h-16 p-4 text-lg ml-16">
                  <span className="bg-[#9a251d] text-white text-xs font-semibold rounded-full px-2 py-1">
                    N
                  </span>
                  <span className="font-semibold cursor-pointer">
                    <Link to="#">
                      <div className="flex text-base font-bold">
                        <span className="text-white">Adze.</span>
                        <span className="text-[#962a23]">DESIGN</span>
                      </div>
                    </Link>
                  </span>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <MobileSidebar />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

Sidebar.propTypes = {
  activeComponent: PropTypes.string.isRequired,
  handleComponentChange: PropTypes.func.isRequired,
};

export default Sidebar;
