import React from "react";

export default function CourseCard({
  id,
  active = false,
  course,
  description,
  image,
  onClick,
}) {
  return (
    <div
      className={` w-[14.875rem] h-[18rem] ${
        active ? "bg-[#96BB7C]" : "bg-white"
      } px-10 py-[2.1875rem] grid gap-y-5 shadow-lg cursor-pointer`}
      onClick={onClick}
    >
      {image}
      <p
        className={`${
          active ? "text-white" : "text-[#252B42]"
        } font-bold leading-6 tracking-[.0063rem]`}
      >
        {course}
      </p>
      <hr
        className={`${active ? "bg-white" : "bg-[#E74040]"} h-[.125rem] w-1/2 `}
      />
      <p
        className={`text-[.875rem] ${
          active ? "text-white" : "text-[#737373]"
        } tracking-[.0125rem] leading-5`}
      >
        {description}{" "}
      </p>
    </div>
  );
}
