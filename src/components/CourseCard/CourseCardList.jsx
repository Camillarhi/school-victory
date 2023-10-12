import React, { useState } from "react";
import CourseCard from "./CourseCard";

export default function CourseCardList({ props }) {
  const [activeCard, setActiveCard] = useState();

  const setActive = (id) => {
    setActiveCard(() => id);
  };

  return (
    <div className=" flex-row flex gap-[1.875rem] flex-wrap ">
      {props &&
        props?.length > 0 &&
        props?.map((a) => {
          return (
            <CourseCard
              key={a?.id}
              onClick={() => setActive(a?.id)}
              course={a.course}
              description={a?.description}
              image={a?.image}
              active={a?.id === activeCard}
            />
          );
        })}
    </div>
  );
}
