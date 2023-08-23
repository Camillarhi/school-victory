import React from "react";

export default function Button({ text = "", className = "", size = "small" }) {
  return (
    <button
      type="button"
      className={`${className} ${
        size === "small" ? "px-[1.5625rem]" : "px:[2.5rem]"
      } py-[.9375rem] rounded-[.3125rem] bg-[#96BB7C]`}
    >
      {text}
    </button>
  );
}
