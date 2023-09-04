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
    <div className=" md:w-[65.625rem] h-[45.1593rem] py-[10rem] flex justify-between items-center flex-col md:flex-row mt-7 md:mt-0">
      <div className=" md:w-1/2 w-full h-[25.1593rem] flex justify-center items-center relative overflow-hidden">
        <div className=" bg-[#DDF4FF] rounded-full md:w-[60%] md:h-[75%] w-[80%] h-[70%] absolute"></div>
        <img src={Girl} alt="girl" className=" absolute " />
        <div className=" md:w-[3.7531rem] md:h-[3.7531rem] w-[2.2031rem] h-[2.2031rem] bg-blue-600 absolute flex justify-center items-center rounded-lg md:left-[5.2919rem] left-[4.2919rem] bottom-[4.6831rem] md:bottom-[2.6831rem] -rotate-[60deg]">
          <img
            src={Graph}
            alt="graph"
            className=" md:w-[1.7751rem] md:h-[1.7751rem] w-[1.1501rem] h-[1.1501rem] "
          />
        </div>
        <img
          src={ChartSmall}
          alt="chart"
          className=" absolute top-[.875rem] -left-[.2931rem] md:w-[9.875rem] md:h-[9.875rem] w-[6.3125rem] h-[6.3125rem]"
        />
        <img
          src={Squigly}
          alt="squigly"
          className=" absolute right-[2.2981rem] md:right-[5.2981rem] top-[12.1681rem] w-[4.2073rem] h-[3.4221rem] md:w-[4.8323rem] md:h-[4.0471rem]"
        />
        <div className=" w-[.6404rem] h-[.6404rem] bg-[#FB762B] absolute rounded-full md:left-[4.5412rem] left-6 bottom-[11rem] md:bottom-[9.8181rem]"></div>
        <img
          src={PieChart}
          alt="pie-chart"
          className=" absolute md:-bottom-[4.0906rem] -bottom-[2.7906rem] right-[3.2931rem] md:w-[13.6878rem] md:h-[12.7706rem] w-[8.0628rem] h-[7.1456rem]"
        />
      </div>
      {/* <div className=" w-[23.8125rem] h-[18.5rem] flex flex-col gap-y-[2.1875rem]">
        <UnderLine />{" "}
        <Title text={"Get Quality Education"} className=" w-[15.1875rem]" />
        <p className=" text-second-text-color text-sm tracking-[.0125rem] w-[21.9375rem]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <LearnMore />
      </div> */}
    </div>
  );
}
