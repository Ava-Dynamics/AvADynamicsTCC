import React from "react";

function DashboardContent({
  firstTitle,
  secondTitle,
  firstContent,
  secondContent,
}) {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between mt-10">
      <div className="lg:w-2/3 w-full mb-4 lg:mb-0">
        <span className="text-black text-3xl uppercase">{firstTitle}</span>
        <div>{firstContent}</div>
      </div>

      <div className="lg:w-1/3 w-full text-left md:text-right">
        <span className="text-black text-3xl uppercase">{secondTitle}</span>
        <div className="text-left lg:text-right">{secondContent}</div>
      </div>
    </div>
  );
}

export default DashboardContent;