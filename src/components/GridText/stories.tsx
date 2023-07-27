import { GridText } from '.';

import { mGText } from '../mocks/mockGridText';

interface PropsObj {
  title: string;
  description: string;
}

interface Props {
  background: boolean;
  title: string;
  description: string;
  grid: PropsObj[];
}

export default {
  title: 'GridText',
  component: GridText,
  args: mGText,
};

export const Template = (args: Props) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};
