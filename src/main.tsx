import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { FavoritesProvider } from './components/common/FavoritesContext.tsx';
import ErrorBoundary from './components/common/ErrorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
  <FavoritesProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </FavoritesProvider>
);
