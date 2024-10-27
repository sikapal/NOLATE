import React, { useState } from 'react';
import image from '../assets/image.jpg'

import { Menu, MenuItem, IconButton } from '@mui/material';
import { ArrowCircleUp, ArrowCircleUpSharp, Call, MoreVert } from '@mui/icons-material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const MemberLarge = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className='flex-row bg-white  w-[380px] h-[500px] border border-slate-100 rounded-2xl shadow-md '>

            <div className='w-full h-1/5 rounded-t-md relative mb-8 '>
                <img src={image} alt="profile" className='w-full h-[120px] rounded-t-md  ' />
                <p className='absolute text-white top-0 w-full bg-sky-400 rounded-t-md opacity-1 text-[10px] p-4  items-center text-center justify-center font-bold'>Ecole Nationale superieure des Postes et Télecommunications et TIC</p>

                <div className='px-4 justify-between'>
                    <img src={image} alt="profile" className='rounded-full w-[100px] h-[100px] border-4 border-white absolute top-16 ' />


                    <div className=" absolute top-24 right-1 bg-white rounded-full mx-4">
                        <IconButton onClick={handleClick} aria-controls={open ? 'menu-list' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}>
                            <MoreVert className=" text-gray-700 cursor-pointer" />
                        </IconButton>

                        <Menu

                            sx={{
                                mt: '-10px',
                                '& .MuiPaper-root': {
                                    borderRadius: '24px',
                                    marginTop: '30px',
                                    marginLeft: '15px',

                                },
                            }}
                            id="menu-list"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}


                        >
                            <MenuItem onClick={handleClose} className=" hover:bg-gray-100"
                            >Infos</MenuItem>

                            <MenuItem onClick={handleClose} className="text-blue-500 w-48 hover:bg-gray-100">Desactiver</MenuItem>
                            <MenuItem onClick={handleClose} className=" hover:bg-gray-100"
                                sx={{
                                    color: 'red',
                                    '&:hover': {
                                        backgroundColor: 'gray.100',
                                    },
                                    borderRadius: '24px',
                                }}
                            >Supprimer</MenuItem>
                        </Menu>
                    </div>
                </div>

                <div>
                    <p className='text-slate-600 justify-center text-center ml-12 '><span className='md:'>  User ID :</span> <span className='text-black'>4187690287</span></p>
                </div>

            </div>

            <div className='pt-8 px-4 '>
                <h1 className='font-bold mb-1 text-xl'>Pr. George Matoudi</h1>
                <p className='text-slate-500 mb-2'>Chef service de scolarité</p>
                <div className='flex items-center mb-4'>
                    <div className='flex items-center  text-violet justify-center p-2 bg-white border  border-slate-300 rounded-full w-8 h-8'>
                        <Call className='text-red-500 text-xs' />
                    </div>
                    <p className='ml-4 text-[#636578]'>(+2376)xxx-xxx-xxx</p>
                </div>
                <div className='flex items-center mb-4'>
                    <div className='flex  text-violet text-sm  items-center justify-center p-2 bg-white border border-slate-300 rounded-full w-8 h-8'>
                        <Call className='text-red-500  justify-center item-center ' />
                    </div>
                    <p className='ml-4  text-[#636578]'>(+2376)xxx-xxx-xxx</p>
                </div>
                <div className='flex items-center mb-4'>
                    <div className='flex  text-violet text-sm  items-center justify-center p-2 bg-white border border-slate-300 rounded-full w-8 h-8'>
                        <Call className='text-red-500  justify-center item-center ' />
                    </div>
                    <p className='ml-4  text-[#636578]'>(+2376)xxx-xxx-xxx</p>
                </div>
                <div className='flex items-center mb-4'>
                    <div className='flex  text-violet text-sm  items-center justify-center p-2 bg-white border border-slate-300 rounded-full w-8 h-8'>
                        <Call className='text-red-500  justify-center item-center ' />
                    </div>
                    <p className='ml-4  text-[#636578]'>(+2376)xxx-xxx-xxx</p>
                </div>
                <div className='flex items-center mb-4'>
                    <div className=' flex text-violet text-sm  items-center justify-center p-2 bg-white border border-slate-300 rounded-full w-8 h-8'>
                        <Call className='text-red-500  justify-center item-center ' />
                    </div>
                    <p className='ml-4  text-[#636578]'>(+2376)xxx-xxx-xxx</p>
                </div>
            </div>

            <div className='justify-center text-center cursor-pointer'>

                <ArrowCircleUpSharp />
            </div>
        </div>
    )
}

export default MemberLarge
