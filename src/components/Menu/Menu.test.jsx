import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';
import linksMock from '../NavLinks/mock';
import { expect } from '@storybook/test';
import { theme } from '../../styles/theme';
const logoData = {
  text: 'Logo',
  link: '#target',
}

describe('<Menu />', () => {
  it('should render Logo and Main Menu Nav', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);
    expect(screen.getByRole('heading', { name: 'Logo' }))
      .toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Main Menu' }))
      .toBeInTheDocument();
  });

  it('should render menu mobile', () => {
    renderTheme(<Menu links={linksMock} logoData={logoData} />);

    const button = screen.getByLabelText('Open/Close Menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.font.media.lteMedium,
    });
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.font.media.lteMedium,
    });
    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();

    fireEvent.click(button);

    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.font.media.lteMedium,
    });
    expect(screen.getByLabelText('Close Menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.font.media.lteMedium,
    });
    expect(screen.getByLabelText('Open Menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    renderTheme(<Menu logoData={logoData}/>);
    expect(screen.queryByRole('navigation', { name: 'Main Menu' }).firstChild)
    .not.toBeInTheDocument();
  });
});

