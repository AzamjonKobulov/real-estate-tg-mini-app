import SearchBar from "../components/SearchBar";

export default function Search() {
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
              <span>Search Results</span>
            </div>
            <SearchBar />
            <p className="text-lg/[1.2] font-medium dark:text-white">
              Found 0 estates
            </p>
          </div>

          <div className="max-w-68.75 mx-auto flex flex-col items-center pt-22">
            <img
              src="./assets/images/search-not-found.svg"
              alt="Search Not Found"
            />

            <div className="space-y-5 text-center mt-7">
              <p className="text-2xl font-semibold dark:text-white">
                Search not found
              </p>
              <p className="text-sm/3.5 text-theme-small-text">
                Sorry, we can’t find the real estates you are looking for.
                Maybe, a little spelling mistake?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
