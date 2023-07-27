import { Menu } from '.';

import { links } from '../NavLinks/mock';

interface Props {
  args: string;
}

const logoData = {
  text: 'Logo',
  link: '#target',
  srcImg: '',
};

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: links,
    logoData: logoData,
  },
};

export const Template = (args: Props) => {
  return (
    <div style={{ height: '300vh', background: 'gray' }}>
      <Menu logoData={logoData} {...args} />
    </div>
  );
};
