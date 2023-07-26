import { TextContent } from '.';

interface ArgTypes {
  children: string;
}

export default {
  title: 'TextContent',
  component: TextContent,
  args: {
    children: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Quisquam assumenda aspernatur minima soluta unde aperiam est culpa
    voluptates deleniti nihil perspiciatis nemo, iste eveniet sapiente
    temporibus quo amet placeat.Praesentium ?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args: ArgTypes) => {
  return (
    <div>
      <TextContent {...args} />
    </div>
  );
};
