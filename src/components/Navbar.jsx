import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import LocationDropdown from "./LocationDropdown";

export default function Navbar() {
  return (
    <header>
      <nav className="max-w-base mx-auto space-y-5 pt-2.5 px-5">
        <div className="flex-between">
          {/* Logo */}
          <Link to="/">
            <img src="./src/assets/icons/logo.svg" alt="Logo" />
          </Link>

          <div className="flex items-center gap-2.5">
            {/* Location Dropdown */}
            <LocationDropdown />

            <button className="size-8.5 shrink-0 flex-center border border-theme-main-3 rounded-full cursor-pointer hover:bg-theme-main-5 smooth-200">
              <img src="./src/assets/icons/bell.svg" alt="Bell" />
            </button>
          </div>
        </div>
        <SearchBar />
      </nav>
    </header>
  );
}
