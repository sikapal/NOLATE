import React from 'react'
import Dots from './Dots'
import img from '../assets/logo.svg'
import image from '../assets/image.jpg'
import ImageIcon from '@mui/icons-material/Image';
import { Add} from '@mui/icons-material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import HearingOutlinedIcon from '@mui/icons-material/HearingOutlined';
import WarningOutlinedIcon from '@mui/icons-material/WarningOutlined';

const PublicationsCard = () => {

    const menuItems = [
        { label: 'Modifier', action: () => console.log('Infos clicked') },
        { label: 'Signaler', action: () => console.log('Desactiver clicked'), color: 'black' },
        { label: 'Supprimer', action: () => console.log('Supprimer clicked'), color: 'red' },
    ];
    return (
        <div className="border border-gray-300 w-[375px] h-[250px] rounded-lg shadow-lg p-3 my-3 bg-white">

            <div className='flex h-[80%]  '>

                <div className='border border-gray-300 rounded-2xl w-[35%]'>
                    <img src={image} alt="file" className='h-[80%]' />
                    <div className='h-[20%] flex justify-center items-center  py-1'><p className='flex items-center text-sm '> <ImageIcon className='w-[20px] h-[20px]' /> 5 photos</p></div>
                </div>
                <div className='mx-3 w-[60%] flex flex-col justify-between'>
                    <div className='flex relative justify-between'>
                        <h2 className="text-sm font-bold ">Direction des ressources humaines </h2>
                        <div className='absolute -right-5 -top-1 '>
                        <Dots menuItems={menuItems} />
                    </div>
                    </div>

                    <div className='flex  items-center'>
                        <img src={image} alt="profile" className='rounded-full w-[20px] h-[20px]' />
                        <h2 className='text-[#707070] font-bold pl-2 items-center justify-center text-[12px]'>NGN. Boris</h2>
                        <p className='text-[10px] pl-2  items-center justify-center'>à l'instant</p>
                    </div>


                    <div className=''>
                        <p className='text-black text-[11px]'>
                            Lorem ipsum dolor sit amet, incididunt ut labore et dolore magna aliqua. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className='flex items-center justify-end'>
                        <button className='w-64 h-7 rounded-3xl bg-slate-100 text-sm justify-center items-center text-skyblue'> <Add className='w-2 h-2' /> ajouter l'audio  </button>
                    </div>


                </div>


            </div>

            <div className='flex h-[25%]  justify-between items-center'>
                {/* Left aligned div with three icons */}
                <div className='flex space-x-12'>
                    <div className='flex justify-center items-center text-violet  bg-gray-200 rounded-full w-8 h-8'>
                        <VisibilityIcon className='text-red-500 ' />
                    </div>
                    <div className='flex justify-center items-center text-violet  bg-gray-200 rounded-full w-8 h-8'>
                        <ShareOutlinedIcon className='w-5 h-5' />
                    </div>
                    <div className='flex justify-center items-center text-violet  bg-gray-200 rounded-full w-8 h-8'>
                        <HearingOutlinedIcon className='text-yellow-500 rotate-240' />
                    </div>
                </div>

                {/* Right aligned div with one icon */}
                <div className='flex justify-center items-center bg-gray-200 text-red rounded-full w-8 h-8'>
                < WarningOutlinedIcon className='text-red-500' />
                </div>
            </div>
        </div>
    )
}

export default PublicationsCard
