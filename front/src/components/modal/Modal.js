import { Button } from "@mui/material";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Input from "../input/Input";

function Modal({ title, className }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      navigate("/dashboard");
    } else {
      alert("Preencha os campos corretamente");
    }
  };

  return (
    <div>
      <button onClick={handleOpen} className={className}>
        {title}
      </button>
      {open && (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-30 flex justify-center items-center w-full transition fade-in duration-100">
          <div className="bg-white py-5 rounded-3xl h-2/4 flex flex-col justify-between md:w-2/4 lg:1/4 xl:w-1/4 items-center">
            <div className="relative items-center">
              <span className="md:text-3xl lg:text-3xl text-2xl text-purple-700">
                Acesse sua conta
              </span>
              <div className="absolute top-0 left-[19rem] cursor-pointer">
                <IoClose
                  className="text-3xl text-purple-700"
                  onClick={handleOpen}
                />
              </div>
            </div>

            <hr className="w-full border-b border-purple-300" />
            <div className="w-full px-5">
              <Input
                onChange={(e) => setEmail(e.target.value)}
                label="Digite seu e-mail"
                value={email}
                type="email"
              />
              <Input
                onChange={(e) => setPassword(e.target.value)}
                label="Digite sua senha"
                type="password"
                value={password}
              />
              <Button
                variant="contained"
                className="w-full bg-finscorePurple text-white"
                onClick={handleLogin}
              >
                Entrar
              </Button>
              <div className="mt-5 flex justify-between">
                <span className="text-finscorePurple cursor-pointer hover:opacity-80">
                  Registre-se
                </span>
                <span className="text-finscorePurple cursor-pointer hover:opacity-80">
                  Esqueci minha senha
                </span>
              </div>
            </div>
            <div className="w-full px-5">
              <Link target="_blank" to="/privacy">
                <Button
                  variant="contained"
                  className="w-full bg-finscorePurple text-white"
                >
                  Polticas de privacidade
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
