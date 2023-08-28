import React from "react";

const SearchBox = () => {
  return (
    <div>
      <div className=" mt-16 w-full flex items-center justify-center gap-5 ">
        <div>
          <input
            type="search"
            name="serch"
            placeholder="Search for artists, brands, tracks and podcast "
            className="bg-gray-200 h-10 px-5 pr-10 rounded-full w-[500px]  text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="relative right-10 text-lg cursor-pointer"
          >
            🔍
          </button>
        </div>
        <div>
          <p>OR</p>
        </div>
        <div>
          <button className="bg-cyan-500 rounded px-2 py-1 text-white">
            Upload your own
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
