import { Link } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import PropTypes from "prop-types";
import {
  QueIcon,
  TrendingIcon,
  FilesIcon,
  ListIcon,
  CrossIcon,
  HamburgerIcon,
  BrowseIcon,
} from "../Icons/Icons";
import MobileSidebar from "./MobileSidebar";

function Sidebar({ activeComponent, handleComponentChange }) {
  return (
    <div className="md:w-1/5 bg-[#100f12]">
      <div className="hidden md:block h-screen border-r min-h-screen">
        <div className="flex flex-col">
          <div className="flex items-center gap-4 h-20 p-4 text-lg lg:ml-4">
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
                  <div className="flex flex-col gap-2 px-2 mt-2">
                    <ul className="flex flex-col">
                      <li
                        className={`flex items-center gap-2 py-2 px-4 rounded-md cursor-pointer text-white ${
                          activeComponent === "Movies"
                            ? "bg-[#362bd2] text-white"
                            : "hover:bg-[#362bd2] hover:text-white"
                        }`}
                        onClick={() => handleComponentChange("Movies")}
                      >
                        <span className="text-xl">
                          <BrowseIcon />
                        </span>
                        <span>Browse</span>
                      </li>
                      <li
                        className={`flex items-center gap-2 py-2 px-4 rounded-md cursor-pointer text-white ${
                          activeComponent === "Dashboard"
                            ? "bg-[#362bd2] text-white"
                            : "hover:bg-[#362bd2] hover:text-white"
                        }`}
                        onClick={() => handleComponentChange("Dashboard")}
                      >
                        <span className="text-xl">
                          <TrendingIcon />
                        </span>
                        <span>Trending</span>
                      </li>
                      <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                        <span className="text-xl">
                          <FilesIcon />
                        </span>
                        <span className="">File Manager</span>
                      </li>
                      <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                        <span className="text-xl">
                          <ListIcon />
                        </span>
                        <span className="">Data List</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:mt-4 text-xs">
                  <span className="lg:pl-4 py-2 font-semibold text-gray-700/50">
                    SECONDARY
                  </span>
                  <div className="flex flex-col gap-2 px-2 mt-2">
                    <ul className="flex flex-col">
                      <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                        <span className="text-xl">
                          <QueIcon />
                        </span>
                        <span className="">Support</span>
                      </li>
                      <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                        <span className="text-xl">
                          <TrendingIcon />
                        </span>
                        <span className="">Inbox</span>
                      </li>
                      <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                        <span className="text-xl">
                          <FilesIcon />
                        </span>
                        <span className="">File Manager</span>
                      </li>
                      <li className="flex items-center gap-2 hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                        <span className="text-xl">
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
        </div>
      </div>

      {/* For mobile screen */}

      <Disclosure as="nav" className="bg-white block md:hidden h-1/5">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 bg-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <div className="block h-6 w-6">
                        <CrossIcon />
                      </div>
                    ) : (
                      <div className="block h-6 w-6">
                        <HamburgerIcon />
                      </div>
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <div className="flex items-center gap-4 h-20 p-4 text-lg">
                      <div className="font-semibold cursor-pointer">
                        <Link to="#">Taiyo.AI-Test</Link>
                      </div>
                    </div>
                  </div>
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
