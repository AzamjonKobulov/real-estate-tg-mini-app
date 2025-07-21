import { NavLink } from "react-router-dom";

const navItems = [
  {
    to: "/",
    alt: "Home",
    icon: "bottom-menu-home",
  },
  {
    to: "/settings",
    alt: "Settings",
    icon: "bottom-menu-blocks",
  },
  null,
  {
    to: "/favorites",
    alt: "Favorites",
    icon: "bottom-menu-heart",
  },
  {
    to: "/profile",
    alt: "Profile",
    icon: "bottom-menu-user",
  },
];

const AddButton = () => (
  <button className="size-15 shrink-0 absolute left-1/2 -translate-x-1/2 -top-7 z-20 flex-center bg-theme-main rounded-full shadow-lg">
    <svg
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.4316 25.7375C41.4316 24.9091 40.7601 24.2375 39.9316 24.2375H29.5745C29.0222 24.2375 28.5745 23.7898 28.5745 23.2375V12.8804C28.5745 12.0519 27.9029 11.3804 27.0745 11.3804H25.7888C24.9604 11.3804 24.2888 12.0519 24.2888 12.8804V23.2375C24.2888 23.7898 23.8411 24.2375 23.2888 24.2375H12.9316C12.1032 24.2375 11.4316 24.9091 11.4316 25.7375V27.0232C11.4316 27.8517 12.1032 28.5232 12.9316 28.5232H23.2888C23.8411 28.5232 24.2888 28.9709 24.2888 29.5232V39.8804C24.2888 40.7088 24.9604 41.3804 25.7888 41.3804H27.0745C27.9029 41.3804 28.5745 40.7088 28.5745 39.8804V29.5232C28.5745 28.9709 29.0222 28.5232 29.5745 28.5232H39.9316C40.7601 28.5232 41.4316 27.8517 41.4316 27.0232V25.7375Z"
        fill="white"
      />
    </svg>
  </button>
);

export default function BottomMenu() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 max-w-base z-50 w-full">
      <div className="relative">
        {/* Notched Circle */}
        {/* <div className="absolute left-1/2 -translate-x-1/2 -top-7 w-18 h-18 bg-white rounded-full z-10 after:"></div> */}

        {/* FAB Add Button */}
        <button className="absolute left-1/2 -translate-x-1/2 -top-6 xs:-top-10 z-20 size-15 xs:size-18 flex items-center justify-center bg-theme-main text-white rounded-full shadow-lg">
          <svg
            width="53"
            height="53"
            viewBox="0 0 53 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M41.4316 25.7375C41.4316 24.9091 40.7601 24.2375 39.9316 24.2375H29.5745C29.0222 24.2375 28.5745 23.7898 28.5745 23.2375V12.8804C28.5745 12.0519 27.9029 11.3804 27.0745 11.3804H25.7888C24.9604 11.3804 24.2888 12.0519 24.2888 12.8804V23.2375C24.2888 23.7898 23.8411 24.2375 23.2888 24.2375H12.9316C12.1032 24.2375 11.4316 24.9091 11.4316 25.7375V27.0232C11.4316 27.8517 12.1032 28.5232 12.9316 28.5232H23.2888C23.8411 28.5232 24.2888 28.9709 24.2888 29.5232V39.8804C24.2888 40.7088 24.9604 41.3804 25.7888 41.3804H27.0745C27.9029 41.3804 28.5745 40.7088 28.5745 39.8804V29.5232C28.5745 28.9709 29.0222 28.5232 29.5745 28.5232H39.9316C40.7601 28.5232 41.4316 27.8517 41.4316 27.0232V25.7375Z"
              fill="white"
            />
          </svg>
        </button>

        {/* Bottom Nav Bar */}
        <div className="relative max-w-base mx-auto">
          <img
            src="./assets/images/bottom-menu.png"
            alt="Image"
            className="w-full h-20 xs:h-22 object-fill absolute bottom-0"
          />
          <div className="h-20 relative z-20 grid grid-cols-5  pt-7.5 pb-6.25 rounded-t-2xl">
            {navItems.map((item, index) =>
              item ? (
                <NavLink key={index} to={item.to} className="flex-center">
                  {({ isActive }) => (
                    <img
                      src={`./assets/icons/${item.icon}${
                        isActive ? "-active" : ""
                      }.svg`}
                      alt={item.alt}
                    />
                  )}
                </NavLink>
              ) : (
                <div key={index}></div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
