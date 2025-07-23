import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";

export default function SearchLocation() {
  return (
    <>
      <section className="pt-5">
        <div className="max-w-base mx-auto space-y-10 px-5">
          <div className="space-y-5">
            <div className="flex items-center gap-2.5 text-xl/[1.2] font-semibold dark:text-white">
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L9 12L15 19"
                    stroke="#2B62B4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <span>Search Location</span>
            </div>
            <SearchBar />
            <div className="flex items-center gap-2.5 font-medium text-theme-main text-lg">
              <img src="./assets/icons/gps-blue.svg" alt="Gps icon" />
              Use my current location
            </div>
            <div className="space-y-5">
              <p className="text-lg font-medium text-theme-small-text">
                Recent Search
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-2.5 bg-theme-small-text-2 dark:bg-theme-main-text shadow-search-location dark:shadow-none rounded overflow-hidden p-2.5"
                  >
                    <div className="size-15 shrink-0 ">
                      <img
                        src="./assets/images/search-result-1.jpg"
                        className="size-full object-cover"
                        alt="Image"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex-between text-xl/[1.2] font-semibold dark:text-white">
                        Classic Homes
                        <span className="h-5.5 bg-theme-main-5 dark:bg-theme-main-text flex items-center gap-1.25 text-theme-warning font-medium text-[11px] rounded px-1.25">
                          <img
                            src="./assets/icons/premium-gold.svg"
                            alt="Crown icon"
                          />
                          Premium
                        </span>
                      </div>
                      <div className="flex gap-2.5">
                        <img
                          src="./assets/icons/location-gray.svg"
                          alt="Location"
                        />
                        <span className="font-medium text-theme-small-text  line-clamp-1">
                          Berkshire, North Myrashire
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-2.5 bg-theme-small-text-2 dark:bg-theme-main-text shadow-search-location dark:shadow-none rounded overflow-hidden p-2.5"
                  >
                    <div className="size-15 shrink-0 ">
                      <img
                        src="./assets/images/search-result-2.jpg"
                        className="size-full object-cover"
                        alt="Image"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex-between text-xl/[1.2] font-semibold dark:text-white">
                        Green City park
                        <span className="hidden h-5.5 bg-theme-main-5 flex items-center gap-1.25 text-theme-warning font-medium text-[11px] rounded px-1.25">
                          <img
                            src="./assets/icons/premium-gold.svg"
                            alt="Crown icon"
                          />
                          Premium
                        </span>
                      </div>
                      <div className="flex gap-2.5">
                        <img
                          src="./assets/icons/location-gray.svg"
                          alt="Location"
                        />
                        <span className="font-medium text-theme-small-text  line-clamp-1">
                          Maldives, New City
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
