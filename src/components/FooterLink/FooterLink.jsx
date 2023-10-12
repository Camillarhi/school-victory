import React from "react";

// const contents=[{value:,icon:}]

/**
 * contents=[{
 * value:string,
 * icon:string, //icon path
 * }]
 */

export default function FooterLink({ title, contents }) {
  return (
    <div className=" h-[10.625rem] max-h-[10.625rem] grid gap-y-5">
      <p className=" text-text-color font-bold">{title}</p>
      <div className=" flex flex-col gap-y-[.625rem] text-sm font-bold leading-6 tracking-[.0125rem] text-second-text-color">
        {contents &&
          contents?.length > 0 &&
          contents?.map((a) => {
            return (
              <div className=" flex gap-x-[.625rem]">
                {a?.icon && <img src={a?.icon} alt="phone" />}
                <p className=" max-w-[16rem]">{a?.value}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
