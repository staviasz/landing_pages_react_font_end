import { MLink } from '.';

interface ArgTypes {
  children: string;
}

export default {
  title: 'MLink',
  component: MLink,
  args: {
    children: 'testing',
    link: 'https://www.google.com.br/',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args: ArgTypes) => {
  return (
    <div style={{ display: 'flex' }}>
      <MLink href="#" {...args} />
    </div>
  );
};
