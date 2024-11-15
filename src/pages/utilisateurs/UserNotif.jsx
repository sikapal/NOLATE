import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const UserNotif = () => {

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
  <>
    <div className=' w-full bg-white rounded-xl  pt-4 flex flex-col shadow-xl  '>

      <h1 className="font-bold py-2 pl-3">NOTIFICATIONS</h1>
      <p className='text-gray-500 py-2 text-sm pl-3'>Choissisez le type de notifications que vous désirez recevoir sur votre compte.</p>

      </div>
   
     </>
  )
}

export default UserNotif
