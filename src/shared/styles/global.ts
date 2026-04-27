import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.font.secondary};
    background: ${({ theme }) => theme.colors.backgroundGradient};
  }

  a {
    text-decoration: none;
  }
`;
