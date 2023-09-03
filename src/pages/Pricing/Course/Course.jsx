import React from "react";
import { Course1, Course2, Course3, Course4 } from "../../../assets/svgs";
import CourseCartCardList from "../../../components/CourseCartCard/CourseCartCardList";
import TitleGroup from "../../../components/TitleGroup/TitleGroup";

export default function Course() {
  return (
    <div className=" py-[7rem] h-[67rem] w-[65.625rem] flex flex-col gap-y-[7rem] mb-[5rem]">
      <TitleGroup
        categoryText={"Courses"}
        titleText={"Most Popular Courses"}
        description={[
          "Problems trying to resolve the conflict between",
          "the two major realms of Classical physics: Newtonian mechanics",
        ]}
      />

      <CourseCartCardList
        props={[
          {
            id: 1,
            course: "Training Courses",
            description: "We focus on ergonomics and meeting you....",
            image: Course1,
            category: "Video in Live Action",
          },
          {
            id: 2,
            course: "Training Courses",
            description: "We focus on ergonomics and meeting you....",
            image: Course2,
            category: "Most Popular Courses",
          },
          {
            id: 3,
            course: "2,769 online courses",
            description: "We focus on ergonomics and meeting you....",
            image: Course3,
            category: "Our Experts Teacher",
          },
          {
            id: 4,
            course: "Training Courses",
            description: "We focus on ergonomics and meeting you....",
            image: Course4,
            category: "Every Client Matters",
          },
        ]}
      />
    </div>
  );
}
