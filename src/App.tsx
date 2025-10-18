import { BrowserRouter } from 'react-router-dom';
import Header from './components/layout/Header';
import './App.css';
import AppRouter from './components/common/AppRouter';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
