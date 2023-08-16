import React from 'react'
import {RiAccountCircleLine} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
        <nav className="navbar z10 border-bottom py-1 bg-dark">
            <div className="container">
                <Link className="mb-0 bg-warning bg-opacity-75 text-black px-2 rounded-2 fw-bold navbar-brand" to="/users">CrossOver</Link>

                <button className="btn d-flex align-items-center gap-2" role="search">
                    <RiAccountCircleLine className="fs-1 text-warning"/>
                </button>
            </div>
        </nav>
  </header>
  )
}

export default Navbar
