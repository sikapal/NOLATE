import React from 'react'
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';

const AdminApropos = () => {
    const [phone, setPhone] = useState('');
    return (

        <>
            <div className='bg-white w-full h-auto p-4 rounded-2xl '>

                <h1 className="font-bold text-lg mb-1">Informations Générales</h1>
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
                                    readOnly
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
                                    readOnly
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
                                        readOnly
                                    />
                                    <input
                                        type="text"
                                        id="mois"
                                        placeholder="Novembre"
                                        className=" w-[32%] border border-gray-300 rounded text-black px-3 py-2"
                                        readOnly
                                    />
                                    <input
                                        type="text"
                                        id="année"
                                        placeholder="1990"
                                        className=" w-[32%] border border-gray-300 rounded text-black  px-3 py-2"
                                        readOnly
                                    />
                                </div>
                            </div>


                        </div>

                        <div className='flex flex-wrap mt-4'>
                            <div className="mb-1  w-full ">
                                <label htmlFor="jour" className="block mb-2 text-titre text-[14px]">
                                    Genre
                                </label>

                                <div className=' flex flex-wrap justify-between w-1/2'>

                                </div>

                            </div>

                        </div>

                    </form>
                </div>

            </div>

            <div className=' w-full h-auto p-4 rounded-2xl mt-3 bg-white  '>
            <h1 className="font-bold text-lg mb-1">Coordonnées</h1>
                <form action=" ">

                    {/* email */}
                    <div className='flex flex-wrap '>
                        <div className="mb-1  w-1/2">
                            <label htmlFor="email" className="block mb-2 text-[14px] text-titre">
                               Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                placeholder="email@gmail.com"
                                className="w-full border border-gray-300 rounded text-black px-3 py-2"
                                readOnly
                            />
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
                    </div>

                    <div className='flex flex-wrap '>
                            <div className="mb-1  w-1/2">
                                <label htmlFor="pay" className="block mb-2 text-[14px] text-titre">
                                   Pays de résidence
                                </label>
                                <input
                                    type="text"
                                    id="pay"
                                    placeholder="Cameroun"
                                    className="w-full border border-gray-300 rounded text-black px-3 py-2"
                                    readOnly
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
                                    readOnly
                                />
                            </div>
                        </div>

                </form>
            </div>

        </>
    )
}

export default AdminApropos
