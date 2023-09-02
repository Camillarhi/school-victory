import React from "react";
import TitleGroup from "../../../components/TitleGroup/TitleGroup";

export default function PracticeAdvice() {
  return (
    <div className=" h-[88.5625rem] w-[65.625rem] pt-[10rem] flex flex-col gap-y-[5rem]">
      <TitleGroup
        titleText={"Our Experts Teacher"}
        description={[
          "Problems trying to resolve the conflict between",
          "the two major realms of Classical physics: Newtonian mechanics ",
        ]}
        categoryText={"Practice Advice"}
      />
    </div>
  );
}
