import React from 'react'

const BilanHoraire = () => {
    return (
        <div className='flex-row w-[370px] h-[165px] bg-gradient-to-b rounded-md p-4 from-[#4A26A0] to-[#7B1FA2]'>
            <h2 className='text-white font-bold mb-3'>Bilan Horaire</h2>

            <div className='w-9 h-1 bg-white rounded-md mb-3'></div>

            <div className='flex '>
                <div className='flex-row mr-5'>
                        <h4 className='text-white text-[14px]'>Total</h4>
                        <p className='text-white text-[25px]'>56</p>
                        <p className='text-white '>Heures</p>
                </div>
                <div className='flex-row mx-5'>
                        <h4 className='text-white text-[14px]'>Effectif</h4>
                        <p className='text-white text-[25px]'>32</p>
                        <p className='text-white '>Heures</p>
                </div>
                <div className='flex-row mx-5'>
                        <h4 className='text-white text-[14px]'>Manqué</h4>
                        <p className='text-white text-[25px]'>6</p>
                        <p className='text-white '>Heures</p>
                </div>
                <div className='flex-row mx-5'>
                        <h4 className='text-white text-[14px]'>Assiduité</h4>
                        <p className='text-white text-[25px]'>56</p>
                        <p className='text-white '>Heures</p>
                </div>
            </div>

        </div>
    )
}

export default BilanHoraire
