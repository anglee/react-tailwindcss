import React from "react";

const More = ({ isExpanded, onClick }) => {
  return (
    <span className="text-xs tracking-wider cursor-pointer" onClick={onClick}>
      MORE{" "}
      {isExpanded ? (
        <svg
          className="inline -rotate-180 h-3 w-3 transform"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      ) : (
        <svg
          className="inline h-3 w-3 transform"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      )}
    </span>
  );
};

export default More;
