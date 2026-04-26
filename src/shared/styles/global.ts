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
    background: linear-gradient(
      90deg,
      #343333 38.05%,
      #484848 69.22%,
      #282828 98.98%
    );
  }

  a {
    text-decoration: none;
  }
`;
