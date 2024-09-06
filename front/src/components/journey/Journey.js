import React from "react";
import JourneyStep from "../jorney-step/JourneyStep";

function Journey({data}) {
  const stepsId = {
    1: "bloqueado",
    2: "andamento",
    3: "finalizado",
  }

  return (
    <div>
      <h2 className="text-2xl font-bold uppercase mb-4">Minha Jornada</h2>
      {data.jorneyRef && data.jorneyRef.map((step, index) => (
        <JourneyStep
          key={step.id}
          status={stepsId[step.type]}
          title={step.name}
          isLast={index === data.jorneyRef.length - 1}
        />
      ))}
    </div>
  );
}

export default Journey;
