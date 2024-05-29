import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Text"/>);
    const heading = screen.getByRole('heading', { name: 'Text' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Text" srcImg="img.jpg"/>);
    const heading = screen.getByRole('heading', { name: 'Text' });
    expect(heading.firstChild.firstChild).toHaveAttribute('src', 'img.jpg');
  });
});
