import { Link } from "react-router-dom";

import LikeButton from "../shared/LikeButton";

export default function Properties() {
  return (
    <section id="properties">
      <div className="max-w-base mx-auto space-y-5 mt-5">
        <div className=" flex-between px-5">
          <h2>Properties</h2>
          <Link to="/" className="text-sm text-theme-main">
            See all
          </Link>
        </div>
        <div className="scroll-none overflow-auto pb-5 px-5">
          <div className="min-w-max flex items-center gap-5">
            <Link
              to="/property-details"
              className="w-58.5 rounded-xl shadow-properties overflow-hidden"
            >
              <div className="h-30 relative">
                <div className="flex-between relative z-10 p-2.5">
                  <div className="h-6 flex items-center gap-1.25 bg-theme-warning text-white text-xs font-medium rounded px-1.25">
                    <img src="./assets/icons/premium.svg" alt="Premium" />
                    Premium
                  </div>

                  <LikeButton />
                </div>
                <img
                  src="./assets/images/property-slide-1.jpg"
                  alt="Slide"
                  className="size-full absolute inset-0 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 bg-theme-main-5 dark:bg-theme-main-text rounded-b-lg p-2.5">
                <div className="flex items-center gap-1.25">
                  <img src="./assets/icons/villa.svg" alt="Villa" />
                  <span className="text-theme-small-text dark:text-white">
                    Villa
                  </span>
                </div>
                <div className="flex-between">
                  <h3 className="text-lg/[1.2] font-medium text-theme-main ">
                    $2900
                  </h3>
                  <span className="bg-theme-main-4 text-sm/[1] text-theme-main rounded p-1.25">
                    For Sell
                  </span>
                </div>
                <h4 className="font-medium text-theme-main-text dark:text-white">
                  Modern Haven Villa{" "}
                </h4>
                <div className="flex gap-2.5">
                  <img src="./assets/icons/location-gray.svg" alt="Location" />
                  <span className="font-medium text-theme-small-text  line-clamp-1">
                    Serenity Lane, Blissfulville, CA 98765
                  </span>
                </div>
              </div>
            </Link>
            <Link
              to="/property-details"
              className="w-58.5 rounded-xl shadow-properties overflow-hidden"
            >
              <div className="h-30 relative">
                <div className="flex-between relative z-10 p-2.5">
                  <div className="h-6 flex items-center gap-1.25 bg-theme-warning text-white text-xs font-medium rounded px-1.25">
                    <img src="./assets/icons/premium.svg" alt="Premium" />
                    Premium
                  </div>

                  <LikeButton />
                </div>
                <img
                  src="./assets/images/property-slide-2.jpg"
                  alt="Slide"
                  className="size-full absolute inset-0 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 bg-theme-main-5 dark:bg-theme-main-text rounded-b-lg p-2.5">
                <div className="flex items-center gap-1.25">
                  <img src="./assets/icons/apartment.svg" alt="Apartment" />
                  <span className="text-theme-small-text dark:text-white">
                    Apartment
                  </span>
                </div>
                <div className="flex-between">
                  <h3 className="text-lg/[1.2] font-medium text-theme-main ">
                    $190/month
                  </h3>
                  <span className="bg-theme-main-4 text-sm/[1] text-theme-main rounded p-1.25">
                    For Rent
                  </span>
                </div>
                <h4 className="font-medium text-theme-main-text">
                  Sun & Shine Hills
                </h4>
                <div className="flex gap-2.5">
                  <img src="./assets/icons/location-gray.svg" alt="Location" />
                  <span className="font-medium text-theme-small-text  line-clamp-1">
                    Serenity Lane, Blissfulville, CA 98765
                  </span>
                </div>
              </div>
            </Link>
            <Link
              to="/property-details"
              className="w-58.5 rounded-xl shadow-properties overflow-hidden"
            >
              <div className="h-30 relative">
                <div className="flex-between relative z-10 p-2.5">
                  <div className="h-6 flex items-center gap-1.25 bg-theme-warning text-white text-xs font-medium rounded px-1.25">
                    <img src="./assets/icons/premium.svg" alt="Premium" />
                    Premium
                  </div>

                  <LikeButton />
                </div>
                <img
                  src="./assets/images/property-slide-2.jpg"
                  alt="Slide"
                  className="size-full absolute inset-0 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-2 bg-theme-main-5 dark:bg-theme-main-text rounded-b-lg p-2.5">
                <div className="flex items-center gap-1.25">
                  <img src="./assets/icons/apartment.svg" alt="Apartment" />
                  <span className="text-theme-small-text dark:text-white">
                    Apartment
                  </span>
                </div>
                <div className="flex-between">
                  <h3 className="text-lg/[1.2] font-medium text-theme-main ">
                    $190/month
                  </h3>
                  <span className="bg-theme-main-4 text-sm/[1] text-theme-main rounded p-1.25">
                    For Rent
                  </span>
                </div>
                <h4 className="font-medium text-theme-main-text dark:text-white">
                  Sun & Shine Hills
                </h4>
                <div className="flex gap-2.5">
                  <img src="./assets/icons/location-gray.svg" alt="Location" />
                  <span className="font-medium text-theme-small-text  line-clamp-1">
                    Serenity Lane, Blissfulville, CA 98765
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
