import React from "react";
import {
  Cart,
  Download,
  Eye,
  GreaterThan,
  Like,
  Star,
} from "../../assets/svgs";
import Button from "../Button";

export default function CourseCartCard({
  image,
  course,
  category,
  description,
}) {
  return (
    <div className=" w-[14.875rem] h-[37.625rem]">
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundsize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className=" h-[18.75rem] bg-primary flex flex-col justify-between"
      >
        <div className="ml-[1.25rem] mt-[1.25rem]">
          <Button size="small" className=" bg-red-600 text-white" text="Sale" />
        </div>

        <div className=" flex gap-x-[.625rem] w-fit h-fit mx-[3.0625rem] mb-[1.5rem]">
          <img src={Like} alt="like" className=" w-10 h-10" />
          <img src={Cart} alt="cart" className=" w-10 h-10" />
          <img src={Eye} alt="eye" className=" w-10 h-10" />
        </div>
      </div>
      <div className=" h-[18.875rem] px-[1.5625rem] pt-[1.5625rem] pb-[2.1875rem] grid gap-y-[.625rem]">
        <div className=" flex gap-x-3">
          <p className=" text-primary font-bold text-sm tracking-[0..125rem] leading-6">
            {course}
          </p>
          <div className=" bg-[#2D4059] w-[3.125rem] h-[1.625rem] rounded-[1.25rem] flex justify-center gap-x-[.3125rem] items-center">
            <img className=" w-4 h-4" src={Star} alt="star" />
            <p className=" text-[.75rem] text-white">4.9</p>
          </div>
        </div>
        <p className=" text-text-color font-bold leading-4 tracking-[.0063rem]">
          {category}
        </p>
        <p className=" text-second-text-color text-sm tracking-[.0125rem]">
          {description}
        </p>
        <div className="flex gap-x-[.625rem]">
          <img className=" w-4 h-4" src={Download} alt="download" />
          <p className=" test-sm font-bold leading-6 tracking-[.0125rem] text-second-text-color">
            15 Sales
          </p>
        </div>
        <div className="flex gap-x-[.625rem] font-bold leading-6 tracking-[.0063rem]">
          <p className=" text-muted">$16.48</p>
          <p className=" text-secondary-color-1">$6.48</p>
        </div>
        <div>
          <button className=" border-primary border py-[.625rem] px-5 rounded-[2.3125rem] flex justify-center items-center gap-x-[.625rem] font-bold text-primary leading-6 text-sm tracking-[0..125rem]">
            Learn More
            <img src={GreaterThan} alt="greater-than" />
          </button>
        </div>
      </div>
    </div>
  );
}
