import React from "react";
import { Beaker, Computer, Owl, Telescope } from "../../../assets/svgs";
import CourseCardList from "../../../components/CourseCard/CourseCardList";
import TitleGroup from "../../../components/TitleGroup/TitleGroup";

export default function PopularCourse() {
  return (
    <div className=" mb-6 md:w-[65.625rem] h-[47.375rem] py-[7rem] flex flex-col gap-y-[7rem]">
      <TitleGroup
        categoryText={"Practice Advice"}
        titleText={"Our Popular Courses"}
        description={[
          "Problems trying to resolve the conflict between",
          "the two major realms of Classical physics: Newtonian mechanics",
        ]}
      />
      <div>
        <CourseCardList props={courseCardContents} />
      </div>
    </div>
  );
}

const courseCardContents = [
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
];
