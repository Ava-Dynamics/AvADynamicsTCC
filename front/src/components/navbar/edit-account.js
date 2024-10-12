import React, { useState } from "react";

const EditAccountModal = ({ user, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    job: '',
    imageProfile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setFormData({ ...formData, imageProfile: reader.result });
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4">Editar Conta</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black mb-1">Nome</label>
            <input
              type="text"
              name="name"
              value={formData.name || user.name}
              onChange={handleChange}
              className="w-full p-2 text-black border border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email || user.email}
              onChange={handleChange}
              className="w-full p-2 text-black border border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-1">Trabalho</label>
            <input
              type="text"
              name="job"
              value={formData.job || user.job}
              onChange={handleChange}
              className="w-full p-2 text-black border border-black"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-1">Foto de Perfil</label>
            <input
              type="file"
              name="imageProfile"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 text-black border border-black"
            />
          </div>
          {formData.profilePicture || user.imageProfile && (
            <img
              src={formData.profilePicture || user.imageProfile}
              alt="Profile Preview"
              className="w-24 h-24 object-cover mb-4"
            />
          )}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-black"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAccountModal;