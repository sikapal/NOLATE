import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import CountryCode from '../components/CountryCode';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RegisterAdmin = () => {
  const [genre, setGenre] = useState('');

  const handleSetGenre = (event) => {
    setGenre(event.target.value);
  };

  return (
    <div className="flex fixed right-96 justify-center items-center h-screen">
      {/* Register Card Starts */}
      <div
        className="bg-white p-[10px] w-[535px] h-auto relative overflow-hidden rounded-lg"
        style={{
          boxShadow: '0 50px 50px 50px rgba(0, 0, 0, 0.5)', 
        }}
      >
        <div className='absolute top-0 left-0 right-0 h-[10px] bg-gradient-to-r from-[#2699FB] to-[#EB09E3]'></div>

        <h2 className='mt-2 text-violet font-gothic font-bold flex justify-center'>
          <span className='text-violet text-[32px]'>N</span>
          <span className='text-[3px] pt-4'>
            <img src={logo} alt="logo" className="w-[20px] h-[20px]" />
          </span>
          <span className='text-violet text-[32px]'>late</span>
        </h2>

        <p className="font-bold text-europa text-[18px] text-center">Création d'un compte l'administrateur</p>

        <div className="mt-[30px]">
          <div className="flex mb-6">
            <div className="w-1/2 px-2">
              <label htmlFor="name" className="block text-[16px] font-bold font-arial mb-2">Nom(s)*</label>
              <input
                type="text"
                id="name"
                className="border p-2 border-gray-300 rounded-md h-[40px] w-full text-sm"
                placeholder="Entrez votre nom(s)"
                required
              />
            </div>

            <div className="w-1/2 px-2">
              <label htmlFor="surname" className="block text-[16px] font-bold font-arial mb-2">Prénom(s)*</label>
              <input
                type="text"
                id="surname"
                className="border p-2 border-gray-300 rounded-md h-[40px] w-full text-sm"
                placeholder="Entrez votre prénom(s)"
                required
              />
            </div>
          </div>

          <div className="px-2 mb-6">
            <div className="w-full relative">
              <label htmlFor="genre" className="block text-[16px] font-bold font-arial mb-2">Genre*</label>
              <select
                id="genre"
                className="h-[40px] w-full px-3 pr-10 mb-2 border border-gray-300 rounded-md appearance-none"
                value={genre}
                onChange={handleSetGenre}
              >
                <option value="" className="font-semibold">Sélectionnez votre genre</option>
                <option value="Féminin">Féminin</option>
                <option value="Masculin">Masculin</option>
              </select>
              <div className="absolute top-1/2 right-3 transform -translate-y-1/5 pointer-events-none text-black">
                <ExpandMoreIcon />
              </div>
            </div>
          </div>

          <div className="flex mb-6">
            <div className="w-1/2 px-2">
              <label htmlFor="email" className="block text-[16px] font-bold font-arial mb-2">E-mail*</label>
              <input
                type="email"
                id="email"
                className="border p-2 border-gray-300 rounded-md h-[40px] w-full text-sm"
                placeholder="Entrez votre e-mail"
                required
              />
            </div>

            <div className="w-1/2 px-2">
              <label htmlFor="phone" className="block text-[16px] font-bold mb-2">Téléphone*</label>
              <CountryCode />
            </div>
          </div>

          <div className="flex mb-6">
            <div className="w-1/2 px-2">
              <label htmlFor="DateOfBirth" className="block text-[16px] font-bold font-arial mb-2">Date de Naissance*</label>
              <input
                type="date"
                id="date"
                className="border p-2 border-gray-300 rounded-md h-[40px] w-full text-sm"
                placeholder="jj/mm/aaaa"
                required
              />
            </div>
          </div>

          <div className="flex mb-6">
            <div className="w-1/2 px-2">
              <label htmlFor="password" className="block text-[14px] font-semibold font-arial mb-2">Mot de passe*</label>
              <input
                type="password"
                id="password"
                className="border p-2 border-gray-300 rounded-md h-[40px] w-full text-sm"
                placeholder="Définir un mot de passe"
                required
              />
            </div>

            <div className="w-1/2 px-2">
              <label htmlFor="confpassword" className="block text-[14px] font-semibold font-arial mb-2">Confirmer le mot de passe*</label>
              <input
                type="password"
                id="confpassword"
                className="border p-2 border-gray-300 rounded-md h-[40px] w-full text-sm"
                placeholder="Confirmer le mot de passe"
                required
              />
            </div>
          </div>

          <div className='mx-2 mb-2'>
            <button className='w-full bg-lightblue p-2 text-white font-bold rounded-xl'> Créer le compte</button>
          </div>
        </div>
      </div>
      {/* Register Card Ends */}
    </div>
  );
};

export default RegisterAdmin;

