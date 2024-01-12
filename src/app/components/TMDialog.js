import React from 'react';
import TMButton from './TMButton';
import TMTextField from './TMTextField';

const TMDialog = ({ open, setOpen, children, width, ...rest }) => {
  return (
    <dialog
      open={open}
      className={`
      ${open && 'flex'}
      top-0 justify-center items-center min-h-full min-w-full bg-[rgb(0,0,0,0.25)]`}
    >
      <div className={`flex relative bg-offWhite shadow-md p-12 rounded-md`}>
        {/* close dialog button */}
        <TMButton
          className={'absolute top-0 right-0 '}
          variant={'ghost'}
          onClick={() => {
            setOpen(false);
          }}
        >
          X
        </TMButton>
        <div className={`${width ? 'w-[width]' : 'w-[80vw]'}`}>{children}</div>
      </div>
    </dialog>
  );
};

export default TMDialog;
