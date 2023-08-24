import React from "react";
import RoundCheck from "../RoundCheck/RoundCheck";

export default function SinglePlanList({ className, text }) {
  return (
    <div className=" flex gap-x-[.625rem] items-center">
      {/* <div className=" bg-slate-600 w-fit"> */}
      <RoundCheck className={className} />

      {/* </div> */}
      <p className=" text-sm font-bold leading-6 tracking-[.0125rem] w-full bg-slate-50">{text}</p>
    </div>
  );
}
