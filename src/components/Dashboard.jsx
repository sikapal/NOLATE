import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Dots from './Dots';
import PublicationsCard from './PublicationsCard';
import ProfileCard from './ProfileCard';


const Dashboard = ({ }) => {

    const [open, setOpen] = useState(true);
    return (


        <div className='flex w-full'> <div className=''><Sidebar open={open} setOpen={setOpen}/></div>
            <div className='w-full'>
                <div className='content'><Header setOpen= {setOpen}/>
                    <div className='p-2'>
                    CONTENT DASHBOARD
                        <div className='flex'>

                            <PublicationsCard/>
                       <Dots/>
                    
                        </div>
                        <ProfileCard/>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Dashboard
