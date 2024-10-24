import Copyright from '@mui/icons-material/Copyright'
import { useState } from 'react';
import React from 'react'
import logo from '../assets/logo.svg'
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

const Register3 = () => {
  return (
    <div className='text-center justify-center bg-white'>

    <div className="pt-[20px] flex flex-col items-center text-center">
        <h1 className="font-bold text-2xl">Création de compte</h1>
        <p className="mt-2">Optimisez la gestion des heures de présence du personnel au sein de votre organisation</p>
    </div>

    <div className="flex items-center justify-center pt-[30px] bg-white">

        <div className=" bg-white p-[10px] w-[436px] h-[356px] relative overflow-hidden rounded-lg shadow-lg justify-center "   >
            <div className='absolute top-0 left-0 right-0 h-[10px] bg-gradient-to-r from-[#2699FB] to-[#EB09E3]'></div>

            <h2 className='p-t-1 mt-2 text-violet font-gothic font-bold flex justify-center '><span className='text-violet text-[32px]'>N</span>  <span className='text-yellow text-[3px] pt-4'><img src={logo} alt="logo" className="w-[20px] h-[20px]" /></span> <span className='text-violet text-[32px]'>Late</span>  </h2>
            <p className="font-bold text-europa text-[18px] text-center justify-center">Vérification de l'adresse mail</p>
  

            <div className="mt-[30px] p-auto justify-items-start px-[25px]">
                <label htmlFor="code" className="block text-[16px] font-bold font-arial">Veuillez saisir le code reçu par mail</label>
                <input
                    type="text"
                    id="code"
                    className="mt-2 block  p-2 border border-gray-300 rounded-md h-[48px] w-full"
                    placeholder="Code"
                    required
                />


            </div>
            <div className='items-center justify-center px-[25px]'>

                <button className="mt-6  p-2 w-full h-[48px] bg-gradient-to-r from-[#2699FB] to-[#EB09E3] text-white font-bold rounded-md justify-center items-center">
                    Vérifier
                </button>


               
            </div>

            <div className="flex items-center justify-center mt-4">
            <Link>
            <p className="mt-4  w-[40px]text-center text-[14px] text-black underline font-regular cursor-pointer">
                   Renvoyer le code
                </p>
            </Link>
                <span className="mx-5 mt-4  text-dark-400 text-[14px]">ou</span>
            

                <p className="mt-4  w-[40px]text-center text-[14px] text-blue2  font-regular cursor-pointer">
                    Modifier l'adresse Email
                </p>
            </div>


        </div>


    </div>
    
   

    <div className="flex justify-center items-center mt-6">
        <div className='w-[436px] h-[47px] flex flex-wrap flex-row justify-center items-center  leading-[16px] text-center mt-2 mx-3'>
            <p className='text-[#727C8E] font-arial cursor-pointer mx-3'> < Copyright className='mr-1 ' style={{ fontSize: '14px' }} /> <span className='text-sm '> 2024</span></p>
            <p className='text-skyblue text-sm font-arial cursor-pointer mx-3'>À propos</p>
            <p className='text-skyblue text-sm font-arial cursor-pointer mx-3'>Conditions générales d’utilisation</p>
            <p className='text-skyblue text-sm font-arial cursor-pointer mx-3'>Politique de confidentialité</p>
            <p className='text-skyblue text-sm font-arial cursor-pointer mx-3'>Politique de la marque</p>
        </div>
    </div>


</div>
  )
}

export default Register3
