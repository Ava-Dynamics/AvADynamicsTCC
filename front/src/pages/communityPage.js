import React, { useState } from "react";
import Header from "../components/header/Header";

const initialPosts = [
  {
    username: "@rodrigosuhai",
    img: "https://avatars.githubusercontent.com/u/108596751?s=48&v=4",
    content:
      "Já criptos é um capítulo à parte. Li recentemente um livro chamado A psicologia financeira, do Morgan Housel, que é muito interessante... Ele fala sobre a história das criptomoedas e como elas são um ativo muito volátil e arriscado, mas que podem ser uma boa opção para diversificar a carteira de investimentos. O que vocês acham? Já investiram em criptos?",
    date: "1 de abr",
  },
  {
    username: "@brunooalmeid",
    img: "https://avatars.githubusercontent.com/u/11295366?s=48&v=4",
    content:
      "O único critério de tempo de banco, relacionamento de compra, uso do cartão e etc só vai influenciar no AirDrop do nucoin... Mas o que vocês acham sobre criptomoedas? Já investiram? Qual a melhor opção para quem está começando? Qual a melhor corretora? Qual a melhor cripto?",
    date: "1 de abr",
  },
  {
    username: "@guilhermecheng",
    img: "https://avatars.githubusercontent.com/u/62719629?v=4",
    content:
      "Criptomoedas são um assunto muito interessante. Acho que é uma boa opção para diversificar a carteira de investimentos, mas é preciso ter cuidado. O mercado é muito volátil e é preciso estudar muito antes de investir. O que vocês acham? Já investiram em criptos? Qual a melhor corretora? Qual a melhor cripto? Qual a melhor opção para quem está começando? ",
    date: "2 de abr",
  },
  {
    username: "@rafaeldias",
    img: "https://avatars.githubusercontent.com/u/38702780?v=4",
    content:
      "Bitcoin é uma criptomoeda que foi criada em 2008 por uma pessoa ou grupo de pessoas desconhecidas. Ela é a primeira moeda digital descentralizada do mundo e é considerada por muitos como a moeda do futuro. O que vocês acham sobre o Bitcoin? Já investiram? Qual a melhor corretora? Qual a melhor cripto? Qual a melhor opção para quem está começando?",
    date: "5 de abr",
  },
];

function CommunityPage() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPostContent, setNewPostContent] = useState("");
  const user = JSON.parse(localStorage.getItem("user")) || { email: "Usuario" };
  const userName = user.email.split("@")[0];

  const addPost = () => {
    const newPost = {
      username: `@${userName}`,
      img: "https://avatars.githubusercontent.com/u/108596710?s=48&v=4",
      content: newPostContent,
      date: new Date().toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "short",
      }),
    };
    setPosts([newPost, ...posts]);
    setNewPostContent("");
  };

  return (
    <Header>
      <h1 className="text-3xl font-bold mb-8 text-finscorePurple">
        O que você acha sobre Criptomoedas? Compartilhe suas experiências!
      </h1>
      <div className="flex justify-start mb-10">
        <div className="bg-purple-900 text-white px-4 py-2 rounded-md mr-2">
          Comunidade da FinScore
        </div>
        <div className="bg-purple-900 text-white px-4 py-2 rounded-md">
          Papo Desenrolado
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded-md shadow-md mb-8">
        <input
          type="text"
          placeholder="Começar publicação"
          className="w-full p-2 mb-2 border border-gray-300 rounded-md text-black"
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        />
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Mídia
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Evento
          </button>
          <button
            onClick={addPost}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Escrever artigo
          </button>
        </div>
      </div>
      <div className="space-y-10">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <div className="flex items-center mb-2">
              <div className="rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <img
                  src={post.img}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="flex justify-between w-full">
                <div className="font-bold text-black">{post.username}</div>
                <div className="text-gray-500 text-sm">{post.date}</div>
              </div>
            </div>
            <p className="text-zinc-500 font-light">{post.content}</p>
          </div>
        ))}
      </div>
    </Header>
  );
}

export default CommunityPage;
