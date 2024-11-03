import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const ParamNotif = () => {

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
  <>
    <div className=' w-full bg-white rounded-xl  pt-4 flex flex-col shadow-xl  '>

      <h1 className="font-bold py-2 pl-3">NOTIFICATIONS</h1>
      <p className='text-gray-500 py-2 text-sm pl-3'>Choissisez le type de notifications que vous désirez recevoir sur votre compte.</p>

      <div className='bg-[#EEEEEE] items-center justify-between text-[12px] flex mx-1 my-3 px-2 py-2 font-bold text-[#727c8e] border-b-2 border-[#D9D9D9]'>
        <div className='left '>
          <p>NOTIFICATIONS</p>
        </div>

        <div className='right flex flex-row items-center justify-center'>
          <p className='mr-24'>EMAILS</p>
          <p className='mr-24'>NAVIGATEUR</p>
          <p>APPLICATIONS</p>
        </div>
      </div>
      <div className='bg-white items-center justify-between text-[12px] flex mx-1 px-2 pb-2  font-bold  text-[#727c8e] border-b-2 border-[#D9D9D9]'>
        <div className='left '>
          <p>Nouveau utilisateur, administrateur, etc</p>
        </div>

        <div className='right flex flex-row justify-between text-center'>
          <div className='mr-32 '>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              className=" w-[18px] h-[18px]"
            />
          </div>

          <div className='mr-32 '>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              className=" w-[18px] h-[18px]"
            />
          </div>
          <div className='mr-24 '>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              className=" w-[18px] h-[18px]"
            />
          </div>
         
        </div>
      </div>
      <div className='bg-white items-center justify-between flex mx-1  my-2 px-2  font-bold text-sm text-[#727c8e] border-b-2 border-[#D9D9D9]'>
        <p>Exigences</p>
        <p>Tolerance</p>
      </div>

    </div>
     <p className='pt-2 text-[12px] px-2 font-bold text-gray-400'>
     Nous avons besoin de l'autorisation de votre navigateur pour afficher les notifications. <span className='text-lightblue cursor-pointer'>Demander la permission</span> 
     </p>
     </>
  )
}

export default ParamNotif
