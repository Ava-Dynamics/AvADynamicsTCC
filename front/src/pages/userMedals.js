import React, { useState, useEffect } from "react";
import { BiLock, BiMedal, BiTrophy } from "react-icons/bi";
import { CiCoins1 } from "react-icons/ci";
import { FaHandHoldingUsd } from "react-icons/fa";
import Header from "../components/header/Header";
import { userService } from "../services/api/users";

function UserMedals() {
  const [medals, setMedals] = useState([]);

  useEffect(() => {
    const getMedals = async () => {
      const res = await userService.getMedals();
      if (res && res.status === 200) {
        setMedals(res.data);
      }
    }
    
    getMedals();
  },[])

  return (
    <Header>
      <h1 className="text-3xl font-bold text-center mb-8">
        Medalhas do Usuário
      </h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-y-10">
        {medals && medals.map((medal, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={medal.image} alt={'medal'} className="w-14 h-14 rounded-full mr-4" />
            <span className="text-center text-sm font-bold text-finscoreLightBlue">
              {medal.name}
            </span>
          </div>
        ))}
        {[...Array(20 - (medals ? medals.length : 0))].map((_, index) => (
          <div
            key={index + (medals ? medals.length : 0)}
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
