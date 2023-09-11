import { Disclosure } from "@headlessui/react";
import { DownArrowIcon, TickIcon } from "../Icons/Icons";
import f1 from "../Images/f1.jpg";
import f2 from "../Images/f2.jpg";
import f3 from "../Images/f3.jpeg";
import f4 from "../Images/f4.jpg";
import userImg from "../Images/userImg.png";
import "../Style/component.css";

const Movies = [
  {
    M_img: f1,
    M_name: "AVATAR",
    M_suff: "The way of the water",
    U_img: userImg,
    U_name: "Ikato.t",
  },
  {
    M_img: f2,
    M_name: "mib 3",
    M_suff: "men in black 3",
    U_img: userImg,
    U_name: "Ikato.t",
  },
  {
    M_img: f3,
    M_name: "spiederman",
    M_suff: "no way home",
    U_img: userImg,
    U_name: "Ikato.t",
  },
  {
    M_img: f4,
    M_name: "MISSION IMPOSSIBLE",
    M_suff: "The dead reckoning",
    U_img: userImg,
    U_name: "Ikato.t",
  },
];

function Feed() {
  return (
    <div className="flex flex-col gap-4 px-4 md:px-16">
      <div className="flex flex-col md:flex-row md:justify-between text-white pt-5">
        <div className="flex items-center lg:gap-20 mb-4 md:mb-0">
          <span className="text-base md:text-xl font-semibold">
            Continue Watching
          </span>
          <div>
            <input className="slider" type="range" min="0" max="11" />
          </div>
        </div>
        <div>
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
                      <button>Latest</button>
                    </li>
                    <li className="hover:bg-[#161519] px-4 py-1 rounded-lg">
                      <button>This week</button>
                    </li>
                  </ul>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      <div className="flex justify-center mb-5 md:mb-0">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-14">
          {Movies.map((i) => (
            <div
              key={i.M_name}
              className="h-64 w-60 md:h-52 md:w-48 cursor-pointer rounded-b-xl rounded-t-xl text-white bg-[#141313] shadow-md transition ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-red-300/50"
            >
              <div className="rounded-t-lg">
                <img
                  src={i.M_img}
                  className="object-fill h-44 md:h-32 w-full rounded-t-xl"
                  alt="img"
                />
              </div>
              <div className="flex flex-col gap-1 px-4 py-1">
                <div className="flex flex-col text-xs">
                  <span className="font-bold uppercase">{i.M_name}</span>
                  <span className="uppercase">{i.M_suff}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <div>
                    <img
                      className="h-7 w-7 rounded-full"
                      src={i.U_img}
                      alt="img"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-2">
                      <span className="font-bold text-xs">{i.U_name}</span>
                      <span className="text-xs text-black px-[2px] py-[1px] rounded-full bg-green-500">
                        <TickIcon />
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-[#414145] uppercase">
                      {i.M_name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feed;
