import React, { useState } from 'react';
import { FaBars, FaChevronDown, FaRegBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import Badge from '@mui/material/Badge';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SlidePlanning from '../pages/activites/SlidePlanning';
import SlideActivite from '../pages/activites/SlideActivite';
import SlideLieu from '../pages/activites/SlideLieu';
import SlidePublication from '../pages/activites/SlidePublication';
import SlideMembre from '../pages/activites/SlideMembre';
import { ArrowDropDown, DarkModeSharp, EmailOutlined, Help, Logout, LogoutOutlined, LogoutSharp, ManageAccounts, PersonAddAlt1Outlined, Search, Settings, SettingsOutlined, Translate } from '@mui/icons-material';
import { Divider } from '@mui/material';
import user from '../assets/user.jpg'
import Dots from './Dots'
import { Link } from 'react-router-dom';
import SlideDemandeAdhesion from '../pages/activites/SlideDemandeAdhesion';

const Header = ({ setOpen, menuItems }) => {

  menuItems = [
    { label: "Lire", action: () => alert(`Reading ${info.row.original.name}`) },
    { label: "Supprimer", action: () => alert(`Deleting ${info.row.original.name}`), color: "red" },
  ];

  const [showModalNewPlanning, setShowModalNewPlanning] = useState(false);
  const [showModalNewActivite, setShowModalNewActivite] = useState(false);
  const [showModalNewLieu, setShowModalNewLieu] = useState(false);
  const [showModalNewPublication, setShowModalNewPublication] = useState(false);
  const [showModalNewMember, setShowModalNewMember] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showNotifs, setShowNotifs] = useState(false);
  const [showInvitations, setShowInvitations] = useState(false)
  const [showModalDemandeAdhesion, setShowModalDemandeAdhesion] = useState(false)

  const [showModalDelete, setShowModalDelete] = useState(false);


  const openModalDelete = () => setShowModalDelete(true);
  const closeModalDelete = () => setShowModalDelete(false);

  const [currentTab, setCurrentTab] = useState('recue');

  const handleTabSwitch = (tab) => {
    setCurrentTab(tab);
  };

  const handleDelete = () => {

    console.log('Item deleted');
    closeModalDelete();
  };



  return (

    <div className='bg-white px-4 py-3 flex justify-between w-full h-[70px] border-y shadow '>
      <div className='flex flex-row  items-center justify-between text-xl'>

        <FaBars className='text-black me-1 cursor-pointer' onClick={() => setOpen(prev => !prev)} />


        <div className='relative'>
          <div
            className='hello text-violet group text-[14px] px-8 mx-4 bg-white rounded-full cursor-pointer'
            onClick={() => setShowList(prev => !prev)}
          >
            <span className='items-center text-center'><AddCircleOutlineIcon style={{ width: "16px", height: "16px", marginRight: "5px" }} /></span>
            Créer
            <span className='px-2'><ExpandMoreIcon /></span>
          </div>

          {showList && (
            <div className='z-10 absolute bg-white rounded-lg shadow w-36 top-14 right-0'>
              <ul className='py-2 text-sm text-gray-950'>
                <li className='my-2 mx-6'>
                  <button onClick={() => {

                    setShowModalNewPlanning(true);
                    setShowList(false);
                  }} className="flex items-center">
                    <AddCircleOutlineIcon style={{ width: "16px", height: "16px", color: "#68089F", marginRight: "4px" }} /> Planning
                  </button>
                </li>
                <li className='my-2 mx-6'>
                  <button onClick={() => {

                    setShowModalNewActivite(true);
                    setShowList(false);
                  }} className="flex items-center">
                    <AddCircleOutlineIcon style={{ width: "16px", height: "16px", color: "#68089F", marginRight: "4px" }} /> Activité
                  </button>
                </li>
                <li className='my-2 mx-6'>
                  <button onClick={() => {

                    setShowModalNewLieu(true);
                    setShowList(false);
                  }} className="flex items-center">
                    <AddCircleOutlineIcon style={{ width: "16px", height: "16px", color: "#68089F", marginRight: "4px" }} /> Lieu
                  </button>
                </li>
                <li className='my-2 mx-6'>
                  <button onClick={() => {

                    setShowModalNewPublication(true);
                    setShowList(false);
                  }} className="flex items-center">
                    <AddCircleOutlineIcon style={{ width: "16px", height: "16px", color: "#68089F", marginRight: "4px" }} /> Publication
                  </button>
                </li>
                <li className='my-2 mx-6'>
                  <button onClick={() => {

                    setShowModalNewMember(true);
                    setShowList(false);
                  }} className="flex items-center">
                    <AddCircleOutlineIcon style={{ width: "16px", height: "16px", color: "#68089F", marginRight: "4px" }} /> Membres
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Other header elements */}
      <div className='flex items-center gap-x-5'>
        <div className='relative md:w-[350px]'>
          <span className='relative md:absolute inset-y-0 right-0 flex items-center pl-2'>
            <button className='p-1 focus:outline-none text-sm text-gray-600 md:text-gray-600 mr-2'><FaSearch /></button>
          </span>
          <input type="text" className='w-full px-4 py-1 pl-12 rounded-3xl bg-slate-100 shadow outline-none hidden md:block text-sm' placeholder='Recherche ici ...' />
        </div>
      </div>

      <div className='flex items-center gap-x-7'>
        <div className='cursor-pointer' onClick={() => { setShowInvitations(prev => !prev); setShowNotifs(false) }}>
          <Badge badgeContent={4} color="primary" className='text-violet'
            sx={{ '& .MuiBadge-badge': { backgroundColor: '#ff0000', color: 'white', }, }}
          >
            <PersonAddAlt1Outlined className='w-5 h-5' />
          </Badge>
        </div>

        <div>
          <Badge badgeContent={4} color="primary" className='text-violet'
            sx={{ '& .MuiBadge-badge': { backgroundColor: '#ff0000', color: 'white', }, }}
          >
            <EmailOutlined className='w-5 h-5' />
          </Badge>
        </div>
        <div className='cursor-pointer' onClick={() => { setShowNotifs(prev => !prev); setShowInvitations(false) }}>
          <Badge badgeContent={4} color="primary" className='text-violet'
            sx={{ '& .MuiBadge-badge': { backgroundColor: '#ff0000', color: 'white', }, }}
          >
            <FaRegBell className='w-5 h-5' />
          </Badge>
        </div>

        <div className='rotate-90 py-2 w-5 -mr-6 -ml-4 '>  <Divider style={{ background: "#D9D9D9", height: "2px" }} /> </div>


        {showNotifs && (
          <div className='z-10 absolute bg-white rounded-lg shadow w-76 top-[74px] right-16'>
            <div className='py-2 px-4 '>
              <div className='flex flex-row  font-bold justify-between'>
                <p className='text-sm  text-titre'>Notifications <span className='text-black'> : 2</span></p>
                <SettingsOutlined style={{ width: "18px", height: "18px" }} />
              </div>
            </div>

            <Divider />

            <div className='search py-2 px-4'>
              <div className="relative">
                <input

                  placeholder="Rechercher..."
                  className="w-full h-8 bg-gray-100 pl-4 pr-4 py-2 text-sm rounded-3xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Search
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>

            <ul className='pb-2 text-sm text-gray-950'>
              <li className='my-2 mx-4 cursor-pointer ' onClick={() => {
                setShowNotifs(false);
                showInvitations(false)
              }}>
                <div className='flex flex-wrap justify-between w-[230px]'>

                  <div className='flex flex-col'>
                    <div className='w-[95%] text-xs flex flex-row'>
                      <img src={user} alt="" className='rounded-full w-8 h-8' />
                      <p className='pl-2 '><span className='font-bold'>Moleng Cédric</span> a inscrit son pointage d'entrée</p>

                    </div>
                    <p className='text-gray-500 text-xs pl-10 pt-1'>à l'instant</p>
                  </div>

                  <div className='absolute -right-2 -mt-1.5  mr-4'>
                    <Dots menuItems={menuItems} />
                  </div>
                </div>

              </li>
              <li className='my-2 mx-4 cursor-pointer '>
                <div className='flex flex-wrap justify-between w-[230px]'>

                  <div className='flex flex-col'>
                    <div className='w-[95%] text-xs flex flex-row'>
                      <img src={user} alt="" className='rounded-full w-8 h-8' />
                      <p className='pl-2 '><span className='font-bold'>Moleng Cédric</span> a inscrit son pointage d'entrée</p>

                    </div>
                    <p className='text-gray-500 text-xs pl-10 pt-1'>à l'instant</p>
                  </div>

                  <div className='absolute -right-2 -mt-1.5 mr-4'>
                    <Dots menuItems={menuItems} />
                  </div>
                </div>

              </li>



            </ul>
          </div>
        )}

        {showInvitations && (
          <div className='z-10 absolute bg-white rounded-lg shadow w-80 top-[74px] right-40'>
            <div className='py-2 px-4 '>
              <div className='flex flex-row  font-bold justify-between'>
                <p className='text-sm  text-titre'>Invitations <span className='text-black'> : 4</span></p>
                <div className="bg-gray-100 w-auto -mt-1 py-1 px-3 flex items-center justify-between rounded-full text-xs text-gray-600 font-light cursor-pointer">
                  <p
                    className={`text-blue-600 font-bold`}
                    onClick={() => handleTabSwitch(currentTab === 'recue' ? 'envoye' : 'recue')}
                  >
                    {currentTab === 'recue' ? 'Reçue(s)' : 'Envoyé(s)'}
                  </p>
                  <div className="pointer-events-none">
                    <ArrowDropDown style={{ width: "14px", height: "14px" }} />
                  </div>
                </div>

              </div>
            </div>

            <Divider />

            <div className='search py-2 px-4'>
              <div className="relative">
                <input

                  placeholder="Rechercher..."
                  className="w-full h-8 bg-gray-100 pl-4 pr-4 py-2 text-sm rounded-3xl shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                <Search
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>

            <ul className="pb-2 text-sm text-gray-950">
              {currentTab === 'recue' ? (
                <>
                  {/* Received Invitations */}
                  <li className="recue my-2 mx-4 cursor-pointer pb-1">
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <div className="flex flex-row">
                          <img src={user} alt="User" className="rounded-full w-8 h-8" />
                          <div className="flex flex-col w-full text-sm text-[12px]">
                            <p className="pl-2">
                              <span className="font-bold">Georges Matoudi</span>
                              <span className="text-gray-500"> souhaite </span>
                            </p>
                            <p className="pl-2 -mt-1 text-gray-500">
                              rejoindre votre registre de présence
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-500 text-xs pl-10 pt-1">à l'instant</p>
                        <div className="buttons pl-10 pt-1 flex flex-wrap justify-between">
                          <button
                            className="bg-lightblue text-[14px] w-auto h-[30px] rounded-xl px-6 py-1 text-white flex items-center"
                            onClick={() => setShowInvitations(false)}
                          >
                            Examiner
                          </button>
                          <button className="bg-white text-[14px] border border-gray-300 w-auto h-[30px] rounded-xl px-6 py-1 text-gray-600 flex items-center">
                            Décliner
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  {/* Sent Invitations */}
                  <li className="envoye my-2 mx-4 cursor-pointer pb-1">
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <div className="flex flex-row">
                          <img src={user} alt="User" className="rounded-full w-8 h-8" />
                          <div className="flex flex-col w-full -mt-0.5 text-sm text-[12px]">
                            <p className="pl-2 -mt-0">
                              <span className="font-bold  text-black text-[13px]">Moleng Cédric</span>
                              
                            </p>
                            <p className="pl-2 -mt-1 text-[12px] text-gray-500">
                              Data Analyst
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-500 text-xs pl-10 pt-1">à l'instant</p>
                       
                      </div>
                      
                    </div>
                    <div className="buttons pl-10 pt-1 flex flex-wrap justify-between">
                         
                         <button className="bg-white text-[14px] border border-gray-300 w-[80%] h-[30px]  justify-center rounded-xl px-6 py-1 text-gray-600 flex items-center">
                          Annuler l'Invitation
                         </button>
                       </div>
                  </li>
                </>
              )}
            </ul>

            <p className='text-center underline text-sm pb-1 text-violet'>Tout voir</p>
          </div>
        )}

        <div className='relative'>
          <button className='text-black group'>

            <div className='flex flex-row' onClick={() => { setShowInvitations(false), setShowNotifs(false) }}>
              <div className='relative ' >
                <FaUserCircle className='w-10 h-10 mt-1' />
              </div>

              <FaChevronDown className='w-3 h-3  my-5 ml-2' />

              <div className='absolute bg-[#72E128] border-[3px] border-white rounded-full w-3 h-3 bottom-3 right-6'> </div>


            </div>

            <div className='z-10 hidden absolute bg-white rounded-lg shadow w-[230px] group-focus:block top-[68px] right-0'>

              <div className='flex flex-col '>

                <div className='flex flex-row justify-between mt-4 mx-4'>
                  <img src={user} alt="user" className='relative w-10 h-10 rounded-full' />
                  <div className='absolute bg-[#52a85a] border-[3px] border-white rounded-full w-3 h-3 top-11 left-12'> </div>
                  <div className='flex flex-col '>
                    <p className='font-bold text-titre'> Ngnintedem Boris</p>
                    <div className='text-xs w-24 px-2 rounded-md py-1 bg-[#e9d0fe] '> <p className='text-violet opacity-[80%]'>Gestionnaire</p></div>
                  </div>
                </div>

                <Divider className='pt-3' />

                <ul className='py-2 text-sm text-gray-800 mx-4'>
                  <div className='flex flex-row mb-4'>
                    <ManageAccounts className='text-violet mr-4' />
                    <li className='mt-1'><a href="">Mon profil</a></li>
                  </div>

                  <div className='flex flex-row mb-4'>
                    <Translate className='text-violet mr-4' />
                    <li className='mt-1'><a href="">Langue</a></li>
                  </div>
                  < div className='flex flex-row mb-4'>
                    <Settings className='text-violet mr-4' />
                    <li className='mt-1'><a href="">Paramètre de la page</a></li>
                  </div>
                  < div className='flex flex-row  mb-4'>
                    <Help className='text-violet mr-4' />
                    <li className='mt-1'><a href="">Aide</a></li>
                  </div>

                  <div className='flex flex-row'>
                    <DarkModeSharp className='text-violet mr-4' />
                    <li className='mt-1'><a href="">Mode sombre</a></li>
                  </div>
                </ul>

                <Divider className='pt-3' />

                < div className='flex flex-row mb-4 mx-4 text-red mt-2 text-sm'>
                  <LogoutSharp className='text-red mr-4' />
                  <Link to="/login">
                    <li className='mt-1 list-none'><a href=""> Se déconnecter</a></li>
                  </Link>

                </div>
              </div>

            </div>
          </button>
        </div>
      </div>

      {showModalNewPlanning && <SlidePlanning setShowModalNewPlanning={setShowModalNewPlanning} />}
      {showModalNewActivite && <SlideActivite setShowModalNewActivite={setShowModalNewActivite} />}
      {showModalNewLieu && <SlideLieu setShowModalNewLieu={setShowModalNewLieu} />}
      {showModalNewPublication && <SlidePublication setShowModalNewPublication={setShowModalNewPublication} />}
      {showModalNewMember && <SlideMembre setShowModalNewMember={setShowModalNewMember} />}
      {showModalDemandeAdhesion && <SlideDemandeAdhesion setShowModalDemandeAdhesion={setShowModalDemandeAdhesion} />}
    </div>
  );
};

export default Header;
