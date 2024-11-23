
import React, { useState, useEffect } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {  DriveFileRenameOutline,  Search } from '@mui/icons-material';
import user from "../../assets/user.jpg"

const SlidePointeuse = ({ setShowModalNewPointeuse }) => {




    const [data, setData] = useState([]); // On stocke les données JSON ici
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const [activite, setActivite] = useState('');

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


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/data13.json");
            const jsonData = await response.json();
            setData(jsonData);
        };
        fetchData();
    }, []);


    useEffect(() => {
        if (search.trim() === "") {

            setFilteredData(data.slice(-2));
        } else {

            const result = data.filter((person) =>
                person.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredData(result);
        }
    }, [search, data]);

    return (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex justify-end">
            <div className="bg-white w-full sm:w-96 h-screen mt-[50px] p-4 transform translate-x-0 transition-transform duration-300 ease-out">
                <div className='flex flex-row justify-between items-center'>
                    <h2 className="text-xl font-semibold mb-6 text-violet">Infos Pointeuse Horaire</h2>
                    <button onClick={() => setShowModalNewPointeuse(false)} className="text-black font-bold text-2xl mb-6">
                        x
                    </button>

                </div>

                <form className="">
                    <div className='space-y-2 -mt-2'>


                        <div className=" ">
                            <div className="w-full relative">

                                <label htmlFor="activite" className="block text-[14px] text-titre font-arial mb-2">
                                    Nom de la pointeuse
                                </label>

                                <input
                                    type=""
                                    id="name"
                                    className="border p-2 border-gray-300 mb-2  rounded-md h-[40px] w-full text-sm"
                                    placeholder=""
                                    required
                                />

                                <div className="absolute top-9 right-3 transform -translate-y-1/5 pointer-events-none text-black">
                                    <DriveFileRenameOutline style={{ width: "16px", height: "16px" }} />
                                </div>
                            </div>
                        </div>

                        <div className=" ">
                            <div className="w-full relative">

                                <label htmlFor="activite" className="block text-[14px] text-titre font-arial mb-2">
                                    ID de la pointeuse
                                </label>

                                <input
                                    type=""
                                    id="name"
                                    className="border p-2 border-gray-300 mb-2  rounded-md h-[40px] w-full text-sm"
                                    placeholder="D4:48:78:89:85"
                                    required
                                />

                                <div className="absolute top-9 right-3 transform -translate-y-1/5 pointer-events-none text-black">
                                    <DriveFileRenameOutline style={{ width: "16px", height: "16px" }} />
                                </div>
                            </div>
                        </div>

                        <div className=" ">
                            <div className="w-full relative">

                                <label htmlFor="activite" className="block text-[14px] text-titre font-arial mb-2">
                                    Lieu de Pointage
                                </label>

                                <input
                                    type=""
                                    id="lieu"
                                    className="border p-2 border-gray-300 mb-2  rounded-md h-[40px] w-full text-sm"
                                    placeholder=""
                                    required
                                />

                                <div className="absolute top-9 right-3 transform -translate-y-1/5 pointer-events-none text-black">
                                    <ExpandMoreIcon style={{ width: "16px", height: "16px" }} />
                                </div>
                            </div>
                        </div>

                        <div className=" ">
                            <div className="w-full relative">

                                <label htmlFor="activite" className="block text-[14px] text-titre font-arial mb-2">
                                    Nombre maximum d'utilisateurs
                                </label>

                                <input
                                    type=""
                                    id="name"
                                    className="border p-2 border-gray-300 mb-2  rounded-md h-[40px] w-full text-sm"
                                    placeholder=""
                                    required
                                />
                            </div>
                        </div>



                        <div>



                            <div className="w-full relative">
                                <div className='flex flex-wrap justify-between'>
                                    <label htmlFor="modePointage" className="block text-[14px] text-black font-arial mb-2">
                                        Historique de pointage
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder="Recherche..."
                                        className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                    <Search
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                        size={20}
                                    />
                                </div>
                            </div>

                            {/* Liste des personnes */}
                            <div className="px-2  py-2 flex-wrap ">
                                {filteredData.map((person) => (
                                    <div
                                        key={person.id}
                                        className="flex flex-col text-[14px] justify-between"
                                    >
                                        <div className="flex flex-row mt-2 ">
                                            <div className="font-bold mr-1"> {person.Date},</div>
                                            <div className="mr-1"> {person.Heure}</div>

                                            <p>-</p>
                                            <div className="mx-1">{person.Pointage}</div>
                                        </div>

                                        <div className="flex flex-row mt-2">


                                            <img
                                                src={user}
                                                alt={`profile`}
                                                className=" w-6 h-6 rounded-full"
                                            />

                                            <p className="text-titre font-medium ml-2">{person.name}</p>

                                        </div>

                                    </div>
                                ))}
                                {filteredData.length === 0 && (
                                    <p className="text-gray-500 text-center py-4">Aucun résultat trouvé</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="justify-end flex">
                        <button type="submit" className="w-auto px-4 bg-lightblue text-white mt-2 py-1 rounded-md ">Enregistrer</button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default SlidePointeuse;
