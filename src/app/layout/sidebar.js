import React from 'react';

const Sidebar = ({ children }) => {
  return (
    <div className='flex w-full'>
      <div className='flex min-w-16 h-screen bg-offWhite justify-center py-10 shadow'>
        <button className='max-h-8 min-w-8 border-2 border-blueMain justify-center items-center rounded-md text-blueMain font-bold leading-none'>
          +
        </button>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
