import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import BreadcrumbsP from '../../components/BreadcrumbsP';
import Member from '../../components/Member';
import { AddCircleOutline, ArrowDropDown} from '@mui/icons-material';
import { Divider } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SlideMembre from '../activites/SlideMembre';

const Membres = () => {
    const [open, setOpen] = useState(true);
    const [showModalNewMember, setShowModalNewMember] = useState(false);

    const breadcrumbs = [
        { label: 'Utilisateurs' },
        { label: 'Membres', href: '/members' },
    ];

    const [filter, setFilter] = useState('');

    const handleSetFilter = (event) => {
        setFilter(event.target.value);
    };
    

    return (
        <div className="flex w-full h-screen bg-gray-100">
            <Sidebar open={open} setOpen={setOpen} />

            <div className="w-full">
                <Header setOpen={setOpen} />

                <div className="p-3">
                    <BreadcrumbsP breadcrumbs={breadcrumbs} />

                    <div className="mt-3 bg-white w-full rounded-xl h-[85vh] flex flex-col">
                        <h1 className="font-bold p-3">Membres (25)</h1>

                    
                        <div className="flex flex-wrap  px-3 py-4 justify-between">
                            <div className="left">
                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    className="w-64 border p-2 border-slate-200 rounded-xl"
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

                                <button className=' bg-lightblue text-[14px] ml-2 mr-1 w-auto h-[40px] rounded-xl justify-center text-white  items-center flex'>
                                    <div className='flex mr-1 justify-center items-center'>
                                        <span> <AddCircleOutline style={{ width: "20px", height: "20px" }} className='justify-center items-center mx-1' /></span>
                                        <p className='mr-1' onClick={() => {

                                            setShowModalNewMember(true);


                                        }}>Ajouter un membre</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="flex-grow overflow-y-auto p-4 scrollbar-custom">
                            <div className="flex flex-wrap pt-3 items-center justify-between gap-4">
                              
                                <Member />
                                <Member />
                                <Member />
                                <Member />
                                <Member />
                                <Member />
                                <Member />
                                <Member />
                                <Member />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModalNewMember && <SlideMembre setShowModalNewMember={setShowModalNewMember} />}
        </div>
    );
};

export default Membres;
