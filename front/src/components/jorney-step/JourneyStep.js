import React from "react";

function JourneyStep({ status, title, isLast }) {
  const statusColors = {
    bloqueado: "bg-purple-700",
    andamento: "bg-yellow-500",
    finalizado: "bg-green-500",
  };

  return (
    <div className="flex items-start mb-4 relative">
      <div className="relative">
        <div className={`w-6 h-6 rounded-full ${statusColors[status]}`}></div>
        {!isLast && (
          <div className="absolute left-1/2 transform -translate-x-1/2 top-6 w-px h-10 bg-black"></div>
        )}
      </div>
      <div className="ml-4">
        <div className="text-sm uppercase text-zinc-500">{status}</div>
        <div className="font-bold text-black text-lg">{title}</div>
      </div>
    </div>
  );
}

export default JourneyStep;
