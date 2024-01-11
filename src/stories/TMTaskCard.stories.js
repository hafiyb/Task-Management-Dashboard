import TMTaskCard from '../app/components/TMTaskCard';

export default {
  title: 'Components',
  component: TMTaskCard,
  argTypes: {
    fontSize: {
      control: 'radio',
      options: ['small', 'standard', 'large'],
    },
    active: {
      control: 'boolean',
    },
  },
  parameter: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <TMTaskCard {...args}></TMTaskCard>;

export const _TMTaskCard = Template.bind({});

_TMTaskCard.args = {
  title: 'This is a task',
  description: 'This is a description',
  dueDate: new Date()
};
