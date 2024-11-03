import React from 'react'

const BilanHoraire = () => {
    return (
        <div className='flex-row w-[330px] h-[165px] bg-gradient-to-b rounded-md p-4 from-[#4A26A0] to-[#7B1FA2]'>
            <h2 className='text-white font-bold mb-3'>Bilan Horaire</h2>

            <div className='w-9 h-1 bg-white rounded-md mb-3'></div>

            <div className='flex '>
                <div className='flex-row mr-4'>
                        <h4 className='text-white text-[15px]'>Total</h4>
                        <p className='text-white text-[20px]'>56</p>
                        <p className='text-white text-[11px]'>Heures</p>
                </div>
                <div className='flex-row mx-4'>
                        <h4 className='text-white text-[15px]'>Effectif</h4>
                        <p className='text-white text-[20px]'>32</p>
                        <p className='text-white text-[11px]'>Heures</p>
                </div>
                <div className='flex-row mx-4'>
                        <h4 className='text-white text-[15px]'>Manqué</h4>
                        <p className='text-white text-[20px]'>6</p>
                        <p className='text-white text-[11px]'>Heures</p>
                </div>
                <div className='flex-row mx-4'>
                        <h4 className='text-white text-[15px]'>Assiduité</h4>
                        <p className='text-white text-[20px]'>56</p>
                        <p className='text-white text-[11px]'>Pourcent</p>
                </div>
            </div>

        </div>
    )
}

export default BilanHoraire
