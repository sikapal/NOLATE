import React, { useState } from 'react';
import image from '../assets/image.jpg'

import { Menu, MenuItem, IconButton } from '@mui/material';
import { Call, ExpandCircleDown, MoreVert } from '@mui/icons-material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';


const MemberLarge = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isExpanded, setIsExpanded] = useState(true);
    const [userRole, setUserRole] = useState('admin');

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleHeight = () => {
        setIsExpanded((prev) => !prev);
    };
    return (
        <div className='flex-row bg-white  w-[310px] h-[490px] border border-slate-100 rounded-2xl shadow-md '
            style={{ height: isExpanded ? '490px' : '270px', transition: 'height 0.1s ease' }}
        >

            <div className='w-full h-1/5 rounded-t-md relative mb-8 '>
                <img src={image} alt="profile" className='w-full h-[120px] rounded-t-md  ' />

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
                    <p className='text-slate-600 justify-center text-center ml-12 mt-1 text-[12px]'><span className='md:'>  User ID :</span> <span className='text-black'>4187690287</span></p>
                </div>

            </div>

            <div className='pt-8 px-4' style={{ display: isExpanded ? 'block' : '' }}>

                <h1 className='font-bold mb-1 mt-3 text-xl ' style={{ marginTop: isExpanded ? '12px' : '55px' }}>Pr. George Matoudi</h1>


                <p
                    className={`mb-2 ${userRole === 'admin'
                            ? 'bg-[#f4d5fe] inline-block px-2 py-1 text-violet rounded-md text-[12px]'
                            : 'text-slate-500'
                        }`}
                >
                    {userRole === 'admin' ? 'Gestionnaire' : 'Chef service de scolarité'}
                </p>

                {isExpanded && (

                    <div className='flex items-center mb-4  text-[12px]'>
                        <div className='flex items-center  text-violet justify-center p-2 bg-white border  border-slate-300 rounded-full w-7 h-7'>
                            <Call style={{ width: "15px", height: "15px" }} />
                        </div>
                        <p className='ml-4 text-[15px] text-[#636578]'>(+2376)xxx-xxx-xxx</p>
                    </div>
                )}
                {isExpanded && (
                    <div className='flex items-center mb-4  text-[12px]'>
                        <div className='flex  text-violet text-sm  items-center justify-center p-2 bg-white border border-slate-300 rounded-full w-7 h-7'>
                            <EmailOutlinedIcon style={{ width: "15px", height: "15px" }} />
                        </div>
                        <p className='ml-4 text-[15px]  text-[#636578]'>test@gmail.com</p>
                    </div>

                )}
                {isExpanded && (<div className='flex items-center mb-4 text-[12px]'>
                    <div className='flex  text-violet text-sm  items-center justify-center p-2 bg-white border border-slate-300 rounded-full w-7 h-7'>
                        <SchemaOutlinedIcon style={{ width: "15px", height: "15px" }} className='text-red-500  justify-center item-center ' />
                    </div>
                    <p className='ml-4  text-[15px]  text-[#636578]'>Direction des Affaires Générales</p>
                </div>
                )}
                {isExpanded && (<div className='flex items-center mb-4 text-[12px]'>
                    <div className='flex  text-violet text-sm  items-center justify-center p-2 bg-white border border-slate-300 rounded-full w-7 h-7'>
                        <PersonAddAltOutlinedIcon style={{ width: "15px", height: "15px" }} className='text-red-500  justify-center item-center ' />
                    </div>
                    <p className='ml-4 text-[15px] text-[#636578]'>Ajouté le <span className='text-violet'>01 Janvier 2024</span></p>
                </div>)}
                {isExpanded && (<div className='flex items-center mb-4 text-[12px]'>
                    <div className=' flex text-violet text-sm  items-center justify-center p-2 bg-white border border-slate-300 rounded-full w-7 h-7'>
                        < BusinessCenterOutlinedIcon style={{ width: "15px", height: "15px" }} className='text-red-500  justify-center item-center ' />
                    </div>
                    <p className='ml-4 text-[15px] text-[#636578]'>Hors Service</p>
                </div>
                )}

            </div>

            <div className='justify-center text-center cursor-pointer text-titre'>
                {isExpanded ? (
                    <div className='rotate-180'>   <ExpandCircleDown onClick={toggleHeight} style={{ width: '20px', height: '20px' }} /></div>
                ) : (
                    <ExpandCircleDown onClick={toggleHeight} style={{ width: '20px', height: '20px' }} />
                )}
            </div>
        </div>
    )
}

export default MemberLarge
