
import React, { useState } from 'react';

import { ArrowBack, DeleteForeverOutlined, Search } from '@mui/icons-material';
import Dots from '../../components/Dots';
import SlidePlanning from './SlidePlanning';
import SlideActivite from './SlideActivite';


const SlideActiviteList = ({ setShowModalNewActiviteList }) => {


    const [checked, setChecked] = useState(true);
    const [showModalNewPlanning, setShowModalNewPlanning] = useState(false);
    const [showModalNewActivite, setShowModalNewActivite] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const closeModalDelete = () => setShowModalDelete(false);

    const handleDelete = () => {

        console.log('Item deleted');
        closeModalDelete();
    };


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex justify-end">
            <div className="bg-white w-full sm:w-96 h-screen mt-[50px] p-4 transform translate-x-0 transition-transform duration-300 ease-out">
                <div className='flex flex-row justify-between items-center text-center mb-5'>
                    <div className='flex  flex-wrap'>
                        <div className=''> <button onClick={() => { setShowModalNewActiviteList(false); setShowModalNewPlanning(true) }}><ArrowBack style={{ width: "18px", height: "18px" }} /></button></div>
                        <h2 className="text-xl font-semibold ml-4 text-violet">Activités</h2>
                    </div>



                </div>
                <p className='text-titre text-[13px]'>Vous pouvez ajouter, modifier ou supprimer les éléments à cette liste</p>

                <div className="w-full relative mt-4">

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
                <div className='flex flex-col'>

                    <div className="flex flex-row justify-between items-center mt-4">
                        <p className='mb-4 cursor-pointer' onClick={setShowModalNewActivite}>Présence régulière</p>

                        <div className='-mt-5'>
                            <Dots
                                menuItems={[
                                    { label: "Modifier", action: () => { setShowModalNewActivite(true); }, },
                                    { label: "Supprimer", action: () => { { setShowModalDelete(true) } }, color: "red" },
                                ]}
                            />
                        </div>

                    </div>
                     
                    <div className="flex flex-row justify-between items-center mt-4">
                        <p className='mb-4'>Anglais</p>

                        <div className='-mt-5'>
                            <Dots
                                menuItems={[
                                    { label: "Modifier", action: () => { setShowModalNewActivite(true); }, },
                                    { label: "Supprimer", action: () => { { setShowModalDelete(true) } }, color: "red" },
                                ]}
                            />
                        </div>

                    </div>

                    
                    <div className="flex flex-row justify-between items-center mt-4">
                        <p className='mb-4'>Macro economie</p>

                        <div className='-mt-5'>
                            <Dots
                                menuItems={[
                                    { label: "Modifier", action: () => { setShowModalNewActivite(true); }, },
                                    { label: "Supprimer", action: () => { { setShowModalDelete(true) } }, color: "red" },
                                ]}
                            />
                        </div>

                    </div>
                </div>


            </div>

            {showModalDelete && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white py-4 rounded-lg shadow-lg max-w-sm w-[283px] h-[283] text-center">
                        <h2 className="text-lg font-semibold mb-2">Suppression</h2>
                        <div className='text-red mb-2'> <DeleteForeverOutlined /></div>

                        <p className="text-black mb-6">Êtes-vous de vouloir continuer ?<br />
                            Cette action est irréversible</p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={() => { handleDelete }}
                                className="bg-red-500 text-white px-4 py-2 rounded bg-red"

                            >
                                Supprimer
                            </button>
                            <button
                                onClick={closeModalDelete}
                                className="bg-white text-black px-4 py-2 border-2 rounded hover:bg-gray-400"
                            >
                                Annuler
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showModalNewPlanning && <SlidePlanning setShowModalNewPlanning={setShowModalNewPlanning} />}
            {showModalNewActivite && <SlideActivite setShowModalNewActivite={setShowModalNewActivite} />}
        </div>
    );
};

export default SlideActiviteList;
