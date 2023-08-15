import { useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Link, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Loginpage from './pages/Loginpage';
import UserDetails from './components/UserDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const [id, setId] = useState();

  const handleLogin = () => { setIsLoggedIn(true) };
  const handleLogout = () => { setIsLoggedIn(false) };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Loginpage onLogin= { handleLogin } />} />
        <Route path="/users" element={ <Dashboard onLogout= { handleLogout } setUser= { setUser } setId = {setId}  />} />
        <Route path="/" element={ <Navigate to="/login" /> }/>
        <Route path={ `/users/${id}` } element={ <UserDetails user={user} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
