import React, { useState, useEffect } from 'react';
import axios from 'axios';
import user from '../../assets/user.jpg'
import { EyeOff } from 'lucide-react';

const UserApropos = () => {

    const [isBlocked, setIsBlocked] = useState(false);
    const [isBlockedCoordonnees, setIsBlockedCoordonnees] = useState(false);


    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [cities, setCities] = useState([]);

    const [isBlurred, setIsBlurred] = useState(true);


    const handlePreviewClick = () => {
        setIsBlurred(false);
    };
    // Fetch countries from REST Countries API and sort them alphabetically
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then(response => {
                const countryData = response.data
                    .map(country => ({
                        name: country.name.common,
                        code: country.cca2,
                    }))
                    .sort((a, b) => a.name.localeCompare(b.name));
                setCountries(countryData);
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

  
    return (
        <div >
            <div className='first bg-white p-4 mx-2 rounded-2xl w-full mb-4'>

                <div className='flex  justify-between items-center mb-4 mx-2'>
                    <div className=' flex flex-row text-center'>
                        <h2 className='text-lg -ml-2 font-semibold'>Informations générales</h2>
                        <label className='flex items-center  mt-1 space-x-2 ml-4'>
                            <span className='text-titre'>Bloquer les modifications</span>
                            <input
                                type='checkbox'
                                onChange={() => setIsBlocked(!isBlocked)}
                                className=' text-lightblue h-4 w-4 items-center accent-lightblue '

                            />

                        </label>
                    </div>

                    <div className=' '>
                        <button className='w-auto rounded-md bg-lightblue p-2 px-4 text-white'>Enregistrer</button>
                    </div>
                </div>

                {/* Form */}
                <form>

                    <div className='flex space-x-4 mr-2 mb-4'>
                        <div className='w-1/2'>
                            <label className='block mb-1 text-titre text-sm'>Nom(s)</label>
                            <input
                                type='text'
                                className='w-full p-2 border border-gray-300 rounded-md'
                                disabled={isBlocked}
                                placeholder='George'
                            />
                        </div>
                        <div className='w-1/2'>
                            <label className='block mb-1  text-titre text-sm'>Prénom(s)</label>
                            <input
                                type='text'
                                className='w-full p-2 border border-gray-300 rounded-md'
                                disabled={isBlocked}
                                placeholder='Matoudi'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col mr-2  mb-4'>
                        <label className='block mb-1 space-x-4 text-titre text-sm'>Date de naissance</label>

                        <div className='flex flex-row'>
                            <div className='w-1/3'>
                                <select
                                    className='w-full  py-2 border border-gray-300 rounded-md'
                                    disabled={isBlocked}
                                >
                                    <option value=''>Jour</option>
                                    {[...Array(31)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='w-1/3 mx-2'>
                                <select
                                    className='w-full  py-2 border border-gray-300 rounded-md'
                                    disabled={isBlocked}
                                >
                                    <option value=''>Mois</option>
                                    <option value='January'>January</option>
                                    <option value='February'>February</option>
                                    <option value='March'>March</option>
                                    <option value='April'>April</option>
                                    <option value='May'>May</option>
                                    <option value='June'>June</option>
                                    <option value='July'>July</option>
                                    <option value='August'>August</option>
                                    <option value='September'>September</option>
                                    <option value='October'>October</option>
                                    <option value='November'>November</option>
                                    <option value='December'>December</option>
                                </select>
                            </div>
                            <div className='w-1/3'>
                                <select
                                    className='w-full py-2 border border-gray-300 rounded-md'
                                    disabled={isBlocked}
                                >
                                    <option value=''>Année</option>
                                    {[...Array(2050 - 1930 + 1)].map((_, i) => (
                                        <option key={1930 + i} value={1930 + i}>
                                            {1930 + i}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>
                    </div>

                    {/* Gender Selection */}
                    <div className='mb-4 flex-row flex '>
                        <label className='block mb-1 text-sm'>Genre</label>
                        <div className='flex items-center space-x-4 ml-8'>
                            <label className='flex items-center'>
                                <input
                                    type='radio'
                                    name='gender'
                                    value='male'
                                    className='mr-2 accent-lightblue'
                                    disabled={isBlocked}
                                />
                                Homme
                            </label>
                            <label className='flex items-center'>
                                <input
                                    type='radio'
                                    name='gender'
                                    value='female'

                                    className='mr-2 accent-lightblue'
                                    disabled={isBlocked}
                                />
                                Femme
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <div className='second bg-white p-4 mx-2 rounded-2xl w-full mb-4'>

                <div className='flex justify-between items-center mb-4 mx-2'>
                    <h2 className='text-lg -ml-2 font-semibold'>Coordonnées</h2>
                    <label className='flex items-center space-x-2'>
                        <span className='text-titre'>Bloquer les modifications</span>
                        <input
                            type='checkbox'
                            onChange={() => setIsBlockedCoordonnees(!isBlocked)}
                            className=' text-lightblue h-4 w-4 accent-lightblue '

                        />

                    </label>
                </div>

                {/* Form */}
                <form>

                    <div className='flex space-x-4 mr-2 mb-4'>
                        <div className='w-1/2'>
                            <label className='block mb-1 text-titre text-sm'>Email</label>
                            <input
                                type='text'
                                className='w-full p-2 border border-gray-300 rounded-md'
                                disabled={isBlockedCoordonnees}
                                placeholder='George@r.com'
                            />
                        </div>
                        <div className='w-1/2'>
                            <label className='block mb-1  text-titre text-sm'>Téléphone</label>
                            <input
                                type='text'
                                className='w-full p-2 border border-gray-300 rounded-md'
                                disabled={isBlockedCoordonnees}
                                placeholder='27898075855'
                            />
                        </div>
                    </div>



                    <div className='mb-4 flex space-x-4 mr-2 '>
                        {/* Country Selector */}
                        <div className='w-1/2 mb-4'>
                            <label className='block mb-1  text-titre text-sm'>Pays de résidence</label>
                            <select
                                className='w-full  py-2 border border-gray-300 rounded-md bg-white text-blue-500'
                                disabled={isBlockedCoordonnees}
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                            >
                                <option value=''>Pays</option>
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* City Selector */}
                        <div className='w-1/2 mb-4'>
                            <label className='block mb-1  text-titre text-sm'>Ville</label>
                            <input
                                type='text'
                                className='w-full p-2 border border-gray-300 rounded-md'
                                disabled={isBlockedCoordonnees}
                                placeholder='Yaounde'
                            />
                        </div>
                    </div>



                </form>
            </div>
            <div className='third bg-white p-4 mx-2 rounded-2xl w-full mb-4'>

                <div className='flex justify-between items-center mb-4 mx-2'>
                    <h2 className='text-lg -ml-2 font-semibold'>Informations spécifiques</h2>
                </div>

                {/* Form */}
                <form>

                    <div className='flex space-x-4 mr-2 mb-4'>
                        <div className='w-[80%]'>
                            <label className='block mb-1 text-titre text-sm'>Travaille pour</label>
                            <input
                                type='text'
                                className='w-full p-2 border border-gray-300 rounded-md'

                                placeholder='SUPPTIC'
                            />
                        </div>
                        <div className='w-[20%]'>
                            <label className='block mb-1  text-titre text-sm'>Matricule</label>
                            <input
                                type='text'
                                className='w-full p-2 border border-gray-300 rounded-md'

                                placeholder='27898075855'
                            />
                        </div>
                    </div>



                    <div className='mb-4 flex space-x-4 mr-2 '>

                        <div className='w-1/2 mb-4'>
                            <label className='block mb-1  text-titre text-sm'>Service ou Direction d'attache</label>
                            <select
                                className='w-full  py-2 border border-gray-300 rounded-md'

                            >
                                <option value=''>Sélectionner un élément</option>
                                <option value='service1'>Service de scolarité</option>
                                <option value='service2'>Service financier</option>
                                <option value='service2'>Service de scol</option>
                            </select>
                        </div>


                        <div className='w-1/2 mb-4'>
                            <label className='block mb-1  text-titre text-sm'>Service ou Direction d'attache2</label>
                            <select
                                className='w-full  py-2 border border-gray-300 rounded-md'

                            >
                                <option value=''>Sélectionner un élément</option>
                                <option value='service1'>Service de scolarité</option>
                                <option value='service2'>Service financier</option>
                                <option value='service2'>Service de scol</option>
                            </select>
                        </div>
                    </div>

                    <div className='mb-4 flex space-x-4 mr-2 '>

                        <div className='w-1/2 mb-4'>
                            <label className='block mb-1  text-titre text-sm'>Fonction</label>
                            <select
                                className='w-full  py-2 border border-gray-300 rounded-md'

                            >
                                <option value=''>Sélectionner un élément</option>
                                <option value='fonction1'>Enseignant vacataire</option>
                                <option value='fonction2'>fonction 2</option>
                                <option value='fonction2'>fonction 3</option>
                            </select>
                        </div>


                        <div className='w-1/2 mb-4'>
                            <label className='block mb-1  text-titre text-sm'>Grade</label>
                            <select
                                className='w-full  py-2 border border-gray-300 rounded-md'

                            >
                                <option value=''>Sélectionner un grade</option>
                                <option value='grade1'>Professeur agrégé</option>
                                <option value='grade2'>grade2</option>
                                <option value='grade2'>grade3 </option>
                            </select>
                        </div>
                    </div>

                    <div className='mb-4 flex space-x-4 mr-2 '>

                        <div className='w-full mb-4'>
                            <label className='block mb-1  text-titre text-sm'>Affecté(e) ou détachée à</label>
                            <select
                                className='w-full  py-2 border border-gray-300 rounded-md'

                            >
                                <option value=''>Sélectionner un élément</option>
                                <option value='fonction1'>SBA</option>
                                <option value='fonction2'>fonction 2</option>
                                <option value='fonction2'>fonction 3</option>
                            </select>
                        </div>

                    </div>


                </form>
            </div>
            <div className='third bg-white p-4 mx-2 rounded-2xl w-full mb-4'>

                <div className='flex justify-between items-center mb-4 mx-2'>
                    <div className='mr-2 flex flex-row items-center'>
                        <h2 className='text-lg -ml-2 font-semibold'>Pièce d'identité</h2>
                        <p className='bg-[#92e7a3] px-2 py-2 ml-4 text-xs rounded-md text-green'>membre vérifié</p>
                    </div>
                    <p className='text-lightblue text-sm'> Demander une mise à jour ?</p>
                </div>

                {/* Form */}
                <form>

                    <div className='flex space-x-4 mr-2 mb-4'>
                        <div className='w-1/4'>
                            <label className='block mb-1 text-titre text-sm'>N°</label>
                            <input
                                type='text'
                                className='w-full p-2 border border-gray-300 rounded-md'

                                placeholder='SUPPTIC'
                            />
                        </div>
                        <div className='w-1/4'>
                            <label className='block mb-1 text-titre text-sm'>Date de délivrance</label>
                            <input
                                type='date'
                                className='w-full p-2 border border-gray-300 rounded-md'

                                placeholder='SUPPTIC'
                            />
                        </div>
                        <div className='w-1/4'>
                            <label className='block mb-1 text-titre text-sm'>Date d'expiration</label>
                            <input
                                type='date'
                                className='w-full p-2 border border-gray-300 rounded-md'

                                placeholder='SUPPTIC'
                            />
                        </div>
                        <div className='w-1/4'>
                            <label className='block mb-1 text-titre text-sm'>Ville d'obtention</label>
                            <input
                                type='text'
                                className='w-full p-2 border border-gray-300 rounded-md'

                                placeholder='SUPPTIC'
                            />
                        </div>
                    </div>

                </form>

                <div className='flex flex-row'>


                    <div className="image-preview-container relative mx-4">

                        <div className=''>
                            <img src={user} alt=""
                                className={`w-full h-32 rounded-md bg-cover bg-center ${isBlurred ? 'blur-md' : ''}`}
                            />
                        </div>

                        <div className='absolute top-1/4 mx-20 text-white cursor-pointer text-sm text-centers items-center justify-center' onClick={handlePreviewClick}>
                            <EyeOff style={{ width: "20px", height: '20px', marginLeft: "16px" }} />
                            <p className='text-center'> Aperçu</p>
                        </div>

                    </div>

                    <div className="image-preview-container relative mx-4">

                        <div className=''>
                            <img src={user} alt=""
                                className={`w-full h-32 rounded-md bg-cover bg-center ${isBlurred ? 'blur-md' : ''}`}
                            />
                        </div>

                        <div className='absolute top-1/4 mx-20 text-white cursor-pointer text-sm text-centers items-center justify-center' onClick={handlePreviewClick}>
                            <EyeOff style={{ width: "20px", height: '20px', marginLeft: "16px" }} />
                            <p className='text-center'> Aperçu</p>
                        </div>

                    </div>
                </div>







            </div>

        </div>
    )
}

export default UserApropos
