import React, { useState } from 'react';
import { BsChevronDown, BsKeyboard } from 'react-icons/bs';
import { AiOutlineFileText } from 'react-icons/ai';
import logo from '../assets/logo.svg';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Link } from 'react-router-dom';
import { Copyright } from '@mui/icons-material';

const Sidebar = ({ open, setOpen }) => {

  const [submenuOpen, setSubmenuOpen] = useState([true, true, true]);
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(null);

  const Menu = [
    {
      title: "Tableau de bord",
      icon: <WidgetsOutlinedIcon style={{ width: "18px", height: "18px", paddingBottom: "4px" }} />,

      submenu: true,
      submenuItems: [
        { title: "Statistiques", to: "/dashboard", },
        { title: "Visiteurs" },
      ],
    },
    {
      title: "Activités",
      icon: <AutoStoriesOutlinedIcon style={{ width: "18px", height: "18px", paddingBottom: "4px" }} />,
      submenu: true,
      submenuItems: [
        { title: "Emploi de temps", to: "/emploi-de-temps" },
        { title: "Fiche de présence", to: "/fichepresence" },
        { title: "Babillard", to: "/barbillard" },
      ],
    },
    {
      title: "Utilisateurs",
      icon: <PeopleAltOutlinedIcon style={{ width: "18px", height: "18px", paddingBottom: "4px" }} />,
      submenu: true,
      submenuItems: [
        { title: "Membres", to: "/members", },
        { title: "Admin et rôles", to: "/admintable" },
        { title: "Messages" },
      ],
    },
    { title: "Paramètres de la page", to: "/parametres", icon: <SettingsOutlinedIcon style={{ width: "18px", height: "18px", paddingBottom: "4px" }} /> },
  ];


  const handleMenuClick = (index) => {
    const updatedSubmenuOpen = submenuOpen.map((isOpen, i) => (i === index ? !isOpen : isOpen));
    setSubmenuOpen(updatedSubmenuOpen);
    setSelectedMenuIndex(index);
  };

  return (
    <div className='flex min-h-full '>
      <div className={`bg-darkblue  p-5 pt-4 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
        <img
          src={logo}
          alt="logo"
          className={`bg-amber-300 w-[30px] h-[30px] rounded-full cursor-pointer block mr-2 float-left duration-20 ${open ? 'hidden' : 'block'
            }`}
        />
        <div className='inline-flex'>
          <h2
            className={`text-white origin-left text-2xl duration-30 font-gothic font-bold flex justify-center ${!open && 'scale-0'
              }`}
          >
            <span className='text-white text-[32px]'>N</span>
            <span className='text-yellow text-[3px] pt-2'>
              <img src={logo} alt="logo" className='w-[20px] h-[20px]' />
            </span>{' '}
            <span className='text-white text-[32px]'>late</span>{' '}
          </h2>
        </div>

        {/* Menu Items */}
        <ul className='pt-5 '>
          {Menu.map((menu, index) => (
            <div key={index}>
              <Link to={menu.to}>
                <li
                  onClick={() => handleMenuClick(index)}
                  className={`text-lightgreen  font-bold w-full flex items-center justify-center  cursor-pointer px-2  ${!open ? ' mb-12' : 'gap-x-4'} rounded-md ${selectedMenuIndex === index ? 'bg-blue text-white' : 'hover:bg-lightblue hover:text-white'
                    }`}
                >
                  <span className='text-2xl hover:text-white block float-left'>{menu.icon || <BsKeyboard />}</span>
                  <span className={`text-[14px] hover:text-white font-bold flex-1 ${!open && 'hidden'}`}>{menu.title}</span>
                  {menu.submenu && open && (
                    <BsChevronDown style={{ width: "12px", height: "12px" }}
                      className={`${submenuOpen[index] ? 'rotate-180' : ''}`}
                    />
                  )}


                </li>
              </Link>

              {/* Submenu items */}
              {menu.submenu && open && submenuOpen[index] && (
                <ul className='relative ml-6' >
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <Link to={submenuItem.to} key={subIndex} >
                      <li
                        key={subIndex}
                        className='text-white  text-[14px] hover:text-white w-[100%] flex items-center justify-items-stretch gap-x-4 cursor-pointer p-2 hover:bg-lightblue rounded-md px-5'
                      >
                        {submenuItem.title}
                        <button className='rounded-full bg-gris text-black text-xs w-4 h-4 absolute right-0 mr-1'>1</button>
                      </li>

                    </Link>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
        <div className='flex flex-row justify-between text-[13px] mb-6 text-titre  items-center text-center fixed bottom-0'>
          <div className='flex flex-row items-center '>
            <Copyright style={{width:"13px", height:"13px"}} />
            <p className='pl-1'>Nolate </p>

          </div>

          <p className='pl-4'>A propos</p>
          <p className='px-4'><Link to="/">Contactez-nous</Link></p>

        </div>
      </div>

    </div>
  );
};

export default Sidebar;
