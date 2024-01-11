import React from 'react';

const Navbar = ({ children }) => {
  return (
    <div className='min-w-full bg-grayBackground box-border overflow-hidden text-darkText'>
      <div className='flex bg-offWhite h-navbar w-full justify-between items-center px-10'>
        <button className='bg-blueMain'>
          test
        </button>
      </div>
      {children}
    </div>
  );
};

export default Navbar;
