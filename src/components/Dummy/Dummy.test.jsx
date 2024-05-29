import React from 'react';
import { screen } from "@testing-library/react";
import { Dummy } from ".";
import { renderTheme } from '../../styles/render-theme';

describe ('<Dummy/>', () => {
  it('should render', () => {
    renderTheme(<Dummy>Children</Dummy>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
