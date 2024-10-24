import React from 'react';
import { FaBars, FaBell, FaRegBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import Badge from '@mui/material/Badge';

const Header = ({ setOpen }) => {
  return (
    <div className='bg-white px-4 py-3 flex justify-between w-full h-[70px] border-y shadow '>
      <div className='flex items-center text-xl'>

        <FaBars className='text-black me-1 cursor-pointer' onClick={() => setOpen(prev => !prev)} />

      </div>

      <div className='flex items-center gap-x-5'>
        <div className='relative md:w-[350px]'>
          <span className='relative md:absolute  inset-y-0 right-0 flex items-center pl-2'>
            <button className='p-1 focus:outline-none text-sm text-gray-600 md:text-gray-600 mr-2'><FaSearch /></button>
          </span>
          <input type="text" className='w-full px-4 py-1 pl-12 rounded-3xl bg-slate-100 shadow outline-none hidden md:block text-sm' placeholder='Recherche ici ...' />
        </div>
      </div>

      <div className='flex items-center gap-x-7'>


        <div >
        <Badge badgeContent={4} color="primary" className='text-violet'
            sx={{ '& .MuiBadge-badge': {  backgroundColor: '#ff0000', color: 'white',  },  }}
          >
            <FaRegBell className='w-5 h-5' />
          </Badge>
        </div>
        <div >
          <Badge badgeContent={4} color="primary" className='text-violet'
            sx={{ '& .MuiBadge-badge': {  backgroundColor: '#ff0000', color: 'white',  },  }}
          >
            <FaRegBell className='w-5 h-5' />
          </Badge>
        </div>
        <div >
        <Badge badgeContent={4} color="primary" className='text-violet'
            sx={{ '& .MuiBadge-badge': {  backgroundColor: '#ff0000', color: 'white',  },  }}
          >
            <FaRegBell className='w-5 h-5' />
          </Badge>
        </div>

        <div className='relative'>
          <button className='text-black group'>
            <FaUserCircle className='w-6 h-6 mt-1' />
            <div className='z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0'>
              <ul className='py-2 text-sm text-gray-950'>
                <li><a href="">Profile</a></li>
                <li><a href="">Setting</a></li>
                <li><a href="">Profile</a></li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
