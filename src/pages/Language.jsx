import LanguageSelector from "../components/LanguageSelector";

export default function Language() {
  return (
    <div className="max-w-base mx-auto space-y-5 p-5">
      <div className="flex items-center gap-2.5">
        <button>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 5.30273L9 12.3027L15 19.3027"
              stroke="#2B62B4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <h4 className="font-semibold text-xl text-theme-main-text dark:text-white">
          Choose Your Language
        </h4>
      </div>

      <LanguageSelector />
    </div>
  );
}
