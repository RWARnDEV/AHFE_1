import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Digital Yard Sale</h1>
        <nav>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Marketplace
          </NavLink>
          <NavLink to="/my-items" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            My Items
          </NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Digital Yard Sale. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
