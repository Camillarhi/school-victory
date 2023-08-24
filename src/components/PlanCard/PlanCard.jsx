import React from "react";
import Button from "../Button";
import CircledLike from "../CircledLike/CircledLike";
import SinglePlanList from "./SinglePlanList";

export default function PlanCard() {
  return (
    <div className=" bg-purple-500 h-[55.5rem] w-[20.1875rem] px-10 py-[3.125rem] flex flex-col justify-center items-center gap-y-[2.1875rem]">
      <CircledLike />
      <p className=" text-text-color text-2xl font-bold">FREE</p>

      <p className=" text-second-text-color text-center text-sm font-bold leading-6 tracking-[.0125rem] w-[8.875rem]">
        Organize across all apps by hand
      </p>
      <div className=" font-bold">
        <p className=" text-[2.5rem] text-primary leading-[3.125rem] tracking-[.0125rem]">
          19$
        </p>
        <p className=" text-[#8EC2F2] text-sm leading-6">Per Month</p>
      </div>
      <p className={` text-second-text-color text-sm tracking-[.0125rem] w-[12.75rem]`}>
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
          className={" bg-success-color"}
          text={"Unlimited product updates"}
        />
        <SinglePlanList
          className={" bg-success-color"}
          text={"Unlimited product updates"}
        />
        <SinglePlanList
          className={" bg-success-color"}
          text={"Unlimited product updates"}
        />
        <SinglePlanList
          className={" bg-muted-color"}
          text={"1GB  Cloud storage"}
        />
        <SinglePlanList
          className={" bg-muted-color"}
          text={"Email and community support"}
        />
      </div>
    </div>
  );
}
