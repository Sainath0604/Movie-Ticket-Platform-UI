import { Disclosure } from "@headlessui/react";
import {
  ApplicationIcon,
  DashboardIcon,
  DiscoverIcon,
  DocIcon,
  DownArrowIcon,
  FilesIcon,
  InboxIcon,
  ListIcon,
  PageIcon,
  QueIcon,
  UsersIcon,
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
            <div className="flex flex-col px-2 mt-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex gap-2 justify-between w-full items-center text-xs hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                      <div className="flex gap-2">
                        <span className="text-lg text-gray-400/75">
                          <DashboardIcon />
                        </span>
                        <span>Dashboard</span>
                      </div>
                      <span className="text-xs font-thin text-gray-400/75">
                        <DownArrowIcon className={open} />
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                      <ul className="flex flex-col gap-2 text-xs text-gray-500 pl-4">
                        <li>Dashboard 1</li>
                        <li>Dashboard 2</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <div className="flex gap-2 justify-between w-full items-center text-xs hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                <div className="flex gap-2">
                  <span className="text-lg text-gray-400/75">
                    <DiscoverIcon />
                  </span>
                  <button>Discover</button>
                </div>

                <span className="flex items-center border p-2 bg-[#362bd2] text-white justify-center h-4 w-4 text-xs rounded-full">
                  4
                </span>
              </div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex gap-2 justify-between w-full items-center text-xs hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                      <div className="flex gap-2 items-center">
                        <span className="text-lg text-gray-400/75">
                          <UsersIcon />
                        </span>
                        <span>Users</span>
                      </div>
                      <span className="text-xs font-thin text-gray-400/75">
                        <DownArrowIcon className={open} />
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                      <ul className="flex flex-col gap-2 text-xs text-gray-500 pl-4">
                        <li>Users 1</li>
                        <li>Users 2</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex gap-2 justify-between w-full items-center text-xs hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                      <div className="flex gap-2 items-center">
                        <span className="text-lg text-gray-400/75">
                          <DocIcon />
                        </span>
                        <span>Documents</span>
                      </div>
                      <span className="text-xs font-thin text-gray-400/75">
                        <DownArrowIcon className={open} />
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                      <ul className="flex flex-col gap-2 text-xs text-gray-500 pl-4">
                        <li>Documents 1</li>
                        <li>Documents 2</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex gap-2 justify-between w-full items-center text-xs hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                      <div className="flex gap-2 items-center">
                        <span className="text-lg text-gray-400/75">
                          <ApplicationIcon />
                        </span>
                        <span>Applications</span>
                      </div>
                      <span className="text-xs font-thin text-gray-400/75">
                        <DownArrowIcon className={open} />
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500">
                      <ul className="flex flex-col gap-2 text-xs text-gray-500 pl-4">
                        <li>Applications 1</li>
                        <li>Applications 2</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex gap-2 justify-between w-full items-center text-xs hover:bg-[#362bd2] hover:text-white py-2 px-4 rounded-md">
                      <div className="flex gap-2 items-center">
                        <span className="text-lg text-gray-400/75">
                          <PageIcon />
                        </span>
                        <span>Page</span>
                      </div>
                      <span className="text-xs font-thin text-gray-400/75">
                        <DownArrowIcon className={open} />
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 text-sm">
                      <ul className="flex flex-col gap-2 text-xs text-gray-500 pl-4">
                        <li>Page 1</li>
                        <li>Page 2</li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
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
                    <InboxIcon />
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
