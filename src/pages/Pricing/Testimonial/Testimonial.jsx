import React from "react";
import { FemaleProfile, MaleProfile } from "../../../assets/svgs";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";
import TitleGroup from "../../../components/TitleGroup/TitleGroup";

export default function Testimonial() {
  return (
    <div className=" w-[65.625rem] h-[58.0009rem] flex flex-col gap-y-[6rem]">
      <TitleGroup
        titleText={"Video in Live Action"}
        categoryText={"Testimonials"}
        description={[
          "Problems trying to resolve the conflict between",
          "the two major realms of Classical physics: Newtonian mechanics ",
        ]}
      />
      <div className=" flex gap-x-[1.875rem]">
        <TestimonialCard
          image={FemaleProfile}
          name={"Regina Miles"}
          role={"Designer"}
        />
        <TestimonialCard
          image={MaleProfile}
          name={"Reginald Miles"}
          role={"Developer"}
        />
      </div>
    </div>
  );
}
