import React from "react";
import Medal from "./Medal";

function Medals({data}) {
  return (
    <div>
      <h2 className="text-2xl font-bold uppercase mb-4">Últimas Medalhas</h2>
      {data.usersMedalsRef && data.usersMedalsRef.length > 0 && data.usersMedalsRef.map((medal) => (
        <Medal
          key={medal.id}
          title={medal.medalsRel.name}
          description={medal.medalsRel.description}
          image={medal.medalsRel.image}
        />
      ))}
    </div>
  );
}

export default Medals;
