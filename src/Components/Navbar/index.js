import React from 'react';
import './style.css';

function Navbar() {
    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <a href='/' className='navbar-item name-nav has-text-white-bis has-text-weight-bold'>
                    David Anusontarangkul
                </a>

                <a
                    role='button'
                    className={'navbar-burger burger'}
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'
                >
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                    <span aria-hidden='true'></span>
                </a>
            </div>
            <div id='navbarBasicExample' className='navbar-menu'>
                <div className='navbar-end'>
                    <div className='navbar-item nav-links'>
                        <a href='/' className='navbar-item has-text-white-bis has-text-weight-bold'>
                            Portfolio
            </a>
                        <a href='/' className='navbar-item has-text-white-bis has-text-weight-bold'>
                            About
            </a>
                        <a href='/' className='navbar-item has-text-white-bis has-text-weight-bold'>
                            Resume
            </a>
                        <a href='/' className='navbar-item has-text-white-bis has-text-weight-bold'>
                            Contact
            </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
