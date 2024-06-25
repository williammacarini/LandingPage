import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{height: '200vh'}}>
      <h1>Testes Testes Testes</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam, eveniet provident ratione deleniti cumque dolore vero ab necessitatibus tempora vel quibusdam modi neque placeat quis eaque natus maxime! Architecto.</p>
      <h1>Testes Testes Testes</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam, eveniet provident ratione deleniti cumque dolore vero ab necessitatibus tempora vel quibusdam modi neque placeat quis eaque natus maxime! Architecto.</p>
      <h1>Testes Testes Testes</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam, eveniet provident ratione deleniti cumque dolore vero ab necessitatibus tempora vel quibusdam modi neque placeat quis eaque natus maxime! Architecto.</p>
      <h1>Testes Testes Testes</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam, eveniet provident ratione deleniti cumque dolore vero ab necessitatibus tempora vel quibusdam modi neque placeat quis eaque natus maxime! Architecto.</p>
      <h1>Testes Testes Testes</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam, eveniet provident ratione deleniti cumque dolore vero ab necessitatibus tempora vel quibusdam modi neque placeat quis eaque natus maxime! Architecto.</p>
      <h1>Testes Testes Testes</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquam, eveniet provident ratione deleniti cumque dolore vero ab necessitatibus tempora vel quibusdam modi neque placeat quis eaque natus maxime! Architecto.</p>
      <GoTop {...args} />
    </div>
  );
};
