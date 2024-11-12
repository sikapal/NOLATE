
import React, { useState } from 'react';

import { ArrowBack, Search } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import Dots from '../../components/Dots';


const SlideActivite = ({ setShowModalNewActivite }) => {


    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex justify-end">
            <div className="bg-white w-full sm:w-96 h-screen mt-[71px] p-4 transform translate-x-0 transition-transform duration-300 ease-out">
                <div className='flex flex-row justify-between items-center text-center mb-6'>
                    <div className='flex  flex-wrap'>
                        <div className=''> <button onClick={() => setShowModalNewActivite(false)}><ArrowBack style={{ width: "18px", height: "18px" }} /></button></div>
                        <h2 className="text-xl font-semibold ml-4 text-violet">Activités</h2>
                    </div>

                    <button type="submit" className="  px-4 bg-lightblue text-white py-1 rounded-xl ">Valider</button>

                </div>

                <form className="">
                    <div className='space-y-2'>
                        <div className="">
                            <label htmlFor="nomActivite" className="block text-[14px]  text-titre mb-2">Nom de l'activité</label>
                            <input
                                type="text"
                                id="nomactivite"
                                className="border p-2 border-gray-300 mb-2 rounded-md h-[40px] w-full text-sm"
                                placeholder="Entrez le nom de l'activité"
                                required
                            />
                        </div>
                        <div className="">
                            <label htmlFor="codeActivite" className="block text-[14px]  text-titre mb-2">Code (facultatif)</label>
                            <input
                                type="text"
                                id="codeactivite"
                                className="border p-2 border-gray-300 mb-2 rounded-md h-[40px] w-full text-sm"
                                placeholder="Entrez le code de l'activité"
                                required
                            />
                        </div>

                        <div className=" ">
                            <div className="w-full relative">
                                <div className='flex flex-wrap justify-between'>
                                    <label htmlFor="activite" className="block text-[14px] text-titre font-arial mb-2">
                                        Lieu de l'activité
                                    </label>

                                    <div className='text-[14px]'>
                                        <span className=' text-[#0996FF] cursor-pointer'>Créer</span>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input

                                        placeholder="Rechercher..."
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <Search
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        size={20}
                                    />
                                </div>
                            </div>


                        </div>

                        <div className='flex flex-col'>

                            <div className="flex items-center mt-4">
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    className="mr-5 w-[22px] h-[22px]"
                                />
                                <label htmlFor="rememberMe" className="text-[16px] font-regular ml-2">Tout sélectionner</label>
                            </div>

                            <div className='flex flex-row justify-between'>
                                

                                <div className="flex items-center mt-4">
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    className="mr-5 w-[22px] h-[22px]"
                                />
                                <label htmlFor="rememberMe" className="text-[16px] font-regular ml-2">ADM</label>
                                </div>
                                   <div className='mt-2'>
                                   <Dots
                                        menuItems={[
                                            { label: "Modifier", action: () => alert(`Editing ${info.row.original.name}`) },
                                            { label: "Supprimer", action: () => alert(`Deleting ${info.row.original.name}`), color: "red" },
                                        ]}
                                    />
                               
                                   </div>
                            </div>

                            <div className='flex flex-row justify-between'>
                                

                                <div className="flex items-center mt-4">
                                <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                    className="mr-5 w-[22px] h-[22px]"
                                />
                                <label htmlFor="rememberMe" className="text-[16px] font-regular ml-2">ITT3</label>
                                </div>
                                   <div className='mt-2'>
                                   <Dots
                                        menuItems={[
                                            { label: "Modifier", action: () => alert(`Editing ${info.row.original.name}`) },
                                            { label: "Supprimer", action: () => alert(`Deleting ${info.row.original.name}`), color: "red" },
                                        ]}
                                    />
                               
                                   </div>
                            </div>

                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default SlideActivite;
