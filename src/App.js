import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import ConfigPage from './ConfigPage';
import InvoicePage from './InvoicePage';

function App() {
  return (
    <BrowserRouter> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Config" element={<ConfigPage />} />
          <Route path="/Invoice" element={<InvoicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
