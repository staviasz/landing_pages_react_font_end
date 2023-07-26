import { LogoLink } from '.';

interface ArgTypes {
  children: string | React.ReactNode;
}

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'assets/images/logo.svg',
    link: 'http://localhost',
  },
};

export const ImageOnly = (args: ArgTypes) => {
  return (
    <div>
      <LogoLink link="" text="" {...args} />
    </div>
  );
};

export const TextOnly = (args: ArgTypes) => {
  return (
    <div>
      <LogoLink link="" text="" {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: '',
};
