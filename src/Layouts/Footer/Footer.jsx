import React from "react";
import { Location, Mail, Phone } from "../../assets/svgs";
import Container from "../../components/Container/Container";
import FooterLink from "../../components/FooterLink/FooterLink";

export default function Footer() {
  return (
    <>
      <Container id={"footer"}>
        <div className=" h-[16.875rem] w-[65.625rem] py-[3.125rem] flex gap-x-[1.875rem]">
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
        <div className="h-[4.625rem] w-[65.625rem] flex justify-between items-center">
          <p className=" text-sm text-second-text-color font-bold leading-6 tracking-[.0125rem]">
            Made With Love By Figmaland All Right Reserved{" "}
          </p>
          <div></div>
        </div>
      </Container>
    </>
  );
}
