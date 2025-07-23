import { Link } from "react-router-dom";

import { useTheme } from "../contexts/ThemeContext";

export default function Notifications() {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <section className="pt-5">
        <div className="max-w-base mx-auto space-y-10 px-5">
          <div className="space-y-5">
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
                <span>Notifications</span>
              </div>
              <button>
                {resolvedTheme === "dark" ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.60039 5.99927H21.6004M4.20039 11.9993H19.8004M2.40039 17.9993H16.2004"
                      stroke="#C5C6C7"
                      stroke-width="2.4"
                      stroke-linecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" fill="white" />
                    <path
                      d="M9.60039 6.00098H21.6004M4.20039 12.001H19.8004M2.40039 18.001H16.2004"
                      stroke="#C5C6C7"
                      stroke-width="2.4"
                      stroke-linecap="round"
                    />
                  </svg>
                )}
              </button>
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/"
                  className="flex gap-2.5 bg-theme-main-5 dark:bg-theme-main-text shadow-properties p-2.5"
                >
                  <div className="size-12.5 shrink-0 rounded overflow-hidden">
                    <img
                      src="./assets/images/notification-1.jpg"
                      className="size-full object-cover"
                      alt="Image"
                    />
                  </div>
                  <div className="flex-1 space-y-1.25">
                    <h5 className="text-xl/[1.2] font-medium dark:text-white">
                      Added New Property{" "}
                    </h5>
                    <div className="space-y-1.25 font-medium text-xs text-theme-small-text  ">
                      <p className="line-clamp-2">
                        It is a long established fact that a reader will be
                      </p>

                      <div className="flex items-center justify-end gap-2.5 ml-auto">
                        Today
                        <span className="size-2 shrink-0 rounded-full bg-theme-success"></span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex gap-2.5 bg-theme-main-5 dark:bg-theme-main-text shadow-properties p-2.5"
                >
                  <div className="size-12.5 shrink-0 rounded overflow-hidden">
                    <img
                      src="./assets/images/notification-2.jpg"
                      className="size-full object-cover"
                      alt="Image"
                    />
                  </div>
                  <div className="flex-1 space-y-1.25">
                    <h5 className="text-xl/[1.2] font-medium dark:text-white">
                      Special Offers
                    </h5>
                    <div className="space-y-1.25 font-medium text-xs text-theme-small-text  ">
                      <p className="line-clamp-2">
                        Limited-time offer: Get new Property at a new special
                        price through our app.
                      </p>

                      <div className="flex items-center justify-end gap-2.5 ml-auto">
                        Yesterday
                        <span className="size-2 hidden shrink-0 rounded-full bg-theme-success"></span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex gap-2.5 bg-theme-main-5 dark:bg-theme-main-text shadow-properties p-2.5"
                >
                  <div className="size-12.5 shrink-0 flex-center font-semibold text-[33px] text-theme-main font-inter bg-theme-main-4 rounded overflow-hidden">
                    S
                    {/* <img
                      src="./assets/images/notification-2.jpg"
                      className="size-full object-cover"
                      alt="Image"
                    /> */}
                  </div>
                  <div className="flex-1 space-y-1.25">
                    <h5 className="text-xl/[1.2] font-medium dark:text-white">
                      Subscription Alert!
                    </h5>
                    <div className="space-y-1.25 font-medium text-xs text-theme-small-text  ">
                      <p className="line-clamp-2">
                        It is a long established fact that a reader will be
                        .......
                      </p>

                      <div className="flex items-center justify-end gap-2.5 ml-auto">
                        20 Jan 23
                        <span className="size-2 hidden shrink-0 rounded-full bg-theme-success"></span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
