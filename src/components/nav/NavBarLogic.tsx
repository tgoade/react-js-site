import * as React from 'react';
import { useState, useEffect } from 'react';

const NavBarLogic = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const [button, setButton] = useState(true);
    
    const [placesBarActive, setPlacesBarActive] = useState(false);

    const [experBarActive, setExperBarActive] = useState(false);
    
    const handleClick = () => {
        setMenuClicked(!menuClicked)
    };                                              // Change state to the opposite as above when clicked
    
    const placesBarHandler = (event: React.MouseEvent<HTMLElement>) => { 
        event.preventDefault()
        setExperBarActive(false);
        setPlacesBarActive(true);
        setMenuClicked(false);                      // To close mobile menu when clicked
    }
    
    const experBarHandler = (event: React.MouseEvent<HTMLElement>) => { 
        event.preventDefault();
        setPlacesBarActive(false);
        setExperBarActive(true);
        setMenuClicked(false);
    }

    
    const closeMenuBars = () => {
        setPlacesBarActive(false);
        setExperBarActive(false);
        setMenuClicked(false);
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {              // In mobile view, button state should be false, otherwise, set it to true
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {                           // Use the useEffect hook to tell React to execute this function after the component renders/updates. With an empty dependency array, it runs ONCE after initial rendering. With prop or state values [prop, state], the side-effect runs once after initial rendering and only when any depenendecy value changes.
        showButton();                           // In this case, telling React to remember to hide the button if width is under __.
    }, []);

    window.addEventListener('resize', showButton);      // If window resizes to 960px or under, 

    return{ button, placesBarActive, experBarActive, handleClick, placesBarHandler, experBarHandler, closeMenuBars, menuClicked }

}

export default NavBarLogic