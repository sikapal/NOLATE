
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AttachFile, Mic, Save, Search, Sync } from '@mui/icons-material';
import logo from '../../assets/logo.svg'
import SlideActiviteList from './SlideActiviteList';
import SlideActivite from './SlideActivite';



const SlidePlanning = ({ setShowModalNewPlanning }) => {

    const [activite, setActivite] = useState('');
    const [showModalNewActiviteList, setShowModalNewActiviteList] = useState(false);
    const [showModalNewActivite, setShowModalNewActivite] = useState(false);

    const handleSetActivite = (event) => {
        setActivite(event.target.value);
    };


    const [lieu, setLieu] = useState('');

    const handleSetLieu = (event) => {
        setLieu(event.target.value);
    };


    const [modePointage, setModePointage] = useState('');

    const handleSetModePointage = (event) => {
        setModePointage(event.target.value);
    };
    return (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex justify-end ">
            <div className="bg-white w-full sm:w-96 h-screen mt-[50px] px-4 py-4 transform translate-x-0 transition-transform duration-300 ease-out">
                <div className='flex flex-row justify-between items-center'>
                    <h2 className="text-xl font-semibold mb-6 text-violet">Nouveau planning</h2>
                    <button onClick={() => setShowModalNewPlanning(false)} className="text-black font-bold text-2xl mb-6">
                        x
                    </button>

                </div>

                <form className="">
                    <div className='space-y-2'>
                        <div className="">
                            <label htmlFor="DateOfBirth" className="block text-[14px]  text-titre mb-2">Date</label>
                            <input
                                type="date"
                                id="date"
                                className="border p-2 border-gray-300 mb-2 rounded-md h-[40px] w-full text-sm"
                                placeholder="jj/mm/aaaa"
                                required
                            />
                        </div>

                        <div className=" ">
                            <div className="w-full relative">
                                <div className='flex flex-wrap justify-between'>
                                    <label htmlFor="activite" className="block text-[14px] text-titre font-arial mb-2">
                                        Activité
                                    </label>

                                    <div className='text-[14px]'>
                                        <span className=' text-[#0996FF] cursor-pointer' onClick={() => {

                                            setShowModalNewActivite(true);
                                           

                                        }}>Créer</span> | <span className='text-[#0996FF] cursor-pointer'
                                        
                                        
                                        onClick={() => {

                                            setShowModalNewActiviteList(true);
                                           
                                        

                                        }}>Modifier</span>
                                    </div>
                                </div>
                                <select
                                    id="actvite"
                                    className="h-[40px] w-full px-3 pr-10 mb-2 border border-gray-300 rounded-md appearance-none"
                                    value={activite}
                                    onChange={handleSetActivite}
                                >
                                    <option value="" className="font-semibold">
                                        Sélectionnez une actvité
                                    </option>
                                    <option value="activité 1">actvité 1</option>
                                    <option value="activité 2">actvité 2</option>
                                </select>

                                <div className="absolute top-1/2 right-3 transform -translate-y-1/5 pointer-events-none text-black">
                                    <ExpandMoreIcon />
                                </div>
                            </div>
                        </div>

                        <div className=" ">
                            <div className="w-full relative">
                                <div className='flex flex-wrap justify-between'>
                                    <label htmlFor="lieu" className="block text-[14px] text-titre font-arial mb-2">
                                        Lieu
                                    </label>

                                    <div className='text-[14px]'>
                                        <span className=' text-[#0996FF] cursor-pointer'>Créer</span> | <span className='text-[#0996FF] cursor-pointer'>Modifier</span>
                                    </div>
                                </div>
                                <select
                                    id="lieu"
                                    className="h-[40px] w-full px-3 pr-10 mb-2 border border-gray-300 rounded-md appearance-none"
                                    value={lieu}
                                    onChange={handleSetLieu}
                                >
                                    <option value="" className="font-semibold">
                                        Sélectionnez le lieu
                                    </option>
                                    <option value="lieu1">lieu 1</option>
                                    <option value="lieu2">lieu 2</option>
                                </select>

                                <div className="absolute top-1/2 right-3 transform -translate-y-1/5 pointer-events-none text-black">
                                    <ExpandMoreIcon />
                                </div>
                            </div>
                        </div>


                        <div className='w-full relative'>
                            <div className='flex flex-wrap justify-between'>
                                <div className='flex flex-wrap flex-row justify-between'>

                                    <div className='w-1/4'>
                                        <label htmlFor="heuredebut" className="block text-[14px] text-titre font-arial mb-2">
                                            Heure Debut
                                        </label>
                                        <input
                                            type=""
                                            id="hour"
                                            className="border p-2 border-gray-300 mb-2  text-center rounded-md h-[40px] w-full text-sm"
                                            placeholder="hh:mm:ss"
                                            required
                                        />
                                    </div>

                                    <div className='w-2/4 mt-6 space-x-8 flex flex-row justify-center items-center text-center'>
                                        <img src={logo} alt="logo" className='w-4 h-4 text-black text-center ' />
                                        <Save />
                                        <Sync />
                                    </div>

                                    <div className='w-1/4'>
                                        <label htmlFor="heuredebut" className="block text-[14px] text-titre font-arial mb-2">
                                            Heure Fin
                                        </label>
                                        <input
                                            type=""
                                            id="hourfin"
                                            className="border p-2 border-gray-300 mb-2  text-center  rounded-md h-[40px] w-full text-sm"
                                            placeholder="hh:mm:ss"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className=" ">
                            <div className="w-full relative">
                                <div className='flex flex-wrap justify-between'>
                                    <label htmlFor="modePointage" className="block text-[14px] text-titre font-arial mb-2">
                                        Mode de Pointage
                                    </label>


                                </div>
                                <select
                                    id="modePointage"
                                    className="h-[40px] w-full px-3 pr-10 mb-2 border border-gray-300 rounded-md appearance-none"
                                    value={modePointage}
                                    onChange={handleSetModePointage}
                                >
                                    <option value="" className="font-semibold">
                                        Par défaut
                                    </option>
                                    <option value="codeqr">Code Qr</option>
                                    <option value="emprunte">Emprunte digitale</option>
                                    <option value="signature">signature Numérique</option>
                                </select>

                                <div className="absolute top-1/2 right-3 transform -translate-y-1/5 pointer-events-none text-black">
                                    <ExpandMoreIcon />
                                </div>
                            </div>
                        </div>

                        <div className=" ">
                            <div className="w-full relative">
                                <div className='flex flex-wrap justify-between'>
                                    <label htmlFor="modePointage" className="block text-[14px] text-titre font-arial mb-2">
                                        Assigné à
                                    </label>
                                </div>
                                <div className="relative">
                                    <input

                                        placeholder="Identifiez des personnes..."
                                        className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <Search
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        size={20}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='z-50 bg-white w-full flex flex-row py-4 my-4'>
                        <div className="relative w-[75%]">
                            <input

                                placeholder="Dites quelque chose..."
                                className="px-2 py-2 h-[40px] border border-gray-300 text-[16px] rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            />
                            <AttachFile
                                className="absolute  right-16 top-1/2 transform -translate-y-1/2 text-gray-400"
                                size={10}
                            />

                            <Mic className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400"
                                size={10}
                            />
                        </div>

                        <button type="submit" className="w-[25%] px-4 bg-lightblue text-white py-2 rounded-xl ">Planifier</button>
                    </div>




                </form>
            </div>
            {showModalNewActiviteList && <SlideActiviteList setShowModalNewActiviteList={setShowModalNewActiviteList} />}
            {showModalNewActivite && <SlideActivite setShowModalNewActivite={setShowModalNewActivite} />}
        </div>
    );
};

export default SlidePlanning;
