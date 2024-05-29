import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Libero veritatis expedita in qui ratione nobis minus saepe
    reprehenderit perspiciatis quod beatae itaque molestias quos
    eveniet eos perferendis vel, impedit cumque.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
