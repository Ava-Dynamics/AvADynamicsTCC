import React, { useState } from "react";
import { Button, Link } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Input from "../input/Input";
import { SignInAPI } from "supertokens-auth-react/recipe/emailpassword";

function Profile({ title, className }) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const getUser = () => {
    // Recebe dados do usuário
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleUpdate = () => {
    // Atualiza dados do usuario
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
