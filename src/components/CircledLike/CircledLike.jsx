import React from "react";
import { WhiteLike } from "../../assets/svgs";

export default function CircledLike() {
  return (
    <div className=" bg-primary w-24 h-24 rounded-full flex justify-center items-center">
      <img src={WhiteLike} alt="like" />
    </div>
  );
}
