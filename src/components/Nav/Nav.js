import React from 'react';
import './Nav.css';

function Nav() {



  
        return(

            <nav role="navigation">
                <div>
                    Well-Written
                </div>

                <div id="menuToggle">

                <input type="checkbox" />
                
                <span></span>
                <span></span>
                <span></span>
                

                    <ul id="menu">
                        <a href="#"><li>HOME</li></a>
                        <span className="border-line"></span>
                        <a href="#"><li>CHAPTERS</li></a>
                        <a href="#"><li>PROGRESS</li></a>
                        <a href="#"><li>CHARACTERS</li></a>
                        <a href="#"><li>LOCATIONS</li></a>
                        <span className="border-line"></span>
                        <a href="#"><li>LOGOUT</li></a>
                    </ul>
              </div>
            </nav>
        )
    
}

export default Nav;