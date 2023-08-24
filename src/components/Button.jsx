import React from "react";
import { ArrowRight } from "../assets/svgs";

export default function Button({
  text = "",
  className = "",
  size = "small",
  icon = false,
}) {
  const buttonSizeClass = () => {
    if (size === "medium") {
      return "px-[1.5625rem] py-[.9375rem]";
    } else if (size === "small") {
      return " px-[.625rem]";
    } else {
      return "px-[2.5rem] py-[.9375rem]";
    }
  };

  return (
    <button
      type="button"
      className={`${className} ${buttonSizeClass()}  rounded-[.3125rem] flex justify-center items-center gap-[.9375rem] leading-[1.375rem] font-bold tracking-[.0125rem] text-[.875rem] cursor-pointer`}
    >
      {text}
      {icon && <img src={ArrowRight} alt="arrowRight" />}
    </button>
  );
}
