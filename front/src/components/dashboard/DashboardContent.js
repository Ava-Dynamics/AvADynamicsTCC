import React from "react";

function DashboardContent({
  firstTitle,
  secondTitle,
  firstContent,
  secondContent,
}) {
  return (
    <div className="flex w-full justify-between mt-10">
      <div className="w-2/3">
        <span className="text-black text-3xl uppercase">{firstTitle}</span>
        <div>{firstContent}</div>
      </div>

      <div className="w-1/3 text-right">
        <span className="text-black text-3xl uppercase">{secondTitle}</span>
        <div className="text-left">{secondContent}</div>
      </div>
    </div>
  );
}

export default DashboardContent;
