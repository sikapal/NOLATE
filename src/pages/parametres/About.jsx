import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import BreadcrumbsP from '../../components/BreadcrumbsP';
import { Add, NotificationsOutlined } from '@mui/icons-material';
import image from '../../assets/image.jpg'
import { Tabs } from "flowbite-react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import Table from '../../components/Table';

const About = () => {
    const [open, setOpen] = useState(true);

    const breadcrumbs = [
        { label: 'Paramètre du compte' },
        { label: 'A propos', href: '/about' },
    ];

    return (
        <div className="flex flex-row w-full h-screen overflow-y-auto bg-gray-100">
            
            <div className='flex'>
            <Sidebar open={open} setOpen={setOpen}  />
            </div>

            <div className="w-full h-screen">
                <Header setOpen={setOpen} />

                <div className="p-3 ">
                    <div className='justify-between flex'>
                        <BreadcrumbsP breadcrumbs={breadcrumbs} />

                        <div className="right">
                            <button className=' bg-lightblue  hover:  w-[220px] h-[40px] rounded-xl justify-center text-white  items-center flex'>
                                <div className='flex mr-2 justify-center items-center'>
                                    <span> <Add className='justify-center items-center mx-2' /></span>
                                    <p>Enregistrer</p>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-row justify-between mt-3 gap-4'>
                        <div className='w-[75%] rounded-md shadow-2xl'>

                            <div className="top h-[20%] flex flex-col shadow-lg mb-4">

                                <div className="bg-white flex ">

                                    <img src={image} alt="cover" className="h-[80px] w-full object-cover" />
                                </div>
                                <div className="bg-white flex flex-col  justify-center">
                                    <p className='mx-20 font-bold'>Ecole Nationale Supérieure des Postes, des Télécommunications et des Technologies de l'Information et la Communication (SUP'PTIC)</p>
                                    <p className='mx-20 font-medium'> Créé le 24/04/2024</p>
                                </div>
                            </div>

                            <div className='pt-auto'>
                                <Tabs aria-label="Tabs with underline" variant="underline" className="w-full text-[14px] pt-4 gap-x-8 justify-center">
                                    {/* Profile Tab */}
                                    <Tabs.Item

                                        active
                                        title={
                                            <span className="flex items-center ">
                                                <InfoOutlinedIcon className=" mr-1" /> A PROPOS
                                            </span>
                                        }
                                        className="w-full mb-1"
                                    >
                                        <div className="bg-white py-1 px-3">
                                            <h1 className="font-bold text-lg mb-1">Présentation Générale</h1>
                                            <form action=" ">
                                                {/* Nom de l'entreprise */}
                                                <div className="mb-1">
                                                    <label htmlFor="nom" className="block font-semibold mb-2 text-gray-700">
                                                        Nom de l'entreprise
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="nom"
                                                        placeholder="Entrez le nom de l'entreprise"
                                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                                    />
                                                </div>

                                                {/* Sigle */}
                                                <div className='flex flex-wrap gap-x-5'>
                                                    <div className="mb-1 w-1/4">
                                                        <label htmlFor="sigle" className="block font-semibold mb-2 text-gray-700">
                                                            Sigle
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="sigle"
                                                            placeholder="Entrez le sigle"
                                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                                        />
                                                    </div>

                                                    {/* Slogan */}
                                                    <div className="mb-1 w-2/4">
                                                        <label htmlFor="slogan" className="block font-semibold mb-2 text-gray-700">
                                                            Slogan
                                                        </label>
                                                        <input
                                                            type="text"
                                                            id="slogan"
                                                            placeholder="Entrez le slogan"
                                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <div className="mb-1">
                                                    <label htmlFor="description" className="block font-semibold mb-2 text-gray-700">
                                                        Description
                                                    </label>
                                                    <textarea
                                                        id="description"
                                                        placeholder="Entrez la description"
                                                        className="w-full border border-gray-300 rounded px-3 py-2 h-24 resize-none"
                                                    />
                                                </div>


                                            </form>
                                        </div>

                                    </Tabs.Item>

                                    <Tabs.Item

                                        title={<span className=" flex items-center "><SchemaOutlinedIcon className="mr-1" /> ORGANIGRAMME</span>}
                                        className="w-full mb-1"

                                        active
                                       
                                    >
                                          <div className="bg-white py-1 px-3">
                                            <h1 className="font-bold text-lg mb-1">Organigramme de la Structure</h1>
                                           <Table/>
                                        </div>

                                    </Tabs.Item>

                                    {/* Dashboard Tab */}
                                    <Tabs.Item
                                        title={<span className=" flex items-center"><LockOutlinedIcon className="text-[10px] mr-2" />SECURITE</span>}
                                        className="w-full mb-4"
                                    >
                                        <div className="w-full">
                                            This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
                                            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes
                                            to control the content visibility and styling.
                                        </div>
                                    </Tabs.Item>

                                    {/* Settings Tab */}
                                    <Tabs.Item
                                        title={<span className=" flex items-center"><NotificationsOutlined className="text-[10px] mr-2" />NOTIFICATIONS</span>}
                                        className="w-full mb-4"
                                    >
                                        <div className="w-full">
                                            This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
                                            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes
                                            to control the content visibility and styling.
                                        </div>
                                    </Tabs.Item>

                                    {/* Contacts Tab */}
                                    <Tabs.Item
                                        title={<span className=" flex items-center"><SmartphoneIcon className="text-[10px] mr-2" />POINTEUSE</span>}
                                        className="w-full mb-4"
                                    >
                                        <div className="w-full">
                                            This is <span className="font-medium text-gray-800 dark:text-white">Contacts tab's associated content</span>.
                                            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes
                                            to control the content visibility and styling.
                                        </div>
                                    </Tabs.Item>
                                </Tabs>
                            </div>


                        </div>


                        <div className='w-[25%] bg-slate-500 rounded-md'>left</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
