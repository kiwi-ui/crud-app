import React from 'react'
import { Link } from 'react-router-dom';
import {FiLogOut} from 'react-icons/fi';

const Navbar = () => {
  return (
    <header>
        <nav className="navbar z10 border-bottom py-1 bg-dark">
            <div className="container">
                <Link className="mb-0 bg-warning text-black px-2 rounded-2 fw-bold navbar-brand" to="/users">CrossOver</Link>

                <button className="btn d-flex align-items-center">
                    <FiLogOut className="fs-2 text-warning"/>
                </button>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
