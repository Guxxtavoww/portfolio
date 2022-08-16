import React from "react";
import { Link } from "react-scroll";

import ItemsData from "./Navbar/itemsData";

const NavDots = ({ active }) => {
    return (
        <div className="app__nav">
            { ItemsData.map(item => <Link to={item.to} key={item.id} className="app__nav-dot" style={active === item.title.toLowerCase() ? { backgroundColor: "#313bac" } : null} />) }
        </div>
    );
}

export default NavDots;