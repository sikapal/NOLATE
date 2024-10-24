import Copyright from '@mui/icons-material/Copyright';
import React from 'react';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Register = () => {

  const [genre, setGenre] = useState('');

  const handleSetGenre = (event) => {
    setGenre(event.target.value);
  };
  return (
    <div className='bg-white flex flex-col items-center'>

      <div className="pt-[20px] text-center">
        <h1 className="font-bold text-2xl">Création de compte</h1>
        <p className="mt-2">Optimisez la gestion des heures de présence du personnel au sein de votre organisation</p>
      </div>

      <div className="flex justify-center pt-[30px] bg-white">

        {/*register Card Starts*/}
        <div className="bg-white p-[10px] w-[436px] h-auto relative overflow-hidden rounded-lg shadow-lg">
          <div className='absolute top-0 left-0 right-0 h-[10px] bg-gradient-to-r from-[#2699FB] to-[#EB09E3]'></div>

          <h2 className='mt-2 text-violet font-gothic font-bold flex justify-center'>
            <span className='text-violet text-[32px]'>N</span>
            <span className='text-[3px] pt-4'>
              <img src={logo} alt="logo" className="w-[20px] h-[20px]" />
            </span>
            <span className='text-violet text-[32px]'>Late</span>
          </h2>

          <p className="font-bold text-europa text-[18px] text-center justify-center">Informations sur l'administrateur du compte</p>

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

            <div className='px-2 mb-6'>
              <div className='w-full'>
                <label htmlFor="genre" className="block text-[16px] font-bold font-arial mb-2">Genre*</label>
                <select
                  id="genre"
                  className='h-[40px] w-full px-2 mb-2 border border-gray-300 rounded-md'
                  value={genre}
                  onChange={handleSetGenre}
                >
                  <option value="" className='font-semibold'>
                    Sélectionnez votre genre
                  </option>
                  <option value="Féminin">Féminin</option>
                  <option value="Masculin">Masculin</option>
                </select>
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
                <label htmlFor="phone" className="block text-[16px] font-bold font-arial mb-2">Téléphone*</label>
                <input
                  type="text"
                  id="phone"
                  className="border p-2 border-gray-300 rounded-md h-[40px] w-full text-sm"
                  placeholder="Entrez votre prénom(s)"
                  required
                />
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
                <label htmlFor="password" className="block text-[14px] font-semibold font-arial mb-2">Confirmer le mot de passe*</label>
                <input
                  type="password"
                  id="password"
                  className="border p-2 border-gray-300 rounded-md h-[40px] w-full text-sm"
                  placeholder="Confirmer le mot de passe"
                  required
                />
              </div>
            </div>



          </div>

        </div>
        {/*register Card Ends*/}

      </div>

      

      <div className='flex flex-row justify-between items-center mt-4 '>
        <p className="text-[14px] pr-3 text-skyblue font-regular cursor-pointer">
          Vous avez déjà un compte?
        </p>

       <Link to="/register2">
       <button className=" ml-8 p-2 w-[150px] h-[35px] bg-skyblue text-white text-sm font-bold rounded-full">
          Suivant
        </button>
       </Link>
      </div>


      <div className="flex justify-center items-center mt-6">
        <div className='w-[436px] h-[47px] flex flex-wrap flex-row justify-center items-center leading-[16px] text-center mt-2 mx-3'>
          <p className='text-[#727C8E] font-arial cursor-pointer mx-3'>
            <Copyright className='mr-1' style={{ fontSize: '14px' }} />
            <span className='text-sm'> 2024</span>
          </p>
          <p className='text-skyblue text-sm font-arial cursor-pointer mx-3'>À propos</p>
          <p className='text-skyblue text-sm font-arial cursor-pointer mx-3'>Conditions générales d’utilisation</p>
          <p className='text-skyblue text-sm font-arial cursor-pointer mx-3'>Politique de confidentialité</p>
          <p className='text-skyblue text-sm font-arial cursor-pointer mx-3'>Politique de la marque</p>
        </div>
      </div>
    </div>
  )
}

export default Register;
