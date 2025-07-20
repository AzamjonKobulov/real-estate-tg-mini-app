import { useState } from "react";

import { Link } from "react-router-dom";
import LikeButton from "../shared/LikeButton";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow } from "swiper/modules";
import ButtonGroup from "../shared/ButtonGroup";

export default function NearByProperty() {
  const [selectedVal, setSelectedVal] = useState(0);
  console.log(selectedVal);

  return (
    <section id="advertisement-property">
      <div className=" space-y-5 pb-5 mt-5">
        <div className="max-w-base mx-auto space-y-5 px-5">
          <h2>Select BHK</h2>
          <ButtonGroup
            options={["1 RK", "1 BHK", "2 BHK", "3 BHK"]}
            onChange={(val) => setSelectedVal(val)}
          />
        </div>
        <div className="max-w-base mx-auto flex-between px-5">
          <h2>Near by Property</h2>
          <Link to="/" className="text-sm text-theme-main">
            See all
          </Link>
        </div>
        <div className="max-w-base mx-auto sm:px-5">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={48}
            slidesPerView={1.5}
            initialSlide={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 5,
              depth: 50,
              modifier: 2,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            // loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link
                to="/"
                className="h-[285px] mx-auto relative flex flex-col justify-between items-end rounded-xl overflow-hidden shadow-properties p-2.5"
              >
                <LikeButton />
                <img
                  src="./assets/images/near-by-property-3.jpg"
                  alt="Image"
                  loading="lazy"
                  className="size-full absolute inset-0 object-cover"
                />
                <div className="w-full space-y-1.25 bg-theme-main-5 rounded-lg relative z-10 p-2.5">
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
                      src="./assets/icons/apartment.svg"
                      alt="Apartment"
                      className="size-4"
                    />
                    <span className="text-theme-small-text">Apartment</span>
                  </div>
                  <div className="flex gap-2.5">
                    <img
                      src="./assets/icons/location-gray.svg"
                      alt="Location"
                    />
                    <span className="font-medium text-theme-small-text text-xs/[1.2] line-clamp-1">
                      Cityscape Central, NY 10987
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                to="/"
                className="h-[285px] mx-auto relative flex flex-col justify-between items-end rounded-xl overflow-hidden shadow-properties p-2.5"
              >
                <LikeButton />
                <img
                  src="./assets/images/near-by-property-1.jpg"
                  alt="Image"
                  loading="lazy"
                  className="size-full absolute inset-0 object-cover"
                />
                <div className="w-full space-y-1.25 bg-theme-main-5 rounded-lg relative z-10 p-2.5">
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
                      src="./assets/icons/villa.svg"
                      alt="Villa"
                      className="size-4"
                    />
                    <span className="text-theme-small-text">Villa</span>
                  </div>
                  <div className="flex gap-2.5">
                    <img
                      src="./assets/icons/location-gray.svg"
                      alt="Location"
                    />
                    <span className="font-medium text-theme-small-text text-xs/[1.2] line-clamp-1">
                      Coastal Way, Breezy Shores
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link
                to="/"
                className="h-[285px] mx-auto relative flex flex-col justify-between items-end rounded-xl overflow-hidden shadow-properties p-2.5"
              >
                <span className="absolute top-0 left-0 z-10 h-5.5 bg-theme-main-5 flex items-center gap-1.25 text-theme-warning font-medium text-[11px] rounded px-1.25">
                  <img src="./assets/icons/premium-gold.svg" alt="Crown icon" />
                  Premium
                </span>
                <LikeButton />
                <img
                  src="./assets/images/near-by-property-2.jpg"
                  alt="Image"
                  loading="lazy"
                  className="size-full absolute inset-0 object-cover"
                />
                <div className="w-full space-y-1.25 bg-theme-main-5 rounded-lg relative z-10 p-2.5">
                  <div className="flex-between">
                    <h3 className="text-lg/[1.2] font-medium text-theme-main-text">
                      $1200/month
                    </h3>
                    <span className="h-5.5 flex-center bg-theme-main-4 text-theme-main text-xs rounded p-1.25">
                      For Rent
                    </span>
                  </div>
                  <div className="flex items-center gap-1.25">
                    <img
                      src="./assets/icons/house.svg"
                      alt="House"
                      className="size-4"
                    />
                    <span className="text-theme-small-text">House</span>
                  </div>
                  <div className="flex gap-2.5">
                    <img
                      src="./assets/icons/location-gray.svg"
                      alt="Location"
                    />
                    <span className="font-medium text-theme-small-text text-xs/[1.2] line-clamp-1">
                      Sunflower Fields, TX 12345
                    </span>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
