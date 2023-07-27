import { GridTwoColumn } from '.';
import { data } from '../mocks/mockpageData';

interface ArgTypes {
  children: string | React.ReactNode;
}

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    data: data,
  },
};

export const Template = (args: ArgTypes) => {
  return (
    <div>
      <GridTwoColumn {...data} {...args} />
    </div>
  );
};
