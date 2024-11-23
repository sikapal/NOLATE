import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AttachFile, CloudUpload, Mic, Close } from '@mui/icons-material';

const SlidePublication = ({ setShowModalNewPublication }) => {
    const [destinataire, setDest] = useState('');
    const [category, setCategory] = useState('');
    const [images, setImages] = useState([]);

    const handleImageUpload = (event) => {
        const selectedFiles = Array.from(event.target.files);
        const fileURLs = selectedFiles.map(file => ({
            id: Math.random().toString(36).substr(2, 9),
            url: URL.createObjectURL(file),
        }));
        setImages((prevImages) => [...prevImages, ...fileURLs]);
    };

    const handleRemoveImage = (id) => {
        setImages((prevImages) => prevImages.filter((image) => image.id !== id));
    };

    const handleSetDest = (event) => setDest(event.target.value);
    const handleSetCategory = (event) => setCategory(event.target.value);

    return (
        <div className="fixed z-50 inset-0 bg-gray-900 bg-opacity-50 flex justify-end">
            <div className="bg-white w-full sm:w-96 h-screen mt-[50px] p-4 transform translate-x-0 transition-transform duration-300 ease-out flex flex-col">
                <div>
                    <div className="flex flex-row justify-between items-center">
                        <h2 className="text-xl font-semibold mb-6 text-violet">Nouvelle publication</h2>
                        <button
                            onClick={() => setShowModalNewPublication(false)}
                            className="text-black font-bold text-2xl mb-6"
                        >
                            x
                        </button>
                    </div>

                    <form>
                        <div className="space-y-2">
                            <div>
                                <div className="w-full relative">
                                    <label htmlFor="dest" className="block text-[14px] text-titre font-arial mb-2">Portée</label>
                                    <select
                                        id="dest"
                                        className="h-[40px] w-full px-3 pr-10 mb-2 border border-gray-300 rounded-md appearance-none"
                                        value={destinataire}
                                        onChange={handleSetDest}
                                    >
                                        <option value="">Sélectionnez les destinataires</option>
                                        <option value="destinataire 1">destinataire 1</option>
                                        <option value="destinataire 2">destinataire 2</option>
                                    </select>
                                    <ExpandMoreIcon className="absolute top-1/2 right-3 transform -translate-y-1/5 pointer-events-none text-black" />
                                </div>
                            </div>

                            <div>
                                <div className="w-full relative">
                                    <label htmlFor="categorie" className="block text-[14px] text-titre font-arial mb-2">Catégorie</label>
                                    <select
                                        id="categorie"
                                        className="h-[40px] w-full px-3 pr-10 mb-2 border border-gray-300 rounded-md appearance-none"
                                        value={category}
                                        onChange={handleSetCategory}
                                    >
                                        <option value="">Sélectionnez une catégorie</option>
                                        <option value="categorie1">categorie 1</option>
                                        <option value="categorie2">categorie 2</option>
                                    </select>
                                    <ExpandMoreIcon className="absolute top-1/2 right-3 transform -translate-y-1/5 pointer-events-none text-black" />
                                </div>
                            </div>
                        </div>

                      
                        <div className={`bg-[#F6F6F6] border-4 border-dashed border-[#0996FF] h-48 w-full rounded-xl mt-4 flex flex-wrap items-center justify-start relative p-2`}>
                            {/* File Input for Uploading Images */}
                            <label
                                className={`cursor-pointer flex flex-col items-center justify-center w-2 min-w-[40px] h-1 text-[#0996FF] rounded-md ${
                                    images.length > 0 ? "mr-4" : "w-full h-full"
                                }`}
                            >
                                <CloudUpload />
                                <p className="text-xs">Ajouter des images</p>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/jpeg,image/png,image/jpg"
                                    className="hidden"
                                    onChange={handleImageUpload}
                                />
                            </label>

                           
                            {images.map((image) => (
                                <div key={image.id} className="relative w-30 h-40 m-2">
                                    <img
                                        src={image.url}
                                        alt="uploaded"
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                    
                                    <button
                                        onClick={() => handleRemoveImage(image.id)}
                                        className="absolute top-1 right-1 bg-red-500 text-black rounded-full p-1 text-xs"
                                    >
                                        <Close />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>

                <div className="hello bg-white w-full flex flex-row pt-36">
                    <div className="relative w-[75%]">
                        <input
                            placeholder="Dites quelque chose..."
                            className="px-2 py-2 h-[40px] border border-gray-300 text-[16px] rounded-xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <AttachFile className="absolute right-16 top-1/2 transform -translate-y-1/2 text-gray-400" size={10} />
                        <Mic className="absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-400" size={10} />
                    </div>
                    <button type="submit" className="w-[25%] px-4 bg-lightblue text-white py-2 rounded-xl">Publier</button>
                </div>
            </div>
        </div>
    );
};

export default SlidePublication;
