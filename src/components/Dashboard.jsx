import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpwardOutlined'

const Dashboard = ({ }) => {

    const [open, setOpen] = useState(true);
    return (


        <div className='flex w-full'> <div className=''><Sidebar open={open} setOpen={setOpen} /></div>
            <div className='w-full'>
                <div className='content'>
                    <Header setOpen={setOpen} />
                    <div className='p-2 '>
                    <div className="p-4 bg-gray-100 min-h-screen">
                    <div className="p-4 bg-gray-100 min-h-screen">
            {/* Première rangée avec 3 cartes */}
            <div className="flex gap-4 mb-8">
                {/* Card 1 */}
                <div className="flex-1 bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-700">Ventes</h2>
                        <div className="flex items-center text-green-500">
                            <ArrowUpwardIcon style={{ fontSize: '24px' }} />
                            <span className="ml-2 font-bold">+12%</span>
                        </div>
                    </div>
                    <p className="text-gray-500 mt-4">Augmentation des ventes ce mois-ci par rapport au mois précédent.</p>
                </div>

                {/* Card 2 */}
                <div className="flex-1 bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-700">Clients</h2>
                        <div className="flex items-center text-blue-500">
                            <ArrowUpwardIcon style={{ fontSize: '24px' }} />
                            <span className="ml-2 font-bold">+150</span>
                        </div>
                    </div>
                    <p className="text-gray-500 mt-4">Vous avez gagné 150 nouveaux clients cette semaine.</p>
                </div>

                {/* Card 3 */}
                <div className="flex-1 bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gray-700">Revenu</h2>
                        <div className="flex items-center text-purple-500">
                            <ArrowUpwardIcon style={{ fontSize: '24px' }} />
                            <span className="ml-2 font-bold">2 450 000 FCFA</span>
                        </div>
                    </div>
                    <p className="text-gray-500 mt-4">Votre revenu total ce mois-ci est en hausse.</p>
                </div>
            </div>
        </div>
        </div>
                     

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Dashboard
