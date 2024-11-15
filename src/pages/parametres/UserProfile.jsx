import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import BreadcrumbsP from '../../components/BreadcrumbsP';
import Member from '../../components/Member';
import { Add } from '@mui/icons-material';
import MemberLarge from '../../components/MemberLarge';
import BilanHoraire from '../../components/BilanHoraire';
import TabsUserProfile from '../../components/TabsUserProfile';
import Dots from '../../components/Dots';

const UserProfile = () => {
    const [open, setOpen] = useState(true);

    const breadcrumbs = [
        { label: 'Utilisateurs' },
        { label: 'Membres', href: '/members' },
        { label: 'Georges Matoudi', href: '' },
    ];
    return (
        <div className="flex w-full h-auto   bg-gray-100">
            <Sidebar open={open} setOpen={setOpen} />

            <div className="w-full">
                <Header setOpen={setOpen} />

                <div className="p-3">
                    <BreadcrumbsP breadcrumbs={breadcrumbs} />

                    <div className="mt-3 w-full rounded-xl flex overflow-x-hidden flex-rows h-screen overflow-y-auto no-scrollbar  ">

                        <div className='w-[30%] flex flex-col py-1'>
                            <MemberLarge />
                            <div className='pt-4'>
                                <BilanHoraire />
                            </div>
                        </div>

                        <div className='w-full ml-2 '>

                        <div className='flex flex-row relative  justify-between '>
                                <div className='w-full -ml-1'>
                                <TabsUserProfile/>
                                </div>

                                <div className='rotate-90 absolute top-7 right-0 '>
                                    <Dots

                                        menuItems={[
                                            { label: "Désactiver ce membre", action: () => alert(`Editing ${info.row.original.name}`) },

                                            { label: "Supprimer ce membre", action: () => alert(`Deleting ${info.row.original.name}`), color: "red" },
                                        ]}
                                    />
                                </div>

                            
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
