import React from "react";
import PlanCardList from "../../../components/PlanCard/PlanCardList";
import TitleGroup from "../../../components/TitleGroup/TitleGroup";

export default function PracticeAdvice() {
  return (
    <div className=" md:h-[88.5625rem] md:w-[65.625rem] h-fit md:pt-[10rem] pt-9 flex flex-col gap-y-[5rem] mb-[9.4375rem]">
      <TitleGroup
        titleText={"Our Experts Teacher"}
        description={[
          "Problems trying to resolve the conflict between",
          "the two major realms of Classical physics: Newtonian mechanics ",
        ]}
        categoryText={"Practice Advice"}
      />
      <PlanCardList props={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
    </div>
  );
}
