import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";

function CourseCard({
  teacher,
  teacherImage,
  title,
  duration,
  totalClasses,
  progress,
}) {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center bg-white shadow-lg rounded-lg p-4 mb-4">
      <div className="flex items-center lg:mr-6">
        <img
          src={teacherImage}
          alt={teacher}
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <div className="text-sm uppercase text-gray-500">Professor(a)</div>
          <div className="font-medium text-black">{teacher}</div>
        </div>
      </div>
      <div className="mt-4 lg:mt-0 lg:flex-1">
        <div className="font-bold text-md text-finscorePurple">{title}</div>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <AiOutlineClockCircle className="mr-2" />
          <span>{duration}</span>
          <span className="mx-2">|</span>
          <span>Total de aulas: {totalClasses}</span>
          <span className="mx-2">|</span>
          <span>Andamento: {progress}%</span>
        </div>
        <div className="mt-2">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-purple-700 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
