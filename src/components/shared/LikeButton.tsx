import React, { useState } from "react";

export default function LikeButton({ className }) {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked((prev) => !prev)}
      className={`size-7.5 relative z-10 shrink-0 flex-center bg-theme-main-4 rounded-full ${className}`}
    >
      <img
        src={
          liked
            ? "./assets/icons/heart-fill.svg"
            : "./assets/icons/heart-emty.svg"
        }
        alt="Heart Icon"
      />
    </button>
  );
}
