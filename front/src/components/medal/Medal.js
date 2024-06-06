import React from "react";

function Medal({ title, description, image }) {
  return (
    <div className="flex items-center mb-4 gap-2">
      <img src={image} alt={title} className="w-14 h-14 rounded-full mr-4" />
      <div className="flex flex-col gap-2">
        <div className="font-bold text-black">{title}</div>
        <div className="text-sm text-zinc-500">{description}</div>
      </div>
    </div>
  );
}

export default Medal;
