import { NavLink } from '.';
import { links } from './mock';

interface ArgTypes {
  children: string;
}

export default {
  title: 'NavLink',
  component: NavLink,
  args: {
    links: links,
  },
  argTypes: {
    links: { type: '' },
  },
};

export const Template = (args: ArgTypes) => {
  return (
    <div>
      <NavLink links={links} {...args} />
    </div>
  );
};
