import React from "react";
import Button from "../Button";
import CircledLike from "../CircledLike/CircledLike";
import SinglePlanList from "./SinglePlanList";

export default function PlanCard({ active = false, id, onClick }) {
  return (
    <div
      onClick={onClick}
      className={` ${
        active ? "bg-[#2D4059]" : "bg-white"
      } h-[55.5rem] transform hover:scale-105 w-[20.1875rem] px-10 py-[3.125rem] flex flex-col justify-center items-center gap-y-[2.1875rem] shadow-lg cursor-pointer`}
    >
      <CircledLike />
      <p
        className={`${
          active ? "text-white" : "text-text-color"
        } text-2xl font-bold`}
      >
        FREE
      </p>

      <p
        className={`${
          active ? "text-white" : " text-second-text-color"
        } text-center text-sm font-bold leading-6 tracking-[.0125rem] w-[8.875rem]`}
      >
        Organize across all apps by hand
      </p>
      <div className=" font-bold">
        <p className=" text-[2.5rem] text-primary leading-[3.125rem] tracking-[.0125rem]">
          19$
        </p>
        <p className=" text-[#8EC2F2] text-sm leading-6">Per Month</p>
      </div>
      <p
        className={` ${
          active ? "text-white" : " text-second-text-color"
        }  text-sm tracking-[.0125rem] w-[12.75rem]`}
      >
        Slate helps you see how many more days you need...
      </p>

      <div>
        <Button
          text="Try for free"
          size="large"
          className=" bg-primary text-white w-[15.1875rem]"
        />
      </div>

      <div className=" w-[15.1875rem] h-[14.75rem] max-h-[14.75rem] flex flex-col gap-y-[.9375rem]">
        <SinglePlanList
          isAvailable={true}
          text={"Unlimited product updates"}
          className={active ? "text-white" : " text-text-color"}
        />
        <SinglePlanList
          isAvailable={true}
          text={"Unlimited product updates"}
          className={active ? "text-white" : " text-text-color"}
        />
        <SinglePlanList
          isAvailable={true}
          text={"Unlimited product updates"}
          className={active ? "text-white" : " text-text-color"}
        />
        <SinglePlanList
          isAvailable={false}
          text={"1GB Cloud storage"}
          className={active ? "text-white" : " text-text-color"}
        />
        <SinglePlanList
          isAvailable={false}
          text={"Email and community support"}
          className={active ? "text-white" : " text-text-color"}
        />
      </div>
    </div>
  );
}
