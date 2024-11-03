import React from 'react';
import { FaBars, FaBell, FaRegBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import Badge from '@mui/material/Badge';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Add } from '@mui/icons-material';


const Header = ({ setOpen }) => {
  return (
    <div className='bg-white px-4 py-3 flex justify-between w-full h-[70px] border-y shadow '>
      <div className='flex flex-row  items-center justify-between text-xl'>

        <FaBars className='text-black me-1 cursor-pointer' onClick={() => setOpen(prev => !prev)} />
        <div className='relative '>
          <button className='text-violet group text-[14px]  px-8 mx-4  bg-white rounded-full  '> 
          <span className='' >
            <Add style={{width:"16px", height:"16px"}}/>
          </span>
          Créer
          
          <span className='px-2'>
            <ExpandMoreIcon/>
          </span>
            <div className='z-10 hidden absolute bg-white rounded-lg shadow w-36 group-focus:block top-14 right-0'>
              <ul className='py-2 text-sm  text-gray-950'>
                <li className='my-2 '><a href=""> <Add style={{width:"16px", height:"16px",color:"#68089F"}}/> Planning</a></li>
                <li className='my-2'><a href=""> <Add style={{width:"16px", height:"16px",color:"#68089F"}}/> Activité</a></li>
                <li className='my-2'><a href=""> <Add style={{width:"16px", height:"16px",color:"#68089F"}}/> Lieu</a></li>
                <li className='my-2'><a href=""> <Add style={{width:"16px", height:"16px",color:"#68089F"}}/> Publication</a></li>
                <li className='my-2'><a href=""> <Add style={{width:"16px", height:"16px",color:"#68089F"}}/> Membres</a></li>
              </ul>
            </div>
          
          </button>
        </div>

     
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
            sx={{ '& .MuiBadge-badge': { backgroundColor: '#ff0000', color: 'white', }, }}
          >
            <FaRegBell className='w-5 h-5' />
          </Badge>
        </div>
        <div >
          <Badge badgeContent={4} color="primary" className='text-violet'
            sx={{ '& .MuiBadge-badge': { backgroundColor: '#ff0000', color: 'white', }, }}
          >
            <FaRegBell className='w-5 h-5' />
          </Badge>
        </div>
        <div >
          <Badge badgeContent={4} color="primary" className='text-violet'
            sx={{ '& .MuiBadge-badge': { backgroundColor: '#ff0000', color: 'white', }, }}
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
