
import React, { useState } from 'react';
import user from '../../assets/user.jpg'
import { CheckCircleOutlineOutlined, CloseOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const SlideDemandeAdhesion = ({ setShowModalDemandeAdhesion }) => {

    return (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex justify-end overflow-y-auto">
            <div className="bg-white overflow-y-auto scrollbar-custom w-full sm:w-96 h-screen mt-[71px] p-4 transform translate-x-0 transition-transform duration-300 ease-out">
                <div className='flex flex-row justify-between items-center'>
                    <h2 className="text-xl font-semibold mb-6 text-violet">Demande d'adhesion</h2>
                    <button onClick={() => setShowModalDemandeAdhesion(false)} className="text-black font-bold text-2xl mb-6">
                        x
                    </button>

                </div>
                <p className='text-[#636578] text-sm w-[90%] mb-2'>N'approuvez les demandes d'adhésion des personnes que vous connaissez</p>

                <div className='border-2 border-gray-300  h-auto rounded-lg p-4 mt-3'>
                    <div className='flex flex-col mb-1'>
                        <div className='flex flex-row mb-6 '>
                            <div>
                                <img src={user} alt="userpp" className='rounded-full' style={{ width: "100px", height: "100px" }} />
                            </div>
                            <div className='ml-6 pt-2'>
                                <p className='mb-2  text-gray-500 font-bold'>Georges Matoudi</p>
                                <p className='mb-2 text-[14px] text-gray-500'>mc-groupe@gmailcom</p>
                                <p className=' text-[14px] text-gray-500'>Data Analyst</p>
                            </div>
                        </div>

                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Téléphone</p>
                            <p className=' text-gray-500'>(+237)620 30 74 75</p>
                        </div>
                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Email</p>
                            <p className=' text-gray-500'>mc-greoge@gmail.com</p>
                        </div>
                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Ville</p>
                            <p className=' text-gray-500'>(+237)620 30 74 75</p>
                        </div>
                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Matricule</p>
                            <p className=' text-gray-500'>mc-greoge@gmail.com</p>
                        </div>
                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Affecté à</p>
                            <p className=' text-gray-500'>-</p>
                        </div>
                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Grade </p>
                            <p className=' text-gray-500'>-</p>
                        </div>
                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Poste occupé</p>
                            <p className=' text-gray-500'>-</p>
                        </div>
                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Commentaire</p>
                            <p className=' text-gray-500'>-</p>
                        </div>

                        <div className='flex flex-row text-[14px] justify-between '>

                            <Link to="/user-profile">
                                <button className='bg-lightblue text-[12px] mr-4 w-auto h-[30px] rounded-xl px-4 py-1 text-white flex items-center'
                                    onClick={() => {
                                        setShowModalDemandeAdhesion(false)
                                    }}
                                >
                                    <CheckCircleOutlineOutlined className='mr-2' style={{ width: '15px', height: '15px' }} />  Approver la demande d'adhesion
                                </button>
                            </Link>

                            <button className='bg-white text-[14px] border border-red w-auto h-[30px] rounded-xl px-2 py-1 text-red flex items-center'
                                onClick={() => {

                                }}
                            >
                                <CloseOutlined className='' style={{ width: '15px', height: '15px' }} />
                            </button>

                        </div>
                    </div>
                </div>

                <div className='border-2 border-gray-300  h-auto rounded-lg p-4 mt-3'>
                    <div className='flex flex-col mb-1'>
                        <div className='flex flex-row mb-6 '>
                            <div>
                                <img src={user} alt="userpp" className='rounded-full' style={{ width: "100px", height: "100px" }} />
                            </div>
                            <div className='ml-6 pt-2'>
                                <p className='mb-2  text-gray-500 font-bold'>Georges Matoudi</p>
                                <p className='mb-2 text-[14px] text-gray-500'>mc-groupe@gmailcom</p>
                                <p className=' text-[14px] text-gray-500'>Data Analyst</p>
                            </div>
                        </div>

                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Téléphone</p>
                            <p className=' text-gray-500'>(+237)620 30 74 75</p>
                        </div>
                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Email</p>
                            <p className=' text-gray-500'>mc-greoge@gmail.com</p>
                        </div>
                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Ville</p>
                            <p className=' text-gray-500'>(+237)620 30 74 75</p>
                        </div>
                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Matricule</p>
                            <p className=' text-gray-500'>mc-greoge@gmail.com</p>
                        </div>
                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Affecté à</p>
                            <p className=' text-gray-500'>-</p>
                        </div>
                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Grade </p>
                            <p className=' text-gray-500'>-</p>
                        </div>
                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Poste occupé</p>
                            <p className=' text-gray-500'>-</p>
                        </div>
                        <div className='flex flex-row text-[14px] mb-5'>
                            <p className='w-[40%]'>Commentaire</p>
                            <p className=' text-gray-500'>-</p>
                        </div>

                        <div className='flex flex-row text-[14px] justify-between '>
                            <button className='bg-lightblue text-[12px] mr-4 w-auto h-[30px] rounded-xl px-4 py-1 text-white flex items-center'
                                onClick={() => {
                                    setShowModalDemandeAdhesion(false)
                                }}
                            >
                                <CheckCircleOutlineOutlined className='mr-2' style={{ width: '15px', height: '15px' }} />  Approver la demande d'adhesion
                            </button>
                            <button className='bg-white text-[14px] border border-red w-auto h-[30px] rounded-xl px-2 py-1 text-red flex items-center'
                                onClick={() => {

                                }}
                            >
                                <CloseOutlined className='' style={{ width: '15px', height: '15px' }} />
                            </button>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SlideDemandeAdhesion;
