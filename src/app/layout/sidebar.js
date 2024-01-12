'use client';

import React, { useState } from 'react';
import TMDialog from '../components/TMDialog';
import TMTextField from '../components/TMTextField';
import { useCreateTaskMutation } from '../api/tasks';
import TMButton from '../components/TMButton';

const Sidebar = ({ children }) => {
  // state declarations ==============================================================================================================
  const [openDialog, setOpenDialog] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  // api calls ==============================================================================================================
  const [triggerCreateTask] = useCreateTaskMutation();

  // function ==============================================================================================================
  const handleCreate = async () => {
    await triggerCreateTask({
      data: {
        title: title,
        description: description,
        dueDate: dueDate,
        completed: false,
      },
    }).then(() => {
      setTitle('');
      setDescription('');
      setDueDate('');
      setOpenDialog(false);
    });
  };

  // component ==============================================================================================================
  
  // this is the sidebar component
  // houses the button to create a new task
  // the button is moved to the bottom on mobile
  return (
    <div className='flex flex-col-reverse justify-between md:flex-row w-full h-[calc(100vh-64px)]'>
      <div className='flex w-full min-h-16 md:min-w-16 md:h-screen bg-offWhite justify-center items-center md:py-10 md:items-start shadow'>
        <button
          className='min-h-8 min-w-8 border-2 border-blueMain justify-center items-center rounded-md text-blueMain font-bold leading-none'
          // opens the dialog to create a new task
          onClick={() =>
            setOpenDialog(true)
          }
        >
          +
        </button>
      </div>
      {children}
      {/* dialog for task creation */}
      <TMDialog open={openDialog} setOpen={setOpenDialog}>
        <div className='flex flex-col gap-6'>
          <TMTextField
            label={'Title'}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TMTextField
            label={'Description'}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TMTextField
            label={'Due date'}
            value={dueDate}
            type={'date'}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <TMButton
            onClick={() => handleCreate()}
            disabled={!title || !description || !dueDate}
          >
            Create
          </TMButton>
        </div>
      </TMDialog>
    </div>
  );
};

export default Sidebar;
