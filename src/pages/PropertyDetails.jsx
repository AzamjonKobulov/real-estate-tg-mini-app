import { Link } from "react-router-dom";

import LikeButton from "../components/shared/LikeButton";

export default function PropertyDetails() {
  return (
    <>
      <section className="pb-12">
        <div className="max-w-base mx-auto">
          <div className="h-80 relative rounded-b-xl overflow-hidden pt-5">
            <img
              src="./assets/images/details.png"
              alt="Image"
              className="size-full object-cover absolute inset-0"
            />
            <div className="flex-between relative z-10 px-5">
              <button className="size-7.5 shrink-0 flex-center bg-white rounded-full">
                <img src="./assets/icons/angle-left-blue.svg" alt="Icon" />
              </button>

              <div className="flex items-center gap-5">
                <button className="size-7.5 shrink-0 flex-center bg-white rounded-full">
                  <img src="./assets/icons/share.svg" alt="Icon" />
                </button>
                <LikeButton className="bg-white" />
              </div>
            </div>

            <div className="h-6 flex-center absolute z-10 bottom-2.5 right-5 bg-white/50 backdrop-blur-lg text-xs font-medium text-theme-main border-[0.5px] border-white/60 rounded-full px-2.5">
              Age of Property 5 month
            </div>
          </div>

          <div className="space-y-5 mt-5">
            <div className="space-y-2.5  px-5">
              <div className="flex-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src="./assets/icons/villa.svg"
                    alt="Villa"
                    className="size-5"
                  />
                  <span className="font-medium">Villa</span>
                </div>
                <span className="h-6.75 flex-center bg-theme-main-5 text-theme-main font-medium text-sm rounded px-2.5">
                  For Rent
                </span>
              </div>
              <div className="flex-between text-lg font-medium ">
                <p>Modern Haven Villa</p>
                <p className="text-theme-main">$1200 /month</p>
              </div>
              <div className="flex gap-1.25">
                <img src="./assets/icons/location-gray.svg" alt="Location" />
                <span className="font-medium text-sm text-theme-small-text  line-clamp-1">
                  Jakarta, New City Indonesia
                </span>
              </div>
            </div>

            <div className="overflow-auto scroll-none px-5">
              <div className="min-w-max flex items-center gap-2.5">
                <span className="h-12 flex items-center gap-1.25 bg-theme-main-5 font-medium rounded-xl px-3.75">
                  <img src="./assets/icons/bed.svg" alt="Bed Icon" />2 BHK
                </span>
                <span className="h-12 flex items-center gap-1.25 bg-theme-main-5 font-medium rounded-xl px-3.75">
                  <img
                    src="./assets/icons/maximize-square.svg"
                    alt="Maximize Square Icon"
                  />
                  1,928 sqft
                </span>
                <span className="h-12 flex items-center gap-1.25 bg-theme-main-5 font-medium rounded-xl px-3.75">
                  <img
                    src="./assets/icons/furniture.svg"
                    alt="Furniture Icon"
                  />
                  Fully Furnished
                </span>
              </div>
            </div>

            <div className="space-y-5 px-5">
              <div className="h-px bg-theme-gray-light"></div>

              <div className="flex-between bg-theme-main-5 rounded-lg px-2.5 py-3.75">
                <div className="flex items-center gap-2.5">
                  <div className="size-12.5 shrink-0 bg-theme-main-6 rounded-full overflow-hidden">
                    <img
                      src="./assets/images/avatar.png"
                      alt="Avatar"
                      className="size-full object-cover"
                    />
                  </div>

                  <div className="space-y-1.25">
                    <p className="font-medium ">Louise Vuitton</p>
                    <p className="text-theme-small-text text-sm/3.5">
                      Property owner
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href="#"
                    className="h-10 w-12.5 flex-center  border border-theme-gray-light rounded-lg shadow-contact-owner"
                  >
                    <img src="./assets/icons/whatsapp.svg" alt="Whatsapp" />
                  </a>
                  <a
                    href="#"
                    className="h-10 w-12.5 flex-center  border border-theme-gray-light rounded-lg shadow-contact-owner"
                  >
                    <img src="./assets/icons/call.svg" alt="Call" />
                  </a>
                </div>
              </div>

              <div className="space-y-2.5">
                <p className="text-lg/5.5 font-medium">Description</p>
                <p className="text-theme-small-text">
                  This is a Well-designed 3 BHK Apartment available for rent. It
                  is situated in a prime It is situated in location of Maldives
                  at MotaMava.
                </p>
              </div>

              <div className="space-y-2.5">
                <p className="text-lg/5.5 font-medium">Photo Gallery</p>
                <div className="grid grid-cols-3 gap-5">
                  <div className="h-17.5 border border-theme-main-4 rounded-lg overflow-hidden">
                    <img
                      src="./assets/images/gallery-1.jpg"
                      alt="Image"
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="h-17.5 border border-theme-main-4 rounded-lg overflow-hidden">
                    <img
                      src="./assets/images/gallery-2.jpg"
                      alt="Image"
                      className="size-full object-cover"
                    />
                  </div>
                  <Link
                    to="/gallery"
                    className="h-17.5 relative border border-theme-main-4 rounded-lg overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-black/50 flex-center text-xl font-semibold text-white">
                      +4
                    </div>
                    <img
                      src="./assets/images/gallery-4.jpg"
                      alt="Image"
                      className="size-full object-cover"
                    />
                  </Link>
                </div>
              </div>

              <div className="space-y-2.5">
                <p className="text-lg/5.5 font-medium">Location</p>
                <div className="h-42.5 relative rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1720.9870680661804!2d106.85471948766809!3d-6.527585391196998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c124db7e8733%3A0xecb9285caaa1b5d5!2sJl.%20Raya%20Sirkuit%20Sentul%2C%20Kabupaten%20Bogor%2C%20Jawa%20Barat%2016810%2C%20Indonesia!5e0!3m2!1sen!2s!4v1753181043194!5m2!1sen!2s"
                    className="size-full object-cover"
                    style={{ border: "0px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <button className="h-12 absolute w-full bottom-0 z-10 font-medium bg-theme-main-5 rounded-xl">
                    View all On Map
                  </button>
                </div>
              </div>

              <div className="space-y-2.5">
                <p className="text-lg/5.5 font-medium">Extra Facilities</p>
                <div className="space-y-2.5">
                  <div className="h-13.75 flex items-center gap-3.5 bg-theme-main-5 rounded-lg px-3">
                    <div className="size-7.5 shrink-0 flex-center bg-white rounded">
                      <img src="./assets/icons/car.svg" alt="Icon" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">Parking</p>
                      <p className="text-xs text-theme-small-text">
                        1 car parking , 2 Bike parking
                      </p>
                    </div>
                  </div>
                  <div className="h-13.75 flex items-center gap-3.5 bg-theme-main-5 rounded-lg px-3">
                    <div className="size-7.5 shrink-0 flex-center bg-white rounded">
                      <img src="./assets/icons/water-drops.svg" alt="Icon" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">Swimming Pool</p>
                      <p className="text-xs text-theme-small-text">
                        Kiddie pool, Olympic-size pool, Lap pool
                      </p>
                    </div>
                  </div>
                  <div className="h-13.75 flex items-center gap-3.5 bg-theme-main-5 rounded-lg px-3">
                    <div className="size-7.5 shrink-0 flex-center bg-white rounded">
                      <img src="./assets/icons/snow.svg" alt="Icon" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">Rooftop Garden</p>
                      <p className="text-xs text-theme-small-text">
                        Green roofs, Extensive roof, Intensive roof
                      </p>
                    </div>
                  </div>
                  <div className="h-13.75 flex items-center gap-3.5 bg-theme-main-5 rounded-lg px-3">
                    <div className="size-7.5 shrink-0 flex-center bg-white rounded">
                      <img src="./assets/icons/wifi.svg" alt="Icon" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">Wifi</p>
                      <p className="text-xs text-theme-small-text">
                        Wifi with 100mbps, Always stay connected
                      </p>
                    </div>
                  </div>
                  <div className="h-13.75 flex items-center gap-3.5 bg-theme-main-5 rounded-lg px-3">
                    <div className="size-7.5 shrink-0 flex-center bg-white rounded">
                      <img src="./assets/icons/clubhouse.svg" alt="Icon" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">Clubhouse</p>
                      <p className="text-xs text-theme-small-text">
                        Board Game, Chess, Card game
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <p className="text-lg/5.5 font-medium">Cost Of Living</p>
                <div className="space-y-2.5 bg-theme-main-5 font-medium rounded-lg p-2.5">
                  <div className="flex-between">
                    <p className="text-theme-small-text">Security Deposit</p>
                    <p className="font-medium">$1200</p>
                  </div>
                  <div className="flex-between">
                    <p className="text-theme-small-text">
                      Maintenance Charges <br /> (Per Month)
                    </p>
                    <p className="font-medium">$100</p>
                  </div>
                  <div className="flex-between">
                    <p className="text-theme-small-text">Brokerage</p>
                    <p className="font-medium">$0</p>
                  </div>
                  <div className="h-px bg-theme-gray-light"></div>
                  <div className="flex-between">
                    <p>Total Extra Cost</p>
                    <p className="font-medium">$1400</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
