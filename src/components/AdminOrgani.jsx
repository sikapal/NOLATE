import React, { useState } from 'react';
import { CalendarMonth, CheckBox } from '@mui/icons-material';


const AdminOrgani = () => {


    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <>
            <div className=' w-full bg-white rounded-xl  py-4 flex flex-col  shadow-xl  '>

                <h1 className="font-bold py-2 pl-3">Rôles et autorisations</h1>
                <p className='text-gray-500  text-sm pl-3'>Ce que vous pouvez faire en tantque administrateur</p>

                <div className='bg-[#EEEEEE] items-center justify-between  flex mx-1 my-3 px-2 py-2 font-bold text-[13px] text-[#727c8e] border-b-2 border-[#D9D9D9]'>
                    <p className='w-1/3'>RÔLES</p>
                    <p className='w-1/3 text-center'>UNITE DE GESTION</p>
                    <p className='w-1/3 text-end'>AUTORISATIONS</p>
                </div>
                <div className='bg-white items-center justify-between flex -my-2 px-2 mx-1  font-bold text-[13px] text-[#727c8e] border-b-2 border-[#D9D9D9]'>
                    <div className='flex my-2 w-1/3 text-titre flex-row space-x-2 '>

                        <p>Gestion des administrateur</p>

                    </div>
                    <div className='flex  w-1/3 justify-center flex-row'>
                        <select className='bg-white  rounded px-2 py-1 text-[#727c8e] font-semibold'>
                            <option value="tous">Tous les membres</option>
                            <option value="tous">Tous les membres</option>
                            <option value="tous">Tous les membres</option>
                        </select>

                    </div>

                    <div className='text-end w-1/3 gap-12 flex flex-row'>

                        <div className='flex flex-row '>
                            <input
                                type='checkbox'
                                checked
                                className='text-center mt-0.5 text-titre h-4 items-center justify-center accent-titre '
                            />
                            <p className='text-titre ml-2 '>Lire</p>
                        </div>

                        <div className='flex flex-row '>
                            <input
                                type='checkbox'
                                checked
                                className='text-center mt-0.5 text-titre h-4 items-center justify-center accent-titre '
                            />
                            <p className='text-titre ml-2 '>Ecrire</p>
                        </div>

                        <div className='flex flex-row '>
                            <input
                                type='checkbox'
                                checked
                                className='text-center mt-0.5 text-titre h-4 items-center justify-center accent-titre '
                            />
                            <p className='text-titre ml-2 '>Créer</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white items-center justify-between flex mt-2 -my-1 px-2 mx-1  font-bold text-[13px] text-[#727c8e] border-b-2 border-[#D9D9D9]'>
                    <div className='flex w-1/3 text-titre  my-2 flex-row space-x-2 '>

                        <p>Gestion des memebres</p>

                    </div>
                    <div className='flex  w-1/3 justify-center flex-row'>
                        <select className='bg-white  rounded px-2 py-1 text-[#727c8e] font-semibold'>
                            <option value="tous">Tous les membres</option>
                            <option value="tous">Tous les membres</option>
                            <option value="tous">Tous les membres</option>

                        </select>

                    </div>

                    <div className='text-end w-1/3 gap-12 flex flex-row'>

                        <div className='flex flex-row '>
                            <input
                                type='checkbox'
                                checked
                                className='text-center mt-0.5 text-titre h-4 items-center justify-center accent-titre '
                            />
                            <p className='text-titre ml-2 '>Lire</p>
                        </div>

                        <div className='flex flex-row '>
                            <input
                                type='checkbox'
                                checked
                                className='text-center mt-0.5 text-titre h-4 items-center justify-center accent-titre '
                            />
                            <p className='text-titre ml-2 '>Ecrire</p>
                        </div>

                        <div className='flex flex-row '>
                            <input
                                type='checkbox'
                                checked
                                className='text-center mt-0.5 text-titre h-4 items-center justify-center accent-titre '
                            />
                            <p className='text-titre ml-2 '>Créer</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white items-center justify-between flex mt-2 -my-1 px-2 mx-1  font-bold text-[13px] text-[#727c8e] border-b-2 border-[#D9D9D9]'>
                    <div className='flex w-1/3 text-titre my-2 flex-row space-x-2 '>

                        <p>Gestion du babillard</p>

                    </div>
                    <div className='flex  w-1/3 justify-center flex-row'>
                        <select className='bg-white  rounded px-2 py-1 text-[#727c8e] font-semibold'>
                            <option value="tous">Tous les membres</option>
                            <option value="tous">Tous les membres</option>
                            <option value="tous">Tous les membres</option>

                        </select>

                    </div>

                    <div className='text-end w-1/3 gap-12 flex flex-row'>

                        <div className='flex flex-row '>
                            <input
                                type='checkbox'
                                checked
                                className='text-center mt-0.5 text-titre h-4 items-center justify-center accent-titre '
                            />
                            <p className='text-titre ml-2 '>Lire</p>
                        </div>

                        <div className='flex flex-row '>
                            <input
                                type='checkbox'
                                checked
                                className='text-center mt-0.5 text-titre h-4 items-center justify-center accent-titre '
                            />
                            <p className='text-titre ml-2 '>Ecrire</p>
                        </div>

                        <div className='flex flex-row '>
                            <input
                                type='checkbox'
                                checked
                                className='text-center mt-0.5 text-titre h-4 items-center justify-center accent-titre '
                            />
                            <p className='text-titre ml-2 '>Créer</p>
                        </div>
                    </div>
                </div>

                <div className='bg-white items-center justify-between flex mt-2 -my-1 px-2 mx-1  font-bold text-[13px]  text-[#727c8e] '>
                    <div className='flex w-1/3 text-titre my-2 flex-row space-x-2 '>

                        <p>Gestion de la page</p>

                    </div>
                    <div className='flex  w-1/3 justify-center flex-row'>
                        <select className='bg-white  rounded px-2 py-1 text-[#727c8e] font-semibold'>
                            <option value="tous">Tous les membres</option>
                            <option value="tous">Tous les membres</option>
                            <option value="tous">Tous les membres</option>

                        </select>

                    </div>

                    <div className='text-end w-1/3 gap-12 flex flex-row'>

                        <div className='flex flex-row '>
                            <input
                                type='checkbox'
                                checked
                                className='text-center mt-0.5 text-titre h-4 items-center justify-center accent-titre '
                            />
                            <p className='text-titre ml-2 '>Lire</p>
                        </div>

                        <div className='flex flex-row '>
                            <input
                                type='checkbox'
                                checked
                                className='text-center mt-0.5 text-titre h-4 items-center justify-center accent-titre '
                            />
                            <p className='text-titre ml-2 '>Ecrire</p>
                        </div>

                        <div className='flex flex-row '>
                            <input
                                type='checkbox'
                                checked
                                className='text-center mt-0.5 text-titre h-4 items-center justify-center accent-titre '
                            />
                            <p className='text-titre ml-2 '>Créer</p>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default AdminOrgani
