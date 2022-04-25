import React from 'react'

function Header() {
    return (
        <div className='header'>
            <div className='brand'>
              <a className='brand-name'href="/">BudTrack</a>
            </div>
            <div className='header-container'>
                <a className='nav-link' href="/">Home</a>
                <a className='nav-link' href="/">Add New +</a>
                <a className='nav-link' href="/">Search</a>
                <a className='nav-link' href="/">About</a>
                
            </div>
        </div>
    )
}

export default Header