import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import BreadcrumbsP from '../../components/BreadcrumbsP';
import MemberLarge from '../../components/MemberLarge';
import TabsAdminProfile from '../../components/TabsAdminProfile';
import Dots from '../../components/Dots';

const AdminProfile = () => {
    const [open, setOpen] = useState(true);

    const breadcrumbs = [
        { label: 'Utilisateurs' },
        { label: 'Admin', href: '/members' },
        { label: 'NGN. Boris', href: '' },
    ];
    return (
        <div className="flex w-full h-auto overflow-y-auto scrollbar-custom bg-gray-100">
            <Sidebar open={open} setOpen={setOpen} />

            <div className="w-full">
                <Header setOpen={setOpen} />

                <div className="p-3">
                    <BreadcrumbsP breadcrumbs={breadcrumbs} />

                    <div className="mt-3 w-full rounded-xl flex flex-rows h-screen overflow-y-auto  ">

                        <div className='w-[30%] flex flex-col py-2'>
                            <MemberLarge />
                        </div>

                        <div className='w-full ml-2 '>

                        <div className='flex flex-row relative  justify-between '>
                                <div className='w-full -ml-1'>
                                <TabsAdminProfile/>
                                </div>

                                <div className='rotate-90 absolute top-2 right-0 '>
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

export default AdminProfile
