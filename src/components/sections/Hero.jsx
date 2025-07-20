import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Autoplay } from "swiper/modules";
import ButtonGroup from "../shared/ButtonGroup";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVal, setSelectedVal] = useState(0);
  console.log(selectedVal);
  const totalSlides = 3;

  return (
    <section id="hero">
      {/* Filter Buttons */}
      <div className="max-w-base mx-auto overflow-x-auto scroll-none mt-5 px-5">
        <ButtonGroup
          options={["Buy", "Rent", "Sell", "Commercial"]}
          onChange={(val) => setSelectedVal(val)}
        />
      </div>

      <div className="max-w-base mx-auto mt-5 px-5">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mySwiper bg-theme-main-2 bg-no-repeat bg-cover rounded-2xl shadow-hero"
          style={{
            backgroundImage: "url('./assets/images/bg-hero-box.png')",
          }}
        >
          {[...Array(totalSlides)].map((_, i) => (
            <SwiperSlide key={i}>
              <div className="h-32.5 relative flex items-center">
                <div className="space-y-2.5 ml-5">
                  <h1 className="max-w-31.5 leading-[1.2] font-medium text-sm text-white">
                    See how you can find a Home quickly!
                  </h1>
                  <button className="h-5.75 bg-white text-theme-main rounded font-semibold font-urbanist text-[10px] px-3">
                    Know more
                  </button>
                </div>
                <img
                  src="./assets/images/hero.png"
                  alt="House"
                  className="max-w-48 absolute bottom-0 right-0 z-10"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="flex-center gap-1.25 mt-3">
          {[...Array(totalSlides)].map((_, index) => (
            <span
              key={index}
              className={`h-1 rounded-full smooth-200 ${
                activeIndex === index
                  ? "w-5 bg-theme-main"
                  : "w-2.5 bg-theme-main-3"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
