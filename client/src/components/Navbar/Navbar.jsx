import { Link } from "react-scroll";
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from 'react-icons/hi';

import "./Navbar.scss";
import ItemsData from "./itemsData";

const Navbar = () => {
    const [ toggle, setToggle ] = useState(false);

    const handleClick = () => setToggle(!toggle);

    const closeMenu = () => setToggle(false);

    return (
        <nav className="navbar">
            <ul className={toggle ? "lista active" : "lista"}>
                {
                    ItemsData.map(item => (
                        <li key={item.id} className="app_flex p-text">
                            <div />
                            <Link to={item.to} className="link-nav" onClick={closeMenu}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
            <div className="toggle" onClick={handleClick}>
                {
                    toggle ? <HiX /> : <HiMenuAlt4 />
                }
            </div>
        </nav>
    );
}

export default Navbar;