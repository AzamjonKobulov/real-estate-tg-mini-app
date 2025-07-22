import { Link } from "react-router-dom";

import SearchBar from "../components/SearchBar";

export default function Gallery() {
  return (
    <>
      <section className="pt-5">
        <div className="max-w-base mx-auto space-y-10 px-5">
          <div className="space-y-5">
            <div className="flex items-center gap-2.5 text-xl/[1.2] font-semibold">
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
              <span>Photo Gallery</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-5">
            <div className="aspect-square border-2 border-theme-main-4 rounded-xl overflow-hidden">
              <img
                src="./assets/images/gallery-1.jpg"
                alt="Image"
                className="size-full object-cover"
              />
            </div>
            <div className="aspect-square border-2 border-theme-main-4 rounded-xl overflow-hidden">
              <img
                src="./assets/images/gallery-2.jpg"
                alt="Image"
                className="size-full object-cover"
              />
            </div>
            <div className="aspect-square border-2 border-theme-main-4 rounded-xl overflow-hidden">
              <img
                src="./assets/images/gallery-3.jpg"
                alt="Image"
                className="size-full object-cover"
              />
            </div>
            <div className="aspect-square border-2 border-theme-main-4 rounded-xl overflow-hidden">
              <img
                src="./assets/images/gallery-4.jpg"
                alt="Image"
                className="size-full object-cover"
              />
            </div>
            <div className="aspect-square border-2 border-theme-main-4 rounded-xl overflow-hidden">
              <img
                src="./assets/images/gallery-5.jpg"
                alt="Image"
                className="size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
