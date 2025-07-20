import React, { useState } from "react";

const budgets = [
  {
    budget: "Up to 10K",
    icon: ({ className }) => (
      <svg
        width="17"
        height="14"
        viewBox="0 0 17 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-theme-small-text ${className}`}
      >
        <path d="M2.03711 13.901H14.8563V6.76123H2.03711V13.901Z" />
        <path d="M8.44448 3.06396L2.03711 6.7619H8.44448H14.8563L8.44448 3.06396Z" />
        <path d="M16.7767 5.79245L16.26 6.6866L7.87109 1.84288L8.38782 0.94873L16.7767 5.79245Z" />
        <path d="M0 5.79245L0.516723 6.6866L8.90561 1.84288L8.38889 0.94873L0 5.79245Z" />
        <path d="M9.87978 13.9019H7.01758V8.72119H9.87978V13.9019Z" />
        <path d="M12.7031 4.48522H14.46V1.31299H12.7031V4.48522Z" />
      </svg>
    ),
  },
  {
    budget: "Up to 20K",
    icon: ({ className }) => (
      <svg
        width="9"
        height="19"
        viewBox="0 0 9 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-theme-small-text ${className}`}
      >
        <path d="M0 18.6538H9V0.94873H0V18.6538Z" />
        <path
          d="M3.66406 18.6318H5.33036V16.1987H3.66406V18.6318Z"
          fill="white"
        />
        <path
          d="M8.01937 4.24521H0.960938V3.41943H8.01937V4.24521Z"
          fill="white"
        />
        <path
          d="M8.01937 6.25983H0.960938V5.43896H8.01937V6.25983Z"
          fill="white"
        />
        <path
          d="M8.01937 10.2843H0.960938V9.4585H8.01937V10.2843Z"
          fill="white"
        />
        <path
          d="M8.01937 8.27255H0.960938V7.44678H8.01937V8.27255Z"
          fill="white"
        />
        <path
          d="M8.01937 12.294H0.960938V11.4683H8.01937V12.294Z"
          fill="white"
        />
        <path
          d="M8.01937 14.3028H0.960938V13.4819H8.01937V14.3028Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    budget: "Up to 25K",
    icon: ({ className }) => (
      <svg
        width="13"
        height="20"
        viewBox="0 0 13 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-theme-small-text ${className}`}
      >
        <path d="M1.90625 19.6136H10.1865V8.35498H1.90625V19.6136Z" />
        <path
          d="M4.64919 12.8596H2.80469V11.0151H4.64919V12.8596Z"
          fill="white"
        />
        <path
          d="M9.28981 12.8596H7.44531V11.0151H9.28981V12.8596Z"
          fill="white"
        />
        <path d="M6.9695 12.8596H5.125V11.0151H6.9695V12.8596Z" fill="white" />
        <path
          d="M4.64919 15.2815H2.80469V13.437H4.64919V15.2815Z"
          fill="white"
        />
        <path
          d="M9.28981 15.2815H7.44531V13.437H9.28981V15.2815Z"
          fill="white"
        />
        <path d="M6.9695 15.2815H5.125V13.437H6.9695V15.2815Z" fill="white" />
        <path
          d="M4.64919 17.7053H2.80469V15.8608H4.64919V17.7053Z"
          fill="white"
        />
        <path
          d="M9.28981 17.7053H7.44531V15.8608H9.28981V17.7053Z"
          fill="white"
        />
        <path d="M6.9695 17.7053H5.125V15.8608H6.9695V17.7053Z" fill="white" />
        <path d="M8.79877 8.4356H3.28125V3.70459H8.79877V8.4356Z" />
        <path d="M3.28125 3.7035L6.03602 0.94873L8.79478 3.7035H3.28125Z" />
        <path
          d="M7.43678 5.91481H6.20312V4.68115H7.43678V5.91481Z"
          fill="white"
        />
        <path
          d="M5.89772 5.91481H4.66406V4.68115H5.89772V5.91481Z"
          fill="white"
        />
        <path
          d="M7.43678 7.53786H6.20312V6.3042H7.43678V7.53786Z"
          fill="white"
        />
        <path
          d="M5.89772 7.53786H4.66406V6.3042H5.89772V7.53786Z"
          fill="white"
        />
        <path d="M12.4164 19.9495H0V19.2788H12.4164V19.9495Z" />
      </svg>
    ),
  },
  {
    budget: "Up to 30K",
    icon: ({ className }) => (
      <svg
        width="12"
        height="19"
        viewBox="0 0 12 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`fill-theme-small-text ${className}`}
      >
        <path d="M7.39575 0.94873L0 3.42899V18.9487H7.39575V0.94873Z" />
        <path d="M12.0019 10.1223L7.375 7.64209V18.9465H12.0019V10.1223Z" />
        <path
          d="M8.84932 12.9193H7.75781V11.822H8.84932V12.9193Z"
          fill="white"
        />
        <path
          d="M8.84932 14.8272H7.75781V13.73H8.84932V14.8272Z"
          fill="white"
        />
        <path
          d="M8.84932 16.7413H7.75781V15.644H8.84932V16.7413Z"
          fill="white"
        />
        <path
          d="M8.84932 18.6531H7.75781V17.5559H8.84932V18.6531Z"
          fill="white"
        />
        <path
          d="M10.8728 12.9193H9.78125V11.822H10.8728V12.9193Z"
          fill="white"
        />
        <path
          d="M10.8728 14.8272H9.78125V13.73H10.8728V14.8272Z"
          fill="white"
        />
        <path
          d="M10.8728 16.7413H9.78125V15.644H10.8728V16.7413Z"
          fill="white"
        />
        <path
          d="M10.8728 18.6531H9.78125V17.5559H10.8728V18.6531Z"
          fill="white"
        />
        <path
          d="M6.21039 5.69395H1.08594V4.91943H6.21039V5.69395Z"
          fill="white"
        />
        <path
          d="M6.21039 7.51818H1.08594V6.74365H6.21039V7.51818Z"
          fill="white"
        />
        <path
          d="M6.21039 9.33849H1.08594V8.56396H6.21039V9.33849Z"
          fill="white"
        />
        <path
          d="M6.21039 11.1608H1.08594V10.3862H6.21039V11.1608Z"
          fill="white"
        />
        <path
          d="M6.21039 12.9869H1.08594V12.2124H6.21039V12.9869Z"
          fill="white"
        />
        <path
          d="M6.21039 14.8092H1.08594V14.0347H6.21039V14.8092Z"
          fill="white"
        />
        <path
          d="M6.21039 16.6332H1.08594V15.8586H6.21039V16.6332Z"
          fill="white"
        />
        <path
          d="M6.21039 18.4576H1.08594V17.6831H6.21039V18.4576Z"
          fill="white"
        />
      </svg>
    ),
  },
];

export default function SelectBudget() {
  const [selectedBudget, setSelectedBudget] = useState(0);

  console.log(selectedBudget);

  return (
    <section id="select-budget">
      <div className="max-w-base mx-auto pb-5 space-y-5">
        <div className=" px-5">
          <h2>Select Budget</h2>
          <p className="text-xs text-theme-small-text">
            Explore properties based on Budget
          </p>
        </div>

        <div className="scroll-none overflow-auto px-5">
          <div className="min-w-max flex items-center gap-2.5 font-medium text-theme-small-text">
            {budgets.map((b, i) => (
              <button
                key={i}
                onClick={() => setSelectedBudget(i)}
                className={`flex flex-col items-center gap-1.25 ${
                  i === selectedBudget
                    ? "bg-theme-main text-white"
                    : "bg-theme-main-5 text-theme-small-text"
                } rounded-lg transition-colors duration-200 px-4 py-2`}
              >
                <div
                  className={`size-7.5 shrink-0 rounded-full flex-center ${
                    i === selectedBudget ? "bg-theme-main-5" : "bg-white"
                  }`}
                >
                  <b.icon
                    className={i === selectedBudget ? "!fill-theme-main" : ""}
                  />
                </div>
                {b.budget}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
