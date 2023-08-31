import React from "react";

export default function Container({ children, id }) {
  return (
    <div id={id} className="flex flex-col justify-center px-[12.1875rem]">
      {children}
    </div>
  );
}
