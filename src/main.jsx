import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import MarketplacePage from './pages/MarketplacePage';
import MyItemsPage from './pages/MyItemsPage';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MarketplacePage />} />
          <Route path="my-items" element={<MyItemsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
