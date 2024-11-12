import React from 'react'
import { useState } from 'react';
import logo from '../assets/logo.svg';
import Copyright from '@mui/icons-material/Copyright';
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import { ArrowBackIos } from '@mui/icons-material';

const Register2 = () => {
  const [organisation, setOrganisation] = useState('');
  const [checked, setChecked] = useState(true);

  const handleSetOrganisation = (event) => {
    setOrganisation(event.target.value);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className='bg-white flex flex-col items-center'>

      <div className="pt-[20px] text-center">
        <h1 className="font-bold text-2xl">Création de compte</h1>
        <p className="mt-2">Optimisez la gestion des heures de présence du personnel au sein de votre organisation</p>
      </div>

      <div className="flex justify-center pt-[30px] bg-white">

        {/*register Card Starts*/}
        <div className="bg-white p-[10px] w-[535px] h-auto relative overflow-hidden rounded-lg shadow-lg">
          <div className='absolute top-0 left-0 right-0 h-[10px] bg-gradient-to-r from-[#2699FB] to-[#EB09E3]'></div>

          <h2 className='mt-2 text-violet font-gothic font-bold flex justify-center'>
            <span className='text-violet text-[32px]'>N</span>
            <span className='text-[3px] pt-4'>
              <img src={logo} alt="logo" className="w-[20px] h-[20px]" />
            </span>
            <span className='text-violet text-[32px]'>late</span>
          </h2>

          <p className="font-bold text-europa text-[18px] text-center justify-center">Informations sur la structure</p>

          <div className="mt-[30px]">

            <div className="flex mb-6">
              <div className="w-full px-2">
                <label htmlFor="name" className="block text-[16px] font-bold font-arial mb-2">Nom de la structure*</label>
                <input
                  type="text"
                  id="name"
                  className="border p-2 border-gray-300 rounded-md h-[40px] w-full text-sm"
                  placeholder="Renseignez le nom de votre structure"
                  required
                />
              </div>


            </div>

            <div className="flex mb-6">
              <div className="w-full px-2">
                <label htmlFor="sigle" className="block text-[16px] font-bold font-arial mb-2">Sigle</label>
                <input
                  type="text"
                  id="sigle"
                  className="border p-2 border-gray-300 rounded-md h-[40px] w-full text-sm"
                  placeholder="Renseignez le sigle de votre structure"
                  required
                />
              </div>


            </div>

            <div className='px-2 mb-6'>
              <div className='w-full'>
                <label htmlFor="organisation" className="block text-[16px] font-bold font-arial mb-2">Type d'organisation*</label>
                <select
                  id="organisation"
                  className='h-[40px] w-full px-2 mb-2 border border-gray-300 rounded-md'
                  value={organisation}
                  onChange={handleSetOrganisation}
                >
                  <option value="" className='font-semibold'>
                    Sélectionnez le type de votre structure
                  </option>
                  <option value="SARL">SARL</option>
                  <option value="SA">SA</option>
                </select>
              </div>

            </div>

            <div className='px-2 mb-6'>
              <div className='w-full'>
                <label htmlFor="organisation" className="block text-[16px] font-bold font-arial mb-2">Type d'organisation*</label>
                <select
                  id="organisation"
                  className='h-[40px] w-full px-2 mb-2 border border-gray-300 rounded-md'
                  value={organisation}
                  onChange={handleSetOrganisation}
                >
                  <option value="" className='font-semibold'>
                    Sélectionnez le type de votre structure
                  </option>
                  <option value="SARL">SARL</option>
                  <option value="SA">SA</option>
                </select>
              </div>

            </div>


            <div className="flex mb-6">
              <div className="w-full px-2">
                <label htmlFor="name" className="block text-[16px] font-bold font-arial mb-2">Nom de la structure*</label>
                <input
                  type="text"
                  id="name"
                  className="border p-2 border-gray-300 rounded-md h-[40px] w-full text-sm"
                  placeholder="Renseignez le nom de votre structure"
                  required
                />
              </div>


            </div>


            <div className="flex  mt-4 mb-6">
              <div className='w-1/10'>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                  className="mr-5 w-[22px] h-[22px]"
                />
              </div>

              <label htmlFor="remember" className="text-[12px] font-regular ml-2 w-9/10">Je certifie être mandataire de cette organisation et disposer du droit d’agir en son compte pour créer et gérer ce compte. L’organisation et moi-même acceptons les conditions supplémentaires des comptes.</label>
            </div>


          </div>

        </div>
        {/*register Card Ends*/}

      </div>



      <div className='flex flex-row justify-between items-center mt-4 '>
        <Link to="/register">
          <p className="text-[14px] pr-1 text-skyblue font-regular cursor-pointer">
            <ArrowBackIos className='' style={{ fontSize: '14px' }} /> Précédent
          </p>

        </Link>
        <Link to="/register3" className='ml-16'>
          <button className=" ml-16 p-2 w-[150px] h-[35px] bg-skyblue text-white text-sm font-bold rounded-full">
            Créer le compte
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

export default Register2
