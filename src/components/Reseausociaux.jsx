

import { Call, Edit} from '@mui/icons-material'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import React from 'react'
import { BsGlobe, BsGlobe2 } from 'react-icons/bs'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';



const Reseausociaux = () => {
    return (
        <div className='flex-row w-full h-[100px] border rounded-2xl bg-white px-4 py-3'>
            <div className='flex-row mb-3'>
                <div className='flex justify-between mb-2'>
                    <h2 className='font-bold'>Réseaux sociaux</h2>
                    <DriveFileRenameOutlineOutlinedIcon className='w-2 h-2' />
                </div>

                <p className='text-gray-600 text-[12px]'>Intégrer les liens de vos pages des médias sociaux pour accroître votre visibilité.</p>
            </div>
           
        </div>
    )
}

export default Reseausociaux
