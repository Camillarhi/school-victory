import React from "react";
import Container from "../../components/Container/Container";
import TitleGroup from "../../components/TitleGroup/TitleGroup";

export default function Contact() {
  return (
    <Container id={"contact"} className={"bg-[#FFF2F3]"}>
      <div className=" h-[37.125rem] w-[65.625rem] py-[10rem] flex flex-col justify-center gap-y-[5rem]">
        <TitleGroup
          itemsCentered
          titleText={"Our Experts Teacher"}
          categoryText={"Newsletter"}
          description={[
            "Problems trying to resolve the conflict between",
            "the two major realms of Classical physics: Newtonian mechanics",
          ]}
        />
        <div className=" w-[43rem] h-[3.625rem] relative flex self-center border border-[#E6E6E6] bg-[#F9F9F9]">
          <input
            placeholder="Your Email"
            className=" w-full h-[3.625rem] text-sm text-second-text-color leading-7 tracking-[.0125rem] pl-5"
          />
          <span className=" bg-primary w-[7.3125rem] absolute h-[3.625rem] right-0 text-white text-sm leading-7 tracking-[.0125rem] flex justify-center items-center">
            {" "}
            Subscribe
          </span>
        </div>
      </div>
    </Container>
  );
}
