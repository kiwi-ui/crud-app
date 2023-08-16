import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {FiLogOut} from 'react-icons/fi';

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  }

  return (
    <header>
        <nav className="navbar z10 border-bottom py-1 bg-dark">
            <div className="container">
                <Link className="mb-0 bg-warning text-black px-2 rounded-2 fw-bold navbar-brand" to="/users">CrossOver</Link>

                <button className="p-0 btn" onClick={ handleLogout }>
                    <FiLogOut className="fs-4 text-warning"/>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
