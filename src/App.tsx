import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';
import AppRouter from './components/common/AppRouter';
import Footer from './components/layout/Footer';

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
