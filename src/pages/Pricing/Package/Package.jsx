import React from "react";
import { Play, Video } from "../../../assets/svgs";
import LearnMore from "../../../components/LearnMore/LearnMore";
import Title from "../../../components/Title/Title";
import UnderLine from "../../../components/UnderLine/UnderLine";

export default function Package() {
  return (
    <div className=" w-[65.625rem] h-[42.6875rem] py-[10rem] flex justify-between gap-x-[1.875rem] items-center">
      <div className=" w-1/2 h-[15.375rem] flex flex-col gap-y-[2.1875rem]">
        <UnderLine />
        <Title text={"Affordable Packages"} className="w-[27.875rem]" />
        <p className=" text-second-text-color text-sm tracking-[.0125rem] w-[21.9375rem]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <LearnMore />
      </div>
      <div className=" w-1/2 relative">
        <img src={Video} alt="video" className=" rounded-lg" />
        <div className="absolute w-fit right-[13.125rem] top-[8.5rem]">
          <div className=" w-[92.6px] h-[92.6px] bg-[#96BB7C] flex justify-center items-center rounded-full">
            <img src={Play} alt="play" />
          </div>
        </div>
      </div>
    </div>
  );
}
