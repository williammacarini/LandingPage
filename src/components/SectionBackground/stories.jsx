import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis et nostrum accusamus
          error optio voluptatum doloribus cumque inventore deleniti saepe pariatur
          repellendus, facere sint est, at consequuntur obcaecati reprehenderit!
          Obcaecati.
        </p>
      </div>
    )
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
