import TMButton from '../app/components/TMButton';

export default {
  title: 'Components',
  component: TMButton,
  argTypes: {
    variant: { control: 'radio', options: ['contained', 'outlined', 'ghost'] },
    size: {
      control: 'radio',
      options: ['small', 'standard', 'large'],
    },
  },
  parameter: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <TMButton {...args} />;

export const _TMButton = Template.bind({});

_TMButton.args = {
  children: 'I am a button',
  variant: 'contained',
  size: 'standard',
  disabled: false,
};
