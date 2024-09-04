import React, { useState } from "react";
import { SignUpAPI } from "supertokens-auth-react/recipe/emailpassword";

function Signup() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await SignUpAPI.signUp({
        email,
        password,
      });

      if (response.status === "OK") {
        // Redirecionar ou informar sucesso
        closeModal();
      } else {
        setError("Erro ao cadastrar. Tente novamente.");
      }
    } catch (err) {
      setError("Erro ao cadastrar. Tente novamente.");
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl p-10 w-96 shadow-[0_15px_30px_rgba(0,0,0,0.1)] relative font-poppins">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-purple-600 text-2xl bg-none border-none cursor-pointer hover:text-purple-700"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-6">
          Cadastre-se
        </h2>
        {error && <p className="text-red-600 text-center">{error}</p>}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-col items-start gap-1">
            <label className="text-sm font-medium text-gray-600">CPF</label>
            <input
              type="text"
              placeholder="Digite seu CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg outline-none transition duration-300 focus:border-purple-600 focus:shadow-[0_0_0_4px_rgba(124,58,237,0.2)] text-sm"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label className="text-sm font-medium text-gray-600">Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg outline-none transition duration-300 focus:border-purple-600 focus:shadow-[0_0_0_4px_rgba(124,58,237,0.2)] text-sm"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label className="text-sm font-medium text-gray-600">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg outline-none transition duration-300 focus:border-purple-600 focus:shadow-[0_0_0_4px_rgba(124,58,237,0.2)] text-sm"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <label className="text-sm font-medium text-gray-600">Senha</label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg outline-none transition duration-300 focus:border-purple-600 focus:shadow-[0_0_0_4px_rgba(124,58,237,0.2)] text-sm"
            />
          </div>

          <button
            type="submit"
            className="p-3 bg-purple-600 text-white rounded-lg cursor-pointer text-base font-semibold transition duration-300 hover:bg-purple-700"
          >
            CADASTRAR
          </button>
        </form>
        <div className="flex justify-center text-sm mt-4">
          <a
            href="#"
            className="text-purple-600 cursor-pointer hover:underline"
          >
            Já tem uma conta? Entre
          </a>
        </div>
        <button className="mt-6 w-full text-sm text-purple-600 underline border-none bg-none cursor-pointer">
          POLÍTICAS DE PRIVACIDADE
        </button>
      </div>
    </div>
  );
}

export default Signup;
