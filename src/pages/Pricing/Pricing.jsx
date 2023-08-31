import React from "react";
import { Video } from "../../assets/svgs";
import Container from "../../components/Container/Container";

export default function Pricing() {
  return (
    <Container id={"pricing"}>
      <div className=" w-[65.625rem] h-[42.6875rem] py-[10rem] flex justify-between gap-x-[1.875rem] items-center">
        <div className=" w-1/2 h-[246px] bg-black"></div>
        <div className=" w-1/2 relative">
          <img src={Video} alt="video" className=" rounded-lg" />
          <div className=" w-[92.6px] h-[92.6px] bg-[#96BB7C] absolute"></div>
        </div>
      </div>
    </Container>
  );
}
