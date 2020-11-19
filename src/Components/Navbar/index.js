import React, { Component } from 'react';
import './style.css';
import Resume from '../Resume/resume.pdf';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand '>
                <Link to={(process.env.PUBLIC_URL || "/") + "/"}> <a href='/' className=' is-vcentered navbar-item name-nav has-text-white-bis has-text-weight-bold'>
                    David Anusontarangkul
                </a></Link>

                <a
                    role='button'
                    className={'navbar-burger burger has-text-white-bis '}

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
                        <Link to={(process.env.PUBLIC_URL || "/portfolio") + "/portfolio"}> <a href='/' className='nav-link navbar-item has-text-white-bis has-text-weight-bold'>
                            Portfolio
            </a>    </Link>
                        <Link to={(process.env.PUBLIC_URL || "/about") + "/about"}> <a href='/' className='nav-link navbar-item has-text-white-bis has-text-weight-bold'>
                            About
            </a></Link>
                        <a href={Resume} target="_blank" className='nav-link navbar-item has-text-white-bis has-text-weight-bold'>
                            Resume
            </a>
                        <Link to={(process.env.PUBLIC_URL || "/contact") + "/contact"}><a href='/' className='nav-link navbar-item has-text-white-bis has-text-weight-bold'>
                            Contact
            </a></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;
