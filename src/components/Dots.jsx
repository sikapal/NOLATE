import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const Dots = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="flex justify-center items-center">
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
    );
};

export default Dots;
