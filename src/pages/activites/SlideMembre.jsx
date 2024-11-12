import React, { useState } from 'react';
import { Add, Search } from '@mui/icons-material';
import user from '../../assets/user.jpg'
import { FaRegEnvelope } from 'react-icons/fa';

const SlideMembre = ({ setShowModalNewMember }) => {


    return (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex justify-end ">
            <div className="bg-white w-full sm:w-96 h-screen mt-[71px] p-4 transform translate-x-0 transition-transform duration-300 ease-out">
                <div className='flex flex-row justify-between items-center'>
                    <h2 className="text-xl font-semibold mb-6 text-violet">Ajouter un membre</h2>
                    <button onClick={() => setShowModalNewMember(false)} className="text-black font-bold text-2xl mb-6">
                        x
                    </button>
                </div>

                <form className="">
                    <div className='space-y-2'>

                        <p className='text-[#636578] text-sm mb-4'>
                            Ajouter de nouveaux membres à votre équipe en les envoyant des liens d'invitation uniques.
                        </p>
                        <div className="relative">
                            <input

                                placeholder="Rechercher un membre (ID, Noms ou Email)..."
                                className="w-full pl-4 pr-4 py-2 border text-xs border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <Search
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                size={20}
                            />
                        </div>
                        <p className='text-[#636578] text-sm pt-2'>Utilisateur(s) trouvé(s) : 2</p>
                    </div>


                    <div
                        className='bg-white border-2  border-[#B5B5B5] w-full cursor-pointer h-46 rounded-xl my-4 flex flex-col'

                    >
                        <div className='flex flex-row mx-4 '>
                            <img src={user} alt="" className='rounded-full w-24 h-24 mt-2 object-cover' />
                            <div className='pt-4 px-4'>
                                <h2 className='text-[#636578] mb-2 font-bold'>Jairus Dedino</h2>
                                <p className='text-[#878897] text-sm mb-2'>Jairusdedino@gmail.com</p>
                                <p className='text-[#878897] text-sm'>Data Analyst</p>

                            </div>
                        </div>

                        <div className='w-full justify-between mt-8 mb-2 flex flex-row'>
                            <button className=' bg-lightblue text-[14px] ml-4 hover:text-[14px]  w-[230px] h-[36px] rounded-xl justify-center text-white  items-center flex'>
                                <div className='flex mr-1 justify-center items-center'>
                                    <span> <Add className='justify-center items-center mx-1' /></span>
                                    <p className='mr-1'>Invité à rejoindre la structure</p>
                                </div>
                            </button>
                            <div className='border bg-slate-50 mr-4 w-9 h-9 rounded-xl  cursor-pointer  text-[#666CFF]'>
                            <FaRegEnvelope className='w-5 h-5 text-center justify-center m-2 items-center ' />
                        </div>
                        </div>
                    </div>


                </form>
            </div >
        </div >
    );
};

export default SlideMembre;
