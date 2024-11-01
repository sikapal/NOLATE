import React, { useState } from 'react'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PhonelinkSetupOutlinedIcon from '@mui/icons-material/PhonelinkSetupOutlined';
import Apropos from './Apropos';

const Tabs = () => {

    const [activeTab, setActiveTab]= useState(0);
    const tabs = [
        {
            title: "A PROPOS", icon: <InfoOutlinedIcon/>
        },
        {
            title: "ORGANIGRAMME", icon: <AccountTreeOutlinedIcon/>
        },
        {
            title: "SECURITE", icon: <LockOutlinedIcon/>
        },
        {
            title: "NOTIFICATIONS", icon: <NotificationsNoneOutlinedIcon/>
        },
        {
            title: "POINTEUSE", icon: <PhonelinkSetupOutlinedIcon className='rotate-180'/>
        },


    ];
    const contents = [
        <Apropos/>,
        "content 2",
        "content 3",
        "content 4",
        "content 5",
    ]

    return (
        <div className=' '>
            <div className='flex justify-between items-center'>
                {tabs.map((tab, index) => (
                    <button
                        onClick={() => setActiveTab(index)}
                        key={`tab_${index}`}
                        className={`px-2 flex-1 text-[12px] text-gray-400 font-bold border-b-3 ${
                            activeTab === index ? 'border-b-4 border-lightblue text-lightblue' : ''
                        } py-3`}
                    >
                        <span className="mr-2">{tab.icon}</span>
                        {tab.title}
                        {activeTab === index && (
                            <span className="absolute left-0 bottom-0 w-full h-1 bg-lightblue scale-x-0 origin-right transition-transform duration-200 ease-in-out" />
                        )}
                    </button>
                ))}
            </div>

            <div className='flex flex-col mx-auto transition-opacity duration-500'>
                {contents.map((content, index) => (
                    <div
                        key={`content_${index}`}
                        className={`px-3 py-4  h-screen ${
                            activeTab === index ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 absolute'
                        }`}
                        style={{
                            transition: 'opacity 0.5s ease',
                            visibility: activeTab === index ? 'visible' : 'hidden',
                            position: activeTab === index ? 'relative' : 'absolute',
                        }}
                    >
                        {content}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tabs
