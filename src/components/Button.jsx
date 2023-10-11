import React from "react";
import { ArrowRight } from "../assets/svgs";

export default function Button({
  text = "",
  className = "",
  size = "small",
  icon = false,
  id = "",
}) {
  const buttonSizeClass = () => {
    if (size === "medium") {
      return "md:px-[1.5625rem] md:py-[.9375rem] px-[1.25rem] py-[.625rem]";
    } else if (size === "small") {
      return " md:px-[.625rem] px-[.3125rem]";
    } else {
      return "md:px-[2.5rem] md:py-[.9375rem] px-[1.875rem] py-[.625rem]";
    }
  };

  return (
    <button
      id={id}
      type="button"
      className={`${className} ${buttonSizeClass()}  rounded-[.3125rem] flex justify-center items-center gap-[.9375rem] leading-[1.375rem] font-bold tracking-[.0125rem] text-[.875rem] cursor-pointer`}
    >
      {text}
      {icon && <img src={ArrowRight} alt="arrowRight" />}
    </button>
  );
}
