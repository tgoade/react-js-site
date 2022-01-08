// import { useState, useEffect } from 'react';
import * as React from 'react';
import NavBarLogic from './NavBarLogic';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import LocationBar from './LocationBar';
import ExperiencesBar from './ExperiencesBar';

interface NavBarProps {
    navColor: string;
    navBorder: string
}

const Navbar = ({navColor, navBorder}: NavBarProps) => {

    const { button, placesBarActive, experBarActive, handleClick, placesBarHandler, experBarHandler, closeMenuBars, menuClicked } = NavBarLogic();

    const BORDERBOTTOM = ['nav--border', 'nav--noborder'];
    
    const checkBorderBottom = BORDERBOTTOM.includes(navBorder) ? navBorder : BORDERBOTTOM[0];       // Checks whether a navBorder was assigned from Home.js, if so then use it, otherwise use the first item within the BOTTOMBORDER array

    const COLOR = ['text--black', 'text--white'];

    const checkTextColor = COLOR.includes(navColor) ? navColor : COLOR[0];                          // Checks whether a navColor was assigned

    //const userIcons = '<i className="fas fa-bars fa-lg"></i><i className="fas fa-user-circle fa-lg"></i>'

    return (
        <div>
            <nav className={`navbar ${checkBorderBottom}`}>
                <div className="navbar-container wrapper">
                    <Link to="/" className={`navbar-logo ${checkTextColor}`} onClick={closeMenuBars}>
                        L<i className="fas fa-globe-americas fa-xs"></i>GO
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>                   {/* Hidden on desktop. In mobile, if clicked is falsed, then clicking sets the state to true, and vice versa */}
                        <i className={menuClicked ? 'fas fa-times' : 'fas fa-bars'} />        {/* Show icon depending on clicked state. If clicked is true, change it to 'x' icon, otherwise, set it to the hamburger menu icon; taggling between the 2 icons upon the click handler set on the enclosing div */}
                    </div>
                        <form>
                            <ul className={menuClicked ? 'nav-menu active': 'nav-menu'}>          {/* If clicked (if value is true), then assign the 'active' class in addition to the 'nav-menu' class, else, just the nav-menu class. nav-menu container is placed off screen in mobile, if clicked, nav-menu has the added class 'active' which place it back on screen. */}
                                <li className="nav-item">
                                    <Link to="/" className={`nav-links ${checkTextColor}`} onClick={placesBarHandler}>
                                        Places to stay
                                    </Link>
                                    <Link to="/" className={`nav-links ${checkTextColor}`} onClick={experBarHandler}>
                                        Experiences
                                    </Link>
                                    <Link to="/" className="nav-links-mobile" onClick={closeMenuBars}>
                                    <i className="fas fa-bars"></i><i className="fas fa-user-circle"></i>
                                    </Link>
                                </li>
                            </ul>
                            {placesBarActive && <LocationBar />}
                            {experBarActive && <ExperiencesBar />}
                        </form>      
                    {button && <Button buttonStyle='btn--primary' path='../'><i className="fas fa-bars fa-lg"></i><i className="fas fa-user-circle fa-lg"></i></Button>}  {/* This button is true if and only if both sides of && (AND) are true, in particular, the button state in this case; If true, then it returns the Button component with what's in between as the children */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
