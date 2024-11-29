import React from 'react'
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';

const AdminApropos = () => {
    const [phone, setPhone] = useState('');
    return (

        <>
            <div className='bg-white  h-auto p-4 mx-2 rounded-2xl  shadow-2xl'>

                <h1 className="font-bold text-lg mb-3">Informations Générales</h1>
                <div>
                    <form action=" " className='mb-4 '>

                        {/* Nom */}
                        <div className='flex flex-wrap '>
                            <div className="mb-1  w-1/2">
                                <label htmlFor="nom" className="block mb-2 text-[14px] text-titre">
                                    Nom(s)
                                </label>
                                <input
                                    type="text"
                                    id="nom"
                                    placeholder="NGN"
                                    className="w-full border border-gray-300 rounded text-black px-3 py-2"
                                  
                                />
                            </div>

                            {/* Prenom*/}
                            <div className="mb-1 w-1/2 pl-5">
                                <label htmlFor="prenom" className="block  text-[14px] mb-2 text-titre">
                                    Prenom(s)
                                </label>
                                <input
                                    type="text"
                                    id="prenom"
                                    placeholder="Boris"
                                    className="w-full border border-gray-300 text-black rounded px-3 py-2"
                                  
                                />
                            </div>
                        </div>

                        {/* Date de naissance */}
                        <div className='flex flex-wrap mt-4'>
                            <div className="mb-1  w-full ">
                                <label htmlFor="jour" className="block mb-2 text-titre text-[14px]">
                                    Date de naissance
                                </label>
                                <div className='w-full flex flex-wrap justify-between'>
                                    <input
                                        type="text"
                                        id="jour"
                                        placeholder="15"
                                        className=" w-[32%] border border-gray-300 rounded text-black px-3 py-2"
                                      
                                    />
                                    <input
                                        type="text"
                                        id="mois"
                                        placeholder="Novembre"
                                        className=" w-[32%] border border-gray-300 rounded text-black px-3 py-2"
                                      
                                    />
                                    <input
                                        type="text"
                                        id="année"
                                        placeholder="1990"
                                        className=" w-[32%] border border-gray-300 rounded text-black  px-3 py-2"
                                      
                                    />
                                </div>
                            </div>


                        </div>

                        <div className='mt-4 flex-row flex '>
                        <label className='block text-sm'>Genre</label>
                        <div className='flex items-center space-x-4 ml-8'>
                            <label className='flex items-center'>
                                <input
                                    type='radio'
                                    name='gender'
                                    value='male'
                                    className='mr-2 accent-lightblue'
                                   
                                />
                                Homme
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type='radio'
                                    name='gender'
                                    value='female'

                                    className='mr-2 accent-lightblue'
                                  
                                />
                                Femme
                            </label>
                        </div>
                    </div>

                    </form>
                </div>

            </div>

            <div className=' h-auto p-4 mx-2 rounded-2xl mt-4 bg-white  '>
            <h1 className="font-bold text-lg mb-1">Coordonnées</h1>
                <form action=" ">

                    {/* email */}
                    <div className='flex flex-wrap mt-2 relative '>
                        <div className="mb-1  w-1/2 ">
                            <label htmlFor="email" className="block mb-2 text-[14px] text-titre">
                               Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                placeholder="email@gmail.com"
                                className="w-full border border-gray-300 rounded text-black px-3 py-2"
                              
                            />
                        </div>

                        <div className='absolute bg-[#eaa8a8] mr-4 top-1/2 right-1/2 py-1 px-2 text-[10px] rounded-md'>
                                <p className='text-red'> verifié maintenant</p>
                        </div>

                        {/* telephone*/}
                        <div className="mb-1 w-1/2 pl-5">
                            <label htmlFor="phone" className="block  text-[14px] mb-2 text-titre">
                                Téléphone
                            </label>
                          <PhoneInput
                          DefaultCountry="cm"
                          value={phone}
                          onChange={(phone) => setPhone(phone)}
                          inputStyle={{ width: '100%', height: '40px'}}
                          />
                        </div>

                        <div className='absolute bg-[#a8eab1] mr-4 top-1/2 right-0 py-1 px-2 text-[10px] rounded-md'>
                                <p className='text-green'> verifié </p>
                        </div>
                    </div>

                    <div className='flex flex-wrap mt-4'>
                            <div className="mb-1  w-1/2">
                                <label htmlFor="pay" className="block mb-2 text-[14px] text-titre">
                                   Pays de résidence
                                </label>
                                <input
                                    type="text"
                                    id="pay"
                                    placeholder="Cameroun"
                                    className="w-full border border-gray-300 rounded text-black px-3 py-2"
                                  
                                />
                            </div>

                         
                            <div className="mb-1 w-1/2 pl-5">
                                <label htmlFor="ville" className="block  text-[14px] mb-2 text-titre">
                                   Ville
                                </label>
                                <input
                                    type="text"
                                    id="ville"
                                    placeholder="Yaoundé"
                                    className="w-full border border-gray-300 text-black rounded px-3 py-2"
                                  
                                />
                            </div>
                        </div>

                </form>
            </div>

        </>
    )
}

export default AdminApropos
