import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className='brand'>
              <Link className="brand-name" to="/balance">BudTrack</Link>
            </div>
            <div className='header-container'>
                <Link className="nav-link" to="/balance">Home</Link>
                <Link className="nav-link" to="/add">Add New +</Link>
                <Link className="nav-link" to="/search">Search</Link>
                <Link className="nav-link" to="/about">About</Link>       
            </div>
        </div>
    )
}

export default Header