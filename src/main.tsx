import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from './App.tsx';
import ErrorBoundary from './components/common/ErrorBoundary.tsx';
import { FavoritesProvider } from './components/common/FavoritesContext.tsx';
import { GlobalStyles } from './shared/styles/global.ts';
import { theme } from './shared/styles/theme.ts';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <FavoritesProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </FavoritesProvider>
  </ThemeProvider>
);
