import React from "react";
import { FemaleProfile, HollowStar, Star } from "../../assets/svgs";

export default function TestimonialCard() {
  return (
    <div className=" w-[31.75rem] h-[23.6259rem] flex flex-col justify-center items-center px-[1.5625rem] pt-[1.5625rem]">
      <img className=" rounded-full" src={FemaleProfile} alt="female-profile" />
      <div className=" px-[1.875rem] py-[1.875rem] flex flex-col items-center justify-center">
        <p className=" text-center text-sm tracking-[.0125rem] text-second-text-color w-[20rem]">
          Slate helps you see how many more days you need to work to reach your
          financial goal for the month and year.
        </p>

        <div className=" flex ">
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={HollowStar} alt="star" />
        </div>

        <div className=" font-bold">
          <p className=" text-text-color text-base tracking-[.0063rem]">
            Regina Miles
          </p>
          <p className=" text-center text-second-text-color text-sm tracking-[.0125rem]">
            Designer
          </p>
        </div>
      </div>
    </div>
  );
}
