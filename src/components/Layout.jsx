import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = () => {
  const [open, setOpen] = useState(true); // Control sidebar open/close

  return (
    <div className='flex'>
      {/* Sidebar with open state */}
      <Sidebar open={open} setOpen={setOpen} />
      <div className='w-full'>
        {/* Header with FaBars to control sidebar */}
        <Header setOpen={setOpen} />
        <div className='p-4'>
          {/* Main content goes here */}
          <h1>Welcome to the Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default Layout;
