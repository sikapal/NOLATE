import React, { useState } from 'react';
import { BsChevronDown, BsKeyboard } from 'react-icons/bs';
import { AiOutlineFileText } from 'react-icons/ai';
import logo from '../assets/logo.svg';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Sidebar = ({ open, setOpen }) => {
  
  const [submenuOpen, setSubmenuOpen] = useState([true, true, true]); 
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null); 

  const Menu = [
    {
      title: "Tableau de bord",
      icon: <WidgetsOutlinedIcon />,
      submenu: true,
      submenuItems: [
        { title: "Statistiques" },
        { title: "Visiteurs" },
      ],
    },
    {
      title: "Activités",
      icon: <AutoStoriesOutlinedIcon />,
      submenu: true,
      submenuItems: [
        { title: "Emploi de temps" },
        { title: "Fiche de présence" },
        { title: "Barbillard" },
      ],
    },
    {
      title: "Utilisateurs",
      icon: <PeopleAltOutlinedIcon />,
      submenu: true,
      submenuItems: [
        { title: "Membres" },
        { title: "Admin et rôles" },
        { title: "Messages" },
      ],
    },
    { title: "Paramètres de la page", icon: <SettingsOutlinedIcon /> },
  ];

 
  const handleMenuClick = (index) => {
    const updatedSubmenuOpen = submenuOpen.map((isOpen, i) => (i === index ? !isOpen : isOpen));
    setSubmenuOpen(updatedSubmenuOpen); 
    setSelectedMenuIndex(index); 
  };

  return (
    <div className='flex'>
      <div className={`bg-darkblue h-screen p-5 pt-4 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
        <img
          src={logo}
          alt="logo"
          className={`bg-amber-300 w-[30px] h-[30px] rounded-full cursor-pointer block mr-2 float-left duration-20 ${
            open ? 'hidden' : 'block'
          }`}
        />
        <div className='inline-flex '>
          <h2
            className={`text-white origin-left text-2xl duration-30 font-gothic font-bold flex justify-center ${
              !open && 'scale-0'
            }`}
          >
            <span className='text-white text-[32px]'>N</span>
            <span className='text-yellow text-[3px] pt-2'>
              <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
            </span>{' '}
            <span className='text-white text-[32px]'>Late</span>{' '}
          </h2>
        </div>

        {/* Menu Items */}
        <ul className='pt-5 '>
          {Menu.map((menu, index) => (
            <div key={index}>
              <li
                onClick={() => handleMenuClick(index)} 
                className={`text-lightgreen text-[18px] font-bold w-full flex items-center justify-center  cursor-pointer p-2  ${!open? ' mb-12' : 'gap-x-4'} rounded-md ${
                  selectedMenuIndex === index ? 'bg-blue text-white' : 'hover:bg-lightblue hover:text-white'
                }`}
              >
                <span className='text-2xl hover:text-white block float-left'>{menu.icon || <BsKeyboard />}</span>
                <span className={`text-base  hover:text-white font-bold flex-1 ${!open && 'hidden'}`}>{menu.title}</span>
                {menu.submenu && open && (
                  <BsChevronDown
                    className={`${submenuOpen[index] ? 'rotate-180' : ''}`} 
                  />
                )} 

               
              </li>

              {/* Submenu items */}
              {menu.submenu && open && submenuOpen[index] && (
                <ul className='relative' >
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <li
                      key={subIndex}
                      className='text-white  text-[14px] hover:text-white w-[100%] flex items-center justify-items-stretch gap-x-4 cursor-pointer p-2 hover:bg-lightblue rounded-md px-5'
                    >
                      {submenuItem.title}
                      <button className='rounded-full bg-gris text-black text-xs w-4 h-4 absolute right-0 mr-1'>1</button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
