import { Link } from "react-router-dom";
import LikeButton from "../shared/LikeButton";

export default function NearByProperty() {
  return (
    <section id="advertisement-property">
      <div className=" space-y-5 mt-5">
        <div className="max-w-base mx-auto space-y-5 px-5">
          <h2>Select BHK</h2>
          <div className="min-w-max flex items-center gap-2.5">
            <button className="h-10 bg-theme-main text-white rounded-lg px-5">
              1 RK
            </button>
            <button className="h-10 bg-theme-main-5 text-theme-small-text rounded-lg px-5">
              1 BHK
            </button>
            <button className="h-10 bg-theme-main-5 text-theme-small-text rounded-lg px-5">
              2 BHK
            </button>
            <button className="h-10 bg-theme-main-5 text-theme-small-text rounded-lg px-5">
              3 BHK
            </button>
          </div>
        </div>
        <div className="max-w-base mx-auto flex-between px-5">
          <h2>Near by Property</h2>
          <Link to="/" className="text-sm text-theme-main">
            See all
          </Link>
        </div>
        <div className="scroll-none overflow-auto px-5">
          <div className="w-[197px] h-[285px] mx-auto relative flex flex-col justify-between items-end rounded-xl overflow-hidden shadow-properties p-2.5">
            <LikeButton />
            <img
              src="./src/assets/images/near-by-property-1.jpg"
              alt="Image"
              loading="lazy"
              className="size-full absolute inset-0 object-cover"
            />
            <div className="space-y-1.25 bg-theme-main-5 rounded-lg relative z-10 p-2.5">
              <div className="flex-between">
                <h3 className="text-lg/[1.2] font-medium text-theme-main-text">
                  $2900
                </h3>
                <span className="h-5.5 flex-center bg-theme-main-4 text-theme-main text-xs rounded p-1.25">
                  For Sell
                </span>
              </div>
              <div className="flex items-center gap-1.25">
                <img
                  src="./src/assets/icons/builidng.svg"
                  alt="Building"
                  className="size-4"
                />
                <span className="text-theme-small-text">Villa</span>
              </div>
              <div className="flex gap-2.5">
                <img
                  src="./src/assets/icons/location-gray.svg"
                  alt="Location"
                />
                <span className="font-medium text-theme-small-text text-xs/[1.2] line-clamp-1">
                  Coastal Way, Breezy Shores
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
