import React, { useState } from "react";
import PlanCard from "./PlanCard";

export default function PlanCardList({ props }) {
  const [activeCard, setActiveCard] = useState();

  const selectActiveCard = (id) => {
    setActiveCard(id);
  };

  return (
    <div className=" md:flex-row flex gap-[1.875rem] flex-col ">
      {props &&
        props?.length > 0 &&
        props?.map((a) => {
          return (
            <PlanCard
              key={a?.id}
              active={a?.id === activeCard}
              onClick={() => selectActiveCard(a?.id)}
            />
          );
        })}
    </div>
  );
}
