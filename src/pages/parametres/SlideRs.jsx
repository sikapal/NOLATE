
import React, { useState } from 'react';


const SlideRs = ({ setShowModalNewRs }) => {


    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex justify-end">
            <div className="relative bg-white w-full sm:w-96 h-screen mt-[71px] p-4 transform translate-x-0 transition-transform duration-300 ease-out">
                <div className='flex flex-row justify-between items-center text-center mb-6'>
                    <div className='flex  flex-wrap'>

                        <h2 className="text-xl font-semibold text-violet">Réseaux sociaux</h2>
                    </div>

                    <p className='cursor-pointer font-bold' onClick={() => setShowModalNewRs(false)}>x</p>

                </div>

                <form className="">
                    <div className='space-y-2'>
                        <div className="w-ful">

                            <div className='flex flex-row justify-between'>
                                <label htmlFor="nomActivite" className="block text-[13px]  text-titre mb-2">Liens</label>
                                <div className='text-[13px]'>
                                    <span className=' text-[#0996FF] cursor-pointer'>Ajouter</span>  | <span className=' text-[#0996FF] cursor-pointer'>Modifier</span>
                                </div>
                            </div>
                            <input
                                type="text"
                                id="codeactivite"
                                className="border p-2 border-gray-300 mb-2 rounded-md h-[40px] w-full text-sm"
                                placeholder="https://facebook.com"
                                required
                            />
                            <input
                                type="text"
                                id="codeactivite"
                                className="border p-2 border-gray-300 mb-2 rounded-md h-[40px] w-full text-sm"
                                placeholder="https://facebook.com"
                                required
                            />
                        </div>

                        

                        <button
                            className="bg-lightblue text-white p-2 rounded-lg absolute right-4 bottom-[15%]"
                        >

                            Enregistrer</button>


                    </div>

                </form>
            </div>

        </div>
    );
};

export default SlideRs;
