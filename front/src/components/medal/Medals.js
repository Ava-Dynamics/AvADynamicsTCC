import React from "react";
import Medal from "./Medal";

function Medals() {
  const medals = [
    {
      title: "É TETRA! Seu score está alto!",
      description:
        "Você atingiu o mínimo de 701 pontos no Score do Serasa, parabéns!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKB0hMAlbRw8bp3Q-bxUc4g1qPS5PH-_YN_A&s",
    },
    {
      title: "Você economizou 1 dólar",
      description: "Seus gastos estão diminuindo, continue assim!",
      image: "https://as1.ftcdn.net/v2/jpg/04/30/08/18/1000_F_430081855_QEVpMDhdx2GEKXcbKxUnLjzvwrYhsar8.jpg",
    },
    {
      title: "Só um Uberzin...",
      description: "Você mapeou em detalhes todos os seus gastos!",
      image: "https://media.hugogloss.uol.com.br/uploads/2019/05/pennsylvania-sues-uber-over-late-breach-notification-showcase_image-7-a-10703-1.jpg",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold uppercase mb-4">Últimas Medalhas</h2>
      {medals.map((medal, index) => (
        <Medal
          key={index}
          title={medal.title}
          description={medal.description}
          image={medal.image}
        />
      ))}
    </div>
  );
}

export default Medals;
