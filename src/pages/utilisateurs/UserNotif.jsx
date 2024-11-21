import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { CalendarMonth, CheckBox } from '@mui/icons-material';


const UserNotif = () => {


  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <div className=' w-full bg-white rounded-xl  pt-4 flex flex-col  shadow-xl  '>

        <h1 className="font-bold py-2 pl-3">Notifications</h1>
        <p className='text-gray-500  text-sm pl-3'>Choisissez le type de notifications concernant l'activité de cet utilisateur que vous désirez recevoir.</p>

        <div className='bg-[#EEEEEE] items-center justify-between  flex mx-1 my-3 px-2 py-2 font-bold text-[12px] text-[#727c8e] border-b-2 border-[#D9D9D9]'>
          <p className='w-1/3'>NOTIFICATION</p>
          <p className='w-1/3 text-center'>FREQUENCE</p>
          <p className='w-1/3 text-end'>ACTION</p>
        </div>
        <div className='bg-white items-center justify-between flex -my-1 px-2 mx-1  font-bold text-[12px] text-[#727c8e] border-b-2 border-[#D9D9D9]'>
          <div className='flex my-2 w-1/3 text-titre flex-row space-x-2 '>

            <p>Pointage de debut</p>

          </div>
          <div className='flex  w-1/3 justify-center flex-row'>
            <select className='bg-white  rounded px-2 py-1 text-[#727c8e] font-semibold'>
              <option value="chaque"> chaque fois</option>
              <option value="20">20 Minutes</option>
              <option value="30">30 Minutes</option>
            </select>

            <CalendarMonth style={{ width: "20px", height: "20px", marginLeft: "5px" }} />
          </div>

          <div className='text-end w-1/3'>
            <input
              type='checkbox'
              className='text-center text-lightblue h-4 items-center justify-center accent-lightblue '
            />
          </div>
        </div>

        <div className='bg-white items-center justify-between flex mt-2 -my-1 px-2 mx-1  font-bold text-[12px] text-[#727c8e] border-b-2 border-[#D9D9D9]'>
          <div className='flex w-1/3 text-titre  my-2 flex-row space-x-2 '>

            <p>Pointage de fin</p>

          </div>
          <div className='flex  w-1/3 justify-center flex-row'>
            <select className='bg-white  rounded px-2 py-1 text-[#727c8e] font-semibold'>
              <option value="chaque"> chaque fois</option>
              <option value="20">20 Minutes</option>
              <option value="30">30 Minutes</option>
            </select>

            <CalendarMonth style={{ width: "20px", height: "20px", marginLeft: "5px" }} />
          </div>

          <div className='text-end w-1/3'>
            <input
              type='checkbox'
              className='text-center text-lightblue h-4 items-center justify-center accent-lightblue '
            />
          </div>
        </div>

        <div className='bg-white items-center justify-between flex mt-2 -my-1 px-2 mx-1  font-bold text-[12px] text-[#727c8e] border-b-2 border-[#D9D9D9]'>
          <div className='flex w-1/3 text-titre my-2 flex-row space-x-2 '>

            <p>Activité du compte</p>

          </div>
          <div className='flex  w-1/3 justify-center flex-row'>
            <select className='bg-white  rounded px-2 py-1 text-[#727c8e] font-semibold'>
              <option value="chaque"> moyen</option>
              <option value="20">20 Minutes</option>
              <option value="30">30 Minutes</option>
            </select>

            <CalendarMonth style={{ width: "20px", height: "20px", marginLeft: "5px" }} />
          </div>

          <div className='text-end w-1/3'>
            <input
              type='checkbox'
              className='text-center text-lightblue h-4 items-center justify-center accent-lightblue '
            />
          </div>
        </div>

        <div className='bg-white items-center justify-between flex mt-2 -my-1 px-2 mx-1  font-bold text-[12px]  text-[#727c8e] border-b-2 border-[#D9D9D9]'>
          <div className='flex w-1/3 text-titre my-2 flex-row space-x-2 '>

            <p>Notification de sécurité</p>

          </div>
          <div className='flex  w-1/3 justify-center flex-row'>
            <select className='bg-white  rounded px-2 py-1 text-[#727c8e] font-semibold'>
              <option value="chaque"> chaque fois</option>
              <option value="20">20 Minutes</option>
              <option value="30">30 Minutes</option>
            </select>

            <CalendarMonth style={{ width: "20px", height: "20px", marginLeft: "5px" }} />
          </div>

          <div className='text-end w-1/3'>
            <input
              type='checkbox'
              className='text-center text-lightblue h-4 items-center justify-center accent-lightblue '
            />
          </div>
        </div>


      </div>

    </>
  )
}

export default UserNotif
