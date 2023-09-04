import React from "react";
import Title from "../Title/Title";

export default function TitleGroup({
  categoryText,
  titleText,
  className,
  description,
  itemsCentered,
}) {
  return (
    <div
      className={` ${
        itemsCentered && "items-center"
      } flex flex-col gap-y-[.625rem] tracking-[.0125rem]`}
    >
      <p className=" text-primary font-bold text-sm leading-6">
        {categoryText}
      </p>
      <Title text={titleText} className={className} />

      <p className=" text-second-text-color text-sm md:w-[29.3125rem]">
        {description[0]}
        <br />
        <p>{description[1]}</p>
      </p>
    </div>
  );
}
