import React from "react";
import Container from "../../components/Container/Container";
import Course from "./Course/Course";
import Package from "./Package/Package";
import PracticeAdvice from "./PracticeAdvice/PracticeAdvice";

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
    </Container>
  );
}
