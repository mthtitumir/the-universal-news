import React from "react";

const SearchBox = () => {
  return (
    <div>
      <div className=" w-full flex items-center justify-center gap-5 ">
        <div>
          <input
            type="search"
            name="serch"
            placeholder="Search for artists, brands, tracks and podcast "
            className="bg-gray-200 h-10 px-5 pr-10 rounded-full w-full  lg:w-[500px]  text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="relative lg:right-8 -right-48 lg:-top-0 -top-8 text-lg cursor-pointer"
          >
            🔍
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
