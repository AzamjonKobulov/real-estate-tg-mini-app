import ThemeSelector from "./ThemeSelector";

export default function Theme({ toggleThemeSelector }) {
  return (
    <div className="max-w-base mx-auto fixed left-1/2 -translate-x-1/2 inset-y-0 z-[60] w-full bg-black/40 flex-center px-5">
      <div className="w-full space-y-5 bg-white rounded-xl p-5">
        <div className="flex-between gap-2.5">
          <h4 className="font-bold text-xl text-theme-main-text">
            Choose Theme
          </h4>
          <button onClick={toggleThemeSelector}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9999 5.50006L5 19.5M4.99994 5.5L18.9999 19.4999"
                stroke="#2F2F2F"
                stroke-width="2.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        <ThemeSelector />
      </div>
    </div>
  );
}
