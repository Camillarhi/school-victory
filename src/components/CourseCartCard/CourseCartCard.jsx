import React from "react";
import { Cart, Eye, Like } from "../../assets/svgs";
import Button from "../Button";

export default function CourseCartCard() {
  return (
    <div className=" w-[14.875rem] h-[37.625rem] bg-black">
      <div
        style={{
          backgroundImage: `url(https://media.istockphoto.com/id/1370772148/photo/track-and-mountains-in-valle-del-lago-somiedo-nature-park-asturias-spain.jpg?s=612x612&w=0&k=20&c=QJn62amhOddkJSbihcjWKHXShMAfcKM0hPN65aCloco=)`,
          backgroundsize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className=" h-[18.75rem] bg-slate-400 flex flex-col justify-between"
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
      <div className=" h-[18.875rem]"></div>
    </div>
  );
}
