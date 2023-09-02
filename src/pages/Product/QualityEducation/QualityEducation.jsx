import React from "react";
import {
  ChartSmall,
  Girl,
  Graph,
  PieChart,
  Squigly,
} from "../../../assets/svgs";
import LearnMore from "../../../components/LearnMore/LearnMore";
import Title from "../../../components/Title/Title";
import UnderLine from "../../../components/UnderLine/UnderLine";

export default function QualityEducation() {
  return (
    <div className=" w-[65.625rem] h-[45.1593rem] py-[10rem] flex justify-between items-center">
      <div className=" w-1/2 h-[25.1593rem] flex justify-center items-center relative overflow-hidden">
        <div className=" bg-[#DDF4FF] rounded-full w-[60%] h-[75%] absolute"></div>
        <img src={Girl} alt="girl" className=" absolute " />
        <div className=" w-[3.7531rem] h-[3.7531rem] bg-blue-600 absolute flex justify-center items-center rounded-lg left-[5.2919rem] bottom-[2.6831rem] -rotate-[60deg]">
          <img src={Graph} alt="graph" />
        </div>
        <img
          src={ChartSmall}
          alt="chart"
          className=" absolute top-[.875rem] -left-[.2931rem]"
        />
        <img
          src={Squigly}
          alt="squigly"
          className=" absolute right-[5.2981rem] top-[12.1681rem]"
        />
        <div className=" w-[.6404rem] h-[.6404rem] bg-[#FB762B] absolute rounded-full left-[4.5412rem] bottom-[9.8181rem]"></div>
        <img
          src={PieChart}
          alt="pie-chart"
          className=" absolute -bottom-[4.0906rem] right-[3.2931rem]"
        />
      </div>
      <div className=" w-[23.8125rem] h-[18.5rem] flex flex-col gap-y-[2.1875rem]">
        <UnderLine />{" "}
        <Title text={"Get Quality Education"} className=" w-[15.1875rem]" />
        <p className=" text-second-text-color text-sm tracking-[.0125rem] w-[21.9375rem]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <LearnMore />
      </div>
    </div>
  );
}
