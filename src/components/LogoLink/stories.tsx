import { LogoLink } from '.';
import { logoData } from '../mocks/mockLogoData';

interface ArgTypes {
  children: string | React.ReactNode;
}

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    logoData: logoData,
  },
};

export const ImageOnly = (args: ArgTypes) => {
  return (
    <div>
      <LogoLink {...logoData} {...args} />
    </div>
  );
};

export const TextOnly = (args: ArgTypes) => {
  return (
    <div>
      <LogoLink {...logoData} {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImage: '',
};
