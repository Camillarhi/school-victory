import React from "react";
import { Beaker, Computer, Owl, Telescope } from "../../assets/svgs";
import CourseCardList from "../../components/CourseCard/CourseCardList";

export default function Product() {
  return (
    <div id="product" className="flex justify-center px-[12.1875rem]">
      <div className=" w-[65.625rem] h-[47.375rem] py-[7rem] flex flex-col gap-y-[7rem]">
        <div className="flex flex-col gap-y-[.625rem] tracking-[.0125rem]">
          <p className=" text-primary font-bold text-sm leading-6">
            Practice Advice
          </p>
          <h1 className=" text-[2.5rem] font-bold leading-[3.125rem] text-text-color">
            Our Popular Courses
          </h1>
          <p className=" text-second-text-color text-sm w-[29.3125rem]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div>
          <CourseCardList
            props={[
              {
                id: 1,
                course: "Training Courses",
                description: "The gradual accumulation of information about ",
                image: Computer,
              },
              {
                id: 2,
                course: "Training Courses",
                description: "The gradual accumulation of information about ",
                image: Telescope,
              },
              {
                id: 3,
                course: "Training Courses",
                description: "The gradual accumulation of information about ",
                image: Beaker,
              },
              {
                id: 4,
                course: "Training Courses",
                description: "The gradual accumulation of information about ",
                image: Owl,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
