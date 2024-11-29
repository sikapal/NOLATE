
import React, { useState } from 'react';

import { ArrowBack, MyLocation, Search } from '@mui/icons-material';
import step from '../../assets/Step1.png'


const SlideLieu = ({ setShowModalNewLieu }) => {

    return (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex justify-end">
            <div className="bg-white w-full sm:w-96 h-screen mt-[50px] p-4 transform translate-x-0 transition-transform duration-300 ease-out">
                <div className='flex flex-row justify-between items-center text-center mb-6'>
                    <div className='flex  flex-wrap'>
                        <div className=''> <button onClick={() => setShowModalNewLieu(false)}><ArrowBack style={{ width: "18px", height: "18px" }} /></button></div>
                        <h2 className="text-xl font-semibold ml-4 text-violet">Lieu d'activité</h2>
                    </div>

                    <button type="submit" className="  px-4 bg-lightblue text-white py-1 rounded-xl ">Valider</button>

                </div>
                <p className='text-[#636578] text-xs mb-2'>Un lieu renvoie à l'emplacement où une ou plusieurs activités seront effectuées</p>
                <form className="">
                    <div className='space-y-2'>
                        <div className="">
                            <label htmlFor="nomlieu" className="block text-[14px]  text-titre mb-2">Nom du lieu</label>
                            <input
                                type="text"
                                id="nomlieu"
                                className="border p-2 border-gray-300 mb-2 rounded-md h-[40px] w-full text-sm"
                                placeholder="Entrez le nom du lieu"
                                required
                            />
                        </div>
                        <div className="relative ">
                            <label htmlFor="codeActivite" className="block text-[14px]  text-titre mb-2">Localisation GPS (facultatif)</label>
                            <input
                                type="text"
                                id="codeactivite"
                                className="border p-2 border-gray-300 mb-2 rounded-md h-[40px] w-full text-sm"
                                placeholder="Rechercher un  emplacement"
                                required
                            />

                            <div className='text-violet'>
                                <MyLocation className='absolute right-3 top-1/2 transform --y-1/2' style={{ width: "20px", height: "20px" }} />

                            </div>
                        </div>

                        <div className='w-full items-center border  h-[230px] shadow-md rounded-xl'>
                            <img src={step} alt=""
                             className='justify-center pt-10 mx-auto'
                            />

                            <p className='text-[#707070] text-[10px] mx-auto mt-4 text-center'>Aucun emplacement ajouté pour le moment</p>
                
                        </div>

                       <p className='mt-4 text-[11px]'>Ajouter les emplacements des lieux de service (locaux, bureaux, etc.) où les membres de votre équipe devront enregistrer leur présence.</p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SlideLieu;
