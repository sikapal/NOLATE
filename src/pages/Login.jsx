import Copyright from '@mui/icons-material/Copyright'
import { useState } from 'react';
import React from 'react'
import logo from '../assets/logo.svg'
import Checkbox from '@mui/material/Checkbox';

const Login = () => {

    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <div className='text-center justify-center bg-white'>

            <div className="pt-[20px] flex flex-col items-center text-center">
                <h1 className="font-bold text-2xl">Connectez-vous</h1>
                <p className="mt-2">Connectez-vous pour gérer les heures de présence du personnel de votre organisation</p>
            </div>

            <div className="flex items-center justify-center pt-[30px] bg-white">

                {/*Login Card Starts  */}
                <div className=" bg-white p-[10px] w-[535px] h-[460px] relative overflow-hidden rounded-lg shadow-lg justify-center "   >
                    <div className='absolute top-0 left-0 right-0 h-[10px] bg-gradient-to-r from-[#2699FB] to-[#EB09E3]'></div>

                    <h2 className='p-t-1 mt-2 text-violet font-gothic font-bold flex justify-center '><span className='text-violet text-[32px]'>N</span> 
                     <span className='text-yellow text-[3px] pt-4'><img src={logo} alt="logo" className="w-[20px] h-[20px]" />
                     </span> <span className='text-violet text-[32px]'>Late</span>  </h2>

                    <div className="mt-[30px] p-auto justify-items-start px-[25px]">
                        <label htmlFor="email" className="block text-[16px] font-bold font-arial">Address e-mail ou ID</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-2 block  p-2 border border-gray-300 rounded-md h-[48px] w-full"
                            placeholder="Entrez votre e-mail ou votre ID"
                            required
                        />


                        <label htmlFor="password" className="block text-[16px] font-bold font-arial mt-6">Mot de passe</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-2 block  p-2 border border-gray-300 rounded-md h-[48px] w-full" placeholder="Entrez votre mot de passe"
                            required
                        />
                      

                        <div className="flex items-center mt-4">
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                            className="mr-5 w-[22px] h-[22px]"
                        />
                             <label htmlFor="rememberMe" className="text-[16px] font-regular ml-2">Se souvenir de moi</label>
                        </div>

                    </div>
                    <div className='items-center justify-center px-[25px]'>

                        <button className="mt-6  p-2 w-full h-[48px] bg-gradient-to-r from-[#2699FB] to-[#EB09E3] text-white font-bold rounded-md justify-center items-center">
                            Se Connecter
                        </button>


                        <p className="mt-4 text-center text-[16px] text-blue2  font-regular cursor-pointer">
                            Mot de passe oublié?
                        </p>
                    </div>

                </div>


            </div>
            {/*Login Card Ends  */}
            <div className="flex items-center justify-center mt-4">
                <hr className="border-t border-gray-300 w-[40px]" />
                <span className="mx-2 text-gray-400 text-[15px]">ou</span>
                <hr className="border-t border-gray-300 w-[40px]" />
            </div>

            <button className="mt-6  p-2 w-[250px] h-[40px] bg-green text-white font-bold rounded-md justify-center items-center">
                Créer un compte
            </button>

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

export default Login
