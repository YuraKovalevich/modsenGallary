import { BrowserRouter } from 'react-router-dom';

import AppRouter from './components/common/AppRouter';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
