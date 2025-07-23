import { useState } from "react";
import ButtonGroup from "../components/shared/ButtonGroup";
import PriceRangeSlider from "../components/PriceRangeSlider";

export default function Filter() {
  const [selectedVal, setSelectedVal] = useState(0);
  const [selectedMode, setSelectedMode] = useState(0);
  const [selectedSince, setSelectedSince] = useState(0);
  return (
    <>
      <section className="pt-5 pb-10">
        <div className="max-w-base mx-auto space-y-5 px-5">
          <div className="flex-between">
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
              <span>Filter</span>
            </div>

            <button className="text-theme-main font-medium">
              Clear Filter
            </button>
          </div>
          <ButtonGroup
            options={["For Sell", "For Rent"]}
            onChange={(val) => setSelectedMode(val)}
            className="grid grid-cols-2 gap-2.5"
          />
          <div className="space-y-2.5">
            <p className="text-lg font-medium">Property Type</p>
            <ButtonGroup
              options={["All", "Villa", "Penthouse", "Apartment"]}
              onChange={(val) => setSelectedVal(val)}
            />
          </div>
          <PriceRangeSlider />
          <div className="space-y-2.5">
            <p className="text-lg font-medium">Posted Since</p>
            <ButtonGroup
              options={["Anytime", "Last Week", "Yesterday"]}
              onChange={(val) => setSelectedSince(val)}
            />
          </div>
          <div className="space-y-2.5">
            <p className="text-lg font-medium">Location</p>
            <button className="h-13.5 w-full flex-center gap-2.5 bg-theme-main-5 text-theme-small-text font-medium rounded-lg">
              <img src="./assets/icons/gps.svg" alt="Gps icon" />
              Choose Location
            </button>
          </div>
          <button className="h-13.5 w-full flex-center gap-2.5 bg-theme-main text-white font-medium rounded-lg mt-22.5">
            Apply Filter
          </button>
        </div>
      </section>
    </>
  );
}
