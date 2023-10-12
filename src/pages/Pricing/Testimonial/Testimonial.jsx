import React from "react";
import { FemaleProfile, MaleProfile } from "../../../assets/svgs";
import TestimonialCard from "../../../components/TestimonialCard/TestimonialCard";
import TitleGroup from "../../../components/TitleGroup/TitleGroup";

export default function Testimonial() {
  return (
    <div className=" md:w-[65.625rem] md:h-[58.0009rem] h-full flex flex-col gap-y-[6rem]">
      <TitleGroup
        titleText={"Video in Live Action"}
        categoryText={"Testimonials"}
        description={[
          "Problems trying to resolve the conflict between",
          "the two major realms of Classical physics: Newtonian mechanics ",
        ]}
      />
      <div className=" flex gap-[1.875rem] flex-col md:flex-row">
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
