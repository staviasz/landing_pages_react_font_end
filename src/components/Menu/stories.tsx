import { Menu } from '.';

import { links } from '../mocks/mockLinks';
import { logoData } from '../mocks/mockLogoData';

interface Props {
  chilgren: string | React.ReactNode;
}

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
