import React from "react";
import Button from "../Button";

export default function NavBar() {
  return (
    <div className=" bg-blue-300 mx-[3.6875rem] h-[5.6875rem]">
      <div className="text-2xl font-['Montserrat'] font-bold tracking-[0.1] leading-[32px] text-[#252b42] w-min">
  Medical Hardy
</div>
      <Button text={'Login'} />
    </div>
  );
}
