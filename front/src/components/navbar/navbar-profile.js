import React, { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import EditAccountModal from './edit-account';
import { userService } from '../../services/api/users';

const NavbarProfile = ({ logout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const getUser = async () => {
      const res = await userService.get();
      if (res && res.status === 200) {
        setUser(res.data);
      }
    }

    getUser();
  }, [isModalOpen]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    closeDropdown();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (formData) => {
    const updateUser = async () => {
      const res = await userService.update(formData);
      console.log(res);
      if (res && res.status === 201) {
        alert("Dados atualizados com sucesso");
      }
    }
    
    updateUser();
  };

  return (
    <div className="relative inline-block">
      <CgProfile
        onClick={toggleDropdown}
        className="text-4xl text-finscoreLightBlue cursor-pointer"
      />
      
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
          <ul className="py-1">
            <li
              className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
              onClick={openModal}
            >
              Editar Conta
            </li>
            <li
              className="px-4 py-2 text-black hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                logout();
                closeDropdown();
              }}
            >
              Sair
            </li>
          </ul>
        </div>
      )}

      <EditAccountModal
        user={user}
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={handleSave}
      />
    </div>
  );
};

export default NavbarProfile;
