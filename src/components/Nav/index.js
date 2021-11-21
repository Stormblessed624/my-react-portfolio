import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {



    return (
        <div>                
            <h2>
                <a data-testid='link' className='nav-text' href='/'>
                    Matthew White
                </a>                
            </h2>
            <menu className='main-menu'>
                <nav className='main-menu_nav'>
                    <Link to="/about"><span className="nav-text">About me</span></Link>
                    <Link to="/project"><span className="nav-text">Portfolio</span></Link>
                    <Link to="/contact"><span className="nav-text">Contact</span></Link>
                    <Link to="/resume"><span className="nav-text">Resume</span></Link>
                </nav>
            </menu>            
        </div>

    )

}

export default Nav;