import TMText from '../app/components/TMText';

export default {
  title: 'Components',
  component: TMText,
  argTypes: {
    fontSize: {
      control: 'radio',
      options: ['small', 'standard', 'large'],
    },
  },
  parameter: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <TMText {...args}>{args.children} </TMText>;

export const _TMText = Template.bind({});

_TMText.args = {
  children: 'I am a button',
  fontSize: 'standard',
};
