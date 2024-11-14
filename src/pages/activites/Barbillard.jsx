import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import BreadcrumbsP from '../../components/BreadcrumbsP';
import {  AddCircleOutline, ArrowDropDown } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PublicationsCard from '../../components/PublicationsCard';
import { Divider } from '@mui/material';
import SlidePublication from './SlidePublication';


const Barbillard = () => {
    const [open, setOpen] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [showModalNewPublication, setShowModalNewPublication] = useState(false);

    const [filter, setFilter] = useState('');

    const handleSetFilter = (event) => {
        setFilter(event.target.value);
    };
    
    
    const publications = [
        { id: 1, title: "Direction des ressources humaines", author: "NGN. Boris" },
        { id: 2, title: "Gestion financière", author: "Benoit S." },
        { id: 3, title: "Développement durable", author: "Marie K." },
     
    ];

    // Filtered publications based on the search term
    const filteredPublications = publications.filter(publication =>
        publication.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        publication.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const breadcrumbs = [
        { label: 'Activités' },
        { label: 'Barbillard', href: '/barbillard' },
    ];

    return (
        <div className="flex w-full h-screen bg-gray-100">
            <Sidebar open={open} setOpen={setOpen} />

            <div className="w-full">
                <Header setOpen={setOpen} />

                <div className="p-3">
                    <BreadcrumbsP breadcrumbs={breadcrumbs} />

                    <div className="mt-3 bg-white w-full rounded h-[85vh] flex flex-col">
                        <h1 className="font-bold p-3">Publications ({filteredPublications.length})</h1>

                        <Divider/>
                        <div className="flex flex-wrap mt-2 p-3 justify-between">
                            <div className="left">
                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    className="w-64 border p-2 border-slate-200 rounded-xl"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                            <div className="right  ml-2 flex flex-row ">
                                <FilterAltIcon className='mt-2' />
                                <div className='mr-3 relative'>

                                    <select
                                        id="filter"
                                        className="h-[40px] w-[250px]  text-[14px] cursor-pointer px-3 pr-10 mb-2 border border-gray-300 rounded-xl appearance-none"
                                        value={filter}
                                        onChange={handleSetFilter}
                                    >
                                        <option value="" className="font-semibold ">
                                            Trier par
                                        </option>
                                        <option value="Féminin">à définir</option>
                                        <option value="Masculin">à définir</option>
                                    </select>
                                    <div className="absolute top-1  right-3 transform translate-y-1 pointer-events-none text-black">
                                        <ArrowDropDown />
                                    </div>
                                </div>

                                <button className=' bg-lightblue text-[12px] hover:text-[14px] ml-2 mr-1 w-auto h-[40px] rounded-xl justify-center text-white  items-center flex'>
                                    <div className='flex mr-1 justify-center items-center'>
                                        <span> <AddCircleOutline style={{ width: "20px", height: "20px" }} className='justify-center items-center mx-1' /></span>
                                        <p className='mr-1' onClick={() => {

                                            setShowModalNewPublication(true);


                                        }}>Nouvelle publication</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="flex-grow overflow-y-auto px-4 py-2 scrollbar-custom">
                            <div className="flex flex-wrap items-center justify-between gap-1">
                                {filteredPublications.map((publication) => (
                                    <PublicationsCard key={publication.id} publication={publication} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModalNewPublication && <SlidePublication setShowModalNewPublication={setShowModalNewPublication} />}
        </div>
    );
};

export default Barbillard;
