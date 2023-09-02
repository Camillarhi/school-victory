import React from "react";

export default function Title({ className = "", text }) {
  return (
    <h1
      className={`${className} text-[2.5rem] font-bold leading-[3.125rem] text-text-color`}
    >
      {text}
    </h1>
  );
}
