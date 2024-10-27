import React from 'react'
import image from '../assets/image.jpg'
import { FaEye, FaRegBell } from 'react-icons/fa'
import Dots from './Dots'
import { Badge } from '@mui/icons-material'

const Member = () => {
    return (
        <div className='w-[450px] h-[234px] bg-white border  border-gray-300 rounded-xl'>
            <div className='flex-row my-auto mx-auto'>
                <div className='relative flex mx-auto px-5 py-5 items-center justify-between'>
                    <div className='w-[75%] flex'>
                        <img src={image} alt="profile" className='rounded-full w-[130px] h-[130px]' />
                        <div className=' pt-4 pl-6 '>
                            <h1 className='mb-2 text-2xl font-bold text-black' >Username</h1>
                            <h4 className='mb-2 text-gray-500'>Poste</h4>
                            <h4 className='mb-2 text-gray-500'>Lieu d'affectation</h4>

                        </div>
                    </div>

                    <div className='absolute right-0 top-2 mr-5'>
                        <Dots />
                    </div>
                </div>
                <div className='flex px-5 justify-between'>
                    <div className='flex '>
                        <button className='bg-slate-100 text-[14px] hover:bg-slate-200 hover:text-violet hover:text-[16px]  w-[140px] h-[40px] rounded-xl justify-center text-black  items-center flex'>
                            <div className='flex mr-2 justify-center items-center'>
                                <span> <FaEye className='justify-center items-center mx-2' /></span>
                                <p>Voir le profil</p>
                            </div>
                        </button>
                    </div>

                    <div className='flex justify center text-center  '>
                     
                        <div className='border bg-slate-50 w-10 h-10 rounded-xl  cursor-pointer ml-4 text-violet  '>
                            <FaRegBell className='w-5 h-5 text-center justify-items-center m-2.5 items-center ' />
                        </div>

                        <div className='border bg-slate-50 w-10 h-10 rounded-xl  cursor-pointer  ml-4 text-violet'>
                            <FaRegBell className='w-5 h-5 text-center justify-center m-2.5 items-center ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member
