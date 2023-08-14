import { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Loginpage from './pages/Loginpage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulate a successful login
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Loginpage onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
