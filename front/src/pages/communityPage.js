import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";



function CommunityPage() {
  const [newPostContent, setNewPostContent] = useState("");
  const [community, setCommunity] = React.useState([]);
  const [userInfo, setUser] = React.useState([]);
  const [lastPost, setLastPost] = React.useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND + "/users").then((res) => {
      res.json().then((data) => {
        setUser(data);    
      })
    });
    fetch(process.env.REACT_APP_BACKEND + "/posts").then((res) => {
      res.json().then((data) => {
        setCommunity(data);    
      })
    });
  }, [lastPost]);

  function addPost() {
    console.log('add post',newPostContent);
    fetch(process.env.REACT_APP_BACKEND + "/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: newPostContent,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        setLastPost({ lastPost: new Date() });
      });
  }

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
        {community && community.map((post, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <div className="flex items-center mb-2">
              <div className="rounded-full w-10 h-10 flex items-center justify-center mr-4">
                <img
                  src={post.usersRel.imageProfile}
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="flex justify-between w-full">
                <div className="font-bold text-black">{post.usersRel.name}</div>
                <div className="text-gray-500 text-sm">{new Date(post.publishedAt).toLocaleDateString()}</div>
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
