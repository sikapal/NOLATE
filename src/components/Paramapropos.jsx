import React, { useState } from 'react'
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Paramapropos = () => {

    const [inputValue, setInputValue] = useState("");
    const maxCharacters = 120;

    const [inputValueSigle, setInputValueSigle] = useState("");
    const maxCharactersSigle = 10;

    const [inputValueSlogan, setInputValueSlogan] = useState("");
    const maxCharactersSlogan = 60;

    const [inputValueDesc, setInputValueDesc] = useState("");
    const maxCharactersDesc = 1500;



    const handleInputChange = (event) => {
        const { value } = event.target;

        if (value.length <= maxCharacters) {
            setInputValue(value);
        }
    };

    const handleInputChangeSigle = (event) => {
        const { value } = event.target;

        if (value.length <= maxCharactersSigle) {
            setInputValueSigle(value);
        }
    };
    const handleInputChangeSlogan = (event) => {
        const { value } = event.target;

        if (value.length <= maxCharactersSlogan) {
            setInputValueSlogan(value);
        }
    };

    const handleInputChangeDesc = (event) => {
        const { value } = event.target;

        if (value.length <= maxCharactersDesc) {
            setInputValueDesc(value);
        }
    };


    return (
        <div className='bg-white w-full h-full p-4 rounded-2xl '>

            <div className='flex flex-row justify-between'>
                <h1 className="font-bold text-lg mb-1">Présentation Générale</h1>
                <button
                    className="bg-lightblue text-white py-1 px-2 rounded-lg  top-0"
                    type="button"
                >
                    Enregistrer
                </button>
            </div>
            <form action=" ">
                {/* Nom de l'entreprise */}
                <div className="mb-1 mt-3">
                    <label htmlFor="nom" className="block mb-2 text-gray-400 text-[14px]">
                        Nom de l'entreprise
                    </label>
                    <input
                        type="text"
                        id="nom"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Entrez le nom de l'entreprise"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                    <div className='flex justify-end'>
                        <p className="text-sm  text-gray-500 mt-1">
                            {maxCharacters - inputValue.length} <span className=''>/ 120</span>
                        </p>
                    </div>
                </div>

                {/* Sigle */}
                <div className='flex flex-wrap '>
                    <div className="mb-1  w-1/3">
                        <label htmlFor="sigle" className="block mb-2 text-gray-400 text-[14px]">
                            Sigle
                        </label>
                        <input
                            type="text"
                            id="sigle"
                            value={inputValueSigle}
                            onChange={handleInputChangeSigle}
                            placeholder="Entrez le sigle"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />

                        <div className='flex justify-end'>
                            <p className="text-sm  text-gray-500 mt-1">
                                {maxCharactersSigle - inputValueSigle.length} <span className=''>/ 10</span>
                            </p>
                        </div>
                    </div>

                    {/* Slogan */}
                    <div className="mb-1 w-2/3 pl-5">
                        <label htmlFor="slogan" className="block mb-2 text-gray-400 text-[14px]">
                            Slogan
                        </label>
                        <input
                            type="text"
                            id="slogan"
                            value={inputValueSlogan}
                            onChange={handleInputChangeSlogan}
                            placeholder="Entrez le slogan"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                        <div className='flex justify-end'>
                            <p className="text-sm  text-gray-500 mt-1">
                                {maxCharactersSlogan - inputValueSlogan.length} <span className=''>/ 60</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-1">
                    <label htmlFor="description" className="block mb-2 text-gray-400 text-[14px]">
                        Description de la structure
                    </label>
                    <textarea
                        id="description"
                        placeholder="Entrez la description"
                        value={inputValueDesc}
                        onChange={handleInputChangeDesc}
                        className="w-full border border-gray-300 rounded px-3 py-2 h-36 resize-none"
                    />
                    <div className='flex justify-end'>

                        <p className="text-sm  text-gray-500 ">
                            {maxCharactersDesc - inputValueDesc.length} <span className=''>/ 1500</span>
                        </p>
                    </div>

                </div>



                <div className="mb-1 mt-4">
                    <label htmlFor="nom" className="text-gray-400 text-[14px] block mb-2">
                        Siège social*
                    </label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LocationOnIcon className="text-blue" />
                        </span>
                        <input
                            type="text"
                            id="siegel"
                            placeholder="Entrez le nom de l'entreprise"
                            className="w-full border border-gray-300 rounded pl-10 pr-3 py-2"
                        />
                    </div>
                </div>

                <div className="mb-1 mt-4">
                    <label htmlFor="nom" className="text-gray-400 text-[14px] block mb-2">
                        Secteur d'activité (maxi 3)*
                    </label>

                    <div className='flex flex-row space-x-4'>
                        <div className='flex flex-row space-x-4'>

                            <div className='bg-[#EEEEEE] p-2 text-[12px] w-auto rounded-full'>   <p className='ml-2'>Télécommunications <span className='mx-2'>x</span></p></div>

                            <div className='bg-[#EEEEEE] p-2 text-[12px] w-auto rounded-full'>   <p className='ml-2'>Technologies de l'information et de la communication <span className='mx-2'>x</span></p></div>


                        </div>

                        <div className='bg-white border border-lightblue p-2 text-[12px] w-auto text-lightblue rounded-full cursor-pointer'>   <p className='ml-2'>Ajouter un secteur <span className='mx-2'>+</span></p></div>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default Paramapropos
