import React from "react";
import { GreaterThan } from "../../assets/svgs";

export default function LearnMore({ border = false }) {
  return (
    <div>
      <button
        className={` ${
          border &&
          "border-primary border rounded-[2.3125rem] py-[.625rem] px-5"
        }  flex justify-center items-center gap-x-[.625rem] font-bold text-primary leading-6 text-sm tracking-[.0125rem]`}
      >
        Learn More
        <img src={GreaterThan} alt="greater-than" />
      </button>
    </div>
  );
}
