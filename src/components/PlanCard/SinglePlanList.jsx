import React from "react";
import { RoundGreenCheck, RoundGreyCheck } from "../../assets/svgs";

export default function SinglePlanList({ isAvailable, text, className }) {
  return (
    <div className=" flex gap-x-[.625rem] items-center">
      <div className="w-fit">
        <img
          className=" w-8 h-8"
          src={isAvailable ? RoundGreenCheck : RoundGreyCheck}
          alt="check"
        />{" "}
      </div>

      <p
        className={` text-sm font-bold leading-6 tracking-[.0125rem] w-full ${className}`}
      >
        {text}
      </p>
    </div>
  );
}
