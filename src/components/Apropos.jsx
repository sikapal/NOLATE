import React from 'react'

const Apropos = () => {
    return (
        <div className='bg-white w-full p-4 rounded-2xl -mx-2'>

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
                <div className='flex flex-wrap '>
                    <div className="mb-1  w-1/3">
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
                    <div className="mb-1 w-2/3 pl-5">
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

                <div className="mb-1">
                    <label htmlFor="nom" className="block font-semibold mb-2 text-gray-700">
                        Secteur
                    </label>
                    <input
                        type="text"
                        id="nom"
                        placeholder="Entrez le nom de l'entreprise"
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>


            </form>
        </div>
    )
}

export default Apropos
