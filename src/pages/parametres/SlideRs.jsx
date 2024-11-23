import { DeleteOutlined } from '@mui/icons-material';
import React, { useState } from 'react';

const SlideRs = ({ setShowModalNewRs }) => {
    const [links, setLinks] = useState(["https://facebook.com", "https://facebook.com"]); 

    const clearInput = (index) => {
        setLinks((prevLinks) => {
            const updatedLinks = [...prevLinks];
            updatedLinks[index] = "";
            return updatedLinks;
        });
    };

   
    const handleInputChange = (index, value) => {
        setLinks((prevLinks) => {
            const updatedLinks = [...prevLinks];
            updatedLinks[index] = value; 
            return updatedLinks;
        });
    };

    return (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex justify-end">
            <div className="relative bg-white w-full sm:w-96 h-screen mt-[50px] p-4 transform translate-x-0 transition-transform duration-300 ease-out">
                <div className='flex flex-row justify-between items-center text-center mb-6'>
                    <div className='flex  flex-wrap'>
                        <h2 className="text-xl font-semibold text-violet">Réseaux sociaux</h2>
                    </div>
                    <p className='cursor-pointer font-bold' onClick={() => setShowModalNewRs(false)}>x</p>
                </div>

                <form>
                    <div className='space-y-2'>
                        <div className="w-full">
                            <div className='flex flex-row justify-between'>
                                <label htmlFor="nomActivite" className="block text-[13px]  text-titre mb-2">Liens</label>
                                <div className='text-[13px]'>
                                    <span className=' text-[#0996FF] cursor-pointer'>Ajouter</span> | <span className=' text-[#0996FF] cursor-pointer'>Modifier</span>
                                </div>
                            </div>

                            {links.map((link, index) => (
                                <div className='flex relative' key={index}>
                                    <input
                                        type="text"
                                        id={`link-${index}`}
                                        className="border p-2 border-gray-300 mb-2 rounded-md h-[40px] w-full text-sm"
                                        placeholder="https://facebook.com"
                                        value={link}
                                        onChange={(e) => handleInputChange(index, e.target.value)}
                                        required
                                    />
                                    <div
                                        className='absolute right-0 top-0 mr-2 py-2 cursor-pointer'
                                        onClick={() => clearInput(index)}
                                    >
                                        <DeleteOutlined />
                                    </div>
                                </div>
                            ))}
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

export default SlideRs;
