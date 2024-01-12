import { useState } from 'react';
import TMTextField from '../app/components/TMTextField';

export default {
  title: 'Components',
  component: TMTextField,
  argTypes: {},
  parameter: {
    layout: 'fullscreen',
  },
};

const Template = (args) => {
  const [value, setValue] = useState('Initial value');
  return (
    <TMTextField
      {...args}
      onChange={(e) => {
        setValue(e.target.value);
        console.log(e.target.value);
      }}
      value={value}
    >
      {args.children}
    </TMTextField>
  );
};

export const _TMTextField = Template.bind({});

_TMTextField.args = {
  label: 'Label here',
  error: 'Error message here',
  type: 'text'
};
