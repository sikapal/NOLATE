import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Copyright from '@mui/icons-material/Copyright';
import logo from '../assets/logo.svg';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleResetPassword = () => {
        if (password === confirmPassword) {
            setError('');
            console.log("Password reset successful!");
           
        } else {
            setError("Les mots de passe ne correspondent pas.");
        }
    };

    return (
        <div className="text-center justify-center bg-white">
            <div className="pt-[20px] flex flex-col items-center text-center">
                <h1 className="font-bold text-2xl">Réinitialiser le mot de passe</h1>
                <p className="mt-2">Entrez un nouveau mot de passe pour votre compte</p>
            </div>

            <div className="flex items-center justify-center pt-[30px] bg-white">
                <div className="bg-white p-[10px] w-[535px] h-[400px] relative overflow-hidden rounded-lg shadow-lg justify-center">
                    <div className="absolute top-0 left-0 right-0 h-[10px] bg-gradient-to-r from-[#2699FB] to-[#EB09E3]"></div>

                    <h2 className="p-t-1 mt-2 text-violet font-gothic font-bold flex justify-center">
                        <span className="text-violet text-[32px]">N</span>
                        <span className="text-yellow text-[3px] pt-4">
                            <img src={logo} alt="logo" className="w-[20px] h-[20px]" />
                        </span>
                        <span className="text-violet text-[32px]">Late</span>
                    </h2>

                    <div className="mt-[30px] p-auto justify-items-start px-[25px]">
                        <label htmlFor="password" className="block text-[16px] font-bold font-arial">
                            Nouveau mot de passe
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="mt-2 block p-2 border border-gray-300 rounded-md h-[48px] w-full"
                            placeholder="Entrez un nouveau mot de passe"
                            required
                        />

                        <label htmlFor="confirmPassword" className="block text-[16px] font-bold font-arial mt-4">
                            Confirmez le mot de passe
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            className="mt-2 block p-2 border border-gray-300 rounded-md h-[48px] w-full"
                            placeholder="Confirmez le mot de passe"
                            required
                        />

                        {error && <p className="mt-2 text-red-600">{error}</p>}
                    </div>

                    <div className="items-center justify-center px-[25px]">
                        <button
                            onClick={handleResetPassword}
                            className="mt-6 p-2 w-full h-[48px] bg-gradient-to-r from-[#2699FB] to-[#EB09E3] text-white font-bold rounded-md justify-center items-center"
                        >
                            Réinitialiser le mot de passe
                        </button>
                        <div className='py-4'>
                            <Link to="/login" className="pt-4 text-center text-[16px] text-blue2 font-regular cursor-pointer">
                                Retour à la connexion
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-6">
                <div className="w-[436px] h-[47px] flex flex-wrap flex-row justify-center items-center leading-[16px] text-center mt-2 mx-3">
                    <p className="text-[#727C8E] font-arial cursor-pointer mx-3">
                        <Copyright className="mr-1" style={{ fontSize: '14px' }} />
                        <span className="text-sm">2024</span>
                    </p>
                    <p className="text-skyblue text-sm font-arial cursor-pointer mx-3">À propos</p>
                    <p className="text-skyblue text-sm font-arial cursor-pointer mx-3">Conditions générales d’utilisation</p>
                    <p className="text-skyblue text-sm font-arial cursor-pointer mx-3">Politique de confidentialité</p>
                    <p className="text-skyblue text-sm font-arial cursor-pointer mx-3">Politique de la marque</p>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
