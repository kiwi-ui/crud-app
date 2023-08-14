import React from 'react'
import {RiAccountCircleLine} from 'react-icons/ri';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark z10">
        <div className="container">
            <a className="mb-0 bg-warning bg-opacity-75 text-black px-2 rounded-2 fw-bold navbar-brand" href='_blank' rel='norefferer'>CrossOver</a>

            <div className="d-flex align-items-center gap-2" role="search">
                <RiAccountCircleLine className="fs-1 text-white" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar