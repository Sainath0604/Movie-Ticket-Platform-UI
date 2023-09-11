import { SearchIcon } from "../Icons/Icons";
import userImg from "../Images/userImg.png";
import { useState } from "react";
import { movie } from "../utility/getMoviesInfo.js";

function Movies() {
  const [searchInput, setSearchInput] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleSearchInputChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);

    const filtered = movie.filter((m) =>
      m.M_name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="bg-[#242b30] min-h-screen">
      <div id="Searchbar" className="text-white">
        <div className="w-full">
          <div className="grid grid-cols-1">
            <div className="flex flex-col-reverse gap-4 md:flex-row lg:justify-between lg:h-16 bg-[#eb5356] shadow-md p-2 lg:items-center md:px-10">
              <div>
                <span className="flex items-center gap-2">
                  <span className="text-white p-2">
                    <SearchIcon />
                  </span>
                  <input
                    type="text"
                    name="Searchbar"
                    placeholder="Search movies"
                    className="p-2 bg-[#eb5356] text-white placeholder:text-white"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                  />
                </span>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="flex flex-row-reverse md:flex-row gap-2 items-center text-xs">
                  <span className="font-semibold">John Meyer</span>

                  <div className="">
                    <img
                      src={userImg}
                      className="h-10 border border-gray-800 rounded-full bg-gray-500"
                      alt="userImg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h1 className="text-3xl text-gray-100 mb-5">New Releases</h1>
        <div id="movies">
          <div className="flex justify-center mb-5 md:mb-0">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-5 lg:gap-x-12 lg:gap-y-6">
              {searchInput === ""
                ? movie.map((i) => (
                    <div
                      key={i.M_name}
                      className="h-80 w-56 md:h-64 md:w-36 cursor-pointer text-white shadow-md flex flex-col ransition ease-in-out hover:-translate-y-1 hover:scale-105"
                    >
                      <div className="rounded-t-lg mb-2 shadow-2xl">
                        <img
                          src={i.M_img}
                          className="object-fill h-64 md:h-52 w-full "
                          alt="img"
                        />
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col text-xs">
                          <span className="font-medium">{i.M_name}</span>
                          <span className="text-[10px] text-[#6b7f90]">
                            {i.M_category}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span
                            className={`text-xs py-[2px] px-2 rounded-lg text-black ${
                              i.M_rating < 7 ? "bg-[#eb5356]" : "bg-[#f4c519]"
                            } mr-2`}
                          >
                            {i.M_rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                : filteredMovies.map((i) => (
                    <div
                      key={i.M_name}
                      className="h-80 w-56 md:h-64 md:w-36 cursor-pointer text-white drop-shadow-xl flex flex-col"
                    >
                      <div className="rounded-t-lg mb-2 shadow-2xl">
                        <img
                          src={i.M_img}
                          className="object-fill h-64 md:h-52 w-full "
                          alt="img"
                        />
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col text-xs">
                          <span className="font-medium">{i.M_name}</span>
                          <span className="text-[10px] text-[#6b7f90]">
                            {i.M_category}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <span
                            className={`text-xs py-[2px] px-2 rounded-lg text-black ${
                              i.M_rating < 7 ? "bg-[#eb5356]" : "bg-[#f4c519]"
                            } mr-2`}
                          >
                            {i.M_rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
