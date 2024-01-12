import { useState } from 'react';
import TMButton from '../app/components/TMButton';
import TMDialog from '../app/components/TMDialog';

export default {
  title: 'Components',
  component: TMDialog,
  argTypes: {
    active: {
      control: 'boolean',
    },
  },
  parameter: {
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div>
      <TMButton
        onClick={() => {
          console.log('open dialog');
          setOpenDialog(true);
        }}
      >
        Open Dialog
      </TMButton>
      <TMDialog open={openDialog} setOpen={setOpenDialog} {...args}></TMDialog>
    </div>
  );
};

export const _TMDialog = Template.bind({});

_TMDialog.args = {
  width: '500px',
};
