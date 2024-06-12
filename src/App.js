import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import ConfigPage from './ConfigPage';

function App() {
  return (
    <BrowserRouter> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Config" element={<ConfigPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
