import React, { useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Dots from './Dots';
import PublicationsCard from './PublicationsCard';
import ProfileCard from './ProfileCard';
import Member from './Member';
import Coordonnes from './Coordonnes';
import BilanHoraire from './BilanHoraire';
import MemberLarge from './MemberLarge';

import BreadcrumbsP from './BreadcrumbsP';
import Tab from './Tab';
import CountryCode from './CountryCode';
import Table from './Table';


const Dashboard = ({ }) => {

    const [open, setOpen] = useState(true);
    return (


        <div className='flex w-full'> <div className=''><Sidebar open={open} setOpen={setOpen} /></div>
            <div className='w-full'>
                <div className='content'>
                    <Header setOpen={setOpen} />
                    <div className='p-2 '>
                        CONTENT DASHBOARD
                       <Table/>
                       <CountryCode/>
                        <Tab/>
                    
                        <div className='flex-row'>
                      hh
                        <div className='flex pl-2 ml-2'>
                            <MemberLarge/>
                            <BilanHoraire/>
                           


                        </div>
                            <div className='flex pl-2 ml-2'>
                                <Coordonnes />
                                <PublicationsCard />
                                <Member />


                            </div>
                        </div>

                       
                        <ProfileCard />

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Dashboard
