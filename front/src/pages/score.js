import React from "react";
import Header from "../components/header/Header";

function Score() {
  const user = JSON.parse(localStorage.getItem("user")) || { email: "Usuário" };
  const userName = user.email.split("@")[0];

  return (
    <Header>
      <div className="flex w-full justify-between items-center bg-purple-900 text-white py-4 px-8 rounded-md">
        <h1 className="text-2xl">Olá {userName}!</h1>
        <span className="text-xl font-bold">Seu Score foi atualizado!</span>
      </div>
      <div className="mt-8">
        <div className="text-6xl font-bold text-black">926</div>
        <div className="text-2xl font-bold text-green-700">Excelente!</div>
        <div className="mt-4 w-full bg-gray-200 rounded-full h-8">
          <div
            className="bg-green-600 h-8 rounded-full"
            style={{ width: "90%" }}
          ></div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black">O que isso significa?</h2>
        <p className="text-zinc-500 font-light mt-4">
          Quanto mais alto o Score, maiores as chances de obtenção de crédito no
          mercado. Isso porque as empresas financeiras avaliam a pontuação em
          termos de risco de crédito. O Serasa Score indica a probabilidade de o
          consumidor pagar as contas em dia nos próximos 6 meses.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-black">
          O que você fez nos últimos dias que possa ter contribuído para o
          Score?
        </h2>
        <div className="mt-4">
          <div className="bg-green-200 text-green-900 px-4 py-2 rounded-md inline-block font-bold">
            Cursos
          </div>
          <p className="text-zinc-500 font-light mt-2">
            Nos últimos dias você finalizou o curso "Como PARAR de se ENDIVIDAR
            e pagar TUDO À VISTA!" ou seja, com os seus novos aprendizados
            diante do curso, pode ter influenciado na alteração do seu score!
          </p>
        </div>
        <div className="mt-4">
          <div className="bg-green-200 text-green-900 px-4 py-2 rounded-md inline-block font-bold">
            Finance Attitudes
          </div>
          <p className="text-zinc-500 font-light mt-2">
            Suas novas atitudes financeiras também contribuíram
            significativamente para a melhoria do seu score. Continue assim e
            veja seu score crescer ainda mais!
          </p>
        </div>
      </div>
    </Header>
  );
}

export default Score;
