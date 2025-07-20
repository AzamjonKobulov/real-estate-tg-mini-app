import { Link } from "react-router-dom";
import LikeButton from "../shared/LikeButton";

export default function AdvertisementProperty() {
  return (
    <section id="advertisement-property">
      <div className="space-y-5">
        <div className="max-w-base mx-auto flex-between px-5">
          <h2>Advertisement Property</h2>
          <Link to="/" className="text-sm text-theme-main">
            See all
          </Link>
        </div>
        <div className="scroll-none px-5">
          <div className="flex-center gap-5">
            <Link
              to="/"
              className="h-38.75 flex rounded-lg shadow-properties overflow-hidden"
            >
              <div className="w-1/3 relative">
                <span className="h-6.75 flex-center absolute bottom-2.5 left-2.5 bg-theme-main-3 text-theme-main font-medium text-sm rounded px-2.5">
                  For Rent
                </span>
                <img
                  src="./assets/images/for-rent.jpg"
                  alt="Image"
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-2.5 bg-theme-main-5 py-3.75 px-2.5">
                <div className="flex-between">
                  <h4 className="text-xl font-semibold text-theme-main leading-[1.2]">
                    $290 <span className="font-medium text-base">/month</span>
                  </h4>

                  <LikeButton />
                </div>
                <div className="flex items-center gap-1.25">
                  <img src="./assets/icons/builidng.svg" alt="Building" />
                  <span className="text-theme-small-text">Villa</span>
                </div>
                <h4 className="font-medium text-theme-main-text text-lg/[1.2]">
                  Modern Haven Villa{" "}
                </h4>
                <div className="flex gap-2.5">
                  <img src="./assets/icons/location-gray.svg" alt="Location" />
                  <span className="font-medium text-theme-small-text leading-[1.2] line-clamp-1">
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
