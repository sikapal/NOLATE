import { Call, Edit, LocalTaxiSharp, LocationCityOutlined, Mail } from '@mui/icons-material'
import { GlobalStyles } from '@mui/material'
import React from 'react'
import { BsGlobe, BsGlobe2 } from 'react-icons/bs'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

const Coordonnes = () => {
    return (
        <div className='flex-row w-[400px] h-[290px] border rounded-xl bg-white px-4 py-3'>
            <div className='flex-row mb-3'>
                <div className='flex justify-between mb-2'>
                    <h1 className='font-bold'>Coordonnées</h1>
                    <Edit className='w-2 h-2' />
                </div>

                <p className='text-gray-600 text-[14px]'>Renseigner les contacts de votre structure</p>
            </div>
            <div className='flex-row'>
                <div >
                    <div className='flex items-center mb-3'>
                        <div className=' text-violet text-sm  items-center justify-center p-2 bg-slate-100 rounded-full w-10 h-10'>
                            <Call className='text-red-500  justify-center item-center' />
                        </div>
                        <p className='ml-4'>Téléphone</p>
                    </div>

                    <div className='flex items-center mb-3'>
                        <div className=' text-violet text-sm  items-center justify-center p-2 bg-slate-100 rounded-full w-10 h-10'>
                            <Mail className='text-red-500  justify-center item-center' />
                        </div>
                        <p className='ml-4'>Email</p>
                    </div>
                    <div className='flex items-center mb-3'>
                        <div className=' text-violet text-sm  items-center justify-center p-2 bg-slate-100 rounded-full w-10 h-10'>
                            <LocalTaxiSharp className='text-red-500  justify-center item-center' />
                        </div>
                        <p className='ml-4'>Localisation</p>
                    </div>
                    <div className='flex items-center'>
                        <div className=' text-violet text-sm  items-center justify-center p-2 bg-slate-100 rounded-full w-10 h-10'>
                            <BsGlobe2 className='text-red-500  justify-center item-center' />
                        </div>
                        <p className='ml-4'>Site web</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coordonnes
