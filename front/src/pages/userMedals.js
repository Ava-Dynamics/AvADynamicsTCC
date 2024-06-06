import React from "react";
import { BiLock, BiMedal, BiTrophy } from "react-icons/bi";
import { CiCoins1 } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import Header from "../components/header/Header";

function UserMedals() {
  const medals = [
    {
      icon: <BiMedal className="w-16 h-16 mb-2 text-yellow-500" />,
      label: "ATIVAÇÃO",
    },
    {
      icon: <BiTrophy className="w-16 h-16 mb-2 text-green-500" />,
      label: "VIU SEU SCORE PELA PRIMEIRA VEZ",
    },
    {
      icon: <CiCoins1 className="w-16 h-16 mb-2 text-blue-500" />,
      label: "SEU FINANCEIRO ESTÁ MELHORANDO!",
    },
    {
      icon: <FaHandHoldingUsd className="w-16 h-16 mb-2 text-purple-500" />,
      label: "VOCÊ TEM DINHEIRO GUARDADO!",
    },
  ];

  return (
    <Header>
      <h1 className="text-3xl font-bold text-center mb-8">
        Medalhas do Usuário
      </h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-10">
        {medals.map((medal, index) => (
          <div key={index} className="flex flex-col items-center">
            {medal.icon}
            <span className="text-center text-sm font-bold text-finscoreLightBlue">
              {medal.label}
            </span>
          </div>
        ))}
        {[...Array(20 - medals.length)].map((_, index) => (
          <div
            key={index + medals.length}
            className="flex flex-col items-center gap-3 opacity-50"
          >
            <BiLock className="w-16 h-16 mb-2 text-gray-500" />
            <span className="text-center text-sm font-bold text-black">
              BLOQUEADO
            </span>
          </div>
        ))}
      </div>
    </Header>
  );
}

export default UserMedals;
