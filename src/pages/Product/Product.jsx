import React from "react";
import Container from "../../components/Container/Container";
import PopularCourse from "./PopularCourse/PopularCourse";
import QualityEducation from "./QualityEducation/QualityEducation";

export default function Product() {
  return (
    <Container id={"product"}>
      {/* popular courses starts*/}
      <PopularCourse />
      {/* popular courses ends */}

      {/* quality education starts */}
      <QualityEducation />
      {/* quality education ends   */}
    </Container>
  );
}
