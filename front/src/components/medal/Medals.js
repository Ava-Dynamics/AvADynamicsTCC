import React from "react";
import Medal from "./Medal";

function Medals({data}) {
  return (
    <div>
      <h2 className="text-2xl font-bold uppercase mb-4">Últimas Medalhas</h2>
      {data && data.length > 0 && data.map((medal) => (
        <Medal
          key={medal.id}
          title={medal.name}
          description={medal.description}
          image={medal.image}
        />
      ))}
    </div>
  );
}

export default Medals;
