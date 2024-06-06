import React from "react";
import JourneyStep from "../jorney-step/JourneyStep";

function Journey() {
  const steps = [
    {
      status: "bloqueado",
      title: "Cinco dicas para aumentar seu score na Serasa",
    },
    { status: "andamento", title: "Nome limpo e score baixo: o que fazer?" },
    { status: "finalizado", title: "Bancos: Lista negra ou restrição interna" },
    { status: "finalizado", title: "O que é o Banco Central" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold uppercase mb-4">Minha Jornada</h2>
      {steps.map((step, index) => (
        <JourneyStep
          key={index}
          status={step.status}
          title={step.title}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}

export default Journey;
