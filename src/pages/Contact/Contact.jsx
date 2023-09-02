import React from "react";
import Container from "../../components/Container/Container";
import TitleGroup from "../../components/TitleGroup/TitleGroup";

export default function Contact() {
  return (
    <Container id={"contact"} className={"bg-[#FFF2F3]"}>
      <div className=" h-[37.125rem] w-[65.625rem] pt-[10rem] flex justify-center gap-y-[5rem]">
        <TitleGroup
        itemsCentered
          titleText={"Our Experts Teacher"}
          categoryText={"Newsletter"}
          description={[
            "Problems trying to resolve the conflict between",
            "the two major realms of Classical physics: Newtonian mechanics",
          ]}
        />
        <div></div>
      </div>
    </Container>
  );
}
