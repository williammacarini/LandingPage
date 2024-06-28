import React from "react";
import { screen } from "@testing-library/react";
import { Heading } from ".";
import { renderTheme } from "../../styles/render-theme";
import { expect } from "@storybook/test";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "styled-components";

describe('<Heading />', () => {

  it('should render with default values', () => {
    renderTheme(<Heading>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xlarge,
      'text-transform': 'uppercase'
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colordark={false}>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });

    rerender(<ThemeProvider theme={theme}>
      <Heading size="big">text</Heading>
    </ThemeProvider>);

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    rerender(<ThemeProvider theme={theme}>
      <Heading size="medium">text</Heading>
    </ThemeProvider>);

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });

    rerender(<ThemeProvider theme={theme}>
      <Heading size="huge">text</Heading>
    </ThemeProvider>);

    expect(screen.getByRole('heading', { name: 'text' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render correct font-size when using mobile', () => {
    renderTheme(<Heading size="huge">text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    const fontSize = window.getComputedStyle(heading)
                           .getPropertyValue('font-size');

    expect(fontSize).toBe(theme.font.sizes.xhuge)
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>text</Heading>);
    const heading = screen.getByRole('heading', { name: 'text' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase'
    });
  });

  it('should render with uppercase letters', () => {
    const { container } = renderTheme(<Heading as={"h6"}>text</Heading>);
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
