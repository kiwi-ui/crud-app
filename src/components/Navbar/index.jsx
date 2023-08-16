import React from 'react'
import { Link, redirect } from 'react-router-dom';
import {FiLogOut} from 'react-icons/fi';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    redirect("/login")
  }

  return (
    <header>
        <nav className="navbar z10 border-bottom py-1 bg-dark">
            <div className="container">
                <Link className="mb-0 bg-warning text-black px-2 rounded-2 fw-bold navbar-brand" to="/users">CrossOver</Link>

                <button className="p-0 btn" onClick={ handleLogout }>
                    <FiLogOut className="fs-2 text-warning"/>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
