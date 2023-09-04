import React from "react";
import Container from "../../components/Container/Container";
import Course from "./Course/Course";
import Package from "./Package/Package";
import PracticeAdvice from "./PracticeAdvice/PracticeAdvice";
import Testimonial from "./Testimonial/Testimonial";

export default function Pricing() {
  return (
    <Container id={"pricing"}>
      {/* Package starts here */}
      <Package />
      {/* Package ends here */}

      {/* Course starts here */}
      <Course />
      {/* Course ends here  */}

      {/* Practice advice starts */}
      <PracticeAdvice />
      {/* Practice advice ends */}

      {/* Testimonials starts here */}
      <Testimonial />
      {/* Testimonials ends here */}
    </Container>
  );
}
