import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import BreadcrumbsP from '../../components/BreadcrumbsP';
import image from '../../assets/image.jpg'
import Copyright from '@mui/icons-material/Copyright'
import Tabs from '../../components/Tabs';
import Dots from '../../components/Dots';
import Coordonnes from '../../components/Coordonnes';
import Reseausociaux from '../../components/Reseausociaux';

const Parametres = () => {
    const [open, setOpen] = useState(true);

    const breadcrumbs = [
        { label: 'Paramètre du compte' },
        { label: 'A propos', href: '/about' },
    ];

    return (
        <div className="flex flex-row w-full h-auto bg-gray-100">


            <div className='left bg-darkblue'>
                <div className='flex'>
                <Sidebar open={open} setOpen={setOpen} />
                </div>
            </div>

            <div className='right  w-full flex flex-col'>
                <Header setOpen={setOpen} />


                <div className="p-3 flex flex-row overflow-y-scroll scrollbar-custom ">
                    <div className=' left w-[70%] '>
                        <BreadcrumbsP breadcrumbs={breadcrumbs} />

                        <div className='bg-white rounded-2xl shadow-lg h-[290px] mt-3 '>
                            <div className="flex flex-col mb-1">

                                <div className="bg-white rounded-t-2xl flex ">

                                    <img src={image} alt="cover" className="h-[200px] w-full rounded-t-2xl object-cover" />
                                </div>
                                <div className="bg-white flex flex-col rounded-2xl justify-center">
                                    <p className='mx-20 font-bold'>Ecole Nationale Supérieure des Postes, des Télécommunications et des Technologies de l'Information et la Communication (SUP'PTIC)</p>
                                    <p className='mx-20 font-medium'> Créé le 24/04/2024</p>
                                </div>
                            </div>

                            <div className='flex flex-row relative  justify-between '>
                                <div className='w-full mt-5 -ml-1'>
                                    <Tabs />
                                </div>

                                <div className='rotate-90 absolute top-7 right-0 '>
                                    <Dots

                                        menuItems={[
                                            { label: "Désactiver la page", action: () => alert(`Editing ${info.row.original.name}`) },

                                            { label: "Supprimer la page", action: () => alert(`Deleting ${info.row.original.name}`), color: "red" },
                                        ]}
                                    />
                                </div>

                            
                            </div>

                        </div>


                    </div>

                    <div className='right h-screen w-[30%] ml-3 pt-9 '>
                        <Coordonnes />


                        <div className='pt-4'>  <Reseausociaux /></div>

                        <div className='pt-2'>
                            <div className="flex justify-center items-center ">
                                <div className=' h-[47px] flex flex-wrap flex-row justify-center items-center text-center mt-2 mx-2'>
                                    <p className='text-[#727C8E] font-arial cursor-pointer mx-1'> < Copyright className=' ' style={{ fontSize: '14px' }} /> <span className='text-sm '> 2024</span></p>
                                    <p className='text-skyblue text-[14px] font-arial cursor-pointer mx-1'>À propos</p>
                                    <p className='text-skyblue text-[14px] font-arial cursor-pointer mx-1'>Conditions générales d’utilisation</p>
                                    <p className='text-skyblue text-[14px] font-arial cursor-pointer mx-1'>Politique de confidentialité</p>
                                    <p className='text-skyblue text-[14px] font-arial cursor-pointer mx-1'>Politique de la marque</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Parametres
