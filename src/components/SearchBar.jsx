import React from "react";

export default function SearchBar() {
  return (
    <div className="relative h-12.5">
      <label htmlFor="search" className="absolute top-3.75 left-3.75">
        <img src="./src/assets/icons/search.svg" alt="search" />
      </label>
      <input
        id="search"
        type="text"
        className="size-full bg-theme-main-5 rounded-lg outline-none placeholder:text-theme-gray pl-11.25 pr-13.75"
        placeholder="Search "
      />

      <button className="absolute top-3.75 right-3.75 cursor-pointer">
        <img
          src="./src/assets/icons/filter.png"
          alt="Filter"
          className="size-5"
        />
      </button>
    </div>
  );
}
