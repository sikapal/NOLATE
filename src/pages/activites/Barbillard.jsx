import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import BreadcrumbsP from '../../components/BreadcrumbsP';
import Member from '../../components/Member';
import { Add} from '@mui/icons-material';
import PublicationsCard from '../../components/PublicationsCard';

const Barbillard = () => {
    const [open, setOpen] = useState(true);

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

                    <div className="mt-3 bg-white w-full rounded-xl h-[85vh] flex flex-col">
                        <h1 className="font-bold p-3">Publications (125)</h1>
                        <div className="flex flex-wrap  p-3 justify-between">
                            <div className="left">
                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    className="w-64 border p-2 border-slate-200 rounded-3xl"
                                />
                            </div>
                            <div className="right">
                            <button className=' bg-lightblue text-[12px] hover:text-[14px]  w-[220px] h-[40px] rounded-xl justify-center text-white  items-center flex'>
                            <div className='flex mr-2 justify-center items-center'>
                                <span> <Add className='justify-center items-center mx-2' /></span>
                                <p>Ajouter une publication</p>
                            </div>
                        </button>
                            </div>
                        </div>

                        <div className="flex-grow overflow-y-auto p-4 scrollbar-custom">
                            <div className="flex flex-wrap mt-2 items-center justify-between gap-4">
                              
                                <PublicationsCard />
                                <PublicationsCard />
                                <PublicationsCard />
                                <PublicationsCard />
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Barbillard
