import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import BreadcrumbsP from '../../components/BreadcrumbsP';
import Member from '../../components/Member';
import { Add} from '@mui/icons-material';

const Membres = () => {
    const [open, setOpen] = useState(true);

    const breadcrumbs = [
        { label: 'Utilisateurs' },
        { label: 'Membres', href: '/members' },
    ];

    return (
        <div className="flex w-full h-screen bg-gray-100">
            <Sidebar open={open} setOpen={setOpen} />

            <div className="w-full">
                <Header setOpen={setOpen} />

                <div className="p-3">
                    <BreadcrumbsP breadcrumbs={breadcrumbs} />

                    <div className="mt-3 bg-white w-full rounded-xl h-[85vh] flex flex-col">
                        <h1 className="font-bold p-3">Membres (25)</h1>
                        <div className="flex flex-wrap  p-3 justify-between">
                            <div className="left">
                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    className="w-64 border p-2 border-slate-200 rounded-3xl"
                                />
                            </div>
                            <div className="right">
                            <button className=' bg-lightblue text-[16px] hover:text-[16px]  w-[220px] h-[40px] rounded-xl justify-center text-white  items-center flex'>
                            <div className='flex mr-2 justify-center items-center'>
                                <span> <Add className='justify-center items-center mx-2' /></span>
                                <p>Ajouter un membre</p>
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
        </div>
    );
};

export default Membres;
