import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
  }
  body {
    ${({ theme }) => css`
      background: ${theme.colors.mainBg};
    `}
  }
`;
