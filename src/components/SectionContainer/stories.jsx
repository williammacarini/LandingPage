import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>
          SectionContainer
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repellat quia quae saepe assumenda minus, tempore ullam dicta hic nihil
          error amet est recusandae qui doloremque itaque voluptatibus ex aut rerum?</p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
