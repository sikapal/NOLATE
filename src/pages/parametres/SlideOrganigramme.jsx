
import React, { useState, useEffect } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DriveFileRenameOutline, Search } from '@mui/icons-material';
import user from "../../assets/user.jpg"
import Dots from "../../components/Dots";

const SlideOrganigramme = ({ setShowModalNewOrganigramme }) => {




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
                    <h2 className="text-xl font-semibold mb-6 text-violet">Organigramme</h2>
                    <button onClick={() => setShowModalNewOrganigramme(false)} className="text-black font-bold text-2xl mb-6">
                        x
                    </button>

                </div>

                <form className=" ">
                    <div className='space-y-2 -mt-2'>


                        <div className=" ">
                            <div className="w-full relative">

                                <label htmlFor="activite" className="block text-[14px] text-titre font-arial mb-2">
                                    Nom de l'unité
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

                        <div className=" ">
                            <div className="w-full relative">

                                <label htmlFor="sigle" className="block text-[14px] text-titre font-arial mb-2">
                                    Sigle
                                </label>

                                <input
                                    type=""
                                    id="sigle"
                                    className="border p-2 border-gray-300 mb-2  rounded-md h-[40px] w-full text-sm"
                                    placeholder=""
                                    required
                                />

                            </div>
                        </div>

                        <div className=" flex flex-row justify-between">
                            <div className="flex flex-col w-1/2 pr-4">
                                <label htmlFor="niveau" className="text-titre text-[14px]"> Niveau hiérarchique</label>
                                <select className="p-2 mt-2 w-full border bg-white border-gray-300 rounded ">
                                    <option className="bg-white hover:bg-whitegrey" value="">Niveau 1</option>
                                    <option className="bg-white" value="">Niveau 2</option>
                                    <option className="bg-white" value="">Niveau 3</option>
                                    <option className="bg-white" value="">Niveau 4</option>
                                    <option className="bg-white" value="">Niveau 5</option>
                                    <option className="bg-white" value="">Niveau 6</option>
                                    <option className="bg-white" value="">Niveau 7</option>
                                    <option className="bg-white" value="">Niveau 8</option>
                                </select>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <label htmlFor="niveau" className="text-titre text-[14px]"> Effectif</label>
                                <input
                                    type="number"
                                    id="sigle"
                                    className="border p-2 border-gray-300 mb-2 mt-2 rounded-md h-[40px] w-full text-sm"
                                    placeholder=""
                                    required
                                />
                            </div>
                        </div>


                        <div>



                            <div className="w-full relative">
                                <div className='flex flex-wrap justify-between'>
                                    <label htmlFor="modePointage" className="block text-titre text-[14px] font-arial mb-2">
                                        Membre(s)
                                    </label>

                                    <p className="text-titre text-[14px]">6 personnes</p>
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
                            <div className="px-2 mt-3  py-2 flex-wrap ">
                                {filteredData.map((person) => (
                                    <div
                                        key={person.id}
                                        className="flex flex-col text-[14px] justify-between"
                                    >


                                        <div className="flex flex-row justify-between">
                                            <div className="flex flex-row mt-3 mb-1">


                                                <img
                                                    src={user}
                                                    alt={`profile`}
                                                    className=" w-6 h-6 rounded-full"
                                                />

                                                <p className="text-titre font-medium ml-2">{person.name}</p>

                                            </div>


                                            <div>
                                            <Dots
                                        menuItems={[
                                            {
                                                label: 'Promouvoir',
                                                action: () => alert(''),
                                            },
                                            {
                                                label: 'Effacer ',
                                                action: () => alert('Effacer'),
                                                color: 'red',
                                            },
                                        ]}
                                    />
                                            </div>
                                        </div>

                                    </div>
                                ))}
                                {filteredData.length === 0 && (
                                    <p className="text-gray-500 text-center py-4">Aucun résultat trouvé</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="justify-end flex mt-12">
                        <button type="submit" className="w-auto px-4 bg-lightblue text-white mt-2 py-1 rounded-md ">Enregistrer</button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default SlideOrganigramme;
