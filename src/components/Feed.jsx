import { Disclosure } from "@headlessui/react";
import { DownArrowIcon } from "../Icons/Icons";

const Movies = [
  { M_name: "", M_suff: "", M_desc: "", U_src: "", U_name: "" },
  { M_name: "", M_suff: "", M_desc: "", U_src: "", U_name: "" },
  { M_name: "", M_suff: "", M_desc: "", U_src: "", U_name: "" },
  { M_name: "", M_suff: "", M_desc: "", U_src: "", U_name: "" },
];

function Feed() {
  return (
    <div className="flex flex-col gap-4 px-16">
      <div className="flex justify-between text-white py-10">
        <span className="text-xl font-semibold">Continue Watching</span>
        <span>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex border border-gray-600 text-white text-base font-semibold justify-between w-full items-center gap-4 py-2 px-8 rounded-lg">
                  <div className="flex gap-2">
                    <span>Popular</span>
                  </div>
                  <span className="text-xs font-thin">
                    <DownArrowIcon className={open} />
                  </span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-2 text-sm text-gray-500 border border-gray-600 rounded-lg">
                  <ul className="flex flex-col gap-2 text-xs text-gray-500 mt-2">
                    <li className="hover:bg-[#161519] px-4 py-1 rounded-lg">
                      Latest
                    </li>
                    <li className="hover:bg-[#161519] px-4 py-1 rounded-lg">
                      This week
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </span>
      </div>
      <div></div>
    </div>
  );
}

export default Feed;
