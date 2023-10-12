import React from "react";
import CourseCartCard from "./CourseCartCard";

export default function CourseCartCardList({ props }) {
  return (
    <div className=" flex flex-row gap-[1.875rem] flex-wrap ">
      {props &&
        props?.length > 0 &&
        props?.map((a) => {
          return (
            <CourseCartCard
              key={a?.id}
              course={a?.course}
              description={a?.description}
              image={a?.image}
              category={a?.category}
            />
          );
        })}
    </div>
  );
}
