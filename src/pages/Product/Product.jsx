import React from "react";
import {
  Beaker,
  ChartSmall,
  Computer,
  Girl,
  Graph,
  GreaterThan,
  Owl,
  PieChart,
  Squigly,
  Telescope,
} from "../../assets/svgs";
import Container from "../../components/Container/Container";
import CourseCardList from "../../components/CourseCard/CourseCardList";

export default function Product() {
  return (
    <Container id={"product"}>
      {/* popular courses starts*/}
      <div className=" mb-6 w-[65.625rem] h-[47.375rem] py-[7rem] flex flex-col gap-y-[7rem]">
        <div className="flex flex-col gap-y-[.625rem] tracking-[.0125rem]">
          <p className=" text-primary font-bold text-sm leading-6">
            Practice Advice
          </p>
          <h1 className=" text-[2.5rem] font-bold leading-[3.125rem] text-text-color">
            Our Popular Courses
          </h1>
          <p className=" text-second-text-color text-sm w-[29.3125rem]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>
        <div>
          <CourseCardList props={courseCardContents} />
        </div>
      </div>
      {/* popular courses ends */}

      {/* quality education starts */}
      <div className=" w-[65.625rem] h-[45.1593rem] py-[10rem] flex justify-between items-center">
        <div className=" w-1/2 h-[25.1593rem] flex justify-center items-center relative overflow-hidden">
          <div className=" bg-[#DDF4FF] rounded-full w-[60%] h-[75%] absolute"></div>
          <img src={Girl} alt="girl" className=" absolute " />
          <div className=" w-[3.7531rem] h-[3.7531rem] bg-blue-600 absolute flex justify-center items-center rounded-lg left-[5.2919rem] bottom-[2.6831rem] -rotate-[60deg]">
            <img src={Graph} alt="graph" />
          </div>
          <img
            src={ChartSmall}
            alt="chart"
            className=" absolute top-[.875rem] -left-[.2931rem]"
          />
          <img
            src={Squigly}
            alt="squigly"
            className=" absolute right-[5.2981rem] top-[12.1681rem]"
          />
          <div className=" w-[.6404rem] h-[.6404rem] bg-[#FB762B] absolute rounded-full left-[4.5412rem] bottom-[9.8181rem]"></div>
          <img
            src={PieChart}
            alt="pie-chart"
            className=" absolute -bottom-[4.0906rem] right-[3.2931rem]"
          />
        </div>
        <div className=" w-[23.8125rem] h-[18.5rem] flex flex-col gap-y-[2.1875rem]">
          <hr className=" w-[5.875rem] h-[.4375rem] bg-[#E74040]" />
          <p className=" text-text-color text-[2.5rem] leading-[3.125rem] tracking-[.0125rem] font-bold w-[15.1875rem]">
            {" "}
            Get Quality Education
          </p>
          <p className=" text-second-text-color text-sm tracking-[.0125rem] w-[21.9375rem]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
          <div className=" flex gap-x-[.625rem]">
            <p className=" text-primary text-sm font-bold leading-6 tracking-[.0125rem] ">
              {" "}
              Learn More
            </p>
            <img src={GreaterThan} alt="pie-chart" className=" " />
          </div>
        </div>
      </div>
      {/* quality education ends   */}
    </Container>
  );
}

const courseCardContents = [
  {
    id: 1,
    course: "Training Courses",
    description: "The gradual accumulation of information about ",
    image: Computer,
  },
  {
    id: 2,
    course: "Training Courses",
    description: "The gradual accumulation of information about ",
    image: Telescope,
  },
  {
    id: 3,
    course: "Training Courses",
    description: "The gradual accumulation of information about ",
    image: Beaker,
  },
  {
    id: 4,
    course: "Training Courses",
    description: "The gradual accumulation of information about ",
    image: Owl,
  },
];
