import React from "react";

export default function Container({ children, id, className }) {
  return (
    <div
      id={id}
      className={` ${className} flex flex-col justify-center md:px-[12.1875rem] px-2`}
    >
      {children}
    </div>
  );
}
