import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/header/Header";
import { userService } from "../services/api/users";
import { postsService } from "../services/api/posts";

function Community() {
  const [newPostContent, setNewPostContent] = useState("");
  const [community, setCommunity] = useState([]);
  const [userInfo, setUser] = useState([]);
  const [lastPost, setLastPost] = useState([]);
  const [countPosts, setCountPosts] = useState(0);

  useEffect(() => {
    const getUser = async () => {
      const res = await userService.get();
      if (res && res.status === 200) {
        setUser(res.data);
      }
    };

    const getPosts = async () => {
      const res = await postsService.getAll();
      if (res && res.status === 200) {
        setCommunity(res.data);
      }
    }

    getUser();
    getPosts();
  }, [lastPost]);

  const receiveNewMedal = useCallback(async () => {
    const medalName = "Escritor";
    let res = await userService.getMedals();
    if (res && res.status === 200) {
      if (!res.data.some(medal => medal.name === medalName)) {
        res = await userService.receiveMedal(medalName);
        if (res && res.status === 201) {
          alert(`Nova medalha recebida: ${medalName}`);
        }
      }
    }
  }, []);

  const createPost = useCallback(async () => {
    const res = await postsService.create(newPostContent);
    if (res && res.status === 200) {
      setLastPost({ lastPost: new Date() });
      setCountPosts(prev => prev + 1);

      if (countPosts >= 5) {
        await receiveNewMedal();
      }
    }
  }, [newPostContent, countPosts, receiveNewMedal]);

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
            onClick={createPost}
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

export default Community;
