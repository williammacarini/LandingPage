import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    renderTheme(
      <SectionBackground background={true}>
        <h1>
          Children
        </h1>
      </SectionBackground>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('should render with background light', () => {
    renderTheme(
      <SectionBackground>
        <h1>
          Children
        </h1>
      </SectionBackground>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
