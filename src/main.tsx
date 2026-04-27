import { AppThemeProvider } from '@app/providers/theme-provider.tsx';
import ErrorBoundary from '@components/common/ErrorBoundary.tsx';
import { FavoritesProvider } from '@components/common/FavoritesContext.tsx';
import { GlobalStyles } from '@shared/styles/global.ts';
import { createRoot } from 'react-dom/client';

import App from '@/App.tsx';

createRoot(document.getElementById('root')!).render(
  <AppThemeProvider>
    <GlobalStyles />
    <FavoritesProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </FavoritesProvider>
  </AppThemeProvider>
);
