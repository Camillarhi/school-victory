import React, { useState } from "react";
import Button from "../../components/Button";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className=" max-w-screen-xl md:mx-[3.6875rem] px-2 md:px-0 h-[5.6875rem] flex md:gap-x-[3.25rem] justify-between flex-wrap items-center pt-[1.1875rem] pb-5 fixed bg-white z-[9999] w-full top-0">
      <h3 className=" text-text-color md:text-2xl text-xl font-bold tracking-[.0063rem] md:w-[11.6875rem] md:ml-[8.25rem]">
        Medical Hardy
      </h3>
      <button
        onClick={() => setToggle(() => !toggle)}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>{" "}
      </button>

      <div
        className={`md:flex p-4 mt-2 md:p-0 flex-col md:flex-row md:mt-0 justify-between gap-x-[15rem] w-full md:w-fit bg-white ${
          !toggle && "hidden"
        }`}
      >
        <div className=" flex flex-col md:flex-row gap-x-[1.3125rem] md:items-center">
          <a
            href="/"
            className=" text-second-text-color md:text-sm font-bold tracking-[.0125rem] leading-6 py-2 pl-3 pr-4 hover:bg-primary rounded md:p-0 md:hover:bg-transparent"
          >
            Home
          </a>
          <a
            href="#product"
            className=" text-second-text-color md:text-sm font-bold tracking-[.0125rem] leading-6 py-2 pl-3 pr-4 hover:bg-primary rounded md:p-0 md:hover:bg-transparent"
          >
            Product
          </a>
          <a
            href="#pricing"
            className=" text-second-text-color md:text-sm font-bold tracking-[.0125rem] leading-6 py-2 pl-3 pr-4 hover:bg-primary rounded md:p-0 md:hover:bg-transparent"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className=" text-second-text-color md:text-sm font-bold tracking-[.0125rem] leading-6 py-2 pl-3 pr-4 hover:bg-primary rounded md:p-0 md:hover:bg-transparent"
          >
            Contact
          </a>
        </div>
        <div className=" flex flex-col md:flex-row gap-x-[2.8125rem] justify-center md:items-center">
          <p className=" text-primary md:text-sm font-bold tracking-[.0125rem] leading-[1.375rem] py-2 pl-3 pr-4 mb-1 md:mb-0 cursor-pointer hover:bg-text-color rounded md:p-0 md:hover:bg-transparent">
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
    </nav>
  );
}
