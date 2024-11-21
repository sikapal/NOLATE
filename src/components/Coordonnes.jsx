import { Call, Edit } from '@mui/icons-material'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import React, {useState} from 'react'
import { BsGlobe, BsGlobe2 } from 'react-icons/bs'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import SlideCoordonnées from '../pages/parametres/SlideCoordonnées';


const Coordonnes = () => {

    const [showModalNewCoordonees, setShowModalNewCoordonees] = useState(false)

    return (
        <div className='flex-row w-full h-[290px] border rounded-2xl bg-white px-4 py-3'>
            <div className='flex-row mb-3'>
                <div className='flex justify-between mb-2'>
                    <h2 className='font-bold'>Coordonnées</h2>
                    <DriveFileRenameOutlineOutlinedIcon className='w-2 h-2 cursor-pointer'  onClick={() => {

                        setShowModalNewCoordonees(true);

                    }} />
                </div>

                <p className='text-gray-600 text-[12px]'>Renseigner les contacts de votre structure</p>
            </div>
            <div className='flex-row'>
                <div >
                    <div className='flex items-center mb-3'>
                        <div className=' text-violet text-sm  items-center justify-center p-2 bg-slate-100 rounded-full '>
                            <Call style={{ fontSize: '20px' }} className='text-red-500  justify-center item-center' />
                        </div>
                        <p className='ml-4'>Téléphone</p>
                    </div>

                    <div className='flex items-center mb-3'>
                        <div className=' text-violet text-sm  items-center justify-center p-2 bg-slate-100 rounded-full'>
                            <MailOutlinedIcon style={{ fontSize: '20px' }} className='text-red-500  justify-center item-center' />
                        </div>
                        <p className='ml-4'>Email</p>
                    </div>
                    <div className='flex items-center mb-3'>
                        <div className=' text-violet text-sm  items-center justify-center p-2 bg-slate-100 rounded-full '>
                            <LocationOnOutlinedIcon style={{ fontSize: '20px' }} className='text-red-500  justify-center item-center' />
                        </div>
                        <p className='ml-4'>Localisation</p>
                    </div>
                    <div className='flex items-center'>
                        <div className=' text-violet text-sm  items-center justify-center p-2 bg-slate-100 rounded-full '>
                            <PublicOutlinedIcon style={{ fontSize: '20px' }} className='justify-center item-center' />
                        </div>
                        <p className='ml-4'>Site web</p>
                    </div>
                </div>
            </div>
            {showModalNewCoordonees && <SlideCoordonnées setShowModalNewCoordonees={setShowModalNewCoordonees} />}
        </div>
    )
}

export default Coordonnes
