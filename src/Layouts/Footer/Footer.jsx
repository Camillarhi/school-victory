import React from "react";
import {
  Facebook,
  Instagram,
  Location,
  Mail,
  Phone,
  Twitter,
} from "../../assets/svgs";
import Container from "../../components/Container/Container";
import FooterLink from "../../components/FooterLink/FooterLink";

export default function Footer() {
  return (
    <>
      <Container id={"footer"}>
        <div className=" md:h-[16.875rem] h-fit md:w-[65.625rem] py-[3.125rem] flex gap-[1.875rem] flex-col md:flex-row">
          <FooterLink
            title={"Company Info"}
            contents={[
              { value: "About Us" },
              { value: "Carrier" },
              { value: "We are hiring" },
              { value: "Blog" },
            ]}
          />{" "}
          <FooterLink
            title={"Legal"}
            contents={[
              { value: "About Us" },
              { value: "Carrier" },
              { value: "We are hiring" },
              { value: "Blog" },
            ]}
          />{" "}
          <FooterLink
            title={"Features"}
            contents={[
              { value: "Business Marketing" },
              { value: "User Analytic" },
              { value: "Live Chat" },
              { value: "Unlimited Support" },
            ]}
          />{" "}
          <FooterLink
            title={"Resources"}
            contents={[
              { value: "IOS & Android" },
              { value: "Watch a Demo" },
              { value: "Customers" },
              { value: "API" },
            ]}
          />{" "}
          <FooterLink
            title={"Get In Touch"}
            contents={[
              { icon: Phone, value: "(480) 555-0103" },
              {
                icon: Location,
                value: "4517 Washington Ave. Manchester, Kentucky 39495",
              },
              { icon: Mail, value: "debra.holt@example.com" },
            ]}
          />
        </div>
      </Container>

      <Container id={"copyright"} className={"bg-[#FAFAFA]"}>
        <div className="md:h-[4.625rem] md:w-[65.625rem] flex justify-between items-center flex-col md:flex-row mb-2 md:mb-0">
          <p className=" text-sm text-second-text-color font-bold leading-6 tracking-[.0125rem]">
            Made With Love By Figmaland All Right Reserved{" "}
          </p>
          <div className=" flex gap-x-5">
            <img src={Facebook} alt="facebook" />
            <img src={Instagram} alt="Instagram" />
            <img src={Twitter} alt="Twitter" />
          </div>
        </div>
      </Container>
    </>
  );
}
