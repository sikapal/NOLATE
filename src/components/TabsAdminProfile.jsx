import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ParamNotif from './ParamNotif';
import ParamPointeuse from './ParamPointeuse';
import { Collections, Image, PermIdentity, Security } from '@mui/icons-material';
import AdminApropos from './AdminApropos';
import AdminSecu from './AdminSecu';
import AdminOrgani from './AdminOrgani';
import AdminNotif from './AdminNotif';

const TabsAdminProfile = () => {

    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.state?.tabIndex || 0); // Default to tab 0 if no state is given

    const tabs = [
        {
            title: "A PROPOS", icon: <PermIdentity />
        },
        {
            title: "AUTORISATION", icon: <Security/>
        },
        {
            title: "SECURITE", icon: <LockOutlinedIcon />
        },
        {
            title: "NOTIFICATIONS", icon: <NotificationsNoneOutlinedIcon />
        },
        {
            title: "MEDIAS", icon: <Collections  />
        },


    ];
    const contents = [
        <AdminApropos />,
        <AdminOrgani />,
        <AdminSecu />,
        <AdminNotif />,
        <ParamPointeuse />,
    ]

    return (
        <div className='w-full '>
            <div role="tablist" className='flex justify-between items-center'>
                {tabs.map((tab, index) => (
                    <button
                        role="tab"
                        aria-selected={activeTab === index}
                        aria-controls={`content_${index}`}
                        onClick={() => setActiveTab(index)}
                        key={`tab_${index}`}
                        className={`px-2 flex-1 text-[14px] text-[#707070] font-bold border-b-3 ${activeTab === index ? ' text-lightblue' : ''
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

            <div className='flex flex-col  transition-opacity duration-500'>
                {contents.map((content, index) => (
                    <div
                        id={`content_${index}`}
                        key={`content_${index}`}
                        role="tabpanel"
                        className={`pl-1 -mr-1 py-4  h-screen ${activeTab === index ? 'opacity-100 transition-opacity duration-500' : 'opacity-0 absolute'
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

export default TabsAdminProfile
