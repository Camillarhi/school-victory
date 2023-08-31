import React from "react";
import {
  Bag,
  Bar,
  Boy,
  Chart,
  Graph,
  PieChart,
  Score,
} from "../../assets/svgs";
import Button from "../../components/Button";

export default function Home() {
  return (
    <div className=" flex gap-x-[2.3125rem] mt-[6.25rem]" id="home">
      <div className=" w-1/2 h-[42.625rem] flex justify-center items-center">
        <div className=" flex flex-col gap-y-[1.875rem] bg-white">
          <p className=" text-primary font-bold tracking-[.0063rem]">Online</p>
          <h3 className=" text-text-color text-[3.625rem] leading-[5rem] font-bold w-[33.875rem]">
            HIGH QUALITY COURSES{" "}
          </h3>
          <p className=" w-[28.625rem] text-xl leading-[1.875rem] tracking-[.0125rem] text-second-text-color">
            Every day brings with it a fresh set of learning possibilities.
          </p>
          <div className=" flex gap-x-[.625rem]">
            <Button
              text="Get Quote Now"
              className=" text-white bg-primary"
              size="large"
            />
            <Button
              text="Learn More"
              className=" text-primary border border-primary"
              size="large"
            />
          </div>
        </div>
      </div>

      <div className=" w-1/2 h-[42.625rem] flex justify-center items-center relative mr-[2.25rem]">
        <div className="w-[80%] h-[80%] bg-[#AAEAD0] rounded-full absolute"></div>
        <img src={Boy} alt="boy" className=" absolute left-1" />
        <img
          src={Bag}
          alt="bag"
          className=" absolute right-[1.6531rem] top-[4.3487rem]"
        />
        <div className=" w-[3.7531rem] h-[3.7531rem] bg-blue-600 absolute flex justify-center items-center rounded-lg -left-[3.3163rem]">
          <img src={Graph} alt="graph" />
        </div>
        <img
          src={Chart}
          alt="chart"
          className=" absolute top-[4.375rem] -left-[1.0081rem]"
        />
        <img
          src={Score}
          alt="score"
          className=" absolute bottom-[6.415rem] -left-[1.4312rem]"
        />
        <div className=" w-[3.7531rem] h-[3.7531rem] bg-blue-600 absolute flex justify-center items-center rounded-lg bottom-[1.8625rem]">
          <img src={Bar} alt="bar" />
        </div>{" "}
        <img
          src={PieChart}
          alt="pie-chart"
          className=" absolute bottom-[5.78rem] right-[4.0081rem]"
        />
      </div>
    </div>
  );
}
