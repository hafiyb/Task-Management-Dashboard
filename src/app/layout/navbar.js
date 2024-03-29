'use client';
import TMText from '../components/TMText';
import TMButton from '../components/TMButton';
import { useEffect, useState } from 'react';
import TMDialog from '../components/TMDialog';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '@/slices/tasks';

const Navbar = ({ children }) => {
  const dispatch = useDispatch();
  const [width, setWidth] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleChangePage = (page) => {
    dispatch(setCurrentPage(page));
    setOpenDialog(false);
  };

  // this is the navbar component
  // houses the sidebar and the main content
  // the sidebar is moved to the bottom on mobile
  return (
    <div className='min-w-full bg-grayBackground box-border overflow-hidden text-darkText'>
      <div className='flex bg-offWhite h-navbar w-full justify-between items-center px-10'>
        <TMText fontSize={'large'}>Task Manager</TMText>
        {/* mobile navigation, only displayed when screen size small */}
        {width < 640 && (
          <TMButton
            variant='ghost'
            fontSize={'xl'}
            onClick={() => setOpenDialog(true)}
          >
            ≡
          </TMButton>
        )}
      </div>
      {children}
      {/* mobile navigation dialog, shown when mobile navigation button is pressed */}
      <TMDialog open={openDialog} setOpen={setOpenDialog}>
        <div className='flex flex-col gap-6'>
          <TMButton
            variant={'ghost'}
            fontSize={'large'}
            onClick={() => handleChangePage('To do')}
          >
            To do
          </TMButton>
          <TMButton
            variant={'ghost'}
            fontSize={'large'}
            onClick={() => handleChangePage('Completed')}
          >
            Completed
          </TMButton>
        </div>
      </TMDialog>
    </div>
  );
};

export default Navbar;
