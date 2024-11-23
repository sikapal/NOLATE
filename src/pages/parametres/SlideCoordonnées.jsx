import { DeleteOutlined } from '@mui/icons-material';
import React, { useState } from 'react';

const SlideCoordonnées = ({ setShowModalNewCoordonees }) => {
    
    const [fields, setFields] = useState({
        activityName: "",
        email: "",
        location: "",
        website: "",
    });

   
    const clearField = (fieldName) => {
        setFields((prevFields) => ({
            ...prevFields,
            [fieldName]: "", 
        }));
    };

  
    const handleInputChange = (fieldName, value) => {
        setFields((prevFields) => ({
            ...prevFields,
            [fieldName]: value,
        }));
    };

    return (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex justify-end">
            <div className="relative bg-white w-full sm:w-96 h-screen mt-[50px] p-4 transform translate-x-0 transition-transform duration-300 ease-out">
                <div className='flex flex-row justify-between items-center text-center mb-6'>
                    <div className='flex flex-wrap'>
                        <h2 className="text-xl font-semibold text-violet">Coordonnées</h2>
                    </div>
                    <p className='cursor-pointer font-bold' onClick={() => setShowModalNewCoordonees(false)}>x</p>
                </div>

                <form>
                    <div className='space-y-2'>
                        {/* Activity Name */}
                        <div className="w-full">
                            <div className='flex flex-row justify-between'>
                                <label className="block text-[13px] text-titre mb-2">Nom de l'activité</label>
                                <div className='text-[13px]'>
                                    <span className='text-[#0996FF] cursor-pointer'>Ajouter</span> | <span className='text-[#0996FF] cursor-pointer'>Modifier</span>
                                </div>
                            </div>
                            <div className='flex relative'>
                                <input
                                    type="text"
                                    className="border p-2 border-gray-300 mb-2 rounded-md h-[40px] w-full text-sm"
                                    placeholder="Entrez le nom de l'activité"
                                    value={fields.activityName}
                                    onChange={(e) => handleInputChange("activityName", e.target.value)}
                                    required
                                />
                                <div
                                    className='absolute right-0 top-0 mr-2 py-2 cursor-pointer'
                                    onClick={() => clearField("activityName")}
                                >
                                    <DeleteOutlined />
                                </div>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="w-full">
                            <div className='flex flex-row justify-between'>
                                <label className="block text-[13px] text-titre mb-2">Email</label>
                                <div className='text-[13px]'>
                                    <span className='text-[#0996FF] cursor-pointer'>Ajouter</span> | <span className='text-[#0996FF] cursor-pointer'>Modifier</span>
                                </div>
                            </div>
                            <div className='flex relative'>
                                <input
                                    type="email"
                                    className="border p-2 border-gray-300 mb-2 rounded-md h-[40px] w-full text-sm"
                                    placeholder="Entrez l'email"
                                    value={fields.email}
                                    onChange={(e) => handleInputChange("email", e.target.value)}
                                    required
                                />
                                <div
                                    className='absolute right-0 top-0 mr-2 py-2 cursor-pointer'
                                    onClick={() => clearField("email")}
                                >
                                    <DeleteOutlined />
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="w-full">
                            <div className='flex flex-row justify-between'>
                                <label className="block text-[13px] text-titre mb-2">Localisation</label>
                                <div className='text-[13px]'>
                                    <span className='text-[#0996FF] cursor-pointer'>Ajouter</span> | <span className='text-[#0996FF] cursor-pointer'>Modifier</span>
                                </div>
                            </div>
                            <div className='flex relative'>
                                <input
                                    type="text"
                                    className="border p-2 border-gray-300 mb-2 rounded-md h-[40px] w-full text-sm"
                                    placeholder="Entrez la localisation"
                                    value={fields.location}
                                    onChange={(e) => handleInputChange("location", e.target.value)}
                                    required
                                />
                                <div
                                    className='absolute right-0 top-0 mr-2 py-2 cursor-pointer'
                                    onClick={() => clearField("location")}
                                >
                                    <DeleteOutlined />
                                </div>
                            </div>
                        </div>

                        {/* Website */}
                        <div className="w-full">
                            <div className='flex flex-row justify-between'>
                                <label className="block text-[13px] text-titre mb-2">Site web</label>
                                <div className='text-[13px]'>
                                    <span className='text-[#0996FF] cursor-pointer'>Ajouter</span> | <span className='text-[#0996FF] cursor-pointer'>Modifier</span>
                                </div>
                            </div>
                            <div className='flex relative'>
                                <input
                                    type="text"
                                    className="border p-2 border-gray-300 mb-2 rounded-md h-[40px] w-full text-sm"
                                    placeholder="Entrez le site web"
                                    value={fields.website}
                                    onChange={(e) => handleInputChange("website", e.target.value)}
                                    required
                                />
                                <div
                                    className='absolute right-0 top-0 mr-2 py-2 cursor-pointer'
                                    onClick={() => clearField("website")}
                                >
                                    <DeleteOutlined />
                                </div>
                            </div>
                        </div>

                        <button
                            className="bg-lightblue text-white p-2 rounded-lg absolute right-4 bottom-[10%]"
                            type="button"
                        >
                            Enregistrer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SlideCoordonnées;
