import React from "react";
import { WhiteCheck } from "../../assets/svgs";

export default function RoundCheck({ className }) {
  return (
    <div
      className={` w-8 h-8 rounded-full flex justify-center items-center ${className}`}
    >
      <img src={WhiteCheck} alt="white-check" />
    </div>
  );
}
