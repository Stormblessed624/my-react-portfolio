import React from 'react';
import { Link } from 'react-router-dom'

function Nav(props) {



    return (
        <div>                
            <menu className='flex desk fixed'>
                <nav className='flex desk fixed'>
                    <ul>
                        <li>
                            <Link to="/about"><span className="nav-text">About me</span></Link>
                        </li>
                        <li>
                            <Link to="/project"><span className="nav-text">Portfolio</span></Link>
                        </li>
                        <li>
                            <Link to="/contact"><span className="nav-text">Contact</span></Link>
                        </li>
                        <li>
                            <Link to="/resume"><span className="nav-text">Resume</span></Link>
                        </li>                    
                    </ul>
                </nav>
            </menu>            
        </div>

    )

}

export default Nav;