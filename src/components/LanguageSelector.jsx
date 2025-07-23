"use client";

import { useState } from "react";

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const languages = [
    {
      id: "english",
      name: "English",
      flag: "../assets/images/flag-us.png",
    },
    {
      id: "hindi",
      name: "Hindi",
      flag: "../assets/images/flag-india.png",
    },
    {
      id: "turkish",
      name: "Turkish",
      flag: "../assets/images/flag-turkish.png",
    },
    {
      id: "french",
      name: "French",
      flag: "../assets/images/flag-france.png",
    },
    {
      id: "german",
      name: "German",
      flag: "../assets/images/flag-germany.png",
    },
    {
      id: "arabic",
      name: "Arabic",
      flag: "../assets/images/flag-arabic.png",
    },
  ];

  const handleLanguageChange = (languageId) => {
    setSelectedLanguage(languageId);
  };

  return (
    <>
      <div className="space-y-3">
        {languages.map((language) => (
          <div
            key={language.id}
            className={`h-16 flex items-center justify-between text-lg font-medium font-inter p-4 rounded-lg smooth-200 ${
              selectedLanguage === language.id
                ? "bg-theme-main text-white"
                : "bg-theme-main-5 dark:bg-theme-main-text dark:text-white"
            }`}
            onClick={() => handleLanguageChange(language.id)}
          >
            <div className="flex items-center space-x-2.5">
              <div
                className={`h-6.25 w-9.5 shrink-0 border border-transparent ${
                  selectedLanguage === language.id ? "border-white" : ""
                } rounded-[2px] overflow-hidden`}
              >
                <img
                  src={language.flag}
                  alt={language.name}
                  className="size-full object-cover"
                />
              </div>
              <span className="font-medium text-lg">{language.name}</span>
            </div>

            <div className="relative">
              <input
                type="radio"
                name="language"
                value={language.id}
                checked={selectedLanguage === language.id}
                onChange={() => handleLanguageChange(language.id)}
                className="sr-only"
              />
              <div
                className={`size-5 shrink-0 rounded-full border-[1.5px] flex items-center justify-center transition-all duration-200 ${
                  selectedLanguage === language.id
                    ? "border-white "
                    : "border-theme-main "
                }`}
              >
                <div
                  className={`size-3 rounded-full  ${
                    selectedLanguage === language.id ? "bg-white" : ""
                  }`}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
