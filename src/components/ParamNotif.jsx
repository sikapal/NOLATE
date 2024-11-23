import React, { useState } from 'react';



const ParamNotif = () => {


  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <div className=' w-full bg-white rounded-2xl h-fit  pt-4 flex flex-col  shadow-xl  '>

        <div className='flex flex-row justify-between'>
          <h1 className="font-bold py-2 pl-3">Notifications</h1>
          <button
            className="bg-lightblue text-white py-1 mx-3  px-2 rounded-lg  top-0"
            type="button"
          >
            Enregistrer
          </button>
        </div>


        <p className='text-gray-500  text-sm pl-3 mb-2'>Choisissez le type de notifications que vous désirez recevoir sur votre compte..</p>

        <div className='bg-[#EEEEEE] items-center justify-between  flex mx-1 my-3 px-2 py-2 font-bold text-[12px] text-[#727c8e] border-b-2 border-[#D9D9D9]'>
          <p className='w-3/6'>NOTIFICATION</p>
          <p className='w-1/6 text-center mr-6'>EMAIL</p>
          <p className='w-1/6 text-end'>NAVIGATEUR</p>
          <p className='w-1/6 text-end'>APPLICATION</p>
        </div>
        <div className='bg-white items-center justify-between flex -my-1 px-2 mx-1  font-bold text-[12px] text-[#727c8e] border-b-2 border-[#D9D9D9]'>
          <div className='flex my-2 w-3/6 text-titre flex-row '>

            <p>Nouveau utilisateur, administrateur, etc</p>

          </div>
          <div className='space-x-40 '>

            <input
              type='checkbox'
              className='text-center text-lightblue h-4 items-center justify-center accent-lightblue '
            />

            <input
              type='checkbox'
              className='text-center text-lightblue h-4 items-center justify-center accent-lightblue '
            />
            <input
              type='checkbox'
              className=' text-lightblue h-4  accent-lightblue '
            />

          </div>

        </div>

        <div className='bg-white items-center justify-between flex mt-2 -my-1 px-2 mx-1  font-bold text-[12px] text-[#727c8e] border-b-2 border-[#D9D9D9]'>
          <div className='flex w-3/6 text-titre  my-2 flex-row  '>

            <p>L'activité du compte</p>

          </div>
          <div className='space-x-40 flex flex-row text-center'>

            <input
              type='checkbox'
              className='text-center text-lightblue h-4 items-center justify-center accent-lightblue '
            />

            <input
              type='checkbox'
              className='text-center text-lightblue h-4 items-center justify-center accent-lightblue '
            />
            <input
              type='checkbox'
              className='text-center text-lightblue h-4 items-center justify-center accent-lightblue '
            />

          </div>
        </div>

        <div className='bg-white items-center justify-between flex mt-2 -my-1 px-2 mx-1  font-bold text-[12px] text-[#727c8e] border-b-2 border-[#D9D9D9]'>
          <div className='flex w-3/6 text-titre my-2 flex-row space-x-2 '>

            <p>Un nouveau navigateur utilisé pour se connecter</p>

          </div>
          <div className='space-x-40 flex flex-row text-center'>

            <input
              type='checkbox'
              className='text-center text-lightblue h-4 items-center justify-center accent-lightblue '
            />

            <input
              type='checkbox'
              className='text-center text-lightblue h-4 items-center justify-center accent-lightblue '
            />
            <input
              type='checkbox'
              className='text-center text-lightblue h-4 items-center justify-center accent-lightblue '
            />

          </div>
        </div>

        <div className='mb-1 items-center  justify-between flex mt-1 -my-1 px-2 mx-1  font-bold text-[12px]  text-[#727c8e]  border-[#D9D9D9]'>
          <div className='flex w-3/6 text-titre my-2 flex-row space-x-2 '>

            <p>Notifications de sécurité</p>

          </div>
          <div className='space-x-40 flex flex-row text-center'>

            <input
              type='checkbox'
              className='text-center text-lightblue h-4 items-center justify-center accent-lightblue '
            />

            <input
              type='checkbox'
              className='text-center text-lightblue h-4 items-center justify-center accent-lightblue '
            />
            <input
              type='checkbox'
              className='text-center text-lightblue h-4 items-center justify-center accent-lightblue '
            />

          </div>
        </div>


      </div>
      <p className='mt-2 text-[12px] text-titre'>Nous avons besoin de l'autorisation de votre navigateur pour afficher les notifications. <span className='text-lightblue'> Demander la permission</span></p>
    </>
  )
}

export default ParamNotif
