import React from "react";
import Button from "../../components/Button";

export default function NavBar() {
  return (
    <div className=" mx-[3.6875rem] h-[5.6875rem] flex gap-x-[3.25rem] items-center pt-[1.1875rem] pb-5 fixed bg-white z-[9999] w-full top-0">
      <div className=" text-text-color text-2xl font-bold tracking-[.0063rem] w-[11.6875rem] ml-[8.25rem]">
        Medical Hardy
      </div>
      <div className=" flex justify-between gap-x-[15rem]">
        <div className=" flex gap-x-[1.3125rem] items-center">
          <a
            href="#home"
            className=" text-second-text-color text-sm font-bold tracking-[.0125rem] leading-6"
          >
            Home
          </a>
          <a
            href="#product"
            className=" text-second-text-color text-sm font-bold tracking-[.0125rem] leading-6"
          >
            Product
          </a>
          <a
            href="pricing"
            className=" text-second-text-color text-sm font-bold tracking-[.0125rem] leading-6"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className=" text-second-text-color text-sm font-bold tracking-[.0125rem] leading-6"
          >
            Contact
          </a>
        </div>
        <div className=" flex gap-x-[2.8125rem] justify-center items-center">
          <p className=" text-primary text-sm font-bold tracking-[.0125rem] leading-[1.375rem]">
            Login
          </p>
          <Button
            text="JOIN US"
            icon
            size="medium"
            className="text-white bg-primary"
          />
        </div>
      </div>
    </div>
  );
}
