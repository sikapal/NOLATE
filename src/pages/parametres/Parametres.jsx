import React, { useState } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import BreadcrumbsP from '../../components/BreadcrumbsP';
import image from '../../assets/image.jpg';
import Copyright from '@mui/icons-material/Copyright';
import Tabs from '../../components/Tabs';
import Dots from '../../components/Dots';
import Coordonnes from '../../components/Coordonnes';
import Reseausociaux from '../../components/Reseausociaux';
import { CameraAltOutlined } from '@mui/icons-material';

const Parametres = () => {
    const [open, setOpen] = useState(true);
    const [coverImage, setCoverImage] = useState(image);
    const [profileImage, setProfileImage] = useState(image);
    const [activeTab, setActiveTab] = useState(0);
    const tabLabels = ["A propos", "Organigramme", "Sécurité", "Notifications", "Pointeuses"];

    const breadcrumbs = [
        { label: 'Paramètre du compte' },
        { label: tabLabels[activeTab], href: '/about' },
    ];
  

    const handleCoverImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setCoverImage(URL.createObjectURL(file));
        }
    };


    const handleProfileImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className="flex flex-row w-full h-auto bg-gray-100">
            <div className="left bg-darkblue">
                <div className="flex">
                    <Sidebar open={open} setOpen={setOpen} />
                </div>
            </div>

            <div className="right w-full flex flex-col">
                <Header setOpen={setOpen} />

                <div className="p-3 flex flex-row overflow-y-scroll scrollbar-custom relative">
                    <div className="left w-[70%]">
                    <BreadcrumbsP breadcrumbs={breadcrumbs} />

                        <div className="bg-white rounded-2xl shadow-lg h-[250px] mt-3 relative">
                            <div className="flex flex-col mb-1">
                                <div className="bg-white rounded-t-2xl flex">
                                    <img
                                        src={coverImage}
                                        alt="cover"
                                        className="coverImg h-[150px] w-full rounded-t-2xl object-cover"
                                    />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        id="cover-image-input"
                                        onChange={handleCoverImageChange}
                                    />
                                </div>
                                <div className="bg-white flex flex-col rounded-2xl text-[17px] justify-center mr-16 ml-16">
                                    <p className="ml-24 pt-2 font-bold">
                                        Ecole Nationale Supérieure des Postes, des Télécommunications et des
                                        Technologies de l'Information et la Communication (SUP'PTIC)
                                    </p>
                                    <p className="ml-24 font-medium pt-2 text-titre text-[14px]">
                                        Créé le 24/04/2024
                                    </p>
                                </div>
                            </div>

                            {/* Cover Image Camera */}
                            <div
                                className="absolute border text-white text-[14px] text-bold cursor-pointer top-0 right-0 border-white p-1 rounded mt-2 mr-4 flex flex-row"
                                onClick={() => document.getElementById('cover-image-input').click()}
                            >
                                <CameraAltOutlined className="covercamera" />
                                <p className="mx-1">Photo de couverture</p>
                            </div>

                            {/* Profile Image */}
                            <div className="imaege2 absolute rounded-full w-28 h-28 border-4 flex flex-wrap top-24 ml-8 text-white text-center justify-center items-center border-white">
                                <img
                                    src={profileImage}
                                    alt="profileIMg"
                                    className="profileImg h-full w-full rounded-full object-cover"
                                />
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    id="profile-image-input"
                                    onChange={handleProfileImageChange}
                                />
                                <CameraAltOutlined
                                    className="profilecamera"
                                    style={{ marginTop: '-100px', cursor: 'pointer' }}
                                    onClick={() => document.getElementById('profile-image-input').click()}
                                />
                            </div>

                            <div className="flex flex-row relative justify-between">
                                <div className="w-full mt-5 -ml-1">
                                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                                </div>

                                <div className="rotate-90 absolute top-7 right-0">
                                    <Dots
                                        menuItems={[
                                            {
                                                label: 'Désactiver la page',
                                                action: () => alert('Désactivation de la page'),
                                            },
                                            {
                                                label: 'Supprimer la page',
                                                action: () => alert('Suppression de la page'),
                                                color: 'red',
                                            },
                                        ]}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right h-screen w-[30%] ml-3 pt-9">
                        <Coordonnes />

                        <div className="pt-4">
                            <Reseausociaux />
                        </div>

                        <div className="pt-2">
                            <div className="flex justify-center items-center">
                                <div className="h-[47px] flex flex-wrap flex-row justify-evenly items-center text-center mt-2 mx-2">
                                    <p className="text-[#727C8E] font-arial cursor-pointer -mt-1 mx-1">
                                        <Copyright className="" style={{ fontSize: '14px' }} />{' '}
                                        <span className="text-[12px]">2024</span>
                                    </p>
                                    <p className="text-skyblue text-[12px] font-arial cursor-pointer mx-1">
                                        À propos
                                    </p>
                                    <p className="text-skyblue text-[12px] font-arial cursor-pointer mx-1">
                                        Conditions générales d’utilisation
                                    </p>
                                    <p className="text-skyblue text-[12px] font-arial cursor-pointer mx-1">
                                        Politique de confidentialité
                                    </p>
                                    <p className="text-skyblue text-[12px] font-arial cursor-pointer mx-1">
                                        Politique de la marque
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Parametres;
