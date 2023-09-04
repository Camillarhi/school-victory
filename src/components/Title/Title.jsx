import React from "react";

export default function Title({ className = "", text }) {
  return (
    <h1
      className={`${className} md:text-[2.5rem] text-xl font-bold md:leading-[3.125rem] leading-5 text-text-color`}
    >
      {text}
    </h1>
  );
}
